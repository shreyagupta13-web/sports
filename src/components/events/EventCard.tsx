import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Event } from "@/types/event";
import { formatDate } from "@/lib/utils/formatDate";

export function EventCard({ event }: { event: Event }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="rounded-3xl border border-border bg-bg-secondary/70 p-6 transition hover:-translate-y-1"
    >
      <Badge label={event.event_type ?? "event"} />
      <h3 className="mt-4 font-display text-lg uppercase tracking-wide">
        {event.title}
      </h3>
      <p className="mt-2 text-sm text-text-secondary">
        {event.venue} · {event.city}
      </p>
      <p className="mt-4 text-xs uppercase tracking-[0.3em] text-text-secondary">
        {formatDate(event.start_date)}
      </p>
    </Link>
  );
}
