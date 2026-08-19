import { Reveal } from "./Reveal";

export function FeatureSection({
  eyebrow,
  title,
  copy,
  visual,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-12 py-20 sm:grid-cols-2 sm:gap-16 sm:py-28">
      <Reveal className={reverse ? "sm:order-2" : ""}>
        <span className="text-xs font-semibold uppercase tracking-wider text-accent-2">
          {eyebrow}
        </span>
        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          {copy}
        </p>
      </Reveal>
      <Reveal delay={120} className={reverse ? "sm:order-1" : ""}>
        {visual}
      </Reveal>
    </div>
  );
}
