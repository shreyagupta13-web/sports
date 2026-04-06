import { cn } from "@/lib/utils/cn";

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-10 bg-accent-lime" />
        <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
          SG SPORTS CLUB
        </p>
      </div>
      <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm text-text-secondary sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
