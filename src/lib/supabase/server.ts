import { cookies } from "next/headers";
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

export async function createSupabaseServerClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get: (key: string) => cookieStore.get(key)?.value,
      set: (key: string, value: string, options: CookieOptions) =>
        cookieStore.set({ name: key, value, ...options }),
      remove: (key: string, options: CookieOptions) =>
        cookieStore.delete({ name: key, ...options }),
    },
  });
}
