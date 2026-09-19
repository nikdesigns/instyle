import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { categories } from "@/data/products";

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Our Collections
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Stone for Every Vision</h2>
        <p className="mt-4 text-muted-foreground">
          Explore our curated range of granite, marble, and quartzite —
          each slab hand-selected for exceptional color and pattern.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/products/${category.slug}`}
            className="group relative block overflow-hidden rounded-lg"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200">
              <Image
                src={category.heroImage}
                alt={category.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold">{category.name}</h3>
              <p className="mt-1 text-sm text-white/80">{category.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-primary">
                View Collection
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
