import { cn } from "@/lib/utils/cn";
import { sportColors } from "@/lib/utils/sportColors";

export function SportBadge({ sport, className }: { sport: string; className?: string }) {
  const color = sportColors[sport.toLowerCase()] ?? "#38bdf8";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em]",
        className
      )}
      style={{ border: `1px solid ${color}`, color }}
    >
      {sport}
    </span>
  );
}
