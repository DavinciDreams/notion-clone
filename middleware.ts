import { clerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, req) => {
  // If user is not authenticated and not on sign-in page, redirect to sign-in
  if (!auth().userId && !req.nextUrl.pathname.startsWith("/sign-in")) {
    return auth().redirectToSignIn();
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};