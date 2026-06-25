import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { serviceSeoContent, services } from "@/lib/site-data";

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
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const seoContent = serviceSeoContent[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.name,
          provider: {
            "@type": "Organization",
            name: "Zeebrag",
          },
          areaServed: "India",
          description: service.description,
        }}
      />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.headline}
        description={service.description}
      />
      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              What this service helps you achieve
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
      <section className="bg-white py-20">
        <Container className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              {service.name} for businesses in Bhopal and across India
            </h2>
            {seoContent.overview.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">
                {paragraph}
              </p>
            ))}
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
          </aside>
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Zeebrag delivery process
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
      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          {seoContent.whyItMatters.map((block) => (
            <article
              key={block.heading}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                {block.heading}
              </h2>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Frequently asked questions about {service.name}
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {seoContent.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold tracking-tight text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
