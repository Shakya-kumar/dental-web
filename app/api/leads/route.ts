import { NextRequest } from "next/server";
import { handleApiError } from "@/lib/api/errors";
import { fail, ok } from "@/lib/api/response";
import { rateLimit } from "@/lib/security/rate-limit";
import { getClientIp } from "@/lib/security/sanitize";
import { LeadService } from "@/lib/services/lead-service";
import { leadSchema } from "@/lib/validators/lead";

const service = new LeadService();

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers);
    if (rateLimit(`lead:${ip}`, 12).limited) {
      return fail("RATE_LIMITED", "Too many requests. Please try again shortly.", 429);
    }

    const payload = leadSchema.parse(await request.json());
    const result = await service.captureLead(payload);
    return ok(result, "Lead captured.", 201);
  } catch (error) {
    return handleApiError(error);
  }
}
