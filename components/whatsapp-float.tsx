"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999";
  const text = encodeURIComponent("Hello, I want to book a consultation with Dr. Vivek Malviya.");

  return (
    <a
      href={`https://wa.me/${number}?text=${text}`}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1FAF65] text-white shadow-clinical transition hover:scale-105"
      onClick={() => {
        navigator.sendBeacon?.(
          "/api/analytics",
          JSON.stringify({ type: "WHATSAPP_CLICK", path: window.location.pathname, source: "float" })
        );
      }}
    >
      <MessageCircle size={26} />
    </a>
  );
}
