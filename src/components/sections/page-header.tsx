export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
