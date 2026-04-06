import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(request: Request) {
  const { text } = await request.json();

  if (!text || typeof text !== "string") {
    return NextResponse.json({ message: "Text is required" }, { status: 400 });
  }

  if (!GEMINI_API_KEY) {
    return NextResponse.json(
      { message: "Gemini API key missing" },
      { status: 400 }
    );
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Summarize this paragraph in 2-3 sentences.\n\n${text}`,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();
  if (!response.ok) {
    return NextResponse.json(
      { message: data.error?.message ?? "Gemini request failed" },
      { status: 500 }
    );
  }

  const summary =
    data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? "";

  return NextResponse.json({ summary });
}
