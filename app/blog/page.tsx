import { createMetadata } from "@/lib/seo/site";
import { SiteHeader } from "@/components/site-header";

export const metadata = createMetadata({
  title: "Nutrition Blog | Dr. Vivek Malviya",
  description: "Evidence-informed nutrition articles for weight loss, PCOS, thyroid and metabolic health."
});

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="container py-12">
        <h1 className="font-serif text-4xl font-bold">Nutrition Insights</h1>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
          CMS-ready content marketing engine for organic SEO acquisition and healthcare authority building.
        </p>
      </main>
    </>
  );
}
