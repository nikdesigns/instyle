import Link from "next/link";
import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";
import { journalArticles, formatJournalDate } from "@/data/journal";

export function JournalPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        number="06"
        eyebrow="Journal"
        title="Reading the stone"
        description="Practical, honest guidance on choosing and caring for natural surfaces."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {journalArticles.map((article) => (
          <Link key={article.slug} href={`/journal/${article.slug}`} className="group block">
            <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-neutral-200">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
              {article.readTime}
            </p>
            <h3 className="mt-2 text-lg font-semibold leading-tight transition-colors group-hover:text-primary">
              {article.title}
            </h3>
            <span className="mt-3 block text-sm text-muted-foreground">
              {formatJournalDate(article.date)}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
