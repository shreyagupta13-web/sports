import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export function Tooltip({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("group relative inline-flex", className)}>
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-max -translate-x-1/2 rounded-md border border-border bg-bg-secondary px-3 py-1 text-xs text-text-secondary opacity-0 transition group-hover:opacity-100">
        {label}
      </span>
    </div>
  );
}
