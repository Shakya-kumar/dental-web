import { NextRequest } from "next/server";
import { AnalyticsEventType } from "@prisma/client";
import { prisma } from "@/lib/db/prisma";
import { ok } from "@/lib/api/response";
import { handleApiError } from "@/lib/api/errors";
import { getClientIp } from "@/lib/security/sanitize";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await prisma.analyticsEvent.create({
      data: {
        type: body.type in AnalyticsEventType ? body.type : "CTA_CLICK",
        path: String(body.path ?? "/"),
        source: body.source ? String(body.source) : undefined,
        metadata: body.metadata,
        ipHash: getClientIp(request.headers),
        userAgent: request.headers.get("user-agent") ?? undefined
      }
    });

    return ok({ tracked: true });
  } catch (error) {
    return handleApiError(error);
  }
}
