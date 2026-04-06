"use client";

export function AchievementForm() {
  return (
    <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          placeholder="Title"
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
        <input
          placeholder="Level"
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
        <input
          placeholder="Medal type"
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
        <input
          placeholder="Date achieved"
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
      </div>
      <textarea
        placeholder="Description"
        className="mt-4 w-full rounded-2xl border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        rows={3}
      />
      <button
        type="button"
        className="mt-4 rounded-full bg-accent-lime px-4 py-2 text-xs font-semibold text-black"
      >
        Save Achievement
      </button>
    </div>
  );
}
