import type { Metadata } from "next";
import Image from "next/image";

import { PageHeader } from "@/components/sections/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about InStyle Granite & Marble — our story, our craftsmanship, and our commitment to quality.",
};

const stats = [
  { label: "Years in Business", value: "20+" },
  { label: "Projects Completed", value: "5,000+" },
  { label: "Stone Varieties", value: "150+" },
  { label: "Happy Clients", value: "4,800+" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Two Decades of Stone Craftsmanship"
        description="InStyle Granite & Marble was founded on a simple principle: source the finest natural stone and back it with unmatched fabrication and installation expertise."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200">
            <Image
              src="/images/about-workshop.svg"
              alt="InStyle fabrication workshop"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              What began as a small family fabrication shop has grown into a
              trusted name in natural stone, serving homeowners, designers,
              and contractors across the region. We built our reputation on
              honest advice, meticulous craftsmanship, and slabs sourced
              directly from quarries we trust.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, our showroom features hundreds of granite, marble, and
              quartzite selections, and our in-house fabrication team handles
              every cut, edge, and polish with precision — because the
              details are what make a space truly InStyle.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 rounded-lg bg-secondary/40 p-8 sm:grid-cols-4 sm:p-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Deliver premium natural stone and craftsmanship that exceeds
              expectations on every project, big or small.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Our Process</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              From slab selection to templating, fabrication, and
              installation — we guide clients through every step.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Our Promise</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Transparent pricing, dependable timelines, and workmanship
              backed by our quality guarantee.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
