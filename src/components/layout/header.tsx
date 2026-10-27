"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
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

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState(categories[0]?.slug);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const secondaryNav = mainNav.filter((item) => item.href !== "/products" && item.href !== "/");

  const navLinkClass = cn(
    "flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors",
    transparent ? "text-white/90 hover:text-white" : "text-foreground/75 hover:text-primary",
  );
  const iconClass = transparent ? "text-white hover:bg-white/10 hover:text-white" : "";

  return (
    <header
      className={cn(
        "z-50 w-full transition-colors duration-300",
        isHome ? "fixed top-0 inset-x-0" : "sticky top-0 border-b bg-background",
        isHome && (scrolled ? "border-b bg-background/95 backdrop-blur-sm" : "bg-transparent"),
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logo.png"
            alt="InStyle Granite & Marble"
            width={160}
            height={78}
            priority
            className={cn(
              "h-11 w-auto transition-[filter] duration-300",
              transparent && "drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]",
            )}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            href="/"
            className={cn(navLinkClass, pathname === "/" && (transparent ? "text-white" : "text-primary"))}
          >
            Home
          </Link>

          <div className="group relative">
            <button
              type="button"
              className={navLinkClass}
              onFocus={() => setActiveSlug(categories[0]?.slug)}
            >
              Products
              <ChevronDown className="size-3.5 transition-transform duration-300 ease-out group-hover:rotate-180" />
            </button>

            {/* Hoverable wrapper: padding-top (not margin) keeps the hit-area
                contiguous with the trigger so the mega panel never flickers
                closed while moving the pointer down into it. */}
            <div className="invisible absolute left-0 top-full z-50 -translate-y-1 pt-5 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="w-[min(880px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-black/5 bg-white text-foreground shadow-[0_24px_60px_-15px_rgba(0,0,0,0.35)]">
                <div className="h-[3px] bg-gradient-to-r from-primary via-red-400 to-primary" />
                <div className="grid grid-cols-[300px_1fr]">
                  <div className="border-r p-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
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
                    href={`/products/${(categories.find((c) => c.slug === activeSlug) ?? categories[0]).slug}`}
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
                      {(() => {
                        const activeCategory = categories.find((c) => c.slug === activeSlug) ?? categories[0];
                        return (
                          <>
                            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                              {activeCategory.tagline}
                            </p>
                            <h3 className="mt-2 text-2xl font-light tracking-tight text-white">
                              {activeCategory.name}
                            </h3>
                            <p className="mt-2 max-w-sm text-sm text-white/75">
                              {activeCategory.description}
                            </p>
                            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-white">
                              Shop {activeCategory.name}
                              <ArrowRight className="size-4 transition-transform duration-300 group-hover/preview:translate-x-1" />
                            </span>
                          </>
                        );
                      })()}
                    </div>
                  </Link>
                </div>

                <Link
                  href="/products"
                  className="flex items-center justify-center gap-1.5 border-t bg-secondary/40 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-secondary"
                >
                  View All Products
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                navLinkClass,
                pathname.startsWith(item.href) && (transparent ? "text-white" : "text-primary"),
              )}
            >
              {item.label}
            </Link>
          ))}

          {externalNav.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={navLinkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <Button
            variant="ghost"
            size="icon"
            aria-label={searchOpen ? "Close search" : "Open search"}
            onClick={() => setSearchOpen((value) => !value)}
            className={iconClass}
          >
            {searchOpen ? <X className="size-5" /> : <Search className="size-5" />}
          </Button>
          <a
            href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
            className={cn(
              "flex items-center gap-2 text-xs font-medium tracking-wide transition-colors",
              transparent ? "text-white/90 hover:text-white" : "text-foreground/75 hover:text-primary",
            )}
          >
            <Phone className="size-4" />
            {siteConfig.phone}
          </a>
          <Button render={<Link href="/contact" />}>Get a Quote</Button>
        </div>

        <div className="ml-auto flex items-center gap-1 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label={searchOpen ? "Close search" : "Open search"}
            onClick={() => setSearchOpen((value) => !value)}
            className={iconClass}
          >
            {searchOpen ? <X className="size-6" /> : <Search className="size-6" />}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" className={iconClass}>
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
                  className="rounded-md px-3 py-3 text-xs font-medium uppercase tracking-[0.12em] hover:bg-accent"
                >
                  Home
                </Link>

                <Accordion>
                  <AccordionItem value="products" className="border-none">
                    <AccordionTrigger className="rounded-md px-3 py-3 text-xs font-medium uppercase tracking-[0.12em] hover:bg-accent hover:no-underline">
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

                {secondaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-xs font-medium uppercase tracking-[0.12em] hover:bg-accent"
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
                    className="rounded-md px-3 py-3 text-xs font-medium uppercase tracking-[0.12em] hover:bg-accent"
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

      {searchOpen && (
        <div className="border-t bg-background px-4 py-4 shadow-sm">
          <SearchBar
            autoFocus
            className="mx-auto max-w-xl"
            onSubmit={() => setSearchOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
