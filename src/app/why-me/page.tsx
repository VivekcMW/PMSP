import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lightbulb, Rocket, LineChart, Users } from "lucide-react";
import { competencies } from "@/data/resume";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Why Hire Me",
  description:
    "My experience mapped to the four PM competencies top companies interview for: product sense, execution, analytical thinking, and leadership.",
};

const icons = [Lightbulb, Rocket, LineChart, Users];

export default function WhyMePage() {
  return (
    <>
      <PageHeader
        kicker="07 / Why Me"
        title="Mapped to how you'll interview me"
        dek="Top product organizations assess four things: product sense, execution, analytical thinking, and leadership. Here's my evidence for each — with receipts in the case studies."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {competencies.map((c, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={c.name} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-surface p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold">{c.name}</h2>
                      <p className="text-xs text-muted">{c.definition}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {c.evidence.map((e) => (
                      <li
                        key={e}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-accent px-8 py-10 text-white sm:flex-row sm:px-12">
            <div>
              <h2 className="text-2xl font-semibold">
                Want to test the evidence?
              </h2>
              <p className="mt-2 text-sm text-white/80">
                The case studies document the decisions, trade-offs, and metrics
                behind each claim.
              </p>
            </div>
            <Link
              href="/work"
              className="flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
            >
              Read the case studies
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
