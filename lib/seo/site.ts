import type { Metadata } from "next";
import { env } from "@/lib/env";

export const siteConfig = {
  name: "Dr. Vivek Malviya",
  title: "Best Dietitian in Bhopal | Dr. Vivek Malviya",
  description:
    "Premium diet, weight loss, PCOS, thyroid, diabetes and online nutrition consultation by Dr. Vivek Malviya in Bhopal.",
  url: env.NEXT_PUBLIC_SITE_URL,
  keywords: [
    "Best Dietitian in Bhopal",
    "Weight Loss Dietitian Bhopal",
    "PCOS Dietitian Bhopal",
    "Thyroid Diet Expert Bhopal",
    "Online Diet Consultation"
  ]
};

export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const title = overrides.title ?? siteConfig.title;
  const description = overrides.description ?? siteConfig.description;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: siteConfig.keywords,
    alternates: { canonical: overrides.alternates?.canonical ?? siteConfig.url },
    openGraph: {
      title: String(title),
      description: String(description),
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: String(title),
      description: String(description)
    },
    ...overrides
  };
}
