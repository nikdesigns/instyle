import { categories } from "@/data/products";

export type SearchResult = {
  slug: string;
  name: string;
  description: string;
  colors: string[];
  image: string;
  inStock: boolean;
  category: string;
  categoryName: string;
};

const allProducts: SearchResult[] = categories.flatMap((category) =>
  category.products.map((product) => ({
    ...product,
    category: category.slug,
    categoryName: category.name,
  })),
);

export function searchProducts(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return allProducts.filter((product) => {
    const haystack = [
      product.name,
      product.description,
      product.categoryName,
      ...product.colors,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
