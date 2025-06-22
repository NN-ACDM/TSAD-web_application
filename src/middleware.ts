import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function generateNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Buffer.from(array).toString("base64");
}

const isDev = process.env.ENV == "development";

export function middleware(request: NextRequest) {
  const nonce = generateNonce();
  const response = NextResponse.next();

  let csp = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}';
    style-src 'self' 'nonce-${nonce}';
    font-src 'self';
    img-src 'self' data:;
    connect-src 'self';
    object-src 'none';
    `
    .replace(/\s{2,}/g, " ")
    .trim();
  if (isDev) {
    csp = `
    default-src 'self';
    script-src 'self' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    font-src 'self';
    img-src 'self' data:;
    connect-src 'self';
    object-src 'none';
    `
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  return response;
}

export const config = {
  matcher: "/(.*)", // Apply to all routes
};
