export type GalleryImage = {
  src: string;
  alt: string;
  category: "Kitchen" | "Bathroom" | "Flooring" | "Commercial";
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/kitchen-1.svg", alt: "Marble kitchen island", category: "Kitchen" },
  { src: "/images/gallery/kitchen-2.svg", alt: "Granite kitchen countertop", category: "Kitchen" },
  { src: "/images/gallery/bathroom-1.svg", alt: "Marble bathroom vanity", category: "Bathroom" },
  { src: "/images/gallery/bathroom-2.svg", alt: "Quartzite bathroom shower", category: "Bathroom" },
  { src: "/images/gallery/flooring-1.svg", alt: "Marble flooring in foyer", category: "Flooring" },
  { src: "/images/gallery/commercial-1.svg", alt: "Granite lobby reception desk", category: "Commercial" },
  { src: "/images/gallery/kitchen-3.svg", alt: "Waterfall island edge", category: "Kitchen" },
  { src: "/images/gallery/flooring-2.svg", alt: "Stone flooring pattern", category: "Flooring" },
];
