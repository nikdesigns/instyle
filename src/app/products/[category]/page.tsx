import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { categories, getCategory } from "@/data/products";
import { StockBadge } from "@/components/ui/stock-badge";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  return (
    <>
      <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-neutral-900 text-white">
        <Image
          src={category.heroImage}
          alt={category.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {category.tagline}
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{category.name}</h1>
          <p className="mt-4 max-w-2xl text-white/80">{category.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {category.products.length === 0 ? (
          <div className="rounded-sm border border-dashed bg-secondary/40 p-16 text-center">
            <p className="text-xl font-semibold">This collection is coming soon.</p>
            <p className="mt-2 text-muted-foreground">
              Contact us for current availability and to see samples in person.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-baseline justify-between border-b pb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {category.products.length} Colors
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {category.products.map((product) => (
                <div key={product.slug} className="group">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <StockBadge inStock={product.inStock} className="absolute left-3 top-3" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className="text-xs font-medium uppercase tracking-wide text-muted-foreground after:ml-3 after:text-border last:after:content-none after:content-['/']"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
