import { HomePage } from "@/sections/home-page";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import {
  createOrganizationSchema,
  createWebSiteSchema,
  createLocalBusinessSchema,
} from "@/lib/seo-schema";

export const metadata = createPageMetadata({
  title: "Premium Branding and Growth Studio in India | Zeebrag",
  description:
    "Zeebrag is a premium branding and growth studio in Bhopal, India, helping startups and modern brands grow with SEO, Meta Ads, Google Ads, websites, and personal branding services.",
  path: "/",
  keywords: [
    "branding studio india",
    "growth studio bhopal",
    "premium growth agency india",
    "startup branding partner",
    "website development company india",
    "personal branding agency india",
    "SEO services India",
    "digital marketing agency Bhopal",
    "Zeebrag",
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd data={createOrganizationSchema()} />
      <JsonLd data={createWebSiteSchema()} />
      <JsonLd data={createLocalBusinessSchema()} />
      <Breadcrumbs
        items={[
          { name: "Home" },
        ]}
      />
      <HomePage />
    </>
  );
}
