"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "How does Zeebrag work?",
    answer:
      "We begin with clarity: positioning, audience, funnel friction, and content gaps. From there we build the right mix of strategy, creative systems, website experience, and growth execution so the brand feels sharper and converts better.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes. Zeebrag is built in India and works remotely with brands across India and global markets. We structure communication around shared planning, fast feedback loops, and calls across IST, UAE, UK and US-friendly hours.",
  },
  {
    question: "Do you offer personal branding?",
    answer:
      "Yes. Founder positioning, authority-building content, and narrative clarity are a core part of the Zeebrag approach, especially for brands where trust is closely tied to the people behind the business.",
  },
  {
    question: "How long does growth take?",
    answer:
      "Some wins show quickly through sharper messaging, cleaner offers, and better conversion paths. Compounding channels like SEO, content systems, and brand authority take longer, but they create stronger momentum over time.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We primarily work with startups, founder-led brands, service businesses, SaaS, D2C, and modern companies that care about positioning, attention quality, and measurable growth.",
  },
];

export function FaqList() {
  const [openItem, setOpenItem] = useState<string>(faqs[0]?.question ?? "");

  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <div
          key={faq.question}
          className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition"
        >
          <button
            type="button"
            onClick={() =>
              setOpenItem((current) => (current === faq.question ? "" : faq.question))
            }
            className="flex w-full items-center justify-between gap-4 text-left text-lg font-semibold text-slate-950"
            aria-expanded={openItem === faq.question}
          >
            <span>{faq.question}</span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-xl text-[var(--color-primary)]">
              {openItem === faq.question ? "-" : "+"}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openItem === faq.question ? (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden pr-8 pt-4 text-sm leading-7 text-slate-600"
              >
                {faq.answer}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
