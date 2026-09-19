import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { categories } from "@/data/products";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse InStyle Granite & Marble's collections of granite, marble, and quartzite.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Our Stone Collections"
        description="Every slab is inspected for quality, color consistency, and natural character before it reaches our showroom."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="group block overflow-hidden rounded-lg border"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                <Image
                  src={category.heroImage}
                  alt={category.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold">{category.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{category.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-primary">
                  {category.products.length} colors
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
