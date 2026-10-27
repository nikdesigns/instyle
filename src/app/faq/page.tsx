import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers on buying, materials, care, trade and delivery for natural stone slabs.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions, Answered"
        description="The things people most often ask about selecting, buying and caring for natural stone."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Accordion>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="border-t bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Still Have a Question?
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Ask Us Directly</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" render={<Link href="/contact" />}>
              Contact Us
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/contact?intent=quote" />}>
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
