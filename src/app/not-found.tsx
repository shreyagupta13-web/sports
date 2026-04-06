import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-stat text-6xl text-accent-lime">404</p>
      <h1 className="font-display text-3xl uppercase tracking-wide">
        Page not found
      </h1>
      <p className="text-sm text-text-secondary">
        The arena you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="rounded-full border border-border px-6 py-2 text-xs uppercase tracking-[0.3em] text-text-secondary"
      >
        Back to Home
      </Link>
    </div>
  );
}
