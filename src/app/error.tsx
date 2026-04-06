"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-stat text-5xl text-accent-orange">Error</p>
      <h1 className="font-display text-3xl uppercase tracking-wide">
        Something went wrong
      </h1>
      <p className="text-sm text-text-secondary">{error.message}</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-accent-lime px-6 py-2 text-xs font-semibold text-black"
      >
        Try Again
      </button>
    </div>
  );
}
