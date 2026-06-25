"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/zeebrag/30min";
const calendlyWidgetScriptSrc = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        parentElement: Element;
        url: string;
      }) => void;
    };
  }
}

type CalendlyPopupButtonProps = {
  label: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
};

function buildCalendlyEmbedUrl() {
  try {
    const url = new URL(calendlyUrl);

    url.searchParams.set("hide_gdpr_banner", "1");
    url.searchParams.set("background_color", "f8fbff");
    url.searchParams.set("text_color", "0f172a");
    url.searchParams.set("primary_color", "f26a1b");

    return url.toString();
  } catch {
    return calendlyUrl;
  }
}

export function CalendlyPopupButton({
  label,
  className,
  variant = "primary",
}: CalendlyPopupButtonProps) {
  const [open, setOpen] = useState(false);
  const [widgetStatus, setWidgetStatus] = useState<"idle" | "loading" | "ready" | "error">(
    "idle",
  );
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);
  const calendlyEmbedUrl = buildCalendlyEmbedUrl();

  useEffect(() => {
    if (!open) {
      return;
    }

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousDocumentOverflow = documentElement.style.overflow;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousDocumentOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const widgetContainer = widgetContainerRef.current;
    if (!widgetContainer) {
      return;
    }

    let cancelled = false;
    let readinessTimeout: number | undefined;

    const ensureValidCalendlyUrl = async () => {
      try {
        const response = await fetch(
          `/api/calendly/validate?url=${encodeURIComponent(calendlyUrl)}`,
          {
            cache: "no-store",
          },
        );

        if (!response.ok) {
          return false;
        }

        const result = (await response.json()) as { valid?: boolean };
        return result.valid === true;
      } catch {
        return false;
      }
    };

    const mountCalendlyWidget = () => {
      if (cancelled || !window.Calendly) {
        return;
      }

      widgetContainer.innerHTML = "";
      setWidgetStatus("loading");

      try {
        window.Calendly.initInlineWidget({
          parentElement: widgetContainer,
          url: calendlyEmbedUrl,
        });

        readinessTimeout = window.setTimeout(() => {
          if (cancelled) {
            return;
          }

          const iframe = widgetContainer.querySelector("iframe");
          setWidgetStatus(iframe ? "ready" : "error");
        }, 2200);
      } catch {
        setWidgetStatus("error");
      }
    };

    const handleScriptReady = () => {
      mountCalendlyWidget();
    };

    const handleScriptError = () => {
      if (!cancelled) {
        setWidgetStatus("error");
      }
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-calendly-widget="true"]',
    );

    void (async () => {
      const isValid = await ensureValidCalendlyUrl();
      if (cancelled) {
        return;
      }

      if (!isValid) {
        setWidgetStatus("error");
        return;
      }

      if (window.Calendly) {
        mountCalendlyWidget();
      } else if (existingScript) {
        existingScript.addEventListener("load", handleScriptReady);
        existingScript.addEventListener("error", handleScriptError);
      } else {
        const script = document.createElement("script");
        script.src = calendlyWidgetScriptSrc;
        script.async = true;
        script.dataset.calendlyWidget = "true";
        script.addEventListener("load", handleScriptReady);
        script.addEventListener("error", handleScriptError);
        document.body.appendChild(script);
      }
    })();

    return () => {
      cancelled = true;
      if (readinessTimeout) {
        window.clearTimeout(readinessTimeout);
      }
      if (existingScript) {
        existingScript.removeEventListener("load", handleScriptReady);
        existingScript.removeEventListener("error", handleScriptError);
      }
      widgetContainer.innerHTML = "";
      setWidgetStatus("idle");
    };
  }, [calendlyEmbedUrl, open]);

  const handleOpen = () => {
    setWidgetStatus("loading");
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2",
          variant === "primary" &&
            "bg-[var(--color-accent)] text-white shadow-[0_18px_40px_rgba(242,106,27,0.28)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)]",
          variant === "secondary" &&
            "border border-white/20 bg-white/12 text-white backdrop-blur-xl hover:border-white/40 hover:bg-white/20",
          variant === "ghost" &&
            "border border-slate-200 bg-white text-slate-900 hover:border-[var(--color-secondary)] hover:text-[var(--color-primary)]",
          variant === "dark" &&
            "border border-slate-900/10 bg-slate-950 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:bg-slate-800",
          className,
        )}
      >
        {label}
      </button>

      {typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  className="fixed inset-0 z-[100] flex min-h-dvh items-start justify-center overflow-y-auto bg-slate-950/72 p-3 backdrop-blur-md sm:items-center sm:p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                >
                  <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Book a strategy call with Zeebrag"
                    className="relative my-auto flex min-h-[min(56rem,calc(100dvh-1.5rem))] w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white shadow-[0_30px_120px_rgba(2,37,63,0.45)] sm:min-h-[min(56rem,calc(100dvh-3rem))] sm:rounded-[2rem]"
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 24, scale: 0.98 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm transition hover:text-slate-950 sm:right-4 sm:top-4 sm:h-11 sm:w-11 sm:text-sm"
                      aria-label="Close booking dialog"
                    >
                      Close
                    </button>

                    <div className="grid flex-1 gap-0 lg:grid-cols-[minmax(18rem,0.38fr)_minmax(0,0.62fr)]">
                      <div className="bg-[linear-gradient(180deg,#02253f_0%,#034C8C_100%)] p-6 text-white sm:p-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                          Book Call
                        </p>
                        <h3 className="mt-4 max-w-md text-2xl font-extrabold tracking-tight sm:text-3xl">
                          Book your free 30-min growth audit
                        </h3>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-slate-200">
                          Available for calls across IST, UAE, UK and US-friendly hours.
                          Built in India. Working with brands globally.
                        </p>
                        <div className="mt-8 rounded-[1.5rem] border border-white/12 bg-white/10 p-5 backdrop-blur">
                          <p className="text-sm font-semibold text-white">
                            What we will cover
                          </p>
                          <ul className="mt-4 space-y-3 text-sm text-slate-200">
                            <li>Brand positioning and trust gaps</li>
                            <li>Content and acquisition opportunities</li>
                            <li>Quick wins for conversion and pipeline</li>
                          </ul>
                        </div>
                      </div>

                      <div className="relative flex min-h-[70dvh] flex-col bg-white p-2 sm:p-3 lg:min-h-0">
                        <div
                          ref={widgetContainerRef}
                          className={cn(
                            "min-h-[32rem] w-full flex-1 overflow-hidden rounded-[1.5rem] bg-slate-50",
                            widgetStatus === "ready" ? "opacity-100" : "opacity-0",
                          )}
                          aria-label="Calendly booking for Zeebrag"
                        />

                        {widgetStatus !== "ready" ? (
                          <div className="absolute inset-x-2 bottom-2 top-2 flex flex-col items-center justify-center rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eff6ff_100%)] px-6 py-10 text-center sm:inset-x-3 sm:bottom-3 sm:top-3">
                            <div className="max-w-md">
                              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]/70">
                                {widgetStatus === "loading" ? "Loading scheduler" : "Booking page unavailable"}
                              </p>
                              <h4 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950">
                                {widgetStatus === "loading"
                                  ? "Preparing your booking window"
                                  : "We could not load the Calendly page"}
                              </h4>
                              <p className="mt-4 text-sm leading-7 text-slate-600">
                                {widgetStatus === "loading"
                                  ? "Calendly is loading inside the modal using their supported widget script."
                                  : "The current Calendly link appears to be invalid or unavailable. You can still try opening the booking page directly, then update NEXT_PUBLIC_CALENDLY_URL with the correct scheduling link."}
                              </p>
                              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a
                                  href={calendlyUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(242,106,27,0.22)] transition hover:bg-[var(--color-accent-hover)]"
                                >
                                  Open booking page
                                </a>
                                <button
                                  type="button"
                                  onClick={() => setOpen(false)}
                                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}
