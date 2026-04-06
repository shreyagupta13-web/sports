import Image from "next/image";
import type { GalleryItem } from "@/types/gallery";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.id} className="group relative overflow-hidden rounded-3xl">
          <Image
            src={item.image_url}
            alt={item.title ?? "Gallery item"}
            width={320}
            height={320}
            className="h-48 w-full object-cover grayscale transition group-hover:grayscale-0"
          />
          <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
            <span className="text-xs uppercase tracking-[0.3em] text-white">
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
