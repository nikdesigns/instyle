export type JournalBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: { term?: string; text: string }[] };

export type JournalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
  body: JournalBlock[];
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "granite-vs-quartzite-kitchen-surface",
    title: "Granite vs Quartzite: Choosing a Kitchen Surface",
    excerpt:
      "They look similar on a sample and both suit hard-working kitchens — but they behave differently. Here's how to choose between them.",
    date: "2025-11-04",
    readTime: "5 min read",
    coverImage: "/images/products/granite/black-forest.jpg",
    body: [
      {
        type: "paragraph",
        text: "Granite and quartzite are both natural stones, both hard, and both well suited to kitchens. On a small sample they can be hard to tell apart. The differences show up in how they look across a full slab and how they wear.",
      },
      { type: "heading", text: "What they are" },
      {
        type: "paragraph",
        text: "Granite is an igneous rock — molten rock cooled slowly underground into a dense field of crystals. Its look tends toward speckle and grain rather than long veins, though some granites do move.",
      },
      {
        type: "paragraph",
        text: "Quartzite is a metamorphic rock — sandstone recrystallised under heat and pressure into interlocking quartz. It often carries flowing, marble-like veining, which is why people drawn to marble but worried about durability land on quartzite.",
      },
      { type: "heading", text: "How they behave" },
      {
        type: "paragraph",
        text: "Both are hard and heat-tolerant, and both are porous enough to benefit from periodic sealing. Quartzite is frequently as hard as or harder than granite. Neither should be confused with engineered quartz, which is a non-porous, manufactured material — a different product entirely.",
      },
      { type: "heading", text: "How to choose" },
      {
        type: "list",
        items: [
          { term: "Want movement and veining?", text: "Quartzite usually gives a more marble-like look." },
          { term: "Want a speckled, uniform field?", text: "Granite offers that in a huge range of colors." },
          { term: "Worried about etching?", text: "Both resist acids far better than marble." },
          { term: "On a budget?", text: "Granite is often the more economical of the two." },
        ],
      },
      {
        type: "paragraph",
        text: "The most reliable way to decide is to view full slabs in person. A 4-inch sample tells you the color; it does not tell you how the veining moves across two meters of counter.",
      },
    ],
  },
  {
    slug: "read-a-slab-before-you-buy",
    title: "How to Read a Slab Before You Buy",
    excerpt:
      "A full slab is not a countertop yet. Learn what to look for — movement, matching, fissures and finish — before you commit.",
    date: "2025-10-18",
    readTime: "4 min read",
    coverImage: "/images/locations/houston/houston-2.jpg",
    body: [
      {
        type: "paragraph",
        text: "Selecting natural stone slab by slab is the whole point of buying it in person. Here is what to look at when you stand in front of one.",
      },
      { type: "heading", text: "Movement and orientation" },
      {
        type: "paragraph",
        text: "Look at how the veining or grain travels. Picture where the seams and the sink cut-out will fall — you want the best movement on the run people see most. Ask to see the slab standing up and, if possible, laid flat.",
      },
      {
        type: "paragraph",
        text: "Slabs cut in sequence from the same block can be book-matched — opened like a book so the pattern mirrors. On an island or a feature wall this is dramatic. If you want it, reserve the consecutive slabs together.",
      },
      { type: "heading", text: "Fissures, pits and fills" },
      {
        type: "paragraph",
        text: "Natural stone has natural characteristics. Fissures (hairline separations along the crystal structure) are normal and usually not structural. Some stones are filled at the factory to stabilize them. None of this is a defect — but you should know what you are looking at and be comfortable with it.",
      },
      {
        type: "paragraph",
        text: "The same stone reads very differently polished (glossy, deeper color), honed (matte, softer, more forgiving of fingerprints) or leathered (textured, low-sheen). Ask to see your stone in the finish you are considering.",
      },
      { type: "heading", text: "Reserve the actual slab" },
      {
        type: "paragraph",
        text: "If you love a specific slab, tag it and reserve it. Two slabs of the \"same\" stone can look meaningfully different — the one you saw is the one you want.",
      },
    ],
  },
  {
    slug: "caring-for-natural-stone",
    title: "Caring for Natural Stone",
    excerpt:
      "Sealing, cleaning and the few things to avoid. A short, practical guide to keeping stone surfaces looking their best.",
    date: "2025-09-30",
    readTime: "4 min read",
    coverImage: "/images/products/quartzite/taj-mahal.jpg",
    body: [
      {
        type: "paragraph",
        text: "Natural stone is durable, but it rewards a little routine care. The essentials are simple.",
      },
      { type: "heading", text: "Everyday cleaning" },
      {
        type: "paragraph",
        text: "Wipe with warm water and a little mild dish soap, or a pH-neutral stone cleaner. Skip acidic cleaners (vinegar, lemon), bleach and abrasive pads — these can dull or etch the surface over time.",
      },
      {
        type: "paragraph",
        text: "Most porous natural stones (granite, quartzite, marble) benefit from periodic sealing, which slows absorption and buys you time to wipe up spills. A quick test: drop a little water on the surface. If it beads, the seal is working; if it soaks in and darkens, it is time to reseal. Frequency depends on the stone and use — often once or twice a year.",
      },
      { type: "heading", text: "Marble needs a lighter touch" },
      {
        type: "paragraph",
        text: "Marble is softer and reacts to acids: citrus, wine and some cleaners can leave dull etch marks. Use coasters and trivets, wipe spills promptly, and consider a honed finish, which hides wear better than a polish.",
      },
      { type: "heading", text: "Quartz is the low-maintenance one" },
      {
        type: "paragraph",
        text: "Engineered quartz is non-porous, so it does not need sealing. Clean it the same gentle way, and avoid direct high heat — always use a trivet.",
      },
      { type: "heading", text: "Heat, knives and weight" },
      {
        type: "paragraph",
        text: "Whatever the material: use trivets under hot pans, cutting boards for knives (which also protects your blades), and avoid standing or sitting on countertops, especially near unsupported cut-outs.",
      },
    ],
  },
];

export function getJournalArticle(slug: string) {
  return journalArticles.find((article) => article.slug === slug);
}

export function formatJournalDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
