"use client";

import { useState } from "react";

export function AiSummarizer() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleSummarize = async () => {
    setStatus("loading");
    setSummary("");
    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message ?? "Summarization failed");
      }
      setSummary(data.summary ?? "");
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
      <h3 className="font-display text-lg uppercase tracking-wide">
        AI Paragraph Summarizer
      </h3>
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Paste a paragraph to summarize"
        rows={4}
        className="mt-4 w-full rounded-2xl border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
      />
      <button
        type="button"
        onClick={handleSummarize}
        className="mt-4 rounded-full bg-accent-lime px-4 py-2 text-xs font-semibold text-black"
      >
        {status === "loading" ? "Summarizing..." : "Summarize"}
      </button>
      {summary ? (
        <div className="mt-4 rounded-2xl border border-border bg-bg-elevated p-4 text-sm text-text-secondary">
          {summary}
        </div>
      ) : null}
      {status === "error" ? (
        <p className="mt-2 text-xs text-accent-orange">
          Unable to summarize. Add your Gemini API key in env.
        </p>
      ) : null}
    </div>
  );
}
