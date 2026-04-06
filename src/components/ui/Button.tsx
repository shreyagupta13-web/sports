import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-lime text-black shadow-[0_0_18px_rgba(181,255,45,0.4)] hover:translate-y-[-1px]",
  outline:
    "border border-border text-text-primary hover:border-accent-lime hover:text-accent-lime",
  ghost: "text-text-secondary hover:text-text-primary",
};

export function Button({
  label,
  href,
  onClick,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {label}
    </button>
  );
}
