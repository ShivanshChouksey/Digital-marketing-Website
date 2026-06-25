import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { blogs } from "@/lib/site-data";

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

  return createPageMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
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
              <p>Internal link target: service and case study pages</p>
            </div>
            <div className="mt-8">
              <Button href="/services/seo-services">Explore SEO services</Button>
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
          </div>
        </Container>
      </article>
    </>
  );
}
