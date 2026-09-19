import type { Metadata } from "next";
import { Suspense } from "react";

import { PageHeader } from "@/components/sections/page-header";
import { SearchResults } from "@/components/sections/search-results";

export const metadata: Metadata = {
  title: "Search",
  description: "Search InStyle Granite & Marble's stone collections.",
};

export default function SearchPage() {
  return (
    <>
      <PageHeader eyebrow="Search" title="Find Your Stone" />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Suspense>
          <SearchResults />
        </Suspense>
      </section>
    </>
  );
}
