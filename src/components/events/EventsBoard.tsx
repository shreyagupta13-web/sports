"use client";

import { useState } from "react";
import type { Event } from "@/types/event";
import { EventCard } from "@/components/events/EventCard";
import { EventCalendar } from "@/components/events/EventCalendar";

const tabs = ["upcoming", "ongoing", "completed"] as const;

export function EventsBoard({ events }: { events: Event[] }) {
  const [active, setActive] = useState<(typeof tabs)[number]>("upcoming");
  const [view, setView] = useState<"list" | "calendar">("list");

  const filtered = events.filter((event) => event.status === active);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] ${
                active === tab ? "text-accent-lime" : "text-text-secondary"
              }`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex gap-3 text-xs uppercase tracking-[0.3em] text-text-secondary">
          <button
            type="button"
            className={view === "list" ? "text-accent-lime" : ""}
            onClick={() => setView("list")}
          >
            List View
          </button>
          <button
            type="button"
            className={view === "calendar" ? "text-accent-lime" : ""}
            onClick={() => setView("calendar")}
          >
            Calendar
          </button>
        </div>
      </div>

      {view === "calendar" ? (
        <EventCalendar />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
