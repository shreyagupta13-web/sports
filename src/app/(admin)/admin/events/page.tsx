import { EventForm } from "@/components/admin/EventForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AdminEventsPage() {
  return (
    <div className="space-y-8">
      <SectionHeading title="Events" subtitle="Create and update events." />
      <EventForm />
    </div>
  );
}
