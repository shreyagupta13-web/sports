import { PlayerForm } from "@/components/admin/PlayerForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AddPlayerPage() {
  return (
    <div className="space-y-8">
      <SectionHeading title="Add Player" subtitle="Create a new athlete profile." />
      <PlayerForm />
    </div>
  );
}
