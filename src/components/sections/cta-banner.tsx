import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div>
          <h2 className="text-2xl font-light leading-[1.08] tracking-tight sm:text-3xl lg:text-4xl">
            Ready to transform your space?
          </h2>
          <p className="mt-3 text-primary-foreground/90">
            Visit our showroom or request a free quote — our team is ready to help.
          </p>
        </div>
        <div className="flex shrink-0 gap-4">
          <Button size="lg" variant="secondary" render={<Link href="/contact" />}>
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
