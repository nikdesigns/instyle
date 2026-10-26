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
  { label: "Years in Business", value: `${new Date().getFullYear() - siteConfig.foundedYear}+` },
  { label: "Warehouse Locations", value: `${locations.length}` },
  { label: "Stone Colors In Stock", value: `${getAllProducts().length}+` },
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
        title="Experts in the Field Since 2011"
        description="Your trusted source for premium granite, marble, quartz, and quartzite slabs — direct from our quarries to your project."
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
            <h2 className="text-2xl font-bold sm:text-3xl">The Story Behind InStyle</h2>
            <p className="mt-4 text-muted-foreground">
              We are a direct import warehouse and distribution facility
              carrying various natural and manufactured solid surface
              products.
            </p>
            <p className="mt-4 text-muted-foreground">
              With many colors to choose from, we are sure you will find a
              great match to fit your design ideas from our large collection
              of granite, marble, quartzite, soapstone, and more — as well as
              quartz slabs under our own brand, KRYSTALLOS, manufactured in
              our own factory with the highest standards.
            </p>
            <p className="mt-4 text-muted-foreground">
              Established in {siteConfig.foundedYear}, InStyle Granite &
              Marble (Houston) and Avani Granite & Marble (Memphis,
              Nashville, Denver) were built to meet the growing demand for
              natural and manufactured solid surface material. Backed by our
              own quarries and quartz manufacturing factories, we deliver
              direct-from-source quality to fabricators, builders, and
              designers across the US.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 rounded-lg bg-secondary/40 p-8 sm:grid-cols-3 sm:p-12">
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
      </section>

      <CtaBanner />
    </>
  );
}
