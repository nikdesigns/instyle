import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { categories, getCategory } from "@/data/products";
import { PageHeader } from "@/components/sections/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      <PageHeader
        eyebrow="Collection"
        title={category.name}
        description={category.description}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {category.products.map((product) => (
            <Card key={product.slug} className="overflow-hidden py-0">
              <div className="relative aspect-[4/3] w-full bg-neutral-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <CardContent className="pb-6">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Badge key={color} variant="secondary">
                      {color}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
