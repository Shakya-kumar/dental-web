import { ok } from "@/lib/api/response";

export function GET() {
  return ok({ status: "healthy", service: "healthcare-platform", timestamp: new Date().toISOString() });
}
