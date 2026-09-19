import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-neutral-900 text-white">
      <div
        className="absolute inset-0 bg-[url('/images/hero-stone.svg')] bg-cover bg-center opacity-60"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Granite &amp; Marble Specialists
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Natural Stone That Defines Every Space
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">
          From quarry to countertop, InStyle Granite &amp; Marble delivers premium
          slabs and expert fabrication for homes and businesses that demand
          lasting beauty.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button size="lg" render={<Link href="/products" />}>
            Explore Collections
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
      </div>
    </section>
  );
}
