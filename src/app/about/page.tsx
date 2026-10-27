import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { PageHeader } from "@/components/sections/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { locations, getLocationImages } from "@/data/locations";
import { getAllProducts } from "@/data/products";
import { siteConfig } from "@/data/nav";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Your trusted source for premium granite, marble, quartz, and quartzite slabs — direct from our quarries to your project.",
};

const stats = [
  { label: "Years in Stone", value: `${new Date().getFullYear() - siteConfig.foundedYear}+` },
  { label: "Showroom Cities", value: `${locations.length}` },
  { label: "Brands", value: "2" },
  { label: "Stone Colors In Stock", value: `${getAllProducts().length}+` },
];

const values = [
  {
    title: "Selection First",
    description:
      "Everything we do is built around helping you find the right slab — not just any slab.",
  },
  {
    title: "Direct Sourcing",
    description: "Bringing stone in directly keeps our range wide and our supply dependable.",
  },
  {
    title: "Straight Talk",
    description:
      "Honest guidance on how each material behaves, so you choose with clear eyes.",
  },
];

const differentiators = [
  {
    title: "Direct From Source",
    description:
      "We own our quarries and processing factories — no middlemen. This means better prices, consistent quality, and exclusive colors you won't find elsewhere.",
  },
  {
    title: "6 Locations, One Standard",
    description:
      "Whether you visit Houston, Memphis, Nashville, or Denver, you'll find the same large inventory, knowledgeable staff, and covered warehouse experience.",
  },
  {
    title: "In-House Quartz Manufacturing",
    description:
      "Our KRYSTALLOS quartz line is manufactured in our own factory to the highest standards, giving us full control over quality and consistency.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A Stone Business Built on Selection"
        description={`Since ${siteConfig.foundedYear}, we've imported and distributed natural stone — granite, marble, quartz and quartzite — direct from quarry to project.`}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200">
            <Image
              src="/images/about-workshop.jpg"
              alt="InStyle warehouse and slab yard"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              InStyle Granite &amp; Marble was established in {siteConfig.foundedYear} as a
              natural stone importer and distributor, bringing slabs in direct from the quarry
              and holding them in depth for fabricators, builders, designers and homeowners.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today the business spans two brands — InStyle in Houston, and its sister brand
              Avani Granite &amp; Marble in Memphis, Nashville and Denver — with additional reach
              in Atlanta and Columbus. Our own KRYSTALLOS quartz line is manufactured in-house,
              giving us full control over quality and consistency across all six locations.
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

        <div className="mt-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              What We Value
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">How We Work</h2>
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t pt-6">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Our Locations</h2>
            <p className="mt-2 text-muted-foreground">
              Now serving {locations.length} locations across the US, stocked and ready for you to visit.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href="/gallery"
                className="group relative block aspect-square overflow-hidden rounded-lg bg-neutral-200"
              >
                <Image
                  src={getLocationImages(location.slug, 1)[0]}
                  alt={`InStyle warehouse in ${location.city}, ${location.state}`}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-white">
                  {location.city}, {location.state}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">What Sets InStyle Apart</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-lg border bg-secondary/40 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Certifications</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            InStyle holds industry certifications for sourcing, handling, and quality
            standards. Ask your InStyle representative for current certificate copies.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
