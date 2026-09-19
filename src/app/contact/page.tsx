import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/data/nav";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with InStyle Granite & Marble for a free quote or showroom visit.",
};

const details = [
  { icon: MapPin, label: "Showroom", value: siteConfig.address },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: Clock, label: "Hours", value: siteConfig.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Start Your Project"
        description="Request a free quote, schedule a showroom visit, or ask us anything about our stone collections."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <ul className="mt-4 space-y-4">
                {details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3">
                    <detail.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{detail.label}</p>
                      <p className="text-sm text-muted-foreground">{detail.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200">
              <iframe
                title="InStyle Granite & Marble location"
                src="https://www.google.com/maps?q=New+York,NY&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
