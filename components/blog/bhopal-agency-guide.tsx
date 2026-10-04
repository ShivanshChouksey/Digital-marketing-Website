import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { createBlogPostingSchema, createFAQSchema } from "@/lib/seo-schema";
import { blogs } from "@/lib/site-data";

const post = blogs.find((item) => item.slug === "how-to-choose-digital-marketing-agency-bhopal")!;
const image = "/images/digital-marketing-agency-bhopal-guide.svg";

const toc = [
  ["introduction", "Introduction"],
  ["business-objective", "1. Start With Your Business Objective"],
  ["service-expertise", "2. Check Whether the Agency Has the Right Service Expertise"],
  ["real-work", "3. Ask to See Real Work"],
  ["seo-approach", "4. Evaluate the Agency's SEO Approach"],
  ["paid-advertising", "5. Understand How Paid Advertising Is Managed"],
  ["website-conversion", "6. Review the Website and Conversion Strategy"],
  ["reporting", "7. Look for Transparent Reporting"],
  ["agency-questions", "8. Ask the Questions That Reveal How the Agency Thinks"],
  ["red-flags", "9. Red Flags to Watch For"],
  ["evaluation-framework", "10. A Simple Agency Evaluation Framework"],
  ["local-context", "Why Local Context Still Matters"],
  ["zeebrag-approach", "How Zeebrag Approaches Growth"],
  ["faqs", "Frequently Asked Questions"],
  ["final-checklist", "Final Checklist Before You Sign"],
] as const;

const expertise = [
  ["SEO", "Technical SEO, content strategy, search intent, internal linking, local SEO and reporting."],
  ["Google Ads", "Keyword strategy, conversion tracking, landing pages, search-term analysis and budget control."],
  ["Meta Ads", "Audience strategy, creative testing, lead quality, funnel design and campaign optimisation."],
  ["Social Media", "Content strategy, brand consistency, creative quality, community management and business relevance."],
  ["Website Development", "UX, mobile performance, technical SEO, accessibility, speed, analytics and conversion paths."],
  ["Personal Branding", "Positioning, content systems, founder expertise, distribution and consistency."],
] as const;

const questions = [
  "What would you change first if you took over our marketing today?",
  "Which channel would you prioritise for our business, and why?",
  "What information do you need from us before creating a strategy?",
  "What would success look like after 90 days?",
  "Which KPIs would you report every month?",
  "How do you handle campaigns or strategies that are not working?",
  "Who will actually work on our account?",
  "What access and ownership will remain with our business?",
];

const redFlags = [
  ["Guaranteed rankings or guaranteed revenue", "Marketing outcomes depend on many variables, and responsible agencies should explain uncertainty."],
  ["Huge promises without a process", "Impressive claims are less useful without methodology and evidence."],
  ["Vanity-metric reporting", "Large reach or follower numbers may not translate into qualified demand."],
  ["No access to your accounts", "Businesses should understand who owns advertising, analytics and website assets."],
  ["Generic strategy", "A plan that could be copied and sent to any company may not reflect your market or customers."],
  ["No clear communication model", "Unclear ownership can become a major operational problem."],
] as const;

const framework = [
  ["Strategy", "Clear connection between business goals, audience, channels and KPIs."],
  ["Expertise", "Relevant service capability and evidence of real implementation."],
  ["Proof", "Case studies, project examples and contextualised results."],
  ["Transparency", "Clear pricing, reporting, account ownership and communication."],
  ["Execution", "A defined process for planning, testing, optimisation and delivery."],
  ["Local Understanding", "Knowledge of the Bhopal market when local demand matters."],
  ["Conversion Focus", "Attention to enquiries, sales and customer journeys—not only traffic."],
] as const;

const checklist = [
  "I can clearly explain what I want marketing to achieve.",
  "The agency understands my target customer and business model.",
  "The proposed services are connected to measurable outcomes.",
  "I have seen relevant examples of real work.",
  "The reporting process and KPIs are clearly defined.",
  "I understand the agency fee, media budget and additional costs.",
  "I know who owns my website, advertising accounts, analytics and creative assets.",
  "There is a clear communication and review process.",
  "The agency has explained what happens if the initial strategy does not perform.",
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="scroll-mt-28 text-3xl font-semibold tracking-[-0.035em] text-[#10283a] sm:text-[2.15rem]">{children}</h2>;
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 max-w-[72ch] text-[1.03rem] leading-8 text-slate-700">{children}</p>;
}

