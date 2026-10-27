import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { journalArticles, getJournalArticle, formatJournalDate } from "@/data/journal";

export function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getJournalArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getJournalArticle(slug);
  if (!article) notFound();

  const related = journalArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <section className="bg-secondary/40 pb-12 pt-32 sm:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span>{article.readTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{article.title}</h1>
          <span className="mt-4 block text-sm text-muted-foreground">
            {formatJournalDate(article.date)}
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/8] w-full overflow-hidden rounded-sm bg-neutral-200">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-5">
          {article.body.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2 key={i} className="pt-4 text-2xl font-bold text-foreground">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item.term ?? item.text} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        {item.term && <span className="font-semibold text-foreground">{item.term} </span>}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {block.text}
              </p>
            );
          })}
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t bg-secondary/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Keep Reading
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Related Articles</h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/journal/${item.slug}`} className="group block">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-neutral-200">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-tight transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.excerpt}</p>
                  <span className="mt-3 block text-sm text-muted-foreground">
                    {formatJournalDate(item.date)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
