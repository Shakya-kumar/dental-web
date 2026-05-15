import { createMetadata } from "@/lib/seo/site";
import { SiteHeader } from "@/components/site-header";

export const metadata = createMetadata({
  title: "Diet & Nutrition Services in Bhopal | Dr. Vivek Malviya",
  description: "Weight loss, PCOS, thyroid, diabetes and online diet consultation services in Bhopal."
});

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container py-12">
        <h1 className="font-serif text-4xl font-bold">Healthcare Programs</h1>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
          SEO-ready services page shell for detailed condition-specific landing pages and local search funnels.
        </p>
      </main>
    </>
  );
}
