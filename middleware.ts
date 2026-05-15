import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const configuredToken = process.env.ADMIN_ACCESS_TOKEN;

    if (!configuredToken) {
      return NextResponse.next();
    }

    const token =
      request.cookies.get("admin_access_token")?.value ?? request.headers.get("x-admin-access-token");

    if (token !== configuredToken) {
      return new NextResponse("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": "Bearer",
          "Cache-Control": "no-store"
        }
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};
