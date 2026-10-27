import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/data/nav";
import { getLocationImages } from "@/data/locations";

const showroomImages = getLocationImages("houston", 6);

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with InStyle Granite & Marble for a free quote or showroom visit.",
};

const details = [
  { icon: MapPin, label: "Headquarters", value: siteConfig.address, href: siteConfig.mapUrl },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}` },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get In Touch"
        description="Whether you're a fabricator looking for premium slabs, a designer sourcing exotic stones, or a builder planning your next project — our team is here to help. Visit any of our six locations or reach out below."
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
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200">
              <iframe
                title="InStyle Granite & Marble location"
                src="https://www.google.com/maps?q=14210+Aston+Street,+Houston,+TX+77040&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Visit Our Showroom</h2>
            <p className="mt-2 text-muted-foreground">
              Step inside our Houston headquarters and slab yard.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {showroomImages.map((src, i) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-lg bg-neutral-200"
              >
                <Image
                  src={src}
                  alt={`InStyle Houston showroom, photo ${i + 1}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
