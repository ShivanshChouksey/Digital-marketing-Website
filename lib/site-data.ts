export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  headline: string;
  outcomes: string[];
  deliverables: string[];
  process: string[];
  seoTitle: string;
  seoDescription: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  readTime: string;
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
  author: string;
  sections: Array<{ heading: string; content: string }>;
  faqs: FaqItem[];
  relatedServices: string[];
  relatedPosts: string[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  problem: string;
  strategy: string;
  execution: string[];
  outcomes: Array<{ label: string; value: string }>;
  testimonial: string;
  testimonialAuthor: string;
  relatedServices: string[];
  seoTitle: string;
  seoDescription: string;
};

export type SeoContentBlock = {
  heading: string;
  paragraphs: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceSeoContent = {
  overview: string[];
  benefits: string[];
  useCases: SeoContentBlock[];
  whyItMatters: SeoContentBlock[];
  faqs: FaqItem[];
  relatedServices: string[];
  relatedCaseStudies: string[];
};

export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedIn?: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact#audit-form" },
];

export const homepageFaqs: FaqItem[] = [
  {
    question: "How does Zeebrag work?",
    answer:
      "We begin with clarity: positioning, audience, funnel friction, and content gaps. From there we build the right mix of strategy, creative systems, website experience, and growth execution so the brand feels sharper and converts better.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes. Zeebrag is built in Bhopal, India and works remotely with brands across India and global markets. We structure communication around shared planning, fast feedback loops, and calls across IST, UAE, UK and US-friendly hours.",
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
      "We primarily work with startups, founder-led brands, service businesses, SaaS, D2C, solar, and modern companies that care about positioning, attention quality, and measurable growth.",
  },
  {
    question: "What does a growth audit include?",
    answer:
      "Our audit reviews your positioning, website conversion path, content consistency, search visibility, paid media efficiency, and founder brand presence. You receive practical priorities rather than a generic checklist.",
  },
  {
    question: "How much do Zeebrag services cost?",
    answer:
      "Pricing depends on scope, channels, and execution depth. After an initial audit, we recommend a focused starting plan with clear deliverables, timelines, and expected outcomes for your stage and market.",
  },
];

export const founderProfile = {
  name: "Zeebrag Leadership Team",
  role: "Founders & Growth Strategists",
  bio: "Zeebrag was founded by growth strategists and creative operators based in Bhopal, India. The team combines branding, performance marketing, website development, and founder-led content systems to help modern businesses build trust and convert attention into revenue.",
  experience: "50+ brands served across India and global markets",
  linkedIn: "https://www.linkedin.com/company/zeebrag/",
};

export const teamMembers: TeamMember[] = [
  {
    name: "Zeebrag Strategy Team",
    role: "Brand & Growth Strategy",
    bio: "Leads positioning workshops, funnel audits, and integrated growth roadmaps for startups and service brands in Bhopal and across India.",
    linkedIn: "https://www.linkedin.com/company/zeebrag/",
  },
  {
    name: "Zeebrag Creative Team",
    role: "Content & Creative Systems",
    bio: "Builds scroll-stopping content, ad creatives, and brand narratives designed for modern platforms and conversion-focused journeys.",
  },
  {
    name: "Zeebrag Technology Team",
    role: "Web Development & Analytics",
    bio: "Develops fast, SEO-ready Next.js websites with performance optimization, tracking, and scalable architecture for growth brands.",
  },
];

export const blogCategories: BlogCategory[] = [
  {
    slug: "seo",
    name: "SEO",
    description: "Search visibility, technical SEO, and content strategy for startups in India.",
  },
  {
    slug: "paid-media",
    name: "Paid Media",
    description: "Meta Ads, Google Ads, and performance marketing best practices.",
  },
  {
    slug: "personal-branding",
    name: "Personal Branding",
    description: "Founder authority, LinkedIn growth, and trust-building content.",
  },
  {
    slug: "website-development",
    name: "Website Development",
    description: "Conversion-focused websites, landing pages, and Core Web Vitals.",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    description: "Growth strategy, social media, and integrated marketing tips.",
  },
];

export const trustLogos = [
  "Sprintly Ventures",
  "Clario Health",
  "Founders Loop",
  "Nexa Commerce",
];

export const metrics = [
  { label: "Brands served", value: "50+" },
  { label: "Leads generated in 30 days", value: "120+" },
  { label: "Average paid media ROAS", value: "25x+" },
  { label: "Organic traffic growth", value: "200%" },
];

