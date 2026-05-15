import Link from "next/link";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/services/lead-service";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/admin", label: "Admin" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-base font-bold">Dr. Vivek Malviya</span>
          <span className="text-xs text-muted-foreground">Premium Diet & Nutrition Care</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <a href={buildWhatsAppUrl("Patient", "consultation")} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#appointment">
              <CalendarCheck size={16} /> Book
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
