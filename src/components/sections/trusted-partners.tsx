import Link from "next/link";
import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";

const partners = [
  {
    name: "KRYSTALLOS",
    tagline: "Our in-house quartz brand",
    href: "/products/quartz",
  },
];

export function TrustedPartners() {
  return (
    <section className="relative overflow-hidden border-y py-20">
      <Image
        src="/images/products/quartz/ky-1043-white-carrara-premium.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-white/88" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          eyebrow="Our Trusted Partners"
          title="Backed by brands we manufacture ourselves"
          align="center"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={partner.href}
              className="group flex flex-col items-center gap-1 transition-opacity hover:opacity-80"
            >
              <span className="text-2xl font-extrabold tracking-wide text-foreground">
                {partner.name}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {partner.tagline}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
