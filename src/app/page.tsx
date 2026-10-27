import { Hero } from "@/components/sections/hero";
import { CategoryGrid } from "@/components/sections/category-grid";
import { Applications } from "@/components/sections/applications";
import { WhyUs } from "@/components/sections/why-us";
import { TrustedPartners } from "@/components/sections/trusted-partners";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { JournalPreview } from "@/components/sections/journal-preview";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <Applications />
      <WhyUs />
      <TrustedPartners />
      <GalleryPreview />
      <JournalPreview />
      <CtaBanner />
    </>
  );
}
