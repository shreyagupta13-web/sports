import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { GalleryItem } from "@/types/gallery";

export function GalleryPreview({ items }: { items: GalleryItem[] }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeading title="Gallery Preview" subtitle="A quick look at the SG Sports visual archives." />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.slice(0, 6).map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <div className="group relative overflow-hidden rounded-3xl">
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
          </Reveal>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          href="/gallery"
          className="rounded-full border border-border px-6 py-2 text-xs uppercase tracking-[0.3em] text-text-secondary transition hover:text-accent-lime"
        >
          View Full Gallery
        </Link>
      </div>
    </section>
  );
}
