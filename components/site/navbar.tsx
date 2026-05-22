"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";
import { Container } from "@/components/ui/container";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/78 backdrop-blur-2xl">
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-lg shadow-sky-900/10">
            <Image
              src="/Zeebrag_logo.jpg-removebg-preview.png"
              alt="Zeebrag premium branding and growth studio logo"
              width={112}
              height={112}
              priority
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <div className="text-lg font-extrabold tracking-tight text-slate-950">Zeebrag</div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Growth-Tech Partner
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--color-primary)]",
                  active ? "text-[var(--color-primary)]" : "text-slate-600",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex">
          <CalendlyPopupButton label="Book Call" className="min-w-32" />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </Container>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white/95 lg:hidden">
          <Container className="grid gap-3 py-4">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                    active
                      ? "bg-slate-950 text-white"
                      : "bg-slate-50 text-slate-700 hover:text-[var(--color-primary)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-1">
              <CalendlyPopupButton label="Book Call" className="w-full" />
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
