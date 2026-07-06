import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Stethoscope,
  Lightbulb,
  Gauge,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { teardowns } from "@/data/teardowns";

export function generateStaticParams() {
  return teardowns.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = teardowns.find((x) => x.slug === slug);
  return {
    title: t ? t.title : "Teardown",
    description: t?.context.slice(0, 155),
  };
}

const effortImpactTone: Record<string, string> = {
  Low: "bg-teal-soft text-teal",
  Medium: "bg-amber-soft text-amber",
  High: "bg-accent-soft text-accent",
  "Very High": "bg-accent text-white",
};

export default async function TeardownPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const index = teardowns.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const t = teardowns[index];
  const next = teardowns[(index + 1) % teardowns.length];

  return (
    <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <Link
        href="/teardowns"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={15} />
        All teardowns
      </Link>

      <header className="mb-10">
        <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-medium text-accent">
          {t.product}
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.title}
        </h1>
        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-muted">
          {t.angle} · {t.readTime} read
        </p>
      </header>

      <div className="space-y-6">
        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Compass size={18} />
            </span>
            <h2 className="text-lg font-semibold">Context</h2>
          </div>
          <p className="text-sm leading-relaxed text-muted">{t.context}</p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Stethoscope size={18} />
            </span>
            <h2 className="text-lg font-semibold">Diagnosis</h2>
          </div>
          <div className="space-y-5">
            {t.diagnosis.map((d, i) => (
              <div key={d.point} className="flex gap-4">
                <span className="font-mono text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-semibold">{d.point}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {d.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Lightbulb size={18} />
            </span>
            <h2 className="text-lg font-semibold">Opportunities</h2>
          </div>
          <div className="space-y-4">
            {t.opportunities.map((o) => (
              <div
                key={o.name}
                className="rounded-xl border border-border bg-background p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold">{o.name}</p>
                  <div className="flex gap-1.5">
                    <span
                      className={`rounded px-2 py-0.5 font-mono text-[10px] font-medium ${effortImpactTone[o.effort]}`}
                    >
                      effort: {o.effort}
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 font-mono text-[10px] font-medium ${effortImpactTone[o.impact]}`}
                    >
                      impact: {o.impact}
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {o.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-accent bg-accent-soft p-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white">
              <CheckCircle2 size={18} />
            </span>
            <h2 className="text-lg font-semibold">My Recommendation</h2>
          </div>
          <p className="text-sm leading-relaxed text-foreground">
            {t.recommendation}
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Gauge size={18} />
            </span>
            <h2 className="text-lg font-semibold">How I&apos;d Measure It</h2>
          </div>
          <div className="rounded-xl bg-accent-soft p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              North Star
            </p>
            <p className="mt-1.5 text-sm font-semibold">{t.metrics.northStar}</p>
          </div>
          <p className="mb-3 mt-5 font-mono text-[10px] uppercase tracking-widest text-muted">
            Guardrail metrics
          </p>
          <ul className="space-y-2.5">
            {t.metrics.guardrails.map((g) => (
              <li
                key={g}
                className="flex gap-2.5 text-sm leading-relaxed text-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {g}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/teardowns/${next.slug}`}
          className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all hover:border-accent"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Next teardown
            </p>
            <p className="mt-1 text-lg font-semibold group-hover:text-accent">
              {next.title}
            </p>
          </div>
          <ArrowRight
            size={20}
            className="shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
          />
        </Link>
      </div>
    </article>
  );
}
