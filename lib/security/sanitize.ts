export function sanitizeText(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

export function getClientIp(headers: Headers) {
  return headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}
