import { SiteHeader } from "@/components/site-header";

const metrics = [
  ["New leads", "0"],
  ["Appointment requests", "0"],
  ["WhatsApp clicks", "0"],
  ["Conversion rate", "0%"]
];

export default function AdminPage() {
  return (
    <>
      <SiteHeader />
      <main className="container py-12">
        <h1 className="font-serif text-4xl font-bold">Admin Dashboard</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Operational shell for appointments, leads, CMS content, testimonials, SEO metadata and analytics.
          Add authentication middleware before production admin access.
        </p>
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([label, value]) => (
            <div key={label} className="rounded-md border border-border bg-white p-5">
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="mt-2 text-3xl font-bold text-primary">{value}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
