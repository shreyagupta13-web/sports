"use client";

export function AchievementFilter() {
  return (
    <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-text-secondary">
        <button className="rounded-full border border-border px-4 py-2 hover:text-accent-lime">
          All Sports
        </button>
        <button className="rounded-full border border-border px-4 py-2 hover:text-accent-lime">
          State
        </button>
        <button className="rounded-full border border-border px-4 py-2 hover:text-accent-lime">
          National
        </button>
        <button className="rounded-full border border-border px-4 py-2 hover:text-accent-lime">
          International
        </button>
      </div>
    </div>
  );
}
