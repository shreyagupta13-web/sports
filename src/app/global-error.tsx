"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-bg-primary text-text-primary">
        <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 text-center">
          <p className="font-stat text-5xl text-accent-orange">Critical Error</p>
          <h1 className="font-display text-3xl uppercase tracking-wide">
            System reset required
          </h1>
          <p className="text-sm text-text-secondary">{error.message}</p>
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-accent-lime px-6 py-2 text-xs font-semibold text-black"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
