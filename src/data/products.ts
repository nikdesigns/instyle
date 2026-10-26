export type Product = {
  slug: string;
  name: string;
  description: string;
  colors: string[];
  image: string;
  inStock: boolean;
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
    tagline: "200+ Colors In Stock",
    description:
      "Granite brings unmatched hardness and one-of-a-kind natural veining to countertops, flooring, and facades. Every slab is unique, cut from stone formed over millions of years.",
    heroImage: "/images/products/granite/santa-cecilia.jpg",
    products: [
      {
        slug: "bianco-carrara",
        name: "Bianco Carrara",
        description: "Soft white background with fine, feathered grey veining.",
        colors: ["White", "Grey"],
        image: "/images/products/granite/bianco-carrara.jpg",
        inStock: true,
      },
      {
        slug: "black-forest",
        name: "Black Forest",
        description: "Deep charcoal granite with dense black and grey speckling.",
        colors: ["Black", "Grey"],
        image: "/images/products/granite/black-forest.jpg",
        inStock: true,
      },
      {
        slug: "glacier-white",
        name: "Glacier White",
        description: "Bright white granite with subtle grey and gold flecks.",
        colors: ["White", "Grey"],
        image: "/images/products/granite/glacier-white.jpg",
        inStock: true,
      },
      {
        slug: "glacier-white-leather",
        name: "Glacier White Leather",
        description: "Glacier White with a textured leathered finish for a soft, matte touch.",
        colors: ["White", "Grey"],
        image: "/images/products/granite/glacier-white-leather.jpg",
        inStock: true,
      },
      {
        slug: "moon-white-leathered",
        name: "Moon White Leathered",
        description: "Finely speckled light grey granite with a matte leathered texture.",
        colors: ["Grey", "White"],
        image: "/images/products/granite/moon-white-leathered.jpg",
        inStock: true,
      },
      {
        slug: "ornamental-white",
        name: "Ornamental White",
        description: "Warm white granite with soft beige and grey mineral movement.",
        colors: ["White", "Beige"],
        image: "/images/products/granite/ornamental-white.jpg",
        inStock: true,
      },
      {
        slug: "santa-cecilia",
        name: "Santa Cecilia",
        description: "Golden beige granite flecked with burgundy and dark mineral spots.",
        colors: ["Beige", "Gold"],
        image: "/images/products/granite/santa-cecilia.jpg",
        inStock: true,
      },
      {
        slug: "steel-grey",
        name: "Steel Grey",
        description: "Cool grey granite with a fine, uniform granular pattern.",
        colors: ["Grey"],
        image: "/images/products/granite/steel-grey.jpg",
        inStock: true,
      },
      {
        slug: "ubatuba",
        name: "Ubatuba",
        description: "Deep black-green granite flecked with copper and gold minerals.",
        colors: ["Black", "Gold"],
        image: "/images/products/granite/ubatuba.jpg",
        inStock: true,
      },
      {
        slug: "via-lactea",
        name: "Via Lactea",
        description: "Polished black granite with delicate white \"milky way\" veining.",
        colors: ["Black", "White"],
        image: "/images/products/granite/via-lactea.jpg",
        inStock: true,
      },
      {
        slug: "vincent-black",
        name: "Vincent Black",
        description: "Rich black granite with fine white and grey mineral speckling.",
        colors: ["Black", "White"],
        image: "/images/products/granite/vincent-black.jpg",
        inStock: true,
      },
    ],
  },
  {
    slug: "marble",
    name: "Marble",
    tagline: "Premium Selection In Stock",
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
        inStock: true,
      },
      {
        slug: "emperador-dark",
        name: "Emperador Dark",
        description: "Warm chocolate brown marble with fine white veins.",
        colors: ["Brown"],
        image: "/images/products/emperador-dark.svg",
        inStock: true,
      },
      {
        slug: "statuario",
        name: "Statuario",
        description: "Bold grey veining on a bright white background.",
        colors: ["White", "Grey"],
        image: "/images/products/statuario.svg",
        inStock: true,
      },
    ],
  },
  {
    slug: "quartz",
    name: "Krystallos Quartz",
    tagline: "Our In-House Quartz Brand",
    description:
      "KRYSTALLOS is our in-house quartz brand, manufactured in our own factory to the highest standards. Combining crushed natural stone with advanced resins, it delivers a non-porous, low-maintenance surface with consistent color and pattern — ideal for busy kitchens and baths.",
    heroImage: "/images/products/quartz/ky-5090.jpg",
    products: [
      {
        slug: "cristallo",
        name: "Cristallo",
        description: "Bright white quartz with soft, translucent crystalline flecks.",
        colors: ["White"],
        image: "/images/products/quartz/cristallo.jpg",
        inStock: true,
      },
      {
        slug: "ethereal-gold",
        name: "Ethereal Gold",
        description: "White quartz with warm gold veining reminiscent of natural marble.",
        colors: ["White", "Gold"],
        image: "/images/products/quartz/ethereal-gold.jpg",
        inStock: true,
      },
      {
        slug: "ethereal-grey",
        name: "Ethereal Grey",
        description: "White quartz with soft, flowing grey veining.",
        colors: ["White", "Grey"],
        image: "/images/products/quartz/ethereal-grey.jpg",
        inStock: true,
      },
      {
        slug: "ky-5090",
        name: "KY 5090",
        description: "White quartz with bold, angular grey Calacatta-style veining.",
        colors: ["White", "Grey"],
        image: "/images/products/quartz/ky-5090.jpg",
        inStock: true,
      },
      {
        slug: "ky-5521",
        name: "KY 5521",
        description: "Clean white quartz with fine, delicate grey linework.",
        colors: ["White", "Grey"],
        image: "/images/products/quartz/ky-5521.jpg",
        inStock: true,
      },
      {
        slug: "ky-1033",
        name: "KY 1033",
        description: "Soft white quartz with subtle, fine grey veining throughout.",
        colors: ["White"],
        image: "/images/products/quartz/ky-1033.jpg",
        inStock: true,
      },
      {
        slug: "staturio-grey",
        name: "Staturio Grey",
        description: "White quartz with dramatic, dark grey Statuario-style veining.",
        colors: ["White", "Grey"],
        image: "/images/products/quartz/staturio-grey.jpg",
        inStock: true,
      },
      {
        slug: "staturio-q",
        name: "Staturio Q",
        description: "Bright white quartz with classic bold grey veining.",
        colors: ["White", "Grey"],
        image: "/images/products/quartz/staturio-q.jpg",
        inStock: true,
      },
      {
        slug: "taj-imperial",
        name: "Taj Imperial",
        description: "Warm ivory quartz with soft, linear veining.",
        colors: ["Ivory"],
        image: "/images/products/quartz/taj-imperial.jpg",
        inStock: true,
      },
      {
        slug: "taj-mahal-quartz",
        name: "Taj Mahal",
        description: "Warm beige quartz with subtle, natural-looking movement.",
        colors: ["Beige"],
        image: "/images/products/quartz/taj-mahal.jpg",
        inStock: true,
      },
    ],
  },
  {
    slug: "quartzite",
    name: "Quartzite",
    tagline: "Exotic Varieties In Stock",
    description:
      "Quartzite offers exceptional hardness with the luminous, marble-like veining designers love — a durable natural stone option for high-traffic surfaces.",
    heroImage: "/images/products/quartzite/taj-mahal-quartzite.jpg",
    products: [
      {
        slug: "blanc-du-blanc",
        name: "Blanc Du Blanc",
        description: "Bright white quartzite (3cm) with soft grey natural veining.",
        colors: ["White"],
        image: "/images/products/quartzite/blanc-du-blanc-3cm.jpg",
        inStock: true,
      },
      {
        slug: "crystallo-polish",
        name: "Crystallo Polish",
        description: "Polished white quartzite (3cm) with fine crystalline movement.",
        colors: ["White"],
        image: "/images/products/quartzite/crystallo-polish-3cm.jpg",
        inStock: true,
      },
      {
        slug: "matarazzo",
        name: "Matarazzo",
        description: "Light quartzite with dramatic, natural veining and movement.",
        colors: ["White", "Grey"],
        image: "/images/products/quartzite/matarazzo.jpg",
        inStock: true,
      },
      {
        slug: "opus-white",
        name: "Opus White",
        description: "Bright white quartzite (2cm) with delicate natural veining.",
        colors: ["White"],
        image: "/images/products/quartzite/opus-white-2cm.jpg",
        inStock: true,
      },
      {
        slug: "taj-mahal-quartzite",
        name: "Taj Mahal Quartzite",
        description: "Warm ivory natural quartzite with subtle linear veining.",
        colors: ["Ivory"],
        image: "/images/products/quartzite/taj-mahal-quartzite.jpg",
        inStock: true,
      },
      {
        slug: "yosemite-quartzite",
        name: "Yosemite Quartzite",
        description: "Natural quartzite with soft neutral tones and organic veining.",
        colors: ["White", "Beige"],
        image: "/images/products/quartzite/yosemite-quartzite.jpg",
        inStock: true,
      },
    ],
  },
  {
    slug: "soapstone",
    name: "Soapstone",
    tagline: "Coming Soon",
    description:
      "A soft, natural stone with a smooth, soapy feel and understated beauty — heat-resistant and non-porous. Our soapstone selection is being added to the showroom; contact us for current availability.",
    heroImage: "/images/products/soapstone-hero.svg",
    products: [],
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
