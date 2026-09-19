export type Product = {
  slug: string;
  name: string;
  description: string;
  colors: string[];
  image: string;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    slug: "granite",
    name: "Granite",
    tagline: "Timeless natural stone, quarried for durability",
    description:
      "Granite brings unmatched hardness and one-of-a-kind natural veining to countertops, flooring, and facades. Every slab is unique, cut from stone formed over millions of years.",
    heroImage: "/images/products/granite-hero.svg",
    products: [
      {
        slug: "black-galaxy",
        name: "Black Galaxy",
        description: "Deep black granite flecked with copper and gold minerals.",
        colors: ["Black", "Gold"],
        image: "/images/products/black-galaxy.svg",
      },
      {
        slug: "kashmir-white",
        name: "Kashmir White",
        description: "Soft white base with burgundy and grey mineral movement.",
        colors: ["White", "Burgundy"],
        image: "/images/products/kashmir-white.svg",
      },
      {
        slug: "tan-brown",
        name: "Tan Brown",
        description: "Rich brown tones with dramatic black and cream crystals.",
        colors: ["Brown", "Cream"],
        image: "/images/products/tan-brown.svg",
      },
    ],
  },
  {
    slug: "marble",
    name: "Marble",
    tagline: "Elegant veining for refined interiors",
    description:
      "Marble is the choice for timeless luxury, prized for its soft veining and light-reflecting surface. Ideal for countertops, flooring, and statement walls.",
    heroImage: "/images/products/marble-hero.svg",
    products: [
      {
        slug: "carrara-white",
        name: "Carrara White",
        description: "Classic Italian marble with soft grey feathered veining.",
        colors: ["White", "Grey"],
        image: "/images/products/carrara-white.svg",
      },
      {
        slug: "emperador-dark",
        name: "Emperador Dark",
        description: "Warm chocolate brown marble with fine white veins.",
        colors: ["Brown"],
        image: "/images/products/emperador-dark.svg",
      },
      {
        slug: "statuario",
        name: "Statuario",
        description: "Bold grey veining on a bright white background.",
        colors: ["White", "Grey"],
        image: "/images/products/statuario.svg",
      },
    ],
  },
  {
    slug: "quartzite",
    name: "Quartzite",
    tagline: "The strength of granite, the beauty of marble",
    description:
      "Quartzite offers exceptional hardness with the luminous, marble-like veining designers love — a durable option for high-traffic surfaces.",
    heroImage: "/images/products/quartzite-hero.svg",
    products: [
      {
        slug: "taj-mahal",
        name: "Taj Mahal",
        description: "Warm ivory quartzite with subtle linear veining.",
        colors: ["Ivory"],
        image: "/images/products/taj-mahal.svg",
      },
      {
        slug: "white-macaubas",
        name: "White Macaubas",
        description: "Bright white quartzite with dramatic grey crystalline veins.",
        colors: ["White", "Grey"],
        image: "/images/products/white-macaubas.svg",
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getAllProducts() {
  return categories.flatMap((category) =>
    category.products.map((product) => ({ ...product, category: category.slug, categoryName: category.name })),
  );
}
