import Image from "next/image";
import { Activity, BadgeCheck, HeartPulse, LineChart, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentForm } from "@/components/sections/appointment-form";

const services = [
  "Weight Loss Diet Plans",
  "PCOS Nutrition Care",
  "Thyroid Diet Management",
  "Diabetes Lifestyle Plans",
  "Online Diet Consultation",
  "Family Wellness Programs"
];

const faqs = [
  {
    question: "Can I consult online from outside Bhopal?",
    answer: "Yes. Online consultations are supported with structured follow-ups and WhatsApp guidance."
  },
  {
    question: "Do plans include Indian food preferences?",
    answer: "Yes. Plans are practical, locally relevant and designed around sustainable habits."
  },
  {
    question: "How quickly can I book a consultation?",
    answer: "Submit the form or WhatsApp the clinic team for the fastest available slot."
  }
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-md bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
            Diet, metabolic health and transformation care in Bhopal
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Premium nutrition care that turns health goals into measurable progress.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Consult Dr. Vivek Malviya for weight loss, PCOS, thyroid, diabetes and sustainable
            diet plans built around trust, clarity and real-life adherence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#appointment">Book Consultation</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
          <div className="mt-8 grid gap-3 text-sm font-semibold sm:grid-cols-3">
            {["Personalized plans", "WhatsApp guidance", "Local Bhopal expertise"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-muted-foreground">
                <BadgeCheck className="text-primary" size={18} /> {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-md bg-muted shadow-clinical">
           <Image
  src="/doctor.jpeg"
  alt="Dr. Vivek Malviya - Best Dietitian in Bhopal"
  fill
  priority
  className="object-cover object-top"
/>
          <div className="absolute bottom-4 left-4 right-4 grid gap-3 bg-white/92 p-4 backdrop-blur sm:grid-cols-3">
            {[
              ["8+", "Care programs"],
              ["90%", "Mobile-first UX"],
              ["24h", "Lead response goal"]
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-primary">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustAndServices() {
  return (
    <section id="services" className="border-y border-border bg-background py-16">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-primary">Authority system</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">Built for trust before the first call.</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              The platform presents medical credibility, patient outcomes, structured process and
              immediate WhatsApp access in a conversion-focused flow.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded-md border border-border bg-white p-5 shadow-sm">
                <HeartPulse className="mb-4 text-primary" size={24} />
                <h3 className="font-semibold">{service}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  SEO-ready service architecture with appointment and WhatsApp conversion paths.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConversionFunnel() {
  return (
    <section className="bg-white py-16">
      <div className="container grid gap-10 lg:grid-cols-3">
        {[
          { icon: ShieldCheck, title: "Trust", text: "Clear expertise, safe messaging and proof points." },
          { icon: Activity, title: "Clarity", text: "Services, process and outcomes explained quickly." },
          { icon: LineChart, title: "Action", text: "Sticky CTAs, WhatsApp and appointment forms." }
        ].map((item) => (
          <div key={item.title} className="rounded-md border border-border p-6">
            <item.icon className="text-accent" size={28} />
            <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SocialProofAndFaq() {
  return (
    <section className="bg-background py-16">
      <div className="container grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-primary">Patient reassurance</p>
          <h2 className="mt-3 font-serif text-3xl font-bold">Transformation proof without clutter.</h2>
          <div className="mt-6 grid gap-4">
            {["Lost weight sustainably", "Improved thyroid lifestyle", "Better PCOS food confidence"].map(
              (quote) => (
                <div key={quote} className="rounded-md border border-border bg-white p-5">
                  <div className="mb-3 flex text-amber-500">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="font-medium">{quote}</p>
                  <p className="mt-2 text-sm text-muted-foreground">Verified patient journey placeholder</p>
                </div>
              )
            )}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-primary">FAQ schema ready</p>
          <h2 className="mt-3 font-serif text-3xl font-bold">Answers that reduce booking friction.</h2>
          <div className="mt-6 divide-y divide-border rounded-md border border-border bg-white">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-5">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AppointmentSection() {
  return (
    <section id="appointment" className="bg-white py-16">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-primary">Consultation engine</p>
          <h2 className="mt-3 font-serif text-3xl font-bold">Book a consultation request in under a minute.</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Every form submission creates a structured lead or appointment record and nudges the patient
            to WhatsApp for faster confirmation.
          </p>
        </div>
        <div className="rounded-md border border-border bg-background p-5 shadow-clinical">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}

export const homepageFaqs = faqs;
