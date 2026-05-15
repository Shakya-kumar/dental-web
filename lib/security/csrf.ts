import { createHash, randomBytes } from "crypto";

export function createCsrfToken(secret: string) {
  const nonce = randomBytes(16).toString("hex");
  const digest = createHash("sha256").update(`${nonce}:${secret}`).digest("hex");
  return `${nonce}.${digest}`;
}

export function verifyCsrfToken(token: string | null, secret: string) {
  if (!token) return false;
  const [nonce, digest] = token.split(".");
  if (!nonce || !digest) return false;

  const expected = createHash("sha256").update(`${nonce}:${secret}`).digest("hex");
  return digest === expected;
}
