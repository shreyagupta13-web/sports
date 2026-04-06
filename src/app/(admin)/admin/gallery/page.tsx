import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageUploader } from "@/components/admin/ImageUploader";

export default function AdminGalleryPage() {
  return (
    <div className="space-y-8">
      <SectionHeading title="Gallery" subtitle="Upload and tag media." />
      <ImageUploader />
    </div>
  );
}
