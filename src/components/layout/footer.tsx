import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { mainNav, externalNav, siteConfig } from "@/data/nav";
import { categories } from "@/data/products";
import { locations } from "@/data/locations";
import { Separator } from "@/components/ui/separator";
import { FacebookIcon, InstagramIcon } from "@/components/icons/social-icons";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt="InStyle Granite & Marble"
              width={140}
              height={68}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border p-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border p-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {externalNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Collections</h3>
            <ul className="mt-4 space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/products/${category.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <a href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  {siteConfig.address}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="hover:text-primary">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Now serving {locations.length} locations across the US</p>
        </div>
      </div>
    </footer>
  );
}
