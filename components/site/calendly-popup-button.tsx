"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/zeebrag/30min";

type CalendlyPopupButtonProps = {
  label: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
};

export function CalendlyPopupButton({
  label,
  className,
  variant = "primary",
}: CalendlyPopupButtonProps) {
  const [open, setOpen] = useState(false);
  const [useDirectLink, setUseDirectLink] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncDirectLink = () => setUseDirectLink(mediaQuery.matches);

    syncDirectLink();
    mediaQuery.addEventListener("change", syncDirectLink);

    return () => mediaQuery.removeEventListener("change", syncDirectLink);
  }, []);

  const handleOpen = () => {
    if (useDirectLink) {
      window.location.assign(calendlyUrl);
      return;
    }

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

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[70] overflow-y-auto bg-slate-950/72 p-3 backdrop-blur-md sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Book a strategy call with Zeebrag"
              className="relative mx-auto my-4 flex min-h-[calc(100dvh-1.5rem)] w-full max-w-5xl flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white shadow-[0_30px_120px_rgba(2,37,63,0.45)] sm:my-6 sm:min-h-[min(860px,calc(100dvh-3rem))] sm:rounded-[2rem]"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm transition hover:text-slate-950 sm:right-4 sm:top-4 sm:h-11 sm:w-11 sm:text-sm"
                aria-label="Close booking dialog"
              >
                Close
              </button>

              <div className="grid flex-1 gap-0 lg:grid-cols-[0.38fr_0.62fr]">
                <div className="bg-[linear-gradient(180deg,#02253f_0%,#034C8C_100%)] p-6 text-white sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                    Book Call
                  </p>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    Book your free 30-min growth audit
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-200">
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

                <div className="flex min-h-[65dvh] flex-col bg-white p-2 sm:min-h-0 sm:p-3">
                  <iframe
                    src={`${calendlyUrl}?hide_gdpr_banner=1&background_color=f8fbff&text_color=0f172a&primary_color=f26a1b`}
                    title="Calendly booking for Zeebrag"
                    className="min-h-[62dvh] w-full flex-1 rounded-[1.5rem] border-0 sm:min-h-0"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
