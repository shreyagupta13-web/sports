import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

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

export async function updateSession(request: NextRequest) {
  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.next({ request });
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get: (key: string) => request.cookies.get(key)?.value,
      set: (key: string, value: string, options: CookieOptions) => {
        response.cookies.set({ name: key, value, ...options });
      },
      remove: (key: string, options: CookieOptions) => {
        response.cookies.set({ name: key, value: "", ...options });
      },
    },
  });

  await supabase.auth.getUser();
  return response;
}
