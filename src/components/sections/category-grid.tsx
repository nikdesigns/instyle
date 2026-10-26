import Link from "next/link";
import Image from "next/image";

import { categories } from "@/data/products";

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Our Collections
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Premium Surfaces For Every Project</h2>
        <p className="mt-4 text-muted-foreground">
          Browse our curated collection of granite, marble, quartz, and quartzite slabs —
          sourced from quarries worldwide and stocked at all our locations.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-10 lg:grid-cols-3 xl:grid-cols-5">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/products/${category.slug}`}
            className="group flex flex-col items-center text-center"
          >
            <div className="relative aspect-square w-full max-w-70 overflow-hidden rounded-full bg-neutral-200 shadow-md ring-1 ring-black/5 transition-shadow duration-300 group-hover:shadow-xl">
              <Image
                src={category.heroImage}
                alt={category.name}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 transition-colors duration-300 group-hover:ring-primary/60" />
            </div>
            <span className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors duration-300 group-hover:text-primary">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
