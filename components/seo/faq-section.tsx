import { JsonLd } from "@/components/seo/json-ld";
import { createFAQSchema } from "@/lib/seo-schema";
import type { FaqItem } from "@/lib/site-data";

type FaqSectionProps = {
  title: string;
  faqs: FaqItem[];
  includeSchema?: boolean;
};

export function FaqSection({
  title,
  faqs,
  includeSchema = true,
}: FaqSectionProps) {
  return (
    <>
      {includeSchema ? <JsonLd data={createFAQSchema(faqs)} /> : null}
      <section className="bg-white py-20">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            {title}
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold tracking-tight text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
