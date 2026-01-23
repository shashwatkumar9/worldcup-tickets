import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // Admin routes require authentication
    if (req.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.next()
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to auth pages without authentication
        if (req.nextUrl.pathname.startsWith("/auth")) {
          return true
        }

        // Require authentication for admin routes
        if (req.nextUrl.pathname.startsWith("/admin")) {
          return !!token
        }

        // Allow all other routes
        return true
      },
    },
    pages: {
      signIn: "/auth/signin",
    },
  }
)

export const config = {
  matcher: [
    "/admin/:path*",
    "/auth/:path*",
  ],
}
