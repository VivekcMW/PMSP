import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, PenLine } from "lucide-react";
import { articles } from "@/data/writing";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on product management, AI-assisted building, and shipping 0→1.",
};

export default function WritingPage() {
  return (
    <>
      <PageHeader
        kicker="06 / Writing"
        title="Notes from the build"
        dek="Essays on product management, AI-assisted development, and what actually happens between the PRD and production."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="space-y-6">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08}>
              <Link
                href={`/writing/${a.slug}`}
                className="group flex items-start gap-5 rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
              >
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent sm:flex">
                  <PenLine size={20} />
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold leading-snug group-hover:text-accent">
                    {a.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {a.dek}
                  </p>
                  <p className="mt-4 flex items-center gap-1.5 text-xs text-muted">
                    <Clock size={12} />
                    {a.readTime} read
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-muted transition-colors group-hover:text-accent"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
