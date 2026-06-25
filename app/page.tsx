import { HomePage } from "@/sections/home-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Premium Branding and Growth Studio in India | Zeebrag",
  description:
    "Zeebrag is a premium branding and growth studio built in India, helping startups and modern brands grow across India and global markets.",
  path: "/",
  keywords: [
    "branding studio india",
    "growth studio bhopal",
    "premium growth agency india",
    "startup branding partner",
    "website development company india",
    "personal branding agency india",
  ],
});

export default function Page() {
  return <HomePage />;
}
