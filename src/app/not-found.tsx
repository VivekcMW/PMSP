import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid-bg flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <SearchX size={32} />
        </span>
        <p className="mt-6 font-mono text-sm text-accent">Error 404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          This page didn&apos;t make the roadmap.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          The page you&apos;re looking for was deprioritized, deprecated, or
          never shipped. Let&apos;s get you back to something that did.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <Link
            href="/work"
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            View my work
          </Link>
        </div>
      </div>
    </section>
  );
}
