import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { teardowns } from "@/data/teardowns";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Teardowns",
  description:
    "Product teardowns — how I analyze products: diagnosis, opportunities, prioritization, and metrics.",
};

export default function TeardownsPage() {
  return (
    <>
      <PageHeader
        kicker="05 / Teardowns"
        title="Product Teardowns"
        dek="How I think about other people's products — diagnosis, sized opportunities, a prioritized recommendation, and the metrics I'd watch. The same judgment I bring to a roadmap, applied in public."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {teardowns.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.08}>
              <Link
                href={`/teardowns/${t.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-medium text-accent">
                    {t.product}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-colors group-hover:text-accent"
                  />
                </div>
                <h2 className="flex-1 text-lg font-semibold leading-snug group-hover:text-accent">
                  {t.title}
                </h2>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted">
                  {t.angle}
                </p>
                <p className="mt-4 flex items-center gap-1.5 border-t border-border pt-4 text-xs text-muted">
                  <Clock size={12} />
                  {t.readTime} read
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
