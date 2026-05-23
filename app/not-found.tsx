import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
            404
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-950">
            This page is out of range.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The page you requested does not exist or may have moved. Let&apos;s get you
            back to Zeebrag&apos;s main conversion path.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
          >
            Go to homepage
          </Link>
        </div>
      </Container>
    </section>
  );
}
