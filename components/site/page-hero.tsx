import { CalendlyPopupButton } from "@/components/site/calendly-popup-button";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5fb_48%,#f2f2f2_100%)] py-20">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,rgba(4,119,191,0.18),transparent_36%),radial-gradient(circle_at_top_right,rgba(3,76,140,0.14),transparent_32%)]" />
      <Container className="relative">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-[var(--color-secondary)]/15 bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm backdrop-blur">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CalendlyPopupButton label="Book a Free Strategy Call" />
            <Button href="/case-studies" variant="ghost">
              View results
            </Button>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Available for calls across IST, UAE, UK and US-friendly hours.
          </p>
        </div>
      </Container>
    </section>
  );
}
