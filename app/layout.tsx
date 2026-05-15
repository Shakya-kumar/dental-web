import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { createMetadata } from "@/lib/seo/site";
import { localBusinessSchema } from "@/lib/seo/schema";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const lora = Lora({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = createMetadata();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
