import type { Event } from "@/types/event";

export function MatchResult({ event }: { event: Event }) {
  return (
    <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
        Result
      </p>
      <h3 className="mt-3 font-display text-2xl uppercase tracking-wide">
        {event.result ?? "Result pending"}
      </h3>
      <p className="mt-2 text-sm text-text-secondary">
        {event.result_detail ?? "Final whistle summary will appear here."}
      </p>
    </div>
  );
}
