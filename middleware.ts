// Credit: https://github.com/vercel/next.js/discussions/43657#discussioncomment-5981981

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-next-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
