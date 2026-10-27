import Image from "next/image";
import { Building2, ChefHat, ShowerHead } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";

const applications = [
  {
    icon: ChefHat,
    title: "Kitchen",
    subtitle: "Countertops and Islands",
    image: "/images/products/quartz/ky-5090-calacatta-everest.jpg",
  },
  {
    icon: ShowerHead,
    title: "Bath",
    subtitle: "Vanities and Shower Walls",
    image: "/images/products/marble/super-white.jpg",
  },
  {
    icon: Building2,
    title: "Architecture",
    subtitle: "Wall Cladding and Facades",
    image: "/images/products/porcelain/apollo-white.jpg",
  },
];

export function Applications() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        number="02"
        eyebrow="Applications"
        title="Every space finds its surface"
        description="From kitchen islands to full facade cladding, InStyle surfaces are engineered for how real spaces get used."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {applications.map((app) => (
          <div
            key={app.title}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-900"
          >
            <Image
              src={app.image}
              alt={app.title}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <app.icon className="size-8 text-primary" />
              <h3 className="text-2xl font-bold text-white">{app.title}</h3>
              <p className="text-sm text-white/80">{app.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
