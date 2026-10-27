import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { PageHeader } from "@/components/sections/page-header";
import { journalArticles, formatJournalDate } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Practical, honest guidance on choosing and caring for natural stone surfaces.",
};

export default function JournalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Reading the Stone"
        description="Practical, honest guidance on choosing and caring for natural surfaces."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {journalArticles.map((article) => (
            <Link key={article.slug} href={`/journal/${article.slug}`} className="group block">
              <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-neutral-200">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span>{article.readTime}</span>
              </div>
              <h2 className="mt-2 text-xl font-semibold leading-tight transition-colors group-hover:text-primary">
                {article.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{article.excerpt}</p>
              <span className="mt-3 block text-sm text-muted-foreground">
                {formatJournalDate(article.date)}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
