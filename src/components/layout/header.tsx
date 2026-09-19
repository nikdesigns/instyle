"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Phone, Search, X } from "lucide-react";

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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { mainNav, siteConfig } from "@/data/nav";
import { categories } from "@/data/products";

const primaryLinkClass =
  "flex h-14 items-center px-5 text-sm font-semibold uppercase tracking-wide text-white/85 transition-colors hover:bg-white/10 hover:text-white";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const secondaryNav = mainNav.filter((item) => item.href !== "/products");

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility bar */}
      <div className="border-b bg-background">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/logo.svg"
              alt="InStyle Granite & Marble"
              width={160}
              height={64}
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
      <div className="hidden bg-neutral-900 md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <NavigationMenu className="max-w-none flex-none justify-start" align="start">
            <NavigationMenuList className="gap-0">
              <NavigationMenuItem>
                <Link href="/" className={primaryLinkClass}>
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    primaryLinkClass,
                    "h-14 rounded-none bg-transparent px-5 hover:bg-white/10! data-open:bg-white/10! data-open:text-white! data-popup-open:bg-white/10! data-popup-open:text-white!",
                  )}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[min(720px,90vw)] p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/products/${category.slug}`}
                        className="group block overflow-hidden rounded-md border"
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                          <Image
                            src={category.heroImage}
                            alt={category.name}
                            fill
                            sizes="240px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-3">
                          <p className="font-semibold">{category.name}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {category.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/products"
                    className="mt-4 flex items-center justify-center gap-1 rounded-md bg-secondary/60 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-secondary"
                  >
                    View All Products
                    <ArrowRight className="size-4" />
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {secondaryNav
                .filter((item) => item.href !== "/")
                .map((item) => {
                  const isActive = pathname.startsWith(item.href);
                  return (
                    <NavigationMenuItem key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          primaryLinkClass,
                          isActive && "bg-white/10 text-white",
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
