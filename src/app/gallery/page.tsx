import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { GalleryGrid } from "@/components/sections/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse completed InStyle Granite & Marble installations.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Projects & Inspiration"
        description="A look at InStyle stone in real kitchens, bathrooms, floors, and commercial spaces."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <GalleryGrid />
      </section>
    </>
  );
}
