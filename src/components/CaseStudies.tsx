import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { caseStudies } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Featured Work"
          title="Case Studies"
          subtitle="Independent, 0→1 products — designed, built, and shipped solo with AI development tools. No dedicated engineering support."
        />

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
                <h3 className="text-xl font-semibold group-hover:text-accent">
                  {cs.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                  {cs.category}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {cs.oneLiner}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}
