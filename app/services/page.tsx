import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { createOrganizationSchema, createWebSiteSchema } from "@/lib/seo-schema";
import { services } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Digital Marketing Services in India | SEO, Ads & Branding | Zeebrag",
  description:
    "Explore Zeebrag's digital marketing services: SEO, Meta Ads, Google Ads, website development, personal branding, and social media management for startups in Bhopal and India.",
  path: "/services",
  keywords: [
    "digital marketing services India",
    "SEO services Bhopal",
    "Google Ads management India",
    "Meta Ads agency",
    "website development company",
    "personal branding services",
    "social media management India",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={createOrganizationSchema()} />
      <JsonLd data={createWebSiteSchema()} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services" },
        ]}
      />

      <PageHero
        eyebrow="Services"
        title="Growth services designed for modern brands that want sharper positioning and measurable momentum."
        description="Zeebrag combines strategy, creative execution, technology, and optimization to build premium brand and demand systems."
      />
      <section className="py-20" aria-labelledby="services-heading">
        <Container>
          <div className="max-w-4xl">
            <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-slate-950">
              Service lines built for commercial growth, not random activity
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Zeebrag offers integrated digital growth services for businesses in Bhopal and across
              India that want more than isolated tactics. Every service is designed to improve a
              real business outcome such as better visibility, stronger conversion rates, clearer
              positioning, or more dependable lead generation. That is why our work combines
              strategy, creative execution, analytics, and a website foundation that supports scale.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Some clients need search visibility and technical SEO. Others need paid media
              systems, a stronger personal brand, or a premium website that performs better across
              mobile and desktop. The common thread is that each service is built to connect with
              the rest of the funnel. If you attract the right traffic but your messaging is weak,
              conversion suffers. If your ads perform but the website does not build trust, sales
              efficiency drops. Zeebrag solves those gaps in a coordinated way.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Browse the service pages below to understand where each offer fits. You can also move
              back to the <Link href="/" className="font-semibold text-[var(--color-primary)]">homepage</Link>, review our
              <Link href="/blog" className="font-semibold text-[var(--color-primary)]"> growth blog</Link>, or contact us
              through the <Link href="/contact#audit-form" className="font-semibold text-[var(--color-primary)]">growth audit form</Link>
              if you want help choosing the right priority first.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {service.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  {service.name}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--color-primary)]"
                >
                  View {service.name} details &rarr;
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Designed for buyer intent
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Every Zeebrag service is structured around what helps a buyer trust, compare, and
                convert faster. That is why execution always connects back to your website,
                messaging, and next-step conversion flow.
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Relevant for Bhopal and India
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Some clients want local growth in Bhopal, while others want regional or national
                reach across India. We adapt the execution model to the market demand you want to
                win.
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Connected internal journey
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                After reviewing these services, continue to the <Link href="/case-studies" className="font-semibold text-[var(--color-primary)]">case studies</Link>,
                the <Link href="/blog" className="font-semibold text-[var(--color-primary)]">blog</Link>, or the
                <Link href="/contact#audit-form" className="font-semibold text-[var(--color-primary)]"> contact page</Link>
                to move from research to action.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}