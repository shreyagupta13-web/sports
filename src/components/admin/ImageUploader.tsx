"use client";

export function ImageUploader() {
  return (
    <div className="rounded-3xl border border-dashed border-border bg-bg-secondary/70 p-6 text-center">
      <p className="text-sm text-text-secondary">Drag and drop files here</p>
      <button
        type="button"
        className="mt-4 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] text-text-secondary"
      >
        Browse Files
      </button>
    </div>
  );
}
