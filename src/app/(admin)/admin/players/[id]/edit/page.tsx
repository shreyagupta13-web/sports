import { PlayerForm } from "@/components/admin/PlayerForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function EditPlayerPage() {
  return (
    <div className="space-y-8">
      <SectionHeading title="Edit Player" subtitle="Update athlete information." />
      <PlayerForm />
    </div>
  );
}
