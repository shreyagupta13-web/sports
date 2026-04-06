import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { players as seedPlayers } from "@/lib/data/seed";

export async function GET() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(seedPlayers);
  }

  const { data, error } = await supabase.from("players").select("*");
  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { message: "Supabase not configured" },
      { status: 400 }
    );
  }

  const payload = await request.json();
  const { data, error } = await supabase.from("players").insert(payload).select();
  if (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
  return NextResponse.json(data);
}
