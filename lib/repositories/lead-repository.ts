import "server-only";
import { prisma } from "@/lib/db/prisma";
import type { z } from "zod";
import type { appointmentSchema, contactSchema, leadSchema } from "@/lib/validators/lead";

export class LeadRepository {
  createLead(input: z.infer<typeof leadSchema>) {
    return prisma.lead.create({ data: input });
  }

  createAppointment(input: z.infer<typeof appointmentSchema>) {
    return prisma.appointment.create({
      data: {
        patientName: input.name,
        phone: input.phone,
        email: input.email,
        concern: input.concern,
        preferredDate: input.preferredDate ? new Date(input.preferredDate) : undefined,
        preferredSlot: input.preferredSlot,
        source: input.source
      }
    });
  }

  createContactInquiry(input: z.infer<typeof contactSchema>) {
    return prisma.contactInquiry.create({ data: input });
  }
}
