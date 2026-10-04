import Link from "next/link";
import { notFound } from "next/navigation";
import { BhopalAgencyGuide } from "@/components/blog/bhopal-agency-guide";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { createOrganizationSchema, createBlogPostingSchema, createWebSiteSchema } from "@/lib/seo-schema";
import { blogs, services } from "@/lib/site-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    return createPageMetadata({
      title: "Post Not Found | Zeebrag",
      description: "The requested blog article could not be found.",
      path: "/blog",
    });
  }

  if (slug === "how-to-choose-digital-marketing-agency-bhopal") {
    return createPageMetadata({
      title: post.seoTitle,
      description: post.seoDescription,
      path: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      image: "/images/digital-marketing-agency-bhopal-guide-og.png",
      keywords: [
        "choosing a digital marketing agency in Bhopal",
        "digital marketing agency in Bhopal",
        "digital marketing company in Bhopal",
        "how to choose a digital marketing agency",
        "digital marketing services in Bhopal",
        "SEO agency in Bhopal",
        "digital marketing for businesses in Bhopal",
      ],
    });
  }

  return createPageMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    authors: [post.author],
    keywords: [post.category, post.title, "digital marketing India", "Zeebrag blog"],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  if (slug === "how-to-choose-digital-marketing-agency-bhopal") {
    return <BhopalAgencyGuide />;
  }

  const relatedServices = post.relatedServices
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean);

  const relatedPosts = post.relatedPosts
    .map((p) => blogs.find((bp) => bp.slug === p))
    .filter(Boolean);

  return (
    <>
      <JsonLd data={createOrganizationSchema()} />
      <JsonLd data={createWebSiteSchema()} />
      <JsonLd
        data={createBlogPostingSchema({
          title: post.title,
          description: post.description,
          slug: post.slug,
          publishedAt: post.publishedAt,
          author: post.author,
          category: post.category,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title },
        ]}
      />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.description}
      />
      <article className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Article info
            </p>
            <div className="mt-5 grid gap-4 text-sm text-slate-600">
              <p>Published: {post.publishedAt}</p>
              <p>Read time: {post.readTime}</p>
              <p>Author: {post.author}</p>
              <p>Category: {post.category}</p>
            </div>
            {relatedServices.length > 0 && (
              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-700">Related services</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedServices.map((s) => s && (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-[var(--color-primary)] hover:bg-slate-100"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-8">
              <Button href="/contact#audit-form">Get a free growth audit</Button>
            </div>
          </aside>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <section className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Why this topic matters for Bhopal and India-focused brands
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Digital growth decisions often look simple from the outside, but the businesses
                that scale consistently usually have stronger systems underneath. For founders and
                marketing teams in Bhopal and across India, that means understanding not just the
                channel itself, but also how messaging, page structure, and trust signals affect
                commercial outcomes. This article is designed to help with exactly that kind of
                decision-making.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                As you read, think about how the ideas connect to your current funnel. If the topic
                feels relevant to your business, you can continue to the
                <Link href="/" className="font-semibold text-[var(--color-primary)]"> Zeebrag homepage</Link>,
                review related <Link href="/services" className="font-semibold text-[var(--color-primary)]">services</Link>,
                or reach out through the <Link href="/contact#audit-form" className="font-semibold text-[var(--color-primary)]">contact page</Link>
                for a practical growth conversation.
              </p>
            </section>
            {post.sections.map((section, index) => (
              <section
                key={section.heading}
                className={index < post.sections.length - 1 ? "mb-10" : undefined}
              >
                <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                  {section.heading}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {section.content}
                </p>
              </section>
            ))}
            <section className="mt-10">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Turning insight into action
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                The most useful content does not stop at explanation. It gives you a clearer next
                step. If this topic exposed a gap in your SEO, paid media, website experience, or
                founder positioning, the next move is usually to prioritize the change that will
                improve conversion quality fastest. Zeebrag helps businesses in Bhopal and India do
                that by connecting strategy to execution rather than treating each channel in
                isolation.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                You can continue exploring the site through our
                <Link href="/services/seo-services" className="font-semibold text-[var(--color-primary)]"> SEO services</Link>,
                the broader <Link href="/services" className="font-semibold text-[var(--color-primary)]">services overview</Link>,
                or the <Link href="/case-studies" className="font-semibold text-[var(--color-primary)]">case studies</Link>
                if you want proof of how these ideas perform in practice.
              </p>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-10 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  Related articles
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {relatedPosts.map((rp) => rp && (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition hover:shadow-md"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                        {rp.category}
                      </p>
                      <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-950">
                        {rp.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{rp.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </Container>
      </article>
    </>
  );
}
