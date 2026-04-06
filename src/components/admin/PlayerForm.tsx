"use client";

import { useState } from "react";

export function PlayerForm() {
  const [step, setStep] = useState(1);

  return (
    <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
        Step {step} of 5
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <input
          placeholder="Full name"
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
        <input
          placeholder="Date of birth"
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
        <input
          placeholder="Sport"
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
        <input
          placeholder="Position"
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
      </div>
      <div className="mt-6 flex justify-between">
        <button
          type="button"
          className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] text-text-secondary"
          onClick={() => setStep((current) => Math.max(current - 1, 1))}
        >
          Back
        </button>
        <button
          type="button"
          className="rounded-full bg-accent-lime px-4 py-2 text-xs font-semibold text-black"
          onClick={() => setStep((current) => Math.min(current + 1, 5))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
