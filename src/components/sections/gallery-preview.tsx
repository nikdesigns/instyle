import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const images = [
  "/images/gallery/kitchen-1.svg",
  "/images/gallery/bathroom-1.svg",
  "/images/gallery/kitchen-2.svg",
  "/images/gallery/flooring-1.svg",
];

export function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Inspiration
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">See It Installed</h2>
        </div>
        <Button variant="outline" render={<Link href="/gallery" />}>
          View Full Gallery
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {images.map((src) => (
          <div key={src} className="relative aspect-square overflow-hidden rounded-lg bg-neutral-200">
            <Image
              src={src}
              alt="InStyle project"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