export const painPoints = [
  "Inconsistent lead flow makes revenue planning unpredictable.",
  "Your online presence does not reflect the quality of your business.",
  "Content is getting published, but it is not creating real demand.",
  "Your website looks dated and underperforms in conversions.",
  "Marketing channels feel disconnected, reactive, and hard to measure.",
  "Founder visibility is low, which weakens trust and market authority.",
];

export const solutionPillars = [
  {
    title: "Strategy before spend",
    description:
      "We audit demand, messaging, and channel economics so every campaign starts with a clear growth model.",
  },
  {
    title: "Creative systems that scale",
    description:
      "From founder-led content to ad creatives and landing pages, we build assets designed to compound performance.",
  },
  {
    title: "Technology-backed execution",
    description:
      "Automation, dashboards, websites, and analytics keep your growth engine measurable, fast, and conversion-focused.",
  },
];

export const services: Service[] = [
  {
    slug: "seo-services",
    name: "SEO Services",
    eyebrow: "Search visibility",
    summary: "Capture high-intent traffic and turn search demand into qualified pipeline.",
    description:
      "Zeebrag builds India-focused SEO systems that improve rankings, strengthen authority, and convert organic traffic into revenue.",
    headline: "SEO systems engineered for compounding search growth",
    outcomes: [
      "Higher rankings for commercial keywords",
      "Landing pages aligned to revenue intent",
      "Content hubs built for long-term authority",
      "Technical SEO improvements for stronger Core Web Vitals",
    ],
    deliverables: [
      "Keyword strategy with India-focused buying intent",
      "Technical SEO audit and fixes",
      "Conversion-focused service and location pages",
      "Editorial content roadmap and blog growth engine",
    ],
    process: ["Audit current visibility", "Prioritize revenue pages", "Publish and optimize content", "Measure rankings, leads, and conversions"],
    seoTitle: "SEO Services in India | Zeebrag",
    seoDescription:
      "India-focused SEO services for startups and growth-stage brands. Improve rankings, traffic, and inbound leads with Zeebrag.",
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    eyebrow: "Paid social growth",
    summary: "Launch high-converting Meta campaigns with better creatives, sharper targeting, and measurable ROAS.",
    description:
      "We turn Meta Ads into a reliable acquisition engine using creative testing, funnel strategy, and rigorous performance tracking.",
    headline: "Meta Ads campaigns built to lower CAC and accelerate scale",
    outcomes: [
      "Faster testing cycles and better winning creatives",
      "Clear attribution and funnel visibility",
      "Stronger lead quality from paid social",
      "Campaign structures aligned to scaling stages",
    ],
    deliverables: [
      "Offer and funnel audit",
      "Creative direction and ad hooks",
      "Campaign build, tracking, and reporting",
      "Weekly optimization for ROAS and CPL improvement",
    ],
    process: ["Audit offer-market fit", "Build audience and creative matrix", "Launch and optimize", "Scale what converts"],
    seoTitle: "Meta Ads Agency for Startups | Zeebrag",
    seoDescription:
      "Performance-focused Meta Ads management for startups and modern brands. Scale leads and revenue with Zeebrag.",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    eyebrow: "Intent-driven acquisition",
    summary: "Own high-intent search demand with Google Ads campaigns designed for efficient customer acquisition.",
    description:
      "Zeebrag manages Google Ads with a conversion-first framework spanning search, remarketing, landing pages, and tracking.",
    headline: "Google Ads strategies tuned for intent, quality leads, and profitability",
    outcomes: [
      "Better quality score and lower wasted spend",
      "High-intent keyword targeting",
      "Landing page and ad message alignment",
      "Executive reporting tied to business outcomes",
    ],
    deliverables: [
      "Search term and competitor analysis",
      "Campaign and conversion tracking setup",
      "Landing page recommendations",
      "Bid, copy, and audience optimization",
    ],
    process: ["Map search intent", "Launch precision campaigns", "Optimize budget allocation", "Scale profitable keywords"],
    seoTitle: "Google Ads Management Services | Zeebrag",
    seoDescription:
      "Google Ads management for startups and service businesses that need better-qualified leads and smarter spend efficiency.",
  },
  {
    slug: "website-development",
    name: "Website Development",
    eyebrow: "Digital foundation",
    summary: "Build premium, conversion-ready websites that look credible and perform like a growth asset.",
    description:
      "We design and build modern websites for founders and businesses who need speed, trust, and lead generation built in.",
    headline: "High-performance websites that turn attention into qualified inquiries",
    outcomes: [
      "Premium first impression for investors and buyers",
      "Stronger conversion rates from landing pages and CTAs",
      "Fast, SEO-ready architecture with scalable code",
      "Better analytics and lead capture foundations",
    ],
    deliverables: [
      "UX strategy and premium UI direction",
      "Development in Next.js with SEO fundamentals",
      "Lead forms, analytics, and CTA systems",
      "Performance optimization for Core Web Vitals",
    ],
    process: ["Define positioning and goals", "Design conversion journey", "Develop and optimize", "Launch and iterate"],
    seoTitle: "Website Development Company for Growth Brands | Zeebrag",
    seoDescription:
      "Premium website development for startups and modern service brands. Fast, elegant, SEO-ready websites built by Zeebrag.",
  },
  {
    slug: "personal-branding",
    name: "Personal Branding",
    eyebrow: "Founder authority",
    summary: "Position founders as category leaders with content systems that build trust and attract opportunities.",
    description:
      "Zeebrag helps founders shape a strong public presence through clear positioning, narrative strategy, and content execution.",
    headline: "Founder branding that turns expertise into trust, demand, and market pull",
    outcomes: [
      "Clear personal positioning and message consistency",
      "Higher trust with prospects, talent, and partners",
      "Content systems built around founder insight",
      "Stronger visibility across LinkedIn and owned channels",
    ],
    deliverables: [
      "Founder narrative and positioning workshop",
      "LinkedIn and personal brand content framework",
      "Content repurposing and brand visuals",
      "Performance reviews and authority-building roadmap",
    ],
    process: ["Clarify founder angle", "Build messaging system", "Create content engine", "Compound authority over time"],
    seoTitle: "Personal Branding Services for Founders | Zeebrag",
    seoDescription:
      "Personal branding for founders in India. Build authority, trust, and inbound leads with Zeebrag's founder-led content systems.",
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    eyebrow: "Platform-native growth",
    summary: "Build consistent social presence with content systems that earn attention and drive qualified inquiries.",
    description:
      "Zeebrag manages social media with strategy-first content planning, platform-native creative, and performance tracking tied to business outcomes.",
    headline: "Social media management that turns attention into trust and pipeline",
    outcomes: [
      "Consistent brand presence across Instagram, LinkedIn, and Meta",
      "Content calendars aligned to business goals",
      "Stronger engagement and profile discovery",
      "Social content that supports ads, SEO, and founder branding",
    ],
    deliverables: [
      "Platform strategy and content pillars",
      "Monthly content calendar and creative direction",
      "Post design, copy, and publishing workflow",
      "Performance reporting and optimization recommendations",
    ],
    process: ["Audit current presence", "Define content pillars", "Publish and engage consistently", "Optimize based on performance"],
    seoTitle: "Social Media Management Services in India | Zeebrag",
    seoDescription:
      "Social media management for startups and brands in Bhopal and India. Build consistent content that drives trust, engagement, and leads.",
  },
];

