import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as Jwt from "jsonwebtoken";

// Define the protected paths you want to guard
const protectedPaths = ["/dashboard", "/products", "/uploadproduct", "/myorders", "/receivedorders", "/trackorder", "/allorders"];


export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only run on protected routes
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));
  if (!isProtected) return NextResponse.next();

  const token = request.cookies.get("auth_token");

  // If token missing, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Token exists, allow access
  return NextResponse.next();
}

// Specify the paths where middleware should run
export const config = {
  matcher: ["/dashboard/:path*", "/products/:path*", "/uploadproduct/:path*", "/myorders/:path*", "/receivedorders/:path*", "/trackorder/:path*", "/allorders/:path*" ],
};