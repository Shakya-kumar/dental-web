import { SiteHeader } from "@/components/site-header";
import {
  AppointmentSection,
  ConversionFunnel,
  HeroSection,
  SocialProofAndFaq,
  TrustAndServices,
  homepageFaqs
} from "@/components/sections/home-sections";
import { faqSchema } from "@/lib/seo/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homepageFaqs)) }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustAndServices />
        <ConversionFunnel />
        <SocialProofAndFaq />
        <AppointmentSection />
      </main>
      <footer className="border-t border-border bg-foreground py-10 text-white">
        <div className="container grid gap-6 md:grid-cols-3">
          <div>
            <h2 className="font-serif text-2xl font-bold">Dr. Vivek Malviya</h2>
            <p className="mt-3 text-sm text-white/70">Best Dietitian in Bhopal for modern nutrition care.</p>
          </div>
          <div className="text-sm text-white/70">
            <p>Weight Loss Dietitian Bhopal</p>
            <p>PCOS Dietitian Bhopal</p>
            <p>Thyroid Diet Expert Bhopal</p>
          </div>
          <div className="text-sm text-white/70">
            <p>Online Diet Consultation</p>
            <p>WhatsApp appointment support</p>
            <p>Render-ready healthcare platform</p>
          </div>
        </div>
      </footer>
    </>
  );
}
