"use client";

import { useState } from "react";
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

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
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
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/72 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Book a strategy call with Zeebrag"
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_30px_120px_rgba(2,37,63,0.45)]"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm transition hover:text-slate-950"
                aria-label="Close booking dialog"
              >
                Close
              </button>

              <div className="grid gap-0 lg:grid-cols-[0.38fr_0.62fr]">
                <div className="bg-[linear-gradient(180deg,#02253f_0%,#034C8C_100%)] p-8 text-white sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                    Book Call
                  </p>
                  <h3 className="mt-4 text-3xl font-extrabold tracking-tight">
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

                <div className="bg-white p-2 sm:p-3">
                  <iframe
                    src={`${calendlyUrl}?hide_gdpr_banner=1&background_color=f8fbff&text_color=0f172a&primary_color=f26a1b`}
                    title="Calendly booking for Zeebrag"
                    className="h-[70vh] min-h-[620px] w-full rounded-[1.5rem] border-0"
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
