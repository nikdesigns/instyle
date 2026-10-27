import { Handshake, Layers, MapPin, Mountain, Package, Truck } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    icon: Mountain,
    title: "Direct Sourcing",
    description:
      "Stone imported direct — a wide, consistent selection brought in from the quarry.",
  },
  {
    icon: Layers,
    title: "Deep Slab Inventory",
    description:
      "Full slabs held in depth so you can select the exact piece for your project.",
  },
  {
    icon: MapPin,
    title: "Showrooms You Can Visit",
    description:
      "View slabs in person across six locations under the InStyle and Avani brands.",
  },
  {
    icon: Handshake,
    title: "Trade Support",
    description:
      "A dependable source for fabricators, builders, designers and architects.",
  },
  {
    icon: Truck,
    title: "Delivery & Logistics",
    description:
      "Local delivery from warehouse stock to fabrication shops and job sites.",
  },
  {
    icon: Package,
    title: "Samples & Quotes",
    description:
      "Request samples or a formal quote for any slab in our inventory.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          eyebrow="Why InStyle"
          title="A distributor built around selection"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="size-7" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
