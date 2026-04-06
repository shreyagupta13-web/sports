import { SectionHeading } from "@/components/ui/SectionHeading";
import { AiSummarizer } from "@/components/admin/AiSummarizer";
import { NewsEditor } from "@/components/admin/NewsEditor";

export default function AdminNewsPage() {
  return (
    <div className="space-y-8">
      <SectionHeading title="News" subtitle="Publish SG Sports announcements." />
      <NewsEditor />
      <AiSummarizer />
    </div>
  );
}
