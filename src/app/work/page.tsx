import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Hammer } from "lucide-react";
import { caseStudies } from "@/data/resume";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "AI-built products designed, built, and shipped solo — from requirement gathering to production.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        kicker="01 / Work"
        title="Selected AI-Built Products"
        dek="Independent, 0→1 products — designed, built, and shipped solo with AI development tools (Claude AI, Replit AI Builder). No dedicated engineering support."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.1}>
              <Link
                href={`/work/${cs.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-soft px-3 py-1 text-xs font-medium text-amber">
                    <Sparkles size={12} />
                    {cs.badge}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-muted transition-colors group-hover:text-accent"
                  />
                </div>
                <h2 className="text-xl font-semibold group-hover:text-accent">
                  {cs.name}
                </h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                  {cs.category}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {cs.oneLiner}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-xl font-semibold text-accent">
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-tight text-muted">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cs.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-start gap-4 rounded-2xl border border-border bg-surface p-8">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Hammer size={20} />
            </span>
            <div>
              <h3 className="font-semibold">How these were built</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Every product here was taken from requirement gathering through
                live deployment using generative AI development tools — Claude
                AI and Replit AI Builder — with API integrations (Zoho Sprint,
                Gemini) and no dedicated engineering resources. The process is
                documented in each case study.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
