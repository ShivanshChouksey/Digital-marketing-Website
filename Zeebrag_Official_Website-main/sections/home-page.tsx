import Link from "next/link";
import { AuditForm } from "@/components/forms/audit-form";
import { FaqList } from "@/components/forms/faq-list";
import { InstagramAuditForm } from "@/components/forms/instagram-audit-form";
import { JsonLd } from "@/components/seo/json-ld";
import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies, metrics, services } from "@/lib/site-data";

const whyZeebrag = [
  {
    title: "Modern content understanding",
    description:
      "We build content designed to stop scrolling, feel culturally current, and turn attention into trust.",
  },
  {
    title: "Trend-aware execution",
    description:
      "From creative hooks to landing page flow, the work is shaped by what audiences actually respond to now.",
  },
  {
    title: "Founder and personal branding",
    description:
      "We help the people behind the business become part of the brand advantage, not an afterthought.",
  },
  {
    title: "Fast communication",
    description:
      "Remote-first systems, quick iterations, and clear decisions keep momentum high and collaboration easy.",
  },
  {
    title: "Young creative team",
    description:
      "The thinking feels native to modern internet behavior while the delivery stays polished and commercially sharp.",
  },
  {
    title: "Performance with aesthetics",
    description:
      "We care about visual taste and measurable growth equally, because premium brands need both.",
  },
];

const processSteps = [
  {
    title: "Audit the brand and funnel",
    description:
      "We review positioning, attention quality, content consistency, website friction, and growth blockers.",
  },
  {
    title: "Design the growth system",
    description:
      "We map the right blend of strategy, content, website upgrades, and performance channels for your stage.",
  },
  {
    title: "Execute, learn, and scale",
    description:
      "We launch with clarity, improve quickly, and keep creative, analytics, and conversion working together.",
  },
];

