import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { categories } from "@/data/products";
import { CtaBanner } from "@/components/sections/cta-banner";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse InStyle Granite & Marble's collections of granite, marble, Krystallos quartz, quartzite, and soapstone.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative flex min-h-[42vh] items-center overflow-hidden bg-neutral-900 text-white">
        <Image
          src="/images/hero-poster.jpg"
          alt="InStyle stone warehouse"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        <div className="relative mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Products
          </p>
          <h1 className="mt-4 text-3xl font-bold uppercase tracking-wide sm:text-4xl lg:text-5xl">
            Discover the Perfect InStyle Surface
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            From granite and marble to our own KRYSTALLOS quartz, every collection
            is stocked and ready for you to see, touch, and select in person at
            any of our six locations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold uppercase tracking-[0.2em]">
            Browse by Material
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-12 bg-primary" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const comingSoon = category.products.length === 0;
            return (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group relative block aspect-[5/4] overflow-hidden bg-neutral-800"
              >
                <Image
                  src={category.heroImage}
                  alt={category.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={cn(
                    "object-cover transition-transform duration-700 ease-out group-hover:scale-110",
                    comingSoon && "grayscale",
                  )}
                />
                <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-4 text-center">
                  <span className="text-xl font-bold uppercase tracking-[0.15em] text-white sm:text-2xl">
                    {category.name}
                  </span>
                  {comingSoon && (
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                      Coming Soon
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 border border-white/0 transition-colors duration-300 group-hover:border-white/30" />
              </Link>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
