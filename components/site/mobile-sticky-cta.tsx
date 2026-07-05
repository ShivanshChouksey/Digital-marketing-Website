"use client";

import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/70 bg-white/90 p-3 shadow-[0_-18px_40px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-xl gap-3">
        <CalendlyPopupButton label="Book Call" className="flex-1" />
        <a
          href="https://wa.me/919522555670?text=Hi%20Zeebrag%2C%20I%20want%20to%20discuss%20my%20brand%20growth."
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-[var(--color-secondary)] hover:text-[var(--color-primary)]"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