function ComparisonTable({ headers, rows }: { headers: [string, string]; rows: readonly (readonly [string, string])[] }) {
  return (
    <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_12px_36px_-30px_rgba(16,40,58,.35)]">
      <table className="w-full min-w-[620px] border-collapse text-left text-sm sm:text-base">
        <thead className="bg-[#10283a] text-white"><tr>{headers.map((header) => <th key={header} scope="col" className="px-5 py-4 font-semibold">{header}</th>)}</tr></thead>
        <tbody>{rows.map(([label, detail], index) => <tr key={label} className={index % 2 ? "bg-slate-50/80" : "bg-white"}><th scope="row" className="w-[27%] border-t border-slate-200 px-5 py-4 align-top font-semibold text-[#123852]">{label}</th><td className="border-t border-slate-200 px-5 py-4 leading-7 text-slate-700">{detail}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

export function BhopalAgencyGuide() {
  return (
    <>
      <JsonLd data={createFAQSchema(post.faqs)} />
      <JsonLd data={createBlogPostingSchema({ title: post.title, description: post.description, slug: post.slug, publishedAt: post.publishedAt, author: post.author, category: post.category, image: "https://www.zeebrag.com/images/digital-marketing-agency-bhopal-guide-og.png" })} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title }]} />
      <header className="relative isolate overflow-hidden bg-[#0b2032] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_8%,rgba(31,128,184,.27),transparent_40%),radial-gradient(ellipse_at_10%_100%,rgba(228,111,68,.12),transparent_38%)]" />
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.03fr_.97fr] lg:gap-14 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[.18em] text-[#a9cbdf]">
              <span className="rounded-full border border-white/20 bg-white/[.06] px-3.5 py-2 text-white">Digital Marketing</span><span>Bhopal, India</span>
            </div>
            <h1 className="mt-7 text-[2.55rem] font-semibold leading-[1.12] tracking-[-.045em] sm:text-5xl lg:text-[3.55rem]">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{post.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/15 pt-5 text-sm text-slate-300">
              <span>{post.readTime}</span><span aria-hidden="true" className="text-white/40">/</span><span>Published October 4, 2026</span><span aria-hidden="true" className="text-white/40">/</span><span>By {post.author}</span>
            </div>
          </div>
          <figure className="relative mx-auto w-full max-w-[660px] overflow-hidden rounded-[1.4rem] border border-white/10 shadow-[0_35px_80px_-38px_rgba(0,0,0,.8)]">
            <Image src={image} alt="Editorial illustration of a digital marketing strategy dashboard and Bhopal cityscape for a guide to choosing an agency" width={1600} height={960} priority className="h-auto w-full" />
            <figcaption className="sr-only">A digital marketing planning dashboard above an illustrated Bhopal skyline.</figcaption>
          </figure>
        </Container>
      </header>

      <div className="bg-[#f7f9fa] pb-20">
        <Container className="grid gap-10 pt-10 lg:grid-cols-[250px_minmax(0,760px)] lg:justify-center lg:gap-14 lg:pt-16">
          <aside className="self-start lg:sticky lg:top-8">
            <details open className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_38px_-30px_rgba(16,40,58,.36)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[#10283a] [&::-webkit-details-marker]:hidden">
                <span>In this guide</span><span aria-hidden="true" className="text-lg text-[#0871ad] transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <nav aria-label="Table of contents" className="mt-4 border-t border-slate-100 pt-3">
                <ol className="space-y-1.5">{toc.map(([id, label]) => <li key={id}><a href={`#${id}`} className="block rounded-lg px-2.5 py-1.5 text-[.78rem] leading-5 text-slate-600 transition-colors hover:bg-[#edf5f9] hover:text-[#075d8e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0871ad]">{label}</a></li>)}</ol>
              </nav>
            </details>
            <div className="mt-4 hidden rounded-2xl border border-[#dae8ef] bg-[#edf5f9] p-5 text-sm leading-6 text-slate-600 lg:block">
              <p className="font-semibold text-[#10283a]">Quick answer</p>
              <p className="mt-2">Choose an agency that can explain its plan, measures, information needs and reporting—and can show relevant work.</p>
            </div>
          </aside>

          <article className="min-w-0">
            <div className="mb-9 rounded-2xl border border-[#d9e7ef] bg-[#edf5f9] p-5 sm:p-6 lg:hidden">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#0871ad]">Quick answer</p>
              <p className="mt-2 leading-7 text-[#183a50]">The right digital marketing agency should be able to explain what it will do, why it will do it, how success will be measured, what information it needs from you, and how progress will be reported. For a business in Bhopal, evaluate local-market understanding, service expertise, communication quality and evidence of real work.</p>
            </div>

            <section id="introduction" className="scroll-mt-28 border-b border-slate-200 pb-10">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#e4774d]">A practical selection guide</p>
              <SectionHeading id="introduction-heading">Introduction</SectionHeading>
              <Paragraph>Choosing a digital marketing agency is no longer simply a matter of finding a company that can run ads or publish social media posts. For most growing businesses, digital marketing affects lead generation, brand visibility, website performance, customer acquisition and long-term demand. A poor-fit agency can therefore create more than wasted marketing spend—it can create unclear reporting, inconsistent messaging and missed growth opportunities.</Paragraph>
              <Paragraph>Bhopal has a diverse business ecosystem, from startups and professional services to education, healthcare, real estate, manufacturing and founder-led companies. That makes the agency-selection decision especially important: the right partner needs to understand both digital channels and the commercial context in which those channels operate.</Paragraph>
            </section>

            <section className="scroll-mt-28 border-b border-slate-200 py-10">
              <SectionHeading id="business-objective">1. Start With Your Business Objective</SectionHeading>
              <Paragraph>Before comparing agencies, define what you actually want marketing to accomplish. A business that needs qualified leads should not evaluate an agency using the same criteria as a brand focused on awareness or a company preparing to launch a new website.</Paragraph>
              <ul className="mt-5 space-y-3 pl-0 text-[1.02rem] leading-7 text-slate-700">
                {[["Lead generation", "qualified enquiries, calls, demo requests or consultations."], ["Sales", "online purchases, booked appointments or revenue attributed to campaigns."], ["Organic growth", "stronger search visibility, relevant traffic and non-paid demand."], ["Brand building", "stronger recognition, authority and founder or company positioning."], ["Website performance", "a faster, clearer and more conversion-focused digital experience."]].map(([label, detail]) => <li key={label} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e4774d]"/><span><strong className="font-semibold text-[#183a50]">{label}:</strong> {detail}</span></li>)}
              </ul>
              <div className="mt-6 border-l-[3px] border-[#e4774d] bg-white px-5 py-4 text-[.98rem] leading-7 text-slate-700">A good agency should translate the business objective into measurable marketing KPIs. If an agency immediately jumps to impressions, followers or clicks without understanding your commercial goal, ask how those metrics connect to revenue or qualified demand.</div>
            </section>

            <section className="scroll-mt-28 border-b border-slate-200 py-10">
              <SectionHeading id="service-expertise">2. Check Whether the Agency Has the Right Service Expertise</SectionHeading>
              <Paragraph>Digital marketing is a broad discipline. SEO, Google Ads, Meta Ads, social media, content, website development and personal branding require different processes and specialist knowledge.</Paragraph>
              <ComparisonTable headers={["Need", "What to evaluate"]} rows={expertise} />
            </section>

            <section className="scroll-mt-28 border-b border-slate-200 py-10">
              <SectionHeading id="real-work">3. Ask to See Real Work</SectionHeading>
              <Paragraph>A professional agency should be able to demonstrate its capabilities through relevant work. Look for case studies, project examples, before-and-after improvements, campaign context and clear explanations of what the agency actually contributed. You can also <Link className="font-semibold text-[#086da4] underline decoration-[#a8ccdf] underline-offset-4" href="/case-studies">explore Zeebrag case studies</Link>.</Paragraph>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">{["What was the client's original problem?", "What strategy was selected and why?", "Which channels were used?", "What was measured?", "What changed after implementation?", "Which results can be independently understood or contextualised?"].map((q) => <li key={q} className="flex min-h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700"><span className="text-[#0a7bad]" aria-hidden="true">↗</span>{q}</li>)}</ul>
              <Paragraph>Be careful with impressive-looking numbers that have no context. A percentage increase, lead count or return-on-ad-spend figure becomes meaningful only when you understand the time period, baseline, campaign conditions and measurement method.</Paragraph>
            </section>

            <section className="scroll-mt-28 border-b border-slate-200 py-10">
              <SectionHeading id="seo-approach">4. Evaluate the Agency&apos;s SEO Approach</SectionHeading>
              <Paragraph>If organic search is part of your growth plan, ask how the agency approaches SEO beyond adding keywords to pages. A mature SEO process normally considers technical accessibility, search intent, content quality, internal linking, structured data where appropriate, local visibility, authority and conversion paths.</Paragraph>
              <Paragraph>For local businesses, ask specifically how the agency will connect your website, Google Business Profile, reviews, location information, service pages and local content into a consistent search presence.</Paragraph>
              <Paragraph>Also ask what the agency considers a successful SEO engagement. A useful answer should connect rankings and traffic with qualified business outcomes rather than treating position alone as the final goal. Explore Zeebrag&apos;s <Link className="font-semibold text-[#086da4] underline decoration-[#a8ccdf] underline-offset-4" href="/seo-services">SEO services</Link> to learn more about the service scope.</Paragraph>
            </section>

            <section className="scroll-mt-28 border-b border-slate-200 py-10">
              <SectionHeading id="paid-advertising">5. Understand How Paid Advertising Is Managed</SectionHeading>
              <Paragraph>Paid media can produce results quickly, but speed does not automatically mean efficiency. A good agency should be able to explain the relationship between targeting, creative, landing pages, conversion tracking, lead quality and budget allocation.</Paragraph>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">{["How are conversions tracked?", "How is poor-quality traffic or lead volume identified?", "How frequently are campaigns reviewed?", "How are creative and audience tests structured?", "How is budget shifted when performance changes?", "Will you receive access to the advertising accounts and data?"].map((q) => <li key={q} className="flex gap-3 rounded-xl bg-white px-4 py-3 text-sm leading-6 text-slate-700"><span className="font-bold text-[#e4774d]">?</span>{q}</li>)}</ul>
              <Paragraph>Learn more about <Link className="font-semibold text-[#086da4] underline decoration-[#a8ccdf] underline-offset-4" href="/google-ads">Google Ads</Link> and <Link className="font-semibold text-[#086da4] underline decoration-[#a8ccdf] underline-offset-4" href="/meta-ads">Meta Ads</Link>.</Paragraph>
            </section>

            <section className="scroll-mt-28 border-b border-slate-200 py-10">
              <SectionHeading id="website-conversion">6. Review the Website and Conversion Strategy</SectionHeading>
              <Paragraph>Marketing cannot compensate indefinitely for a confusing website. If visitors cannot understand the offer, trust the company, find proof or take the next step, additional traffic may simply increase the number of people who leave.</Paragraph>
              <div className="mt-6 overflow-x-auto rounded-2xl bg-[#10283a] p-5 text-white sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[.15em] text-[#92c9e8]">Follow the complete path</p>
                <div className="mt-4 flex min-w-[620px] items-center justify-between gap-2 text-center text-xs font-semibold sm:text-sm">{["Search or\nadvertisement", "Landing\npage", "Value\nproposition", "Proof", "Call to\naction", "Enquiry or\npurchase", "Follow-up"].map((step, i) => <div key={step} className="flex items-center gap-2"><span className="flex min-h-[58px] min-w-[76px] items-center justify-center rounded-xl border border-white/15 bg-white/[.07] px-2 leading-5">{step}</span>{i < 6 && <span className="text-[#f08a58]" aria-hidden="true">→</span>}</div>)}</div>
              </div>
              <Paragraph>A capable growth partner should therefore look at the complete path: search or advertisement → landing page → value proposition → proof → call to action → enquiry or purchase → follow-up. For a modern business website, also evaluate mobile usability, page speed, technical SEO, accessibility, analytics and the clarity of conversion paths. See the <Link className="font-semibold text-[#086da4] underline decoration-[#a8ccdf] underline-offset-4" href="/website-development">website development</Link> service page.</Paragraph>
            </section>

            <section className="scroll-mt-28 border-b border-slate-200 py-10">
              <SectionHeading id="reporting">7. Look for Transparent Reporting</SectionHeading>
              <Paragraph>Reporting should help a business make decisions. A dashboard filled with impressions and clicks is not enough if nobody can explain what changed, why it changed and what should happen next.</Paragraph>
              <Paragraph>At minimum, clarify the reporting frequency, core KPIs, attribution approach, campaign or SEO activity, major findings, next actions and who will be responsible for communicating them.</Paragraph>
            </section>

            <section className="scroll-mt-28 border-b border-slate-200 py-10">
              <SectionHeading id="agency-questions">8. Ask the Questions That Reveal How the Agency Thinks</SectionHeading>
              <Paragraph>Use these questions to understand how an agency approaches your specific business, its priorities and its constraints.</Paragraph>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2">{questions.map((question, i) => <li key={question} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_32px_-30px_rgba(16,40,58,.4)]"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e9f3f8] text-xs font-bold text-[#086da4]">{String(i + 1).padStart(2, "0")}</span><span className="pt-1 text-sm leading-6 text-slate-700">{question}</span></li>)}</ol>
            </section>

            <section className="scroll-mt-28 border-b border-slate-200 py-10">
              <SectionHeading id="red-flags">9. Red Flags to Watch For</SectionHeading>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">{redFlags.map(([title, explanation]) => <div key={title} className="rounded-2xl border border-[#f0d9cd] bg-[#fff9f5] p-5"><h3 className="flex gap-2 font-semibold leading-6 text-[#773c27]"><span aria-hidden="true" className="text-[#dc7249]">!</span>{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{explanation}</p></div>)}</div>
            </section>

            <section className="scroll-mt-28 border-b border-slate-200 py-10">
              <SectionHeading id="evaluation-framework">10. A Simple Agency Evaluation Framework</SectionHeading>
              <Paragraph>Instead of choosing an agency based on one impressive pitch, compare the same dimensions across shortlisted agencies.</Paragraph>
              <ComparisonTable headers={["Area", "What to look for"]} rows={framework} />
            </section>

            <section id="local-context" className="scroll-mt-28 border-b border-slate-200 py-10">
              <div className="rounded-[1.6rem] border border-[#d5e4ec] bg-gradient-to-br from-[#eaf4f8] to-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[.17em] text-[#0871ad]">Local perspective</p>
                <SectionHeading id="local-context-heading">Why Local Context Still Matters</SectionHeading>
                <Paragraph>Digital marketing is not limited by geography, but local context can matter greatly when a business serves a defined area. An agency working with a Bhopal-based business may need to understand local search behaviour, service areas, customer expectations, competition and the relationship between Google Business Profile visibility and website conversion.</Paragraph>
                <Paragraph>At the same time, a Bhopal agency can serve customers beyond the city. The important question is not whether an agency is local; it is whether the agency has the expertise and operating model required by the business.</Paragraph>
              </div>
            </section>

            <section id="zeebrag-approach" className="scroll-mt-28 border-b border-slate-200 py-10">
              <SectionHeading id="zeebrag-approach-heading">How Zeebrag Approaches Growth</SectionHeading>
              <Paragraph>Zeebrag is a digital marketing and growth-focused agency based in Bhopal, India. Its service approach brings together SEO, paid advertising, social media, website development and personal branding so that individual marketing activities can support a broader growth system.</Paragraph>
              <Paragraph>The underlying principle is simple: marketing channels should not operate as isolated activities. Search should connect to useful content and conversion pages. Paid campaigns should connect to strong landing experiences and measurable outcomes. Social content should strengthen the brand and support demand. Websites should make it easy for interested visitors to take the next step.</Paragraph>
              <div className="mt-7 grid gap-3 sm:grid-cols-2" aria-label="How marketing channels connect in an integrated growth system">
                {[["Search", "Useful Content", "Conversion Pages"], ["Paid Campaigns", "Landing Experience", "Measurable Outcomes"], ["Social Content", "Brand Strength", "Demand"], ["Website", "Trust + Clarity", "Next Action"]].map(([start, middle, end]) => <div key={start} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between gap-2"><span className="rounded-lg bg-[#edf5f9] px-3 py-2 text-sm font-semibold text-[#183a50]">{start}</span><span aria-hidden="true" className="text-[#df7a50]">→</span><span className="rounded-lg bg-[#f6f4ef] px-3 py-2 text-sm font-semibold text-[#5b5145]">{middle}</span></div><div className="mt-3 flex items-center gap-3 pl-3 text-[#df7a50]" aria-hidden="true"><span className="h-px flex-1 bg-[#e5b49c]"/><span>↓</span><span className="h-px flex-1 bg-[#e5b49c]"/></div><p className="mt-3 rounded-lg bg-[#10283a] px-3 py-2 text-center text-sm font-semibold text-white">{end}</p></div>)}
              </div>
              <Paragraph>For businesses evaluating an agency, this integrated approach can be useful when the objective is sustainable growth rather than a collection of disconnected marketing tasks. Explore Zeebrag&apos;s <Link className="font-semibold text-[#086da4] underline decoration-[#a8ccdf] underline-offset-4" href="/services">services</Link>, <Link className="font-semibold text-[#086da4] underline decoration-[#a8ccdf] underline-offset-4" href="/personal-branding">personal branding</Link> and <Link className="font-semibold text-[#086da4] underline decoration-[#a8ccdf] underline-offset-4" href="/services/social-media-management">social media management</Link>.</Paragraph>
            </section>

            <section className="scroll-mt-28 border-b border-slate-200 py-10">
              <SectionHeading id="faqs">Frequently Asked Questions</SectionHeading>
              <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-6">{post.faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold leading-6 text-[#183a50] [&::-webkit-details-marker]:hidden">{faq.question}<span aria-hidden="true" className="shrink-0 text-xl font-normal text-[#0871ad] transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-[68ch] pr-8 text-[.97rem] leading-7 text-slate-600">{faq.answer}</p></details>)}</div>
            </section>

            <section id="final-checklist" className="scroll-mt-28 border-b border-slate-200 py-10">
              <SectionHeading id="final-checklist-heading">Final Checklist Before You Sign</SectionHeading>
              <Paragraph>Before making a decision, use this list to confirm that expectations and responsibilities are clear.</Paragraph>
              <ul className="mt-6 space-y-2.5">{checklist.map((item) => <li key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm leading-6 text-slate-700 sm:px-5"><span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e5f3ed] text-sm font-bold text-[#278363]">✓</span><span>{item}</span></li>)}</ul>
            </section>

            <section className="py-10">
              <blockquote className="rounded-[1.6rem] bg-[#10283a] px-6 py-8 text-white sm:px-9 sm:py-10">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#9ccbe4]">The takeaway</p>
                <p className="mt-4 text-2xl font-medium leading-[1.45] tracking-[-.025em] sm:text-[1.8rem]">“The right agency is not necessarily the one making the biggest promise. It is the one that can clearly connect strategy, execution, measurement and business outcomes—and communicate that process transparently.”</p>
              </blockquote>
              <p className="mt-5 text-sm leading-6 text-slate-500">Marketing outcomes vary by market, offer, budget, competition, execution quality and other business factors.</p>
            </section>

            <section className="rounded-[1.7rem] border border-[#dce7ec] bg-white p-6 shadow-[0_20px_60px_-48px_rgba(16,40,58,.35)] sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#df7950]">ZEEBRAG · BHOPAL, INDIA</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-[#10283a]">Ready to Build a More Measurable Growth System?</h2>
              <p className="mt-4 max-w-[68ch] text-base leading-7 text-slate-600">If your business is looking for a digital marketing and growth partner in Bhopal or across India, Zeebrag can help evaluate your current digital presence and identify practical opportunities across SEO, paid media, social media, website development and personal branding.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact#audit-form" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#e9784b] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#cf6037] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e9784b]">Talk to Zeebrag <span className="ml-2" aria-hidden="true">→</span></Link>
                <Link href="/services" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#183a50] transition-colors hover:border-[#0b6d9f] hover:bg-[#f3f8fb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0871ad]">Explore Our Services</Link>
              </div>
              <p className="mt-5 text-sm text-slate-500">Learn more <Link href="/about" className="font-semibold text-[#086da4] underline decoration-[#a8ccdf] underline-offset-4">about Zeebrag</Link> or <Link href="/contact#audit-form" className="font-semibold text-[#086da4] underline decoration-[#a8ccdf] underline-offset-4">contact our team</Link>.</p>
            </section>
          </article>
        </Container>
      </div>
    </>
  );
}
