import { z } from "zod";
import { sanitizeText } from "@/lib/security/sanitize";

const phoneRegex = /^[6-9]\d{9}$|^\+?[1-9]\d{9,14}$/;

export const leadSchema = z.object({
  name: z.string().min(2).max(80).transform(sanitizeText),
  phone: z.string().regex(phoneRegex, "Enter a valid phone number").transform(sanitizeText),
  email: z.string().email().optional().or(z.literal("")).transform((value) => value || undefined),
  concern: z.string().min(5).max(500).transform(sanitizeText),
  source: z.string().default("website"),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional()
});

export const appointmentSchema = leadSchema.extend({
  preferredDate: z.string().optional(),
  preferredSlot: z.string().optional()
});

export const contactSchema = z.object({
  name: z.string().min(2).max(80).transform(sanitizeText),
  phone: z.string().regex(phoneRegex).transform(sanitizeText),
  email: z.string().email().optional().or(z.literal("")).transform((value) => value || undefined),
  message: z.string().min(5).max(1000).transform(sanitizeText)
});
