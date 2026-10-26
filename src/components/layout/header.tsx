"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, Phone, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/layout/search-bar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { mainNav, externalNav, siteConfig } from "@/data/nav";
import { categories } from "@/data/products";

const primaryLinkClass =
  "flex h-14 items-center px-5 text-sm font-semibold uppercase tracking-wide text-white/85 transition-colors hover:bg-white/10 hover:text-white";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState(categories[0]?.slug);

  const secondaryNav = mainNav.filter((item) => item.href !== "/products");
  const activeCategory = categories.find((c) => c.slug === activeSlug) ?? categories[0];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility bar */}
      <div className="border-b bg-background">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/logo.png"
              alt="InStyle Granite & Marble"
              width={160}
              height={78}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <SearchBar className="mx-auto hidden w-full max-w-sm md:block" />

          <div className="ml-auto hidden items-center gap-6 md:flex">
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              <Phone className="size-4" />
              {siteConfig.phone}
            </a>
            <Button render={<Link href="/contact" />}>Get a Quote</Button>
          </div>

          <div className="ml-auto flex items-center gap-1 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={mobileSearchOpen ? "Close search" : "Open search"}
              onClick={() => setMobileSearchOpen((value) => !value)}
            >
              {mobileSearchOpen ? <X className="size-6" /> : <Search className="size-6" />}
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="size-6" />
                  </Button>
                }
              />
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 px-4">
                  <SearchBar className="mx-3 mb-2 w-auto" onSubmit={() => setOpen(false)} />

                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium uppercase tracking-wide hover:bg-accent"
                  >
                    Home
                  </Link>

                  <Accordion>
                    <AccordionItem value="products" className="border-none">
                      <AccordionTrigger className="rounded-md px-3 py-3 text-base font-medium uppercase tracking-wide hover:bg-accent hover:no-underline">
                        Products
                      </AccordionTrigger>
                      <AccordionContent className="pl-3">
                        <div className="flex flex-col gap-1">
                          {categories.map((category) => (
                            <Link
                              key={category.slug}
                              href={`/products/${category.slug}`}
                              onClick={() => setOpen(false)}
                              className="rounded-md px-3 py-2 text-sm hover:bg-accent"
                            >
                              {category.name}
                            </Link>
                          ))}
                          <Link
                            href="/products"
                            onClick={() => setOpen(false)}
                            className="rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-accent"
                          >
                            View All Products
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {secondaryNav
                    .filter((item) => item.href !== "/")
                    .map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-3 text-base font-medium uppercase tracking-wide hover:bg-accent"
                      >
                        {item.label}
                      </Link>
                    ))}

                  {externalNav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-3 text-base font-medium uppercase tracking-wide hover:bg-accent"
                    >
                      {item.label}
                    </a>
                  ))}

                  <Button className="mt-4" render={<Link href="/contact" onClick={() => setOpen(false)} />}>
                    Get a Quote
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {mobileSearchOpen && (
          <div className="border-t px-4 py-3 md:hidden">
            <SearchBar autoFocus onSubmit={() => setMobileSearchOpen(false)} />
          </div>
        )}
      </div>

      {/* Primary category bar */}
      <nav className="hidden bg-neutral-900 md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex items-stretch">
            <li>
              <Link href="/" className={primaryLinkClass}>
                Home
              </Link>
            </li>

            <li className="group relative">
              <button
                type="button"
                className={cn(primaryLinkClass, "gap-1.5")}
                onFocus={() => setActiveSlug(categories[0]?.slug)}
              >
                Products
                <ChevronDown className="size-3.5 transition-transform duration-300 ease-out group-hover:rotate-180" />
              </button>

              {/* Hoverable wrapper: padding-top (not margin) keeps the hit-area
                  contiguous with the trigger so the mega panel never flickers
                  closed while moving the pointer down into it. */}
              <div className="invisible absolute left-0 top-full z-50 -translate-y-1 pt-3 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="w-[min(880px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-black/5 bg-white text-foreground shadow-[0_24px_60px_-15px_rgba(0,0,0,0.35)]">
                  <div className="h-[3px] bg-gradient-to-r from-primary via-red-400 to-primary" />
                  <div className="grid grid-cols-[300px_1fr]">
                    <div className="border-r p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                        Collections
                      </p>
                      <ul className="mt-4">
                        {categories.map((category) => (
                          <li key={category.slug}>
                            <Link
                              href={`/products/${category.slug}`}
                              onMouseEnter={() => setActiveSlug(category.slug)}
                              className={cn(
                                "group/item flex items-center justify-between gap-2 border-b border-border/70 py-3.5 pl-3 -ml-3 pr-2 transition-colors last:border-0",
                                activeSlug === category.slug ? "border-l-2 border-l-primary bg-secondary/50" : "border-l-2 border-l-transparent",
                              )}
                            >
                              <span>
                                <span
                                  className={cn(
                                    "block text-[15px] font-semibold transition-colors",
                                    activeSlug === category.slug ? "text-primary" : "text-foreground",
                                  )}
                                >
                                  {category.name}
                                </span>
                                <span className="mt-0.5 block text-xs text-muted-foreground">
                                  {category.tagline}
                                </span>
                              </span>
                              <ArrowRight
                                className={cn(
                                  "size-4 shrink-0 text-primary opacity-0 transition-opacity",
                                  activeSlug === category.slug && "opacity-100",
                                )}
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/products/${activeCategory.slug}`}
                      className="group/preview relative block overflow-hidden bg-neutral-900"
                    >
                      {categories.map((category) => (
                        <Image
                          key={category.slug}
                          src={category.heroImage}
                          alt={category.name}
                          fill
                          sizes="580px"
                          className={cn(
                            "object-cover transition-[opacity,transform] duration-700 ease-out",
                            activeSlug === category.slug
                              ? "opacity-100 scale-100 group-hover/preview:scale-105"
                              : "opacity-0 scale-100",
                          )}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                          {activeCategory.tagline}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-white">
                          {activeCategory.name}
                        </h3>
                        <p className="mt-2 max-w-sm text-sm text-white/75">
                          {activeCategory.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-white">
                          Shop {activeCategory.name}
                          <ArrowRight className="size-4 transition-transform duration-300 group-hover/preview:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </div>

                  <Link
                    href="/products"
                    className="flex items-center justify-center gap-1.5 border-t bg-secondary/40 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
                  >
                    View All Products
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </li>

            {secondaryNav
              .filter((item) => item.href !== "/")
              .map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(primaryLinkClass, isActive && "bg-white/10 text-white")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

            {externalNav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryLinkClass}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
