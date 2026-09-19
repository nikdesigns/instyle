import { Gem, Hammer, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Slab Selection",
    description:
      "Hand-picked granite, marble, and quartzite slabs imported from the world's finest quarries.",
  },
  {
    icon: Hammer,
    title: "Expert Fabrication",
    description:
      "Precision cutting, edging, and polishing by craftsmen with decades of combined experience.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "Every installation is backed by our workmanship warranty and quality assurance process.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description:
      "Reliable scheduling and professional installation crews that respect your timeline.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Why InStyle
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Crafted with Precision, Built to Last
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="size-7" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
