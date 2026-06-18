import type { Metadata } from "next";

const siteUrl = "https://www.zeebrag.com";
const siteName = "Zeebrag";
const defaultTitle = "Zeebrag | Premium Branding and Growth Studio in India";
const defaultDescription =
  "Zeebrag is a premium branding and growth studio in Bhopal, India, helping startups and modern brands grow with SEO, ads, websites, and personal branding.";

export const siteConfig = {
  name: siteName,
  url: siteUrl,
  title: defaultTitle,
  description: defaultDescription,
  locale: "en_IN",
  defaultOgImage: "/og-default.png",
  twitterHandle: "@zeebrag",
};

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = siteConfig.defaultOgImage,
  noIndex = false,
  type = "website",
  publishedTime,
  authors,
}: MetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();
  const imageUrl = new URL(image, siteUrl).toString();
  const fullTitle = title.includes("| Zeebrag") ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: path,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      locale: siteConfig.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | Zeebrag - Premium Branding and Growth Studio in India`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    other: {
      "og:locale": "en_IN",
      "og:site_name": siteName,
    },
  };
}