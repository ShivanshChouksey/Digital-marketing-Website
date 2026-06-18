import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { createBreadcrumbSchema } from "@/lib/seo-schema";
import type { BreadcrumbItem } from "@/lib/seo-schema";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd data={createBreadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol
          className="mx-auto flex max-w-7xl items-center gap-2 px-4 text-sm text-slate-500"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={item.name + index}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(index + 1)} />
                {isLast ? (
                  <span
                    itemProp="name"
                    className="font-medium text-slate-700"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href || "#"}
                      itemProp="item"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      <span itemProp="name">{item.name}</span>
                    </Link>
                    <svg
                      className="ml-2 inline-block h-3.5 w-3.5 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}