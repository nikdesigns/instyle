"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = query.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
    onSubmit?.();
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={cn("group/search relative w-full border-b border-neutral-400 transition-colors focus-within:border-neutral-900", className)}
    >
      <Input
        type="search"
        name="q"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
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
  );
}
