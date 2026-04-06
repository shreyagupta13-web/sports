import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CountdownTimer } from "@/components/events/CountdownTimer";
import { Reveal } from "@/components/ui/Reveal";
import type { Event } from "@/types/event";
import { formatDate } from "@/lib/utils/formatDate";

export function UpcomingEvents({ events }: { events: Event[] }) {
  const [nextEvent, ...rest] = events;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeading title="What's Next" subtitle="The upcoming fixtures and camps powering the season." />
      {nextEvent ? (
        <Reveal>
          <div className="mt-10 grid gap-6 rounded-3xl border border-border bg-bg-secondary/70 p-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Image
              src={nextEvent.banner_url ?? "/images/events/event-1.svg"}
              alt={nextEvent.title}
              width={420}
              height={280}
              className="h-full min-h-[220px] w-full rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-between gap-6">
              <div>
                <Badge label={nextEvent.event_type ?? "match"} />
                <h3 className="mt-4 font-display text-2xl uppercase tracking-wide">
                  {nextEvent.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {nextEvent.venue} · {nextEvent.city}
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
                  Countdown
                </p>
                <CountdownTimer target={nextEvent.start_date} />
                <p className="text-sm text-text-secondary">
                  {formatDate(nextEvent.start_date)}
                </p>
              </div>
              <Link
                href="/events"
                className="text-xs uppercase tracking-[0.3em] text-accent-lime"
              >
                Full Schedule
              </Link>
            </div>
          </div>
        </Reveal>
      ) : null}

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((event, index) => (
          <Reveal key={event.id} delay={index * 0.05}>
            <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
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
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
