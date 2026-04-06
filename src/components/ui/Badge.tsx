import { cn } from "@/lib/utils/cn";

export function Badge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-text-secondary",
        className
      )}
    >
      {label}
    </span>
  );
}
