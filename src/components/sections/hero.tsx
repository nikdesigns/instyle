import Link from "next/link";

import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/utils";

const trustMarks = [
  "6 Warehouses Nationwide",
  "In-House Quartz Manufacturing",
  "Est. 2011",
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-neutral-900 text-white">
      <video
        className="absolute inset-0 size-full object-cover"
        src={withBasePath("/videos/krystallos-hero.mp4")}
        poster={withBasePath("/images/krystallos-hero-poster.jpg")}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
          InStyle Granite &amp; Marble
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]">
          Texas&rsquo;s curated destination for luxury natural quartzite,
          quartz &amp; Italian marble.
        </h1>
        <p className="mt-6 max-w-xl text-base font-light text-white/80 sm:text-lg">
          Every space finds its surface at InStyle.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button size="lg" render={<Link href="/products" />}>
            Explore Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white hover:text-neutral-900"
            render={<Link href="/contact" />}
          >
            Get a Free Quote
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-6">
          {trustMarks.map((mark) => (
            <span
              key={mark}
              className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/65"
            >
              {mark}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 hidden items-center justify-center gap-2 text-white/60 sm:flex">
        <span className="text-[11px] font-medium uppercase tracking-[0.14em]">Scroll</span>
        <span className="h-8 w-px animate-pulse bg-white/40" aria-hidden />
      </div>
    </section>
  );
}
