"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { SearchBar } from "@/components/layout/search-bar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { StockBadge } from "@/components/ui/stock-badge";
import { searchProducts } from "@/lib/search";

export function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const results = searchProducts(query);

  return (
    <div>
      <SearchBar className="max-w-lg" />

      <p className="mt-6 text-sm text-muted-foreground">
        {query ? (
          <>
            {results.length} result{results.length === 1 ? "" : "s"} for
            &ldquo;{query}&rdquo;
          </>
        ) : (
          "Enter a search term to find a stone color or collection."
        )}
      </p>

      {query && results.length === 0 ? (
        <div className="mt-10 rounded-lg border bg-secondary/40 p-8 text-center">
          <p className="font-medium">No matches found.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try searching for a stone type (granite, marble, quartz, quartzite) or a
            color like white or black.
          </p>
        </div>
      ) : null}

      {results.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((product) => (
            <Link key={`${product.category}-${product.slug}`} href={`/products/${product.category}`}>
              <Card className="overflow-hidden py-0 transition-shadow hover:shadow-md">
                <div className="relative aspect-[4/3] w-full bg-neutral-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <StockBadge inStock={product.inStock} className="absolute left-3 top-3" />
                </div>
                <CardContent className="pb-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {product.categoryName}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{product.name}</h3>
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
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
