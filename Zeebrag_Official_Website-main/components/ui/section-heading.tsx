import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <span className="inline-flex rounded-full border border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}
