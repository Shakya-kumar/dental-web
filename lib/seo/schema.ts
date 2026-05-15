import { siteConfig } from "@/lib/seo/site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Dr. Vivek Malviya",
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: "Bhopal, Madhya Pradesh, India",
    medicalSpecialty: ["Nutrition", "Weight Loss", "PCOS Nutrition", "Thyroid Diet"],
    telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN"
    }
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
}
