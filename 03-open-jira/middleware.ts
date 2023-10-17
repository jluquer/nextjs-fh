import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest): NextResponse {
  const path = req.nextUrl.pathname;
  if (path.startsWith("/api/entries")) {
    const id = path.replace("/api/entries/", "");
    const checkMongoIDRegExp = /^[0-9a-fA-F]{24}$/;

    if (!checkMongoIDRegExp.test(id)) {
      const url = req.nextUrl.clone();
      url.pathname = "/api/bad-request";
      url.search = `?message=${id} is no a valid mongoId`;
      return NextResponse.rewrite(url);
    }
    console.log({ id });
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/entries/:path*",
};
