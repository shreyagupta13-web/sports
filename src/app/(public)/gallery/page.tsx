import { SectionHeading } from "@/components/ui/SectionHeading";
import { LightboxViewer } from "@/components/gallery/LightboxViewer";
import { getGallery } from "@/lib/data";

export default async function GalleryPage() {
  const items = await getGallery();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
      <SectionHeading
        title="Gallery"
        subtitle="Every SG Sports moment captured in frame."
      />
      <LightboxViewer items={items} />
    </div>
  );
}
