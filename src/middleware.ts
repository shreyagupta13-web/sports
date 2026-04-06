import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { updateSession } from "@/lib/supabase/middleware";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

type CookieOptions = {
  path?: string;
  maxAge?: number;
  expires?: Date;
  domain?: string;
  secure?: boolean;
  sameSite?: "lax" | "strict" | "none";
};

export async function middleware(request: NextRequest) {
  const response = await updateSession(request);

  if (!supabaseUrl || !supabaseAnonKey) {
    return response;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get: (key: string) => request.cookies.get(key)?.value,
      set: (key: string, value: string, options: CookieOptions) =>
        response.cookies.set({ name: key, value, ...options }),
      remove: (key: string, options: CookieOptions) =>
        response.cookies.set({ name: key, value: "", ...options }),
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;
  const isAdminRoute = path.startsWith("/admin");
  const isMemberRoute =
    path.startsWith("/dashboard") ||
    path.startsWith("/profile") ||
    path.startsWith("/my-achievements");

  if ((isAdminRoute || isMemberRoute) && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAdminRoute) {
    const role = user?.user_metadata?.role;
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/my-achievements/:path*",
    "/admin/:path*",
  ],
};
