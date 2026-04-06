import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MatchResult } from "@/components/events/MatchResult";
import { getEventBySlug } from "@/lib/data";
import { formatDate } from "@/lib/utils/formatDate";

export default async function EventDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await getEventBySlug(id);
  if (!event) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 px-6 py-16">
      <SectionHeading title={event.title} subtitle={event.description ?? ""} />
      <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
        <p className="text-sm text-text-secondary">
          {formatDate(event.start_date)} · {event.venue} · {event.city}
        </p>
        <p className="mt-4 text-sm text-text-secondary">
          {event.result_detail ?? "Match details coming soon."}
        </p>
      </div>
      <MatchResult event={event} />
    </div>
  );
}
