import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import {
  createOrganizationSchema,
  createLocalBusinessSchema,
  createPersonSchema,
} from "@/lib/seo-schema";
import { founderProfile, teamMembers } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "About Zeebrag | Branding and Growth Studio in Bhopal, India",
  description:
    "Learn about Zeebrag, a premium branding and growth studio in Bhopal, India. We help startups and modern brands build trust, attention, and measurable growth with SEO, paid media, web development, and personal branding.",
  path: "/about",
  keywords: [
    "about Zeebrag",
    "branding studio Bhopal",
    "growth agency India",
    "digital marketing team India",
    "Zeebrag founders",
  ],
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

const expertiseAreas = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Technical SEO, content strategy, keyword research, and local SEO for Bhopal and India-focused brands.",
  },
  {
    title: "Paid Media (Meta & Google Ads)",
    description: "Performance-driven ad campaigns with creative testing, audience segmentation, and conversion optimization.",
  },
  {
    title: "Website Development",
    description: "Premium Next.js websites with SEO-ready architecture, Core Web Vitals optimization, and conversion-focused design.",
  },
  {
    title: "Personal Branding",
    description: "Founder positioning, LinkedIn content systems, and authority-building strategies for B2B leaders.",
  },
  {
    title: "Social Media Management",
    description: "Platform-native content systems, content calendars, and creative direction for Instagram, LinkedIn, and Meta.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={createOrganizationSchema()} />
      <JsonLd data={createLocalBusinessSchema()} />
      {teamMembers.map((member) => (
        <JsonLd
          key={member.name}
          data={createPersonSchema({
            name: member.name,
            role: member.role,
            description: member.bio,
            sameAs: member.linkedIn ? [member.linkedIn] : undefined,
          })}
        />
      ))}

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "About" },
        ]}
      />

      <PageHero
        eyebrow="About Zeebrag"
        title="Built for brands that want modern attention, stronger positioning, and trust that converts."
        description="Zeebrag is a remote-first branding and growth studio built in Bhopal, India, working with startups, founders, and ambitious businesses across India and global markets."
      />

      <section className="py-20" aria-labelledby="about-content">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 id="about-content" className="text-3xl font-bold tracking-tight text-slate-950">
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
                <p>Built in Bhopal, India. Working with brands globally.</p>
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

      <section className="bg-white py-20" aria-labelledby="principles-heading">
        <Container>
          <Reveal>
            <h2 id="principles-heading" className="sr-only">Zeebrag Core Principles</h2>
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

      <section className="py-20" aria-labelledby="expertise-heading">
        <Container>
          <Reveal>
            <h2 id="expertise-heading" className="text-3xl font-bold tracking-tight text-slate-950">
              Our expertise: digital marketing services for Indian businesses
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Zeebrag combines strategy, creative, and technology to help brands in Bhopal and across India
              grow. With 50+ brands served and deep expertise across five core disciplines, we deliver
              integrated growth that compounds over time.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {expertiseAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">{area.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20" aria-labelledby="team-heading">
        <Container>
          <Reveal>
            <h2 id="team-heading" className="text-3xl font-bold tracking-tight text-slate-950">
              The Zeebrag team
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Our team combines brand strategy, creative direction, performance marketing, and web development
              expertise. Based in Bhopal, India, we work remotely with brands across time zones.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold tracking-tight text-slate-950">{founderProfile.name}</h3>
                <p className="mt-1 text-sm font-semibold text-[var(--color-primary)]">{founderProfile.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{founderProfile.bio}</p>
                <p className="mt-3 text-sm font-semibold text-slate-700">{founderProfile.experience}</p>
                {founderProfile.linkedIn && (
                  <a
                    href={founderProfile.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    View LinkedIn &rarr;
                  </a>
                )}
              </article>
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-primary)]">{member.role}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{member.bio}</p>
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-sm font-semibold text-[var(--color-primary)] hover:underline"
                    >
                      View LinkedIn &rarr;
                    </a>
                  )}
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20" aria-labelledby="cta-heading">
        <Container>
          <Reveal>
            <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#02253f,#034C8C_55%,#0477BF)] p-8 text-white shadow-[0_30px_80px_rgba(3,76,140,0.24)] sm:p-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/65">
                  Work With Zeebrag
                </p>
                <h2 id="cta-heading" className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
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