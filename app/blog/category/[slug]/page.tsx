import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { createOrganizationSchema, createWebSiteSchema } from "@/lib/seo-schema";
import { blogs, blogCategories } from "@/lib/site-data";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = blogCategories.find((cat) => cat.slug === slug);

  if (!category) {
    return createPageMetadata({
      title: "Category Not Found | Zeebrag",
      description: "The requested blog category could not be found.",
      path: "/blog",
    });
  }

  return createPageMetadata({
    title: `${category.name} Blog Posts | Zeebrag`,
    description: category.description,
    path: `/blog/category/${category.slug}`,
    keywords: [category.name, `${category.name} blog`, "digital marketing India", "Zeebrag"],
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = blogCategories.find((cat) => cat.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryPosts = blogs.filter((post) => post.categorySlug === slug);

  return (
    <>
      <JsonLd data={createOrganizationSchema()} />
      <JsonLd data={createWebSiteSchema()} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: category.name },
        ]}
      />

      <PageHero
        eyebrow={category.name}
        title={`${category.name}: insights and strategies for Indian businesses`}
        description={category.description}
      />
      <section className="py-20" aria-labelledby="category-heading">
        <Container>
          <h2 id="category-heading" className="sr-only">{category.name} articles</h2>
          {categoryPosts.length === 0 ? (
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p className="text-base leading-8 text-slate-700">
                No articles published in this category yet. Check back soon or browse our{" "}
                <Link href="/blog" className="font-semibold text-[var(--color-primary)]">main blog</Link>.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-3">
              {categoryPosts.map((post) => (
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
                    Read article &rarr;
                  </Link>
                </article>
              ))}
            </div>
          )}
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex text-sm font-semibold text-[var(--color-primary)]"
            >
              &larr; Back to all articles
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}