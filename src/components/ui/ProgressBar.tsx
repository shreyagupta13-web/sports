import { cn } from "@/lib/utils/cn";

export function ProgressBar({
  label,
  value,
  color = "var(--accent-lime)",
  className,
}: {
  label: string;
  value: number;
  color?: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-text-secondary">
        <span>{label}</span>
        <span className="font-stat text-text-primary">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-bg-secondary">
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
    </div>
  );
}
