"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck, Send } from "lucide-react";
import { z } from "zod";
import { appointmentSchema } from "@/lib/validators/lead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type AppointmentInput = z.input<typeof appointmentSchema>;

export function AppointmentForm() {
  const [message, setMessage] = useState<string | null>(null);
  const form = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { name: "", phone: "", email: "", concern: "", source: "homepage" }
  });

  async function onSubmit(values: AppointmentInput) {
    setMessage(null);
    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const result = await response.json();

    if (result.ok) {
      setMessage("Your request is received. You can continue on WhatsApp for faster confirmation.");
      window.open(result.data.whatsappUrl, "_blank", "noopener,noreferrer");
      form.reset();
    } else {
      setMessage(result.error.message);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Input placeholder="Full name" {...form.register("name")} />
        <Input placeholder="Mobile number" {...form.register("phone")} />
      </div>
      <Input placeholder="Email address" {...form.register("email")} />
      <div className="grid gap-3 sm:grid-cols-2">
        <Input type="date" {...form.register("preferredDate")} />
        <Input placeholder="Preferred slot" {...form.register("preferredSlot")} />
      </div>
      <Textarea placeholder="Tell us your primary health goal" {...form.register("concern")} />
      <Button type="submit" disabled={form.formState.isSubmitting} size="lg">
        {form.formState.isSubmitting ? <Send size={18} /> : <CalendarCheck size={18} />}
        Request Consultation
      </Button>
      {message ? <p className="text-sm font-medium text-primary">{message}</p> : null}
    </form>
  );
}
