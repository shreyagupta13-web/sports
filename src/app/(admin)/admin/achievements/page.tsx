import { AchievementForm } from "@/components/admin/AchievementForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AdminAchievementsPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        title="Achievements"
        subtitle="Add trophies and medals to the honour board."
      />
      <AchievementForm />
    </div>
  );
}
