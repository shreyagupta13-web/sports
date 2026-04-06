"use client";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function EventCalendar() {
  return (
    <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
      <div className="grid grid-cols-7 gap-2 text-xs uppercase tracking-[0.2em] text-text-secondary">
        {days.map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }).map((_, index) => (
          <div
            key={index}
            className="flex h-10 items-center justify-center rounded-lg border border-border text-xs text-text-secondary"
          >
            {index + 1 <= 30 ? index + 1 : ""}
          </div>
        ))}
      </div>
    </div>
  );
}
