import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventsBoard } from "@/components/events/EventsBoard";
import { getEvents } from "@/lib/data";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
      <SectionHeading
        title="Events & Matches"
        subtitle="See what's next on the SG Sports calendar."
      />
      <EventsBoard events={events} />
    </div>
  );
}
