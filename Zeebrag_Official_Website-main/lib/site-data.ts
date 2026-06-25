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
  readTime: string;
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
  sections: Array<{ heading: string; content: string }>;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  problem: string;
  strategy: string;
  execution: string[];
  outcomes: Array<{ label: string; value: string }>;
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

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact#audit-form" },
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
      "Personal branding services for founders and executives who want stronger authority, trust, and inbound opportunities.",
  },
];

export const blogs: BlogPost[] = [
  {
    slug: "startup-growth-marketing-india",
    title: "Startup Growth Marketing in India: What Actually Moves Revenue",
    description:
      "A practical framework for startups in India to align brand, paid acquisition, content, and conversion systems.",
    category: "Growth Strategy",
    readTime: "6 min read",
    publishedAt: "2026-03-18",
    seoTitle: "Startup Growth Marketing in India | Zeebrag Blog",
    seoDescription:
      "Learn how Indian startups can combine branding, paid media, SEO, and website optimization to create reliable growth.",
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
  },
  {
    slug: "founder-branding-b2b-trust",
    title: "Why Founder Branding Speeds Up B2B Trust and Inbound Leads",
    description:
      "Founders who show up consistently create trust faster, shorten sales cycles, and make their companies easier to remember.",
    category: "Personal Branding",
    readTime: "5 min read",
    publishedAt: "2026-02-26",
    seoTitle: "Founder Branding for B2B Growth | Zeebrag Blog",
    seoDescription:
      "Explore how founder branding improves trust, authority, and inbound opportunities for B2B businesses and startups.",
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
  },
  {
    slug: "landing-page-conversion-playbook",
    title: "A Landing Page Conversion Playbook for Service Businesses",
    description:
      "Use this framework to improve trust, message clarity, and conversion rates on service landing pages.",
    category: "Website Development",
    readTime: "7 min read",
    publishedAt: "2026-01-15",
    seoTitle: "Landing Page Conversion Playbook | Zeebrag Blog",
    seoDescription:
      "A conversion-focused landing page framework for agencies, startups, and service businesses looking to improve lead generation.",
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
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-demand-generation",
    client: "Vaibhav Solar Solution",
    industry: "B2B SaaS",
    problem:
      "The company had strong product-market fit but low inbound volume, inconsistent paid results, and a weak founder-led content presence.",
    strategy:
      "Zeebrag combined a new website narrative, founder branding, content repurposing, and paid demand capture across Meta and Google.",
    execution: [
      "Rebuilt the homepage and core service pages around clear ICP messaging",
      "Launched founder-led LinkedIn content and short-form insight clips",
      "Created paid search campaigns for high-intent demo keywords",
      "Installed reporting dashboards to track lead quality and source mix",
    ],
    outcomes: [
      { label: "Qualified leads in 30 days", value: "126" },
      { label: "Paid ROAS", value: "3.2x" },
      { label: "Organic traffic growth", value: "184%" },
    ],
    seoTitle: "B2B SaaS Demand Generation Case Study | Zeebrag",
    seoDescription:
      "See how Zeebrag helped a B2B SaaS brand grow leads, ROAS, and organic traffic with a full-funnel growth system.",
  },
];

export const serviceSeoContent: Record<
  string,
  {
    overview: string[];
    whyItMatters: SeoContentBlock[];
    faqs: FaqItem[];
  }
