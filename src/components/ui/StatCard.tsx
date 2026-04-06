import { cn } from "@/lib/utils/cn";

export function StatCard({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-bg-elevated px-6 py-4 text-center",
        className
      )}
    >
      <p className="font-stat text-2xl text-accent-lime">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-text-secondary">
        {label}
      </p>
    </div>
  );
}
