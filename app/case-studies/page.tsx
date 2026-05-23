import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Digital Marketing Case Studies in Bhopal, India | Zeebrag",
  description:
    "Review Zeebrag case studies on SEO, demand generation, website conversion, and paid growth for brands in Bhopal and India.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Results-first stories built to demonstrate authority, trust, and business impact."
        description="Use these executive-style case studies to show how strategy and execution turn into measurable growth."
      />
      <section className="py-20">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Proof of execution matters more than generic claims
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Zeebrag case studies are built to show what happened, why it happened, and how the
              work translated into business outcomes. That matters for companies in Bhopal and
              across India that need a growth partner they can trust with real revenue goals. A
              polished promise is not enough. Decision-makers need evidence that the work can move
              traffic, conversion quality, and overall demand economics in the right direction.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Each case study below highlights the initial challenge, the strategic changes Zeebrag
              made, the execution steps we prioritized, and the results that followed. This makes
              the hub useful both for buyers doing due diligence and for search engines evaluating
              topical authority around digital marketing, website development, and growth strategy.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              After reviewing the examples, you can return to the
              <Link href="/" className="font-semibold text-[var(--color-primary)]"> homepage</Link>, explore our
              <Link href="/services" className="font-semibold text-[var(--color-primary)]"> service pages</Link>, or
              reach out through the <Link href="/contact#audit-form" className="font-semibold text-[var(--color-primary)]">contact page</Link>
              if you want a similar growth audit for your own business.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {study.industry}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  {study.client}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{study.problem}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {study.outcomes.map((outcome) => (
                    <div key={outcome.label} className="rounded-[1.5rem] bg-slate-50 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                        {outcome.label}
                      </p>
                      <p className="mt-3 text-2xl font-bold text-slate-950">{outcome.value}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--color-primary)]"
                >
                  Read full case study
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              What to look for in a strong case study
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Strong case studies show the original constraint, the strategic shift, the execution
              logic, and the business outcome. They should also reveal whether the provider
              understands the market context, whether that market is Bhopal, broader India, or a
              niche digital category. Zeebrag structures proof this way because it helps future
              clients understand what kind of change is realistic and which next step is worth
              prioritizing first.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
