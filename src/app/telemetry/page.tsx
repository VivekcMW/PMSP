import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TelemetryPanel from "@/components/TelemetryPanel";
import Reveal from "@/components/Reveal";
import { Boxes, GitBranch, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Telemetry",
  description:
    "This site, instrumented — live performance metrics measured in your browser right now.",
};

const buildFacts = [
  {
    icon: Boxes,
    label: "Static routes",
    value: "15+",
    detail: "Every page pre-rendered at build time",
  },
  {
    icon: GitBranch,
    label: "Engineering headcount",
    value: "0",
    detail: "Designed, built & deployed by one PM",
  },
  {
    icon: Cpu,
    label: "Stack",
    value: "Next.js",
    detail: "TypeScript · Tailwind v4 · Framer Motion",
  },
];

export default function TelemetryPage() {
  return (
    <>
      <PageHeader
        kicker="08 / Telemetry"
        title="This site, instrumented"
        dek="A PM should instrument everything — including their own portfolio. The numbers below are measured live in your browser, right now, using the Performance API. No fake dashboards."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
          Live — this page load
        </h2>
        <TelemetryPanel />

        <h2 className="mb-6 mt-14 font-mono text-xs uppercase tracking-widest text-accent">
          Build facts
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {buildFacts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <f.icon size={18} />
                </span>
                <p className="mt-4 font-mono text-2xl font-semibold">
                  {f.value}
                </p>
                <p className="mt-1 text-sm font-medium">{f.label}</p>
                <p className="mt-1 text-xs text-muted">{f.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 rounded-2xl border border-border bg-surface p-6 text-sm leading-relaxed text-muted">
            Why this page exists: I believe products should measure themselves,
            and the people who build them should be comfortable reading the
            numbers. This portfolio is fully static, ships no tracking scripts,
            and still tells you exactly how fast it is — because performance is
            a product feature, and evidence beats claims.
          </p>
        </Reveal>
      </section>
    </>
  );
}
