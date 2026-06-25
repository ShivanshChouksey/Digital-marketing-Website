import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/site-data";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return createPageMetadata({
      title: "Case Study Not Found | Zeebrag",
      description: "The requested case study could not be found.",
      path: "/case-studies",
    });
  }

  return createPageMetadata({
    title: study.seoTitle,
    description: study.seoDescription,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={study.industry}
        title={`${study.client}: measurable growth with a full-funnel Zeebrag system`}
        description={study.strategy}
      />
      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[2rem] bg-[#02253f] p-8 text-white shadow-[0_30px_80px_rgba(2,37,63,0.2)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Outcomes
            </p>
            <div className="mt-6 grid gap-4">
              {study.outcomes.map((outcome) => (
                <div
                  key={outcome.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                    {outcome.label}
                  </p>
                  <p className="mt-3 text-3xl font-bold">{outcome.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact#audit-form">Start a similar project</Button>
            </div>
          </aside>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <section>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Why this case study matters
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Growth case studies matter because they show what changed in the real world, not
                just what looked good in a proposal. For businesses in Bhopal and across India,
                they can reveal how messaging, paid media, website structure, and founder
                visibility work together when the goal is measurable demand. Zeebrag uses this
                format to make strategy transparent so readers can see both the thinking and the
                operational moves behind the outcome.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                The details below explain the starting challenge, the decisions made during the
                engagement, and the impact those decisions had on leads, conversion quality, or
                revenue momentum. That helps prospects understand whether the same framework might
                apply to their market, their offer, or their current funnel constraints.
              </p>
            </section>
            <section>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Client problem
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">{study.problem}</p>
            </section>
            <section className="mt-10">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Zeebrag strategy
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">{study.strategy}</p>
            </section>
            <section className="mt-10">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Execution
              </h2>
              <ul className="mt-4 grid gap-4">
                {study.execution.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.5rem] bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="mt-10">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                What brands can learn from this project
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                The biggest lesson from this case study is that results usually improve when the
                full path from discovery to conversion is treated as one system. Better campaigns
                help, but stronger positioning, cleaner landing pages, better follow-up structure,
                and tighter reporting usually create the real compounding effect. That is why
                Zeebrag looks beyond single-channel wins and focuses on the growth mechanics behind
                the numbers.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                If you want to compare this example with other work, continue to the
                <Link href="/case-studies" className="font-semibold text-[var(--color-primary)]"> case study hub</Link>,
                review our <Link href="/services" className="font-semibold text-[var(--color-primary)]">services</Link>, or
                use the <Link href="/contact#audit-form" className="font-semibold text-[var(--color-primary)]">contact page</Link>
                to request a growth audit for your own business.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
