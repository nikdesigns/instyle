import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const images = [
  { src: "/images/locations/houston/houston-1.jpg", alt: "InStyle slab warehouse in Houston, TX" },
  { src: "/images/locations/denver/denver-3.jpg", alt: "InStyle slab warehouse in Denver, CO" },
  { src: "/images/locations/nashville/nashville-1.jpg", alt: "InStyle slab warehouse in Nashville, TN" },
  { src: "/images/locations/columbus/columbus-2.jpg", alt: "InStyle showroom exterior in Columbus, OH" },
];

export function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <span className="text-primary">05</span> · Our Locations
          </p>
          <h2 className="mt-3 text-3xl font-light leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
            See our slab yards
          </h2>
        </div>
        <Button variant="outline" render={<Link href="/gallery" />}>
          View Full Gallery
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {images.map((image) => (
          <div key={image.src} className="relative aspect-square overflow-hidden rounded-lg bg-neutral-200">
            <Image
              src={image.src}
              alt={image.alt}
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
