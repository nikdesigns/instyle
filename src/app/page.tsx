import { Hero } from "@/components/sections/hero";
import { CategoryGrid } from "@/components/sections/category-grid";
import { WhyUs } from "@/components/sections/why-us";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <WhyUs />
      <GalleryPreview />
      <CtaBanner />
    </>
  );
}
