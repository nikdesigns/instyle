"use client";

import { useState } from "react";
import Image from "next/image";

import { galleryImages, type GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";

const filters: Array<GalleryImage["category"] | "All"> = [
  "All",
  "Kitchen",
  "Bathroom",
  "Flooring",
  "Commercial",
];

export function GalleryGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const images =
    active === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === filter
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground/80 hover:border-primary/50",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-square overflow-hidden rounded-lg bg-neutral-200"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
