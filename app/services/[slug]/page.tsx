import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import {
  createFAQSchema,
  createOrganizationSchema,
  createServiceSchema,
  createWebSiteSchema,
  createLocalBusinessSchema,
} from "@/lib/seo-schema";
import { serviceSeoContent, services, caseStudies } from "@/lib/site-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return createPageMetadata({
      title: "Service Not Found | Zeebrag",
      description: "The requested Zeebrag service page could not be found.",
      path: "/services",
    });
  }

  return createPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    keywords: [
      service.name.toLowerCase(),
      `${service.name} in India`,
      `${service.name} in Bhopal`,
      "digital marketing agency",
      "Zeebrag services",
    ],
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const seoContent = serviceSeoContent[slug];

  if (!service) {
    notFound();
  }

  const relatedCaseStudies = caseStudies.filter((cs) =>
    cs.relatedServices.includes(service.slug)
  );

  const serviceNameLower = service.name.toLowerCase();

  return (
    <>
      <JsonLd data={createOrganizationSchema()} />
      <JsonLd data={createWebSiteSchema()} />
      <JsonLd data={createLocalBusinessSchema()} />
      <JsonLd
        data={createServiceSchema({
          name: service.name,
          description: service.description,
          slug: service.slug,
          category: service.eyebrow,
        })}
      />
      {seoContent.faqs.length > 0 && (
        <JsonLd data={createFAQSchema(seoContent.faqs)} />
      )}

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name },
        ]}
      />

      <PageHero
        eyebrow={service.eyebrow}
        title={service.headline}
        description={service.description}
      />

      {/* Outcomes & Deliverables */}
      <section className="py-20" aria-labelledby="outcomes-heading">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 id="outcomes-heading" className="text-3xl font-bold tracking-tight text-slate-950">
              What {service.name} helps you achieve
            </h2>
            <ul className="mt-6 grid gap-4">
              {service.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-[1.5rem] bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-[#02253f] p-8 text-white shadow-[0_30px_80px_rgba(2,37,63,0.2)]">
            <h2 className="text-3xl font-bold tracking-tight">Deliverables</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/contact#audit-form">Request a growth audit</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview & Benefits */}
      <section className="bg-white py-20" aria-labelledby="overview-heading">
        <Container className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 id="overview-heading" className="text-3xl font-bold tracking-tight text-slate-950">
              {service.name} for businesses in Bhopal and across India
            </h2>
            {seoContent.overview.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">
                {paragraph}
              </p>
            ))}
            {seoContent.benefits.length > 0 && (
              <>
                <h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-950">
                  Key benefits of {serviceNameLower} with Zeebrag
                </h3>
                <ul className="mt-4 grid gap-3">
                  {seoContent.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="rounded-[1.25rem] bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </article>
          <aside className="rounded-[2rem] bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Helpful next steps
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Explore the <Link href="/" className="font-semibold text-[var(--color-primary)]">homepage</Link>,
              compare related <Link href="/services" className="font-semibold text-[var(--color-primary)]">digital marketing services</Link>,
              and use the <Link href="/contact#audit-form" className="font-semibold text-[var(--color-primary)]">contact form</Link> if
              you want Zeebrag to review your current setup.
            </p>
            {relatedCaseStudies.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-bold tracking-tight text-slate-950">
                  Related case study
                </h3>
                {relatedCaseStudies.map((cs) => (
                  <Link
                    key={cs.slug}
                    href={`/case-studies/${cs.slug}`}
                    className="mt-3 block rounded-[1.25rem] border border-slate-200 bg-white p-4 text-sm font-semibold text-[var(--color-primary)] transition hover:shadow-md"
                  >
                    {cs.client} &rarr;
                  </Link>
                ))}
              </div>
            )}
          </aside>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20" aria-labelledby="process-heading">
        <Container>
          <h2 id="process-heading" className="text-3xl font-bold tracking-tight text-slate-950">
            Zeebrag delivery process for {serviceNameLower}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {service.process.map((step, index) => (
              <article
                key={step}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                  {step}
                </h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases */}
      {seoContent.useCases.length > 0 && (
        <section className="bg-white py-20" aria-labelledby="usecases-heading">
          <Container>
            <h2 id="usecases-heading" className="text-3xl font-bold tracking-tight text-slate-950">
              {service.name} use cases for Indian businesses
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {seoContent.useCases.map((useCase) => (
                <article
                  key={useCase.heading}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                    {useCase.heading}
                  </h3>
                  {useCase.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">
                      {paragraph}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Why It Matters */}
      <section className="py-20" aria-labelledby="why-matters-heading">
        <Container className="grid gap-8 lg:grid-cols-2">
          <h2 id="why-matters-heading" className="sr-only">
            Why {serviceNameLower} matters for your business
          </h2>
          {seoContent.whyItMatters.map((block) => (
            <article
              key={block.heading}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-3xl font-bold tracking-tight text-slate-950">
                {block.heading}
              </h3>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </Container>
      </section>

      {/* Related Services */}
      {seoContent.relatedServices.length > 0 && (
        <section className="bg-white py-20" aria-labelledby="related-heading">
          <Container>
            <h2 id="related-heading" className="text-3xl font-bold tracking-tight text-slate-950">
              Related {serviceNameLower} services from Zeebrag
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Zeebrag offers integrated growth solutions. Explore these related services that
              complement {serviceNameLower} for a complete growth strategy.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {seoContent.relatedServices.map((relatedSlug) => {
                const relatedService = services.find((s) => s.slug === relatedSlug);
                if (!relatedService) return null;
                return (
                  <Link
                    key={relatedSlug}
                    href={`/services/${relatedSlug}`}
                    className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                      {relatedService.eyebrow}
                    </p>
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                      {relatedService.name}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {relatedService.summary}
                    </p>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
        <Container>
          <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-slate-950">
            Frequently asked questions about {serviceNameLower}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Get answers to common questions about {serviceNameLower} pricing, timeline, process,
            and expected outcomes for businesses in Bhopal and across India.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {seoContent.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 className="text-xl font-bold tracking-tight text-slate-950" itemProp="name">
                  {faq.question}
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="mt-3 text-sm leading-7 text-slate-700" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20" aria-labelledby="cta-heading">
        <Container>
          <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#02253f,#034C8C_52%,#0477BF)] p-8 text-white shadow-[0_30px_80px_rgba(3,76,140,0.24)] sm:p-12">
            <div className="max-w-3xl">
              <h2 id="cta-heading" className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
                Ready to grow with Zeebrag {service.name}?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-100">
                Book a free strategy call or request a growth audit. Our team in Bhopal, India
                works with brands across India and global markets.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact#audit-form">Request a growth audit</Button>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/18"
                >
                  View case studies
                </Link>
              </div>
              <p className="mt-5 text-sm text-white/72">
                Available for calls across IST, UAE, UK and US-friendly hours.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}