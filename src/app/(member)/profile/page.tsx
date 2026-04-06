import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ProfilePage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-10 px-6 py-16">
      <SectionHeading title="Edit Profile" subtitle="Manage your SG Sports profile." />
      <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            placeholder="Full name"
            className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
          />
          <input
            placeholder="Email"
            className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
          />
          <input
            placeholder="Sport"
            className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
          />
          <input
            placeholder="Position"
            className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
          />
        </div>
        <textarea
          placeholder="Bio"
          className="mt-4 w-full rounded-2xl border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
          rows={4}
        />
        <button
          type="button"
          className="mt-4 rounded-full bg-accent-lime px-4 py-2 text-xs font-semibold text-black"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
