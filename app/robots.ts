import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://www.zeebrag.com",
    sitemap: "https://www.zeebrag.com/sitemap.xml",
  };
}
