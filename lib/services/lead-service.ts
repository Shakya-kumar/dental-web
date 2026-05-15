import "server-only";
import { LeadRepository } from "@/lib/repositories/lead-repository";
import type { z } from "zod";
import type { appointmentSchema, contactSchema, leadSchema } from "@/lib/validators/lead";

const repository = new LeadRepository();

export class LeadService {
  async captureLead(input: z.infer<typeof leadSchema>) {
    const lead = await repository.createLead(input);
    return { id: lead.id, whatsappUrl: buildWhatsAppUrl(input.name, input.concern) };
  }

  async requestAppointment(input: z.infer<typeof appointmentSchema>) {
    const appointment = await repository.createAppointment(input);
    return { id: appointment.id, whatsappUrl: buildWhatsAppUrl(input.name, input.concern) };
  }

  async captureContact(input: z.infer<typeof contactSchema>) {
    const inquiry = await repository.createContactInquiry(input);
    return { id: inquiry.id };
  }
}

export function buildWhatsAppUrl(name: string, concern: string) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999";
  const message = encodeURIComponent(
    `Hello Dr. Vivek Malviya team, I am ${name}. I want consultation support for: ${concern}`
  );
  return `https://wa.me/${number}?text=${message}`;
}
