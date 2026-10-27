import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "split";
  className?: string;
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "split",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "split"
          ? "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          : "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <div className={align === "split" ? "max-w-2xl" : undefined}>
        <p className="flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground lg:justify-start">
          {number && <span className="text-primary">{number}</span>}
          {number && <span aria-hidden>·</span>}
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-light leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:text-right">
          {description}
        </p>
      )}
    </div>
  );
}