function AnalyticsExperience() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-[var(--color-secondary)]/18 blur-3xl" />
      <div className="absolute -right-8 bottom-6 h-40 w-40 rounded-full bg-[var(--color-accent)]/14 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/55 bg-white/74 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl sm:p-7">
        <div className="absolute inset-0 section-grid opacity-35" />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Attention to pipeline
            </p>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">
              Performance overview
            </h3>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">
              Premium creative, stronger conversion paths, and technology-backed
              reporting working as one system.
            </p>
          </div>
          <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            +28.4%
          </div>
        </div>

        <div className="relative mt-7 grid gap-4 sm:grid-cols-3">
          {[
            ["Qualified leads", "126"],
            ["CAC efficiency", "31% better"],
            ["Avg. ROAS", "25x+"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[1.5rem] border border-slate-100 bg-white/90 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
            >
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-5 grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="rounded-[1.75rem] border border-slate-100 bg-white/92 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
            <div className="flex items-end gap-3">
              {[52, 68, 61, 84, 98, 118, 140].map((height) => (
                <div key={height} className="flex-1">
                  <div
                    className="w-full rounded-t-[1rem] bg-[linear-gradient(180deg,rgba(4,119,191,0.92),rgba(3,76,140,0.92))]"
                    style={{ height: `${height}px` }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              90-day momentum from aligned positioning, social-native content,
              paid demand capture, and better landing page conversion.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] bg-[#02253f] p-5 text-white shadow-[0_18px_40px_rgba(2,37,63,0.16)]">
              <p className="text-sm text-white/70">Conversion rate</p>
              <p className="mt-2 text-4xl font-extrabold tracking-tight">4.8%</p>
            </div>
            <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#F26A1B,#F2541B)] p-5 text-white shadow-[0_18px_40px_rgba(242,106,27,0.22)]">
              <p className="text-sm text-white/80">Booked calls</p>
              <p className="mt-2 text-4xl font-extrabold tracking-tight">38</p>
            </div>
          </div>
        </div>

        <div className="relative mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-white/65 bg-white/70 p-4 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
              Trusted by 50+ growing brands
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Built in India. Working with startups, founder-led brands, and
              modern businesses globally.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/65 bg-white/70 p-4 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
              Time-zone friendly
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Available for calls across IST, UAE, UK and US-friendly hours with
              fast remote collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zeebrag",
          url: "https://www.zeebrag.com",
          description:
            "Zeebrag is a premium branding and growth studio built in India, working with brands globally.",
          areaServed: ["India", "United Arab Emirates", "United Kingdom", "United States"],
          sameAs: [
            "https://www.linkedin.com/company/zeebrag/",
            "https://www.instagram.com/zeebrag_com?igsh=Nmo4b2JrZnVzaHJ2",
            "https://www.facebook.com/share/18SfvKKZhY/",
          ],
        }}
      />

      <section className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5fb_48%,#f2f2f2_100%)] py-20 lg:py-28">
        <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_top_left,rgba(4,119,191,0.26),transparent_42%),radial-gradient(circle_at_top_right,rgba(3,76,140,0.18),transparent_36%)]" />
        <Container className="relative">
          <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
            <Reveal>
              <div>
                <span className="inline-flex rounded-full border border-[var(--color-secondary)]/20 bg-white/75 px-4 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm backdrop-blur">
                  Built in India. Working with brands globally.
                </span>
                <h1 className="mt-8 max-w-4xl text-balance text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                  Scale Your Brand With Technology-Driven Growth That Actually Converts
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Zeebrag helps startups, founders, and modern brands grow using
                  content, branding, technology, and performance-focused execution.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <CalendlyPopupButton label="Book a Free Strategy Call" />
                  <Button href="/contact#audit-form" variant="ghost">
                    Get Free Growth Audit
                  </Button>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
                  <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                    Trusted by 50+ growing brands
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                    Remote-first creative agency
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                    Available across IST, UAE, UK and US-friendly hours
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <AnalyticsExperience />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-4xl font-extrabold tracking-tight text-slate-950">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Zeebrag"
            title="Why brands choose Zeebrag"
            description="We combine social-native creative understanding, premium execution, and growth thinking so your brand feels modern and performs like it should."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyZeebrag.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-primary),var(--color-secondary))] text-sm font-bold text-white">
                    0{index + 1}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Strategic growth services for brands that want to look sharper and scale smarter"
            description="Each service line is built to improve attention quality, trust, and conversion, not just output volume."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <article className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-secondary)]/30 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(3,76,140,0.12),rgba(4,119,191,0.16))] text-xl font-bold text-[var(--color-primary)]">
                    0{index + 1}
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
                  >
                    Explore service
                    <span className="transition-transform group-hover:translate-x-1">
                      Learn more
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Case Studies"
              title="Data-driven stories that show how trust, content, and growth strategy connect"
              description="We use executive-style storytelling so founders and decision-makers can see the problem, the shift, and the measurable result clearly."
            />
            <Button href="/case-studies" variant="ghost">
              View all case studies
            </Button>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={index * 0.05}>
                <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                        {study.industry}
                      </p>
                      <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                        {study.client}
                      </h3>
                    </div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
                    >
                      Read results
                    </Link>
                  </div>
                  <p className="mt-6 text-sm leading-7 text-slate-600">{study.problem}</p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {study.outcomes.map((outcome) => (
                      <div
                        key={outcome.label}
                        className="rounded-[1.5rem] bg-[linear-gradient(160deg,#03345f,#0477BF)] p-5 text-white"
                      >
                        <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                          {outcome.label}
                        </p>
                        <p className="mt-3 text-3xl font-bold">{outcome.value}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
                About Zeebrag
              </p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950">
                Built for brands that want modern attention, stronger positioning, and content that actually feels relevant.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                Zeebrag is not trying to feel like a local freelancer setup or a
                generic digital marketing agency. We are building a premium studio
                experience for founders and modern brands that care about how they are
                perceived online, how their content feels, and whether their digital
                systems are actually helping revenue move forward.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                That means the work spans more than one channel. We shape attention,
                brand trust, content systems, website conversion, and growth execution
                together because buyers do not experience your business in isolated
                silos. They experience the total impression. If the content looks
                current but the site feels outdated, trust drops. If ads perform but
                founder authority is weak, conversion becomes harder. Zeebrag closes
                those gaps with a modern, integrated approach.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                We are built in Bhopal, India and work with brands across India and
                global markets. That local foundation gives us operational speed and
                cultural range, while our positioning keeps the work globally relevant.
                Learn more on the <Link href="/about" className="font-semibold text-[var(--color-primary)]">About page</Link>,
                browse our <Link href="/blog" className="font-semibold text-[var(--color-primary)]">insights</Link>, or
                use the <Link href="/contact#audit-form" className="font-semibold text-[var(--color-primary)]">contact page</Link>
                when you are ready to move.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] bg-[linear-gradient(180deg,#02253f_0%,#034C8C_100%)] p-8 text-white shadow-[0_30px_80px_rgba(2,37,63,0.2)]">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/65">
                Remote-first collaboration
              </p>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-200">
                <p>Available for international collaborations.</p>
                <p>Working across time zones with fast feedback loops.</p>
                <p>Built for startups, founder-led companies, and premium service brands.</p>
                <p>Strategy, content, websites, and performance under one roof.</p>
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-white/12 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-white">Serious business inquiries</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Best for founders who want premium brand direction, stronger digital
                  positioning, and a growth partner that understands both aesthetics and results.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="A simple process designed to turn scattered effort into momentum"
            description="We start with clarity, then build the right creative and growth system around it."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <article className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-primary),var(--color-secondary))] text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="book-call" className="py-20">
        <Container className="grid gap-8 xl:grid-cols-[1fr_1fr]">
          <Reveal>
            <InstagramAuditForm />
          </Reveal>
          <Reveal delay={0.08}>
            <AuditForm />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions founders usually ask before choosing Zeebrag"
              description="Clear answers help you decide whether the fit is right before the first strategy call."
            />
            <Reveal delay={0.06}>
              <FaqList />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#02253f,#034C8C_52%,#0477BF)] p-8 text-white shadow-[0_30px_80px_rgba(3,76,140,0.24)] sm:p-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/65">
                  Final CTA
                </p>
                <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Ready to build a brand that looks sharper and scales faster?
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-100">
                  Limited strategy slots available this month. Book your free
                  30-minute call or request a growth audit and we will map the
                  fastest next move.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <CalendlyPopupButton label="Book a Free Strategy Call" />
                  <Button href="/contact#audit-form" variant="secondary">
                    Schedule Growth Audit
                  </Button>
                </div>
                <p className="mt-5 text-sm text-white/72">
                  Available for calls across IST, UAE, UK and US-friendly hours.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