> = {
  "seo-services": {
    overview: [
      "Businesses in Bhopal and across India need more than traffic charts to justify SEO investment. They need an organic search system that brings the right visitors, supports sales conversations, and turns informational demand into commercial intent. Zeebrag approaches SEO as a growth engine that aligns technical health, service landing pages, local relevance, and authority content so each improvement contributes to leads instead of vanity metrics.",
      "Our SEO service starts by understanding how your customers search, compare options, and evaluate trust. That means mapping high-intent keywords, improving page structure, clarifying service messaging, and fixing technical issues that slow down crawling or weaken Core Web Vitals. For companies targeting Bhopal, India, or national demand, the goal is to make search visibility more predictable and much easier to convert into inquiries.",
      "Because SEO compounds over time, the most valuable gains usually come from consistency. Zeebrag helps brands publish stronger service content, create internal links that guide crawlers and users, and improve page experience so search traffic lands on pages built to convert. The outcome is a more resilient acquisition channel that continues supporting growth even when paid media costs rise.",
    ],
    whyItMatters: [
      {
        heading: "Why SEO still matters for growth brands",
        paragraphs: [
          "Search remains one of the strongest channels for capturing existing demand because people use it when they are actively researching a solution. If your service pages do not rank, competitors often win those buyers before your team even gets the chance to pitch. For a Bhopal business or an India-focused brand, a well-built SEO foundation means being visible when prospects are already looking for answers, pricing, capabilities, and proof.",
          "Good SEO also improves supporting business systems. Clear page hierarchy helps users understand your offer faster, better internal linking improves discovery across the site, and stronger content gives your team assets they can share in sales and remarketing. This is why Zeebrag treats SEO as a business infrastructure decision rather than just an editorial tactic.",
        ],
      },
      {
        heading: "How Zeebrag improves conversion quality",
        paragraphs: [
          "Ranking alone is not enough if visitors land on generic pages that do not explain value clearly. Zeebrag pairs keyword targeting with positioning and conversion strategy so users move from search query to confidence more quickly. That includes refining copy, building trust sections, improving page speed, and structuring content around commercial questions that matter to buyers in India.",
          "When the traffic is more relevant and the landing experience is more focused, lead quality improves. That is often what turns SEO from a long-term branding activity into a measurable pipeline source that supports revenue conversations.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Technical fixes and page improvements can create early movement within weeks, while stronger ranking gains usually build over several months. Zeebrag focuses on short-term wins and long-term authority together.",
      },
      {
        question: "Can SEO help local and national visibility at the same time?",
        answer:
          "Yes. We can build local relevance for Bhopal and broader India-focused service visibility in parallel when your offer supports both search intents.",
      },
      {
        question: "Do you only create blog content?",
        answer:
          "No. Our SEO work includes service pages, site architecture, internal linking, technical improvements, and content planning tied to revenue intent.",
      },
    ],
  },
  "meta-ads": {
    overview: [
      "Meta Ads can scale quickly, but only when the offer, creative, and landing experience work together. Many businesses in Bhopal and across India run campaigns that generate clicks but not qualified opportunities because their funnel is too generic or the messaging is disconnected from what users actually care about. Zeebrag fixes that by building campaigns around clear audience angles, creative testing, and conversion-focused pages.",
      "Our Meta Ads service covers the entire acquisition journey, from reviewing the offer and audience structure to improving ad hooks, testing different creative concepts, and tightening conversion tracking. This matters because paid social performance often improves when creative iteration becomes systematic instead of reactive. The faster you learn what messaging works, the easier it becomes to scale without wasting budget.",
      "For brands that want a dependable growth partner in India, Zeebrag adds strategy and reporting discipline to Meta Ads. We focus on lead quality, cost efficiency, and funnel visibility so your campaigns support revenue goals instead of becoming a channel that is hard to trust.",
    ],
    whyItMatters: [
      {
        heading: "Why creative testing changes campaign economics",
        paragraphs: [
          "Meta rewards brands that keep learning from fresh creative inputs. If your ads repeat the same angle for too long, costs often rise while click-through and conversion rates soften. Zeebrag creates testing systems that compare hooks, visuals, proof points, and offers, which helps identify what actually moves buyers in your market.",
          "That discipline matters for Bhopal service brands and India-first startups alike because competition for attention is high. Better creative means more efficient acquisition, clearer performance decisions, and stronger scale potential.",
        ],
      },
      {
        heading: "How Zeebrag connects paid social to pipeline",
        paragraphs: [
          "Paid social works best when it is integrated with landing pages, lead capture, remarketing, and follow-up. We improve the full path from scroll to inquiry so each campaign has a stronger chance of converting. By aligning audience segments with tailored page messaging, Zeebrag helps brands see where lead quality improves, not just where volume spikes.",
          "That integrated approach is especially important when management wants proof. Cleaner reporting and better funnel structure make it easier to understand ROI and scale with confidence.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you create the ad creatives too?",
        answer:
          "Yes. Zeebrag helps shape the creative direction, hooks, formats, and testing structure needed to improve Meta Ads performance.",
      },
      {
        question: "Can Meta Ads work for service businesses in Bhopal?",
        answer:
          "Yes. With the right targeting, offer, and landing page, Meta Ads can generate demand and nurture qualified leads for Bhopal and broader India campaigns.",
      },
      {
        question: "What metrics matter most?",
        answer:
          "We track conversion quality, cost per lead, ROAS where relevant, funnel drop-off, and the creative patterns that support better performance over time.",
      },
    ],
  },
  "google-ads": {
    overview: [
      "Google Ads is one of the most direct ways to capture high-intent demand because users are already searching for a solution. For businesses in Bhopal and across India, that means the opportunity to appear in front of prospects when they are comparing agencies, requesting demos, or looking for a provider they can trust. Zeebrag uses Google Ads to translate this demand into clearer lead flow and better cost efficiency.",
      "Our approach combines search intent mapping, keyword architecture, conversion tracking, landing page alignment, and ongoing optimization. Instead of treating campaigns as isolated ad groups, we build them around commercial goals and buyer questions. That structure makes it easier to improve relevance, reduce wasted spend, and understand where real inquiries are coming from.",
      "Because intent-driven acquisition can become expensive without discipline, Zeebrag focuses on the details that protect performance. Negative keyword management, message consistency, page speed, and reporting all contribute to stronger outcomes. The result is a Google Ads system that is easier to scale and easier to trust.",
    ],
    whyItMatters: [
      {
        heading: "Intent makes Google Ads powerful",
        paragraphs: [
          "Search traffic converts differently from interruption-based channels because users already have context and intent. They are asking for a category, a solution, or a provider. When campaigns match that intent with the right copy and landing page, conversion quality improves quickly.",
          "That is why Zeebrag invests heavily in keyword research and message alignment. Businesses targeting Bhopal or all-India demand need campaigns that understand both local commercial phrases and broader category intent.",
        ],
      },
      {
        heading: "Landing pages and ads must reinforce each other",
        paragraphs: [
          "A great keyword and a strong ad still underperform if the landing page creates friction. We review the full path from search query to form submission so users see consistent claims, proof, and next steps. This raises trust and lowers the chance of paid clicks bouncing.",
          "When that alignment is in place, budgets become more productive and scaling decisions become more informed.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you reduce wasted spend?",
        answer:
          "We improve targeting through search term analysis, negative keywords, tighter ad grouping, and landing pages that match the searcher's actual need.",
      },
      {
        question: "Do you support Bhopal-focused campaigns?",
        answer:
          "Yes. Zeebrag can structure Google Ads for Bhopal-specific lead generation, wider India demand capture, or both depending on your growth goals.",
      },
      {
        question: "Can you help with landing page conversion too?",
        answer:
          "Yes. We review and recommend landing page improvements so paid clicks have a stronger chance of turning into inquiries or booked calls.",
      },
    ],
  },
  "website-development": {
    overview: [
      "A website is often the first serious trust test a modern brand faces. For startups in Bhopal and growing businesses across India, a slow or outdated site can weaken credibility before a sales conversation even begins. Zeebrag builds websites that look premium, load quickly, support SEO, and move visitors toward a clear next step.",
      "Our website development process combines messaging strategy, user experience design, technical performance, and scalable Next.js implementation. The goal is not just to launch pages that look modern. It is to create a conversion asset that supports paid campaigns, organic search, founder authority, and day-to-day business development.",
      "Because websites influence every other channel, the best results usually come when design and growth thinking are integrated. Zeebrag helps businesses present a sharper market position, improve mobile usability, and connect forms, CTAs, and reporting in a way that supports measurable growth.",
    ],
    whyItMatters: [
      {
        heading: "Why premium websites convert better",
        paragraphs: [
          "Visitors make fast judgments about professionalism, trust, and fit. A premium interface with clear copy, strong structure, and faster load times gives your business a much better chance of keeping that attention. For service brands in Bhopal and India, this directly influences inquiry rates.",
          "A site also needs to support multiple intents. Some visitors are ready to contact you, while others need proof, examples, or service detail first. Zeebrag designs for both paths so the website works as a real business tool, not a static brochure.",
        ],
      },
      {
        heading: "Technical quality supports marketing efficiency",
        paragraphs: [
          "Website performance affects SEO, paid conversion rates, and user trust at the same time. Cleaner code, strong metadata, optimized images, and clear page hierarchy make acquisition channels more effective overall. This is why development quality matters beyond design aesthetics.",
          "Zeebrag uses a modern stack so the site can scale into future services, blogs, and campaign landing pages without becoming hard to maintain.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build websites for Bhopal businesses only?",
        answer:
          "No. Zeebrag supports brands in Bhopal and across India, with messaging and SEO structured around the markets you want to reach.",
      },
      {
        question: "Will the site be SEO-ready?",
        answer:
          "Yes. We build websites with semantic structure, metadata, internal linking, image optimization, and performance best practices from the start.",
      },
      {
        question: "Can the website support future landing pages and blogs?",
        answer:
          "Yes. The Zeebrag build approach prioritizes scalability so you can expand services, publish content, and launch new campaigns more easily.",
      },
    ],
  },
  "personal-branding": {
    overview: [
      "Founder-led trust can move faster than company-led trust, especially in competitive markets. In Bhopal, India, and broader digital-first industries, people often decide whether to engage based on whether the founder or executive presence feels credible, clear, and relevant. Zeebrag helps leaders build that authority through positioning, messaging, and repeatable content systems.",
      "Our personal branding service is designed for founders who want more than likes or reach. We build a system that clarifies what you stand for, how your perspective is different, and where your expertise should show up across LinkedIn, website content, videos, and sales conversations. That creates stronger recall and makes business development easier.",
      "The real value of personal branding is strategic. It improves trust with prospects, gives your company a stronger public face, and creates content assets that support marketing and hiring. Zeebrag helps translate founder insight into a clearer market advantage.",
    ],
    whyItMatters: [
      {
        heading: "Why founder authority speeds trust",
        paragraphs: [
          "When a founder communicates clearly and consistently, prospects feel they understand the business faster. That shortens the trust gap between discovery and inquiry. For many companies in India, this can be the difference between being ignored and being remembered.",
          "Zeebrag builds personal brands that feel commercial as well as authentic. The goal is not just visibility. It is visibility that supports stronger conversations, better positioning, and more inbound interest.",
        ],
      },
      {
        heading: "Systems matter more than occasional posting",
        paragraphs: [
          "Random content rarely compounds. Strong founder brands use repeatable systems for sourcing ideas, refining narratives, publishing consistently, and linking content back to business goals. Zeebrag builds that operating system so authority grows over time instead of depending on bursts of effort.",
          "This works especially well for founders serving Bhopal markets or larger India audiences because the same insights can be repurposed across local networking, digital outreach, and owned channels.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is personal branding only for LinkedIn?",
        answer:
          "No. LinkedIn is important, but your personal brand should also support your website, podcasts, short-form content, speaking, and sales visibility.",
      },
      {
        question: "Can founder branding help lead generation?",
        answer:
          "Yes. Better authority often improves inbound trust, warm introductions, and content performance, which supports stronger lead generation over time.",
      },
      {
        question: "Do you help with messaging too?",
        answer:
          "Yes. Zeebrag works on positioning, narrative clarity, content themes, and execution systems so the brand feels cohesive and commercially useful.",
      },
    ],
  },
};

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
