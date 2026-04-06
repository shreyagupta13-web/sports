"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "@/types/gallery";

export function LightboxViewer({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative overflow-hidden rounded-3xl"
          >
            <Image
              src={item.image_url}
              alt={item.title ?? "Gallery item"}
              width={320}
              height={320}
              className="h-48 w-full object-cover grayscale transition group-hover:grayscale-0"
            />
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6"
          onClick={() => setActiveIndex(null)}
        >
          <div className="max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={active.image_url}
              alt={active.title ?? "Gallery item"}
              width={720}
              height={720}
              className="max-h-[70vh] w-full rounded-3xl object-contain"
            />
            <div className="mt-4 text-center text-sm text-text-secondary">
              {active.title}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
