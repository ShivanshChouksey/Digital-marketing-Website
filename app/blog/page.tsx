import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { blogs } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Digital Marketing Blog in Bhopal, India | Zeebrag",
  description:
    "Read Zeebrag blog posts on SEO, branding, paid growth, and website performance for businesses in Bhopal and across India.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="A scalable SEO-ready content hub for long-term keyword growth."
        description="Use the Zeebrag blog to attract organic traffic, build authority, and educate future buyers."
      />
      <section className="py-20">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Practical digital growth insights for founders and marketers
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              The Zeebrag blog is built to answer the real questions businesses ask when they want
              stronger digital growth. That includes SEO strategy, Meta Ads, Google Ads, website
              conversion, founder branding, and the operational decisions that shape marketing
              performance over time. For readers in Bhopal and across India, this section is meant
              to be useful before it is promotional.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              We write with two audiences in mind. The first is the business owner or founder who
              wants a clearer understanding of what is broken and what to fix next. The second is
              the marketing team that needs better frameworks, cleaner execution, and a stronger
              content-to-conversion journey. That is why each article aims to combine practical
              education with natural paths toward relevant service pages and contact points.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              If you are new to Zeebrag, start with the articles below and then explore our
              <Link href="/" className="font-semibold text-[var(--color-primary)]"> homepage</Link>,
              <Link href="/services" className="font-semibold text-[var(--color-primary)]"> service pages</Link>, and
              <Link href="/contact#audit-form" className="font-semibold text-[var(--color-primary)]"> contact form</Link>
              when you are ready to apply these ideas to your business.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {blogs.map((post) => (
              <article
                key={post.slug}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {post.category}
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{post.description}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                  <span>{post.readTime}</span>
                  <span>{post.publishedAt}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--color-primary)]"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              How to use this blog effectively
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              If you are in research mode, start with the article that best matches your biggest
              bottleneck right now. If your issue is search visibility, begin with SEO content. If
              you are working on founder trust, move to personal branding. If your challenge is
              conversion, focus on landing page and website topics. From there, use our
              <Link href="/services" className="font-semibold text-[var(--color-primary)]"> services overview</Link>
              and <Link href="/contact#audit-form" className="font-semibold text-[var(--color-primary)]">contact page</Link>
              to continue the conversation with context instead of starting cold.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
