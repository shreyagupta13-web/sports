"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/AppProviders";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-secondary px-3 py-2 text-sm font-semibold text-text-primary transition hover:border-accent-lime"
      aria-label="Toggle color theme"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-accent-lime" />
      ) : (
        <Moon className="h-4 w-4 text-accent-blue" />
      )}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
