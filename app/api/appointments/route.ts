import { NextRequest } from "next/server";
import { handleApiError } from "@/lib/api/errors";
import { ok, fail } from "@/lib/api/response";
import { getClientIp } from "@/lib/security/sanitize";
import { rateLimit } from "@/lib/security/rate-limit";
import { LeadService } from "@/lib/services/lead-service";
import { appointmentSchema } from "@/lib/validators/lead";

const service = new LeadService();

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers);
    if (rateLimit(`appointment:${ip}`, 8).limited) {
      return fail("RATE_LIMITED", "Too many requests. Please try again shortly.", 429);
    }

    const payload = appointmentSchema.parse(await request.json());
    const result = await service.requestAppointment(payload);
    return ok(result, "Appointment request received.", 201);
  } catch (error) {
    return handleApiError(error);
  }
}
