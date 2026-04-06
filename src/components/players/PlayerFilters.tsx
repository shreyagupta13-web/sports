"use client";

import { useMemo } from "react";
import { useFilterStore } from "@/store/useFilterStore";
import { sports } from "@/lib/data/seed";

export function PlayerFilters({ positions }: { positions: string[] }) {
  const { sport, status, gender, position, query, sort, setFilter, reset } =
    useFilterStore();

  const sportOptions = useMemo(
    () => ["all", ...sports.map((item) => item.name.toLowerCase())],
    []
  );

  return (
    <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <select
          value={sport}
          onChange={(event) => setFilter("sport", event.target.value)}
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        >
          {sportOptions.map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
        <select
          value={status}
          onChange={(event) => setFilter("status", event.target.value)}
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        >
          {["active", "alumni", "inactive"].map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
        <select
          value={gender}
          onChange={(event) => setFilter("gender", event.target.value)}
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        >
          {["all", "male", "female", "other"].map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
        <select
          value={position}
          onChange={(event) => setFilter("position", event.target.value)}
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        >
          {["all", ...positions].map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(event) => setFilter("sort", event.target.value)}
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        >
          {["name", "newest", "jersey", "achievements"].map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
        <input
          value={query}
          onChange={(event) => setFilter("query", event.target.value)}
          placeholder="Search player"
          className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-text-secondary">
        <span>Filters Active</span>
        <button type="button" onClick={reset} className="text-accent-lime">
          Reset
        </button>
      </div>
    </div>
  );
}
