"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { searchProducts, type SearchResult } from "@/lib/search";

const MAX_SUGGESTIONS = 5;

export function SearchBar({
  className,
  autoFocus,
  placeholder = "Search text...",
  onSubmit,
}: {
  className?: string;
  autoFocus?: boolean;
  placeholder?: string;
  onSubmit?: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const matches = useMemo(() => searchProducts(query), [query]);
  const suggestions = matches.slice(0, MAX_SUGGESTIONS);

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function goToResults(q: string) {
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
    setOpen(false);
    onSubmit?.();
  }

  function goToProduct(product: SearchResult) {
    router.push(`/products/${product.category}`);
    setOpen(false);
    onSubmit?.();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (open && activeIndex >= 0 && suggestions[activeIndex]) {
      goToProduct(suggestions[activeIndex]);
    } else {
      goToResults(query.trim());
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }
    if (!open || suggestions.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    }
  }

  const showDropdown = open && query.trim().length > 0 && suggestions.length > 0;

  return (
    <div ref={containerRef} className={cn("group/search relative w-full", className)}>
      <form
        onSubmit={handleSubmit}
        role="search"
        className="relative w-full border-b border-neutral-400 transition-colors focus-within:border-neutral-900"
      >
        <Input
          type="search"
          name="q"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete="off"
          role="combobox"
          aria-expanded={showDropdown}
          aria-autocomplete="list"
          className="h-12 rounded-none border-0 bg-transparent pr-14 pl-0 text-base shadow-none focus-visible:border-0 focus-visible:ring-0 [&::-webkit-search-cancel-button]:hidden"
        />
        <button
          type="submit"
          aria-label="Search"
          className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-neutral-700 transition-colors hover:text-primary"
        >
          <Search className="size-5" strokeWidth={1.5} />
        </button>
      </form>

      {showDropdown && (
        <div className="absolute inset-x-0 top-full z-50 mt-2 overflow-hidden rounded-sm border bg-white text-left shadow-[0_24px_60px_-15px_rgba(0,0,0,0.25)]">
          <ul>
            {suggestions.map((product, index) => (
              <li key={`${product.category}-${product.slug}`}>
                <button
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => goToProduct(product)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={cn(
                    "flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors",
                    activeIndex === index ? "bg-secondary/60" : "hover:bg-secondary/40",
                  )}
                >
                  <span className="relative size-10 shrink-0 overflow-hidden rounded-sm bg-neutral-200">
                    <Image src={product.image} alt="" fill sizes="40px" className="object-cover" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground">
                      {product.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {product.categoryName}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => goToResults(query.trim())}
            className="flex w-full items-center justify-center border-t px-4 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-primary transition-colors hover:bg-secondary/40"
          >
            View All {matches.length} Result{matches.length === 1 ? "" : "s"}
          </button>
        </div>
      )}
    </div>
  );
}
