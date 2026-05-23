import Image from "next/image";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";
import { Container } from "@/components/ui/container";
import { navItems, services } from "@/lib/site-data";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.88 1.31a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75A3.25 3.25 0 1 0 12 15.25 3.25 3.25 0 0 0 12 8.75Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M13.34 21v-7.15h2.4l.36-2.79h-2.76V9.28c0-.81.22-1.36 1.39-1.36h1.49V5.43c-.26-.03-1.13-.11-2.15-.11-2.12 0-3.57 1.29-3.57 3.67v2.07H8.1v2.79h2.4V21h2.84Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M5.37 3.5A1.87 1.87 0 1 1 5.3 7.24 1.87 1.87 0 0 1 5.37 3.5ZM3.75 8.75h3.25v11.5H3.75V8.75ZM9.03 8.75h3.12v1.57h.05c.43-.82 1.5-1.7 3.09-1.7 3.3 0 3.91 2.17 3.91 5v6.63H15.95v-5.88c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1v5.98H8.5V8.75h.53Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#02253f] pb-28 pt-16 text-slate-200 md:pb-16">
      <Container>
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-8 shadow-[0_25px_80px_rgba(2,37,63,0.35)] backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
                Global Collaboration
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">
                Built in India. Working with brands globally.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Zeebrag partners with founders, startups, and modern brands across
                time zones for strategy, content systems, websites, and demand growth.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CalendlyPopupButton label="Let's Talk" />
              <a
                href="mailto:contact.zeebrag@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/16"
              >
                Email Zeebrag
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-sm">
              <Image
                src="/Zeebrag_logo.jpg-removebg-preview.png"
                alt="Zeebrag premium branding and growth studio logo"
                width={180}
                height={72}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-white">
              Zeebrag is a modern branding and growth studio for businesses that
              want attention to convert into trust.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Remote-first, performance-focused, and built for founders who care
              about positioning, content relevance, conversion quality, and long-term
              brand equity.
            </p>
            <div className="mt-6 grid gap-2 text-sm text-slate-300">
              <p>Email: contact.zeebrag@gmail.com</p>
              <p>Phone: +91 95225 55670</p>
              <p>Available across India, UAE, UK and US-friendly hours</p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/18SfvKKZhY/"
                target="_blank"
                rel="noreferrer"
                aria-label="Zeebrag on Facebook"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--color-primary)] shadow-sm transition hover:-translate-y-0.5 hover:text-[var(--color-secondary)]"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/zeebrag_com?igsh=Nmo4b2JrZnVzaHJ2"
                target="_blank"
                rel="noreferrer"
                aria-label="Zeebrag on Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--color-primary)] shadow-sm transition hover:-translate-y-0.5 hover:text-[var(--color-secondary)]"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/zeebrag/"
                target="_blank"
                rel="noreferrer"
                aria-label="Zeebrag on LinkedIn"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--color-primary)] shadow-sm transition hover:-translate-y-0.5 hover:text-[var(--color-secondary)]"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Core services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Zeebrag. Premium branding and growth systems for modern brands.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <Link href="/thank-you" className="hover:text-white">
              Thank You
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
