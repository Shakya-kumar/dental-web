import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().default("919999999999"),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  RECAPTCHA_SECRET_KEY: z.string().optional()
});

export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY
});
