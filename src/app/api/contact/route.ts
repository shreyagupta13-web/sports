import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  const payload = await request.json();

  if (!supabase) {
    return NextResponse.json(
      { message: "Supabase not configured" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("contact_enquiries")
    .insert(payload)
    .select();

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }

  return NextResponse.json({ data, message: "Enquiry received" });
}
