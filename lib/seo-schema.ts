import { siteConfig } from "@/lib/metadata";
import type { FaqItem } from "@/lib/site-data";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

const organizationId = `${siteConfig.url}/#organization`;

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/Zeebrag_logo.jpg-removebg-preview.png`,
    description: siteConfig.description,
    email: "contact@zeebrag.com",
    telephone: "+91-95225-55670",
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 5,
      maxValue: 20,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    areaServed: ["India", "United Arab Emirates", "United Kingdom", "United States"],
    sameAs: [
      "https://www.linkedin.com/company/zeebrag/",
      "https://www.instagram.com/zeebrag_com?igsh=Nmo4b2JrZnVzaHJ2",
      "https://www.facebook.com/share/18SfvKKZhY/",
    ],
    knowsAbout: [
      "Search Engine Optimization",
      "Digital Marketing",
      "Branding",
      "Web Development",
      "Social Media Marketing",
      "Google Ads",
      "Meta Ads",
      "Personal Branding",
    ],
  };
}

export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": organizationId },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function createServiceSchema(input: {
  name: string;
  description: string;
  slug: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.name,
    description: input.description,
    url: `${siteConfig.url}/services/${input.slug}`,
    provider: { "@id": organizationId },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    ...(input.category ? { category: input.category } : {}),
  };
}

export function createFAQSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href
        ? { item: new URL(item.href, siteConfig.url).toString() }
        : {}),
    })),
  };
}

export function createBlogPostingSchema(input: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  author: string;
  category: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: `${siteConfig.url}/blog/${input.slug}`,
    datePublished: input.publishedAt,
    dateModified: input.publishedAt,
    author: {
      "@type": "Person",
      name: input.author,
      worksFor: { "@id": organizationId },
    },
    publisher: { "@id": organizationId },
    mainEntityOfPage: `${siteConfig.url}/blog/${input.slug}`,
    articleSection: input.category,
    inLanguage: "en-IN",
    ...(input.image ? { image: input.image } : {}),
  };
}

export function createCaseStudySchema(input: {
  title: string;
  description: string;
  slug: string;
  client: string;
  outcomes: Array<{ label: string; value: string }>;
  industry?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteConfig.url}/case-studies/${input.slug}`,
    headline: input.title,
    description: input.description,
    url: `${siteConfig.url}/case-studies/${input.slug}`,
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
    about: {
      "@type": "Organization",
      name: input.client,
      ...(input.industry ? { description: `Industry: ${input.industry}` } : {}),
    },
    mentions: input.outcomes.map((outcome) => ({
      "@type": "Thing",
      name: `${outcome.label}: ${outcome.value}`,
    })),
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/Zeebrag_logo.jpg-removebg-preview.png`,
    telephone: "+91-95225-55670",
    email: "contact@zeebrag.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      postalCode: "462001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.2599,
      longitude: 77.4126,
    },
    areaServed: "India",
    priceRange: "$$",
    sameAs: [
      "https://www.linkedin.com/company/zeebrag/",
      "https://www.instagram.com/zeebrag_com?igsh=Nmo4b2JrZnVzaHJ2",
      "https://www.facebook.com/share/18SfvKKZhY/",
    ],
    openingHours: "Mo-Fr 09:00-18:00",
  };
}

export function createPersonSchema(input: {
  name: string;
  role: string;
  description: string;
  image?: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    jobTitle: input.role,
    description: input.description,
    ...(input.image ? { image: input.image } : {}),
    ...(input.sameAs ? { sameAs: input.sameAs } : {}),
    worksFor: { "@id": organizationId },
  };
}