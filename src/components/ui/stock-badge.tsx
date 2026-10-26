import { cn } from "@/lib/utils";

export function StockBadge({
  inStock,
  className,
}: {
  inStock: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] backdrop-blur-sm",
        inStock
          ? "bg-white/90 text-foreground ring-1 ring-black/10"
          : "bg-neutral-900/85 text-white/90",
        className,
      )}
    >
      <span
        className={cn(
          "size-1.5 shrink-0 rounded-full",
          inStock ? "bg-emerald-500" : "bg-white/40",
        )}
      />
      {inStock ? "In Stock" : "Out of Stock"}
    </span>
  );
}
