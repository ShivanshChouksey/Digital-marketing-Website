import Link from "next/link";
import { AuditForm } from "@/components/forms/audit-form";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact Zeebrag | Premium Branding and Growth Studio in India",
  description:
    "Contact Zeebrag to book a strategy call, request a growth audit, or discuss branding, content, websites, and performance growth.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Zeebrag about building a brand presence that feels sharper and converts better."
        description="For quick chats use WhatsApp. For serious business conversations, book a strategy call or send your details through the audit form."
      />
      <section id="audit-form" className="scroll-mt-24 py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="rounded-[2rem] bg-[#02253f] p-8 text-white shadow-[0_30px_80px_rgba(2,37,63,0.2)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                Reach us
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Strategy conversations built around clarity, positioning, and growth outcomes.
              </h2>
              <div className="mt-8 grid gap-4 text-sm leading-7 text-slate-200">
                <p>Email: contact.zeebrag@gmail.com, hello.zeebrag@gmail.com</p>
                <p>Phone: +91 95225 55670</p>
                <p>Location: Bhopal, India. Working with brands globally.</p>
                <p>Available for calls across IST, UAE, UK and US-friendly hours.</p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <CalendlyPopupButton label="Book your free 30-min growth audit" />
                <a
                  href="https://wa.me/919522555670?text=Hi%20Zeebrag%2C%20I%20want%20to%20discuss%20my%20brand%20growth."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/16"
                >
                  Quick chat on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <AuditForm />
          </Reveal>
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container className="grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Contact Zeebrag for branding and growth support across India and global markets
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              If your business needs stronger positioning, more relevant content,
              higher-converting landing pages, or a brand presence that feels more
              premium, the best next step is a focused conversation. Zeebrag works
              with startups, service brands, and founder-led companies that want a
              clearer path to measurable growth without settling for generic agency output.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Our contact flow is designed around intent. If you want a quick
              conversation, WhatsApp is the fastest path. If you are evaluating a
              serious project or ongoing growth partnership, use the form or book a
              strategy call so we can review your context before we speak. For
              businesses in Bhopal and across India, that often means discussing
              search visibility, content systems, conversion friction, or founder
              branding. For international collaborations, it may be about market
              positioning, remote content execution, and premium web presence.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              We also recommend exploring our <Link href="/" className="font-semibold text-[var(--color-primary)]">homepage</Link>, detailed
              <Link href="/services" className="font-semibold text-[var(--color-primary)]"> growth services</Link>, and recent
              <Link href="/case-studies" className="font-semibold text-[var(--color-primary)]"> case studies</Link> before the call.
              That context helps you see how Zeebrag approaches growth strategy,
              content systems, paid media, and website development in an integrated way.
            </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <aside className="rounded-[2rem] bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              What to expect next
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              <li>We review your submission before replying so the conversation starts with context.</li>
              <li>We identify the biggest gaps affecting trust, attention quality, or conversion.</li>
              <li>We recommend the most relevant next step, whether that is content, branding, web, or performance growth.</li>
              <li>We keep the process practical for brands in India and international teams working remotely.</li>
            </ul>
            </aside>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
