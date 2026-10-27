"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { categories } from "@/data/products";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function CategoryGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          eyebrow="Collections"
          title="Browse by material"
          description="Granite, marble, quartz, and quartzite — sourced from quarries worldwide and stocked at every InStyle location."
        />

        <div className="mt-6 flex items-center justify-between">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Scroll
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous collection"
              disabled={!canPrev}
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next collection"
              disabled={!canNext}
              onClick={() => emblaApi?.scrollNext()}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div
        className="mt-6 overflow-hidden pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        ref={emblaRef}
      >
        <div className="flex gap-5">
          {categories.map((category) => {
            const count = category.products.length;
            const countLabel =
              count > 0 ? `${count} ${count === 1 ? "Product" : "Products"}` : "Coming Soon";
            return (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group relative aspect-[4/3] w-[260px] shrink-0 overflow-hidden rounded-sm bg-neutral-200 sm:w-[320px] lg:w-[360px]"
              >
                <Image
                  src={category.heroImage}
                  alt={category.name}
                  fill
                  sizes="360px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/75">
                    {category.name} &middot; {countLabel}
                  </p>
                  <h3 className="mt-1 text-2xl font-light tracking-tight text-white">
                    {category.name}
                  </h3>
                </div>
              </Link>
            );
          })}
          <div className="w-px shrink-0" aria-hidden />
        </div>
      </div>
    </section>
  );
}
