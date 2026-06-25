import Link from "next/link";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Zeebrag | Modern Branding and Growth Studio in India",
  description:
    "Learn how Zeebrag helps startups and modern brands across India and global markets build attention, trust, and measurable growth.",
  path: "/about",
});

const principles = [
  {
    title: "Modern content understanding",
    description:
      "We create content designed to stop scrolling, build trust, and feel native to today's attention economy.",
  },
  {
    title: "Trend-aware execution",
    description:
      "We stay close to platform shifts, creative cues, and audience behavior so the work never feels dated.",
  },
  {
    title: "Personal branding focus",
    description:
      "We help brands become memorable by strengthening the founder or expert voice behind the business.",
  },
  {
    title: "Performance and aesthetics",
    description:
      "We care about premium visuals and measurable outcomes equally, because modern buyers evaluate both.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Zeebrag"
        title="Built for brands that want modern attention, stronger positioning, and trust that converts."
        description="Zeebrag is a remote-first branding and growth studio built in India, working with startups, founders, and ambitious businesses across time zones."
      />

      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Zeebrag was built for brands that want relevance, not recycled agency work.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Zeebrag was built for brands that want modern attention, stronger
                positioning, and content that actually feels relevant. We saw too many
                businesses investing in activity that looked busy but did not create
                trust. The problem was rarely effort. It was the gap between what the
                brand wanted to communicate and what the market actually experienced.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Our approach brings branding, content systems, website experience,
                acquisition strategy, and performance thinking into one coordinated
                operating model. That matters for founders in Bhopal, across India,
                and in global markets because audiences judge quickly. They decide
                whether your brand feels current, credible, and worth responding to in
                just a few moments of attention.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Zeebrag is intentionally remote-first. We work across India and with
                international collaborators because modern growth is no longer limited
                by geography. What matters is quality of thinking, speed of execution,
                and the ability to build a brand presence that feels sharp on every
                platform from Instagram and LinkedIn to your website, landing pages,
                and paid acquisition journey.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                If you want to understand the practical side of our work, you can
                explore our{" "}
                <Link href="/services" className="font-semibold text-[var(--color-primary)]">
                  services
                </Link>
                , review recent{" "}
                <Link href="/case-studies" className="font-semibold text-[var(--color-primary)]">
                  case studies
                </Link>
                , or reach out through the{" "}
                <Link href="/contact#audit-form" className="font-semibold text-[var(--color-primary)]">
                  contact page
                </Link>{" "}
                for a strategic conversation.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="rounded-[2rem] bg-[linear-gradient(180deg,#02253f_0%,#034C8C_100%)] p-8 text-white shadow-[0_30px_80px_rgba(2,37,63,0.22)]">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/65">
                How We Think
              </p>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-200">
                <p>Built in India. Working with brands globally.</p>
                <p>Creative enough to earn attention. Strategic enough to convert it.</p>
                <p>Young team energy with a premium execution standard.</p>
                <p>Fast communication, modern taste, and performance accountability.</p>
                <p>Available for international collaborations and cross-time-zone work.</p>
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-white/12 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-white">Ideal fit</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Founder-led brands, startups, service businesses, and modern teams
                  that want better positioning, stronger content systems, and a digital
                  presence that feels globally relevant.
                </p>
              </div>
            </aside>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {principles.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-7 shadow-sm"
                >
                  <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#02253f,#034C8C_55%,#0477BF)] p-8 text-white shadow-[0_30px_80px_rgba(3,76,140,0.24)] sm:p-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/65">
                  Work With Zeebrag
                </p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  If your brand is ready to look sharper and grow smarter, let&apos;s talk.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-100">
                  We work across India and global markets with a clear focus on trust,
                  attention quality, conversion strength, and premium execution.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <CalendlyPopupButton label="Book a Free Strategy Call" />
                  <Link
                    href="/contact#audit-form"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/18"
                  >
                    Contact Zeebrag
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
