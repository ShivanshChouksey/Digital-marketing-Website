import type { Metadata } from "next";

const siteUrl = "https://www.zeebrag.com";
const siteName = "Zeebrag";
const defaultTitle = "Zeebrag | Premium Branding and Growth Studio";
const defaultDescription =
  "Zeebrag is a modern branding and growth studio built in India, working with brands globally across content, websites, strategy, and performance-led growth.";

export const siteConfig = {
  name: siteName,
  url: siteUrl,
  title: defaultTitle,
  description: defaultDescription,
  locale: "en_IN",
};

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/icon.png",
}: MetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();
  const imageUrl = new URL(image, siteUrl).toString();

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