export const blogs: BlogPost[] = [
  {
    slug: "how-to-choose-digital-marketing-agency-bhopal",
    title: "How to Choose a Digital Marketing Agency in Bhopal: A Practical Guide for Growing Businesses",
    description:
      "A practical framework for founders and business owners who want to evaluate an agency based on strategy, expertise, transparency, execution and measurable business outcomes—not just promises.",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    readTime: "10 min read",
    publishedAt: "2026-10-04",
    seoTitle: "How to Choose a Digital Marketing Agency in Bhopal | Zeebrag",
    seoDescription:
      "Learn how to choose the right digital marketing agency in Bhopal. Compare strategy, expertise, SEO, paid ads, reporting, transparency and business outcomes.",
    author: "Zeebrag Editorial Team",
    sections: [],
    faqs: [
      { question: "How much does a digital marketing agency in Bhopal charge?", answer: "Pricing varies according to services, scope, business size, advertising budget, content requirements and the level of strategic involvement. A useful proposal should clearly separate agency fees from media spend and other third-party costs." },
      { question: "How long does digital marketing take to show results?", answer: "It depends on the channel and starting point. Paid advertising can generate data quickly, while SEO and organic content usually require more time to build visibility and authority. A responsible agency should define realistic milestones rather than promise a fixed outcome." },
      { question: "Should a small business invest in SEO or paid ads?", answer: "The answer depends on demand, competition, budget, sales cycle and the type of customer you need. SEO can build longer-term organic visibility, while paid advertising can provide faster testing and demand capture. Many businesses use both at different stages." },
      { question: "What should I expect from a good digital marketing agency?", answer: "You should expect a clear strategy, defined responsibilities, measurable KPIs, regular communication, transparent reporting and a process for testing and optimisation." },
      { question: "How do I compare two digital marketing agencies?", answer: "Compare them using the same criteria: strategic fit, relevant expertise, proof of work, communication, reporting, ownership of accounts and assets, pricing clarity and understanding of your business model." },
    ],
    relatedServices: ["seo-services", "google-ads", "meta-ads", "website-development", "personal-branding", "social-media-management"],
    relatedPosts: ["startup-growth-marketing-india", "landing-page-conversion-playbook"],
  },
  {
    slug: "startup-growth-marketing-india",
    title: "Startup Growth Marketing in India: What Actually Moves Revenue",
    description:
      "A practical framework for startups in India to align brand, paid acquisition, content, and conversion systems.",
    category: "Growth Strategy",
    categorySlug: "digital-marketing",
    readTime: "6 min read",
    publishedAt: "2026-03-18",
    seoTitle: "Startup Growth Marketing in India | Zeebrag Blog",
    seoDescription:
      "Learn how Indian startups can combine branding, paid media, SEO, and website optimization to create reliable growth.",
    author: "Zeebrag Strategy Team",
    sections: [
      {
        heading: "Growth gets expensive without positioning",
        content:
          "If your message is not clear, every channel becomes harder to scale because the market never fully understands why your offer matters. Teams often blame ads, content, or targeting when the deeper issue is weak positioning. In practice, that means founders say one thing, landing pages say another, and campaigns try to compensate by spending more. For startups in Bhopal and across India, clarity is often the cheapest growth improvement available because it lifts conversion across every touchpoint. Better positioning helps search pages rank for the right intent, makes ad creative more persuasive, and gives sales conversations a stronger starting point.",
      },
      {
        heading: "Demand capture and demand creation must work together",
        content:
          "Search, social, founder content, landing pages, and retargeting should reinforce the same offer instead of competing with one another. When these systems are disconnected, performance data becomes harder to interpret and buyers receive mixed signals. Demand capture channels such as SEO and Google Ads work best when demand creation channels such as founder content or paid social are building trust in parallel. That alignment improves conversion efficiency because users are already familiar with the offer before they land on a service page. Businesses in India that coordinate both layers usually find it easier to scale without dramatic increases in acquisition cost.",
      },
      {
        heading: "Your website is part of your acquisition engine",
        content:
          "A high-performing website improves trust, reduces friction, and converts traffic faster, which is why it should be treated as a core growth asset rather than a brochure. The homepage, service pages, forms, and proof sections all influence whether traffic becomes qualified pipeline. If a visitor from Bhopal or any other market reaches your site and cannot quickly understand the value you provide, even the best ad campaign will struggle to produce strong outcomes. Technical performance matters too. Faster pages, clearer structure, and stronger internal links help both search engines and buyers move through the site with less resistance.",
      },
    ],
    faqs: [
      {
        question: "How long does it take for a startup to see growth results?",
        answer:
          "Early improvements from positioning, messaging, and conversion fixes often appear within weeks. Compounding growth from SEO and content systems typically builds over 3-6 months.",
      },
      {
        question: "What is the most cost-effective growth channel for Indian startups?",
        answer:
          "SEO and founder-led content often provide the best long-term ROI. However, combining organic with targeted paid campaigns on Meta or Google can accelerate early-stage results.",
      },
      {
        question: "Should startups invest in branding early?",
        answer:
          "Yes. Clear positioning and consistent messaging improve conversion across every channel. Even minimal branding investment helps startups stand out in competitive Indian markets.",
      },
    ],
    relatedServices: ["seo-services", "website-development", "personal-branding"],
    relatedPosts: ["founder-branding-b2b-trust", "landing-page-conversion-playbook"],
  },
  {
    slug: "founder-branding-b2b-trust",
    title: "Why Founder Branding Speeds Up B2B Trust and Inbound Leads",
    description:
      "Founders who show up consistently create trust faster, shorten sales cycles, and make their companies easier to remember.",
    category: "Personal Branding",
    categorySlug: "personal-branding",
    readTime: "5 min read",
    publishedAt: "2026-02-26",
    seoTitle: "Founder Branding for B2B Growth | Zeebrag Blog",
    seoDescription:
      "Explore how founder branding improves trust, authority, and inbound opportunities for B2B businesses and startups.",
    author: "Zeebrag Strategy Team",
    sections: [
      {
        heading: "People trust people before they trust brands",
        content:
          "Founder visibility adds context, conviction, and credibility because people often evaluate the people behind a business before they fully trust the brand itself. That is especially true in B2B categories where expertise, judgment, and category understanding influence buying decisions. When founders show up consistently with thoughtful ideas, prospects get a human reason to believe the company can deliver. For businesses in Bhopal and across India, that trust signal can shorten the distance between awareness and inquiry. It also improves recall, which matters when multiple providers appear similar on paper.",
      },
      {
        heading: "Consistency matters more than volume",
        content:
          "One focused narrative expressed consistently across LinkedIn, podcasts, video clips, websites, and sales conversations usually outperforms random bursts of content. Volume without message discipline often creates noise instead of authority. A founder brand becomes useful when the same ideas repeat with clarity, evolve with evidence, and connect back to business outcomes. That consistency helps audiences understand what you stand for and why your perspective is worth following. Over time, it turns content into an asset that supports hiring, partnerships, speaking opportunities, and qualified inbound demand.",
      },
      {
        heading: "Authority compounds when content is systematic",
        content:
          "The strongest founder brands use repeatable systems for ideation, capture, distribution, and measurement because authority compounds through repetition and refinement. A systematic process makes it easier to turn one strong idea into multiple useful assets: a LinkedIn post, a website insight section, a short-form clip, or a sales enablement snippet. That is where personal branding becomes commercially valuable. Instead of relying on motivation or occasional inspiration, founders can build visibility that supports actual business development. In competitive India-focused markets, this often becomes a major trust advantage over quieter competitors.",
      },
    ],
    faqs: [
      {
        question: "How often should founders post on LinkedIn?",
        answer:
          "Consistency matters more than frequency. Posting 2-3 times per week with focused, insight-driven content typically builds better authority than daily posting without a clear narrative.",
      },
      {
        question: "Can personal branding work for technical founders?",
        answer:
          "Yes. Technical founders can build authority by sharing product insights, industry analysis, and problem-solving approaches that demonstrate expertise without requiring a public-facing personality.",
      },
    ],
    relatedServices: ["personal-branding", "social-media-management"],
    relatedPosts: ["startup-growth-marketing-india"],
  },
  {
    slug: "landing-page-conversion-playbook",
    title: "A Landing Page Conversion Playbook for Service Businesses",
    description:
      "Use this framework to improve trust, message clarity, and conversion rates on service landing pages.",
    category: "Website Development",
    categorySlug: "website-development",
    readTime: "7 min read",
    publishedAt: "2026-01-15",
    seoTitle: "Landing Page Conversion Playbook | Zeebrag Blog",
    seoDescription:
      "A conversion-focused landing page framework for agencies, startups, and service businesses looking to improve lead generation.",
    author: "Zeebrag Technology Team",
    sections: [
      {
        heading: "Above-the-fold clarity wins attention",
        content:
          "Your headline should combine who you help, what result you create, and why your approach is different because visitors decide quickly whether to stay or leave. If the first screen is vague, the rest of the page has to work much harder. Strong above-the-fold messaging is especially important for service businesses in Bhopal and across India that rely on trust, authority, and differentiation to win inquiries. The headline, supporting copy, and first CTA should immediately reduce confusion and give the visitor a reason to keep exploring.",
      },
      {
        heading: "Social proof reduces friction",
        content:
          "Specific outcomes, recognizable logos, and founder testimonials reduce skepticism because they answer the buyer's unspoken question: why should I trust you? Strong social proof works best when it is concrete. Instead of saying results improved, show the traffic growth, lead volume, revenue lift, or conversion increase. That level of detail helps a landing page feel more credible and less promotional. For service brands competing in India, especially in crowded categories, proof is often the section that makes the difference between passive browsing and an actual inquiry.",
      },
      {
        heading: "Every section should answer one conversion question",
        content:
          "What do you do, why trust you, what results can buyers expect, how does it work, and what should they do next? Great landing pages answer those questions in sequence so the user never has to guess. When sections are scattered or repetitive, users feel friction even if the design looks modern. Conversion-focused pages guide attention step by step using copy, proof, and clear CTAs. That structure also helps SEO because a well-organized page is easier for search engines to understand and easier for visitors to navigate with confidence.",
      },
    ],
    faqs: [
      {
        question: "What is the most important element of a landing page?",
        answer:
          "Above-the-fold clarity is the most critical element. Visitors decide within seconds whether to stay or leave, so your headline and first CTA must communicate value immediately.",
      },
      {
        question: "How long should a landing page be?",
        answer:
          "Long enough to answer all buyer objections, short enough to maintain attention. For service businesses, 800-1500 words with clear sections, proof points, and a single CTA typically performs best.",
      },
    ],
    relatedServices: ["website-development", "seo-services"],
    relatedPosts: ["startup-growth-marketing-india"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-demand-generation",
    client: "Vaibhav Solar Solution",
    industry: "Solar & Renewable Energy",
    problem:
      "The company had strong product-market fit in the solar category but low inbound volume, inconsistent paid results, and a weak founder-led content presence that failed to build trust with commercial buyers.",
    strategy:
      "Zeebrag combined a new website narrative, founder branding on LinkedIn, content repurposing for social media, and paid demand capture across Meta and Google to create a full-funnel growth system.",
    execution: [
      "Rebuilt the homepage and core service pages around clear ICP messaging for commercial solar buyers",
      "Launched founder-led LinkedIn content and short-form insight clips for social proof",
      "Created paid search campaigns for high-intent solar installation and commercial keywords",
      "Built Meta Ads campaigns with creative testing for lead generation in target regions",
      "Installed reporting dashboards to track lead quality, source mix, and conversion rates",
      "Improved internal linking between service pages, case studies, and contact conversion paths",
    ],
    outcomes: [
      { label: "Qualified leads in 30 days", value: "126" },
      { label: "Paid ROAS", value: "3.2x" },
      { label: "Organic traffic growth", value: "184%" },
    ],
    testimonial:
      "Zeebrag helped us turn scattered marketing effort into a system we could actually measure. The website, content, and paid campaigns finally worked together.",
    testimonialAuthor: "Leadership Team, Vaibhav Solar Solution",
    relatedServices: ["seo-services", "meta-ads", "google-ads", "website-development", "personal-branding"],
    seoTitle: "Solar Demand Generation Case Study | Zeebrag",
    seoDescription:
      "See how Zeebrag helped a solar brand in India grow leads, ROAS, and organic traffic with SEO, paid media, and founder branding.",
  },
];

export { serviceSeoContent } from "@/lib/service-seo-content";

export const blogResourceContent = {
  overview: [
    "The Zeebrag blog is designed to support both informational and commercial search intent. Instead of publishing content for volume alone, we focus on the questions founders, marketers, and business owners in Bhopal and across India actually ask when they want to improve growth performance. That means practical frameworks, actionable explanations, and articles that naturally connect readers to the next useful page on the site.",
    "A strong blog also improves how search engines understand your expertise. When articles link thoughtfully to service pages, case studies, and the contact route, they do more than attract traffic. They help visitors move through a clearer journey from discovery to decision. Zeebrag uses content clusters to make that path easier to crawl and easier to convert.",
    "Whether someone is researching founder branding, paid acquisition, SEO, or website conversion, the goal of this resource hub is the same: help them learn something valuable, understand Zeebrag's approach, and find the most relevant next step without friction.",
  ],
};

export const caseStudyHubContent = {
  overview: [
    "Case studies are one of the strongest proof assets for service businesses because they show how strategy becomes execution and how execution becomes measurable outcomes. For Zeebrag, each case study is built to answer the questions decision-makers in Bhopal and across India usually ask before choosing a growth partner: what was the real problem, what changed, what was delivered, and what business impact followed.",
    "This case study hub is structured to support trust as well as SEO. It helps search engines understand the type of work Zeebrag does, while also helping founders and marketing leads compare solutions more confidently. Each story connects back to relevant service pages and the contact route so the reading journey does not end with a proof point.",
    "If you are evaluating growth support for SEO, paid media, founder branding, or website development, the examples below show how Zeebrag translates strategy into visible progress and better conversion economics.",
  ],
};
