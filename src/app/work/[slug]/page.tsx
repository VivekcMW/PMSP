import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Hammer,
  Target,
  TrendingUp,
  Lightbulb,
  Sparkles,
  Scale,
  Gauge,
  PlayCircle,
} from "lucide-react";
import { caseStudies } from "@/data/resume";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  return {
    title: cs ? cs.name : "Case Study",
    description: cs?.oneLiner,
  };
}

const sections = [
  { id: "problem", label: "The Problem", icon: Target },
  { id: "discovery", label: "Discovery", icon: Search },
  { id: "decisions", label: "Decisions & Trade-offs", icon: Scale },
  { id: "build", label: "The Build", icon: Hammer },
  { id: "metrics", label: "Measuring Success", icon: Gauge },
  { id: "outcome", label: "Outcome", icon: TrendingUp },
  { id: "next", label: "What I'd Do Next", icon: Lightbulb },
];

function Block({
  id,
  icon: Icon,
  title,
  children,
}: Readonly<{
  id: string;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <div
      id={id}
      className="scroll-mt-24 rounded-2xl border border-border bg-surface p-8 shadow-sm"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
          <Icon size={18} />
        </span>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Bullets({ items }: Readonly<{ items: string[] }>) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-sm leading-relaxed text-muted"
        >
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const cs = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Link
        href="/work"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={15} />
        All work
      </Link>

      <header className="mb-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-soft px-3 py-1 text-xs font-medium text-amber">
          <Sparkles size={12} />
          {cs.badge}
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          {cs.name}
        </h1>
        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-muted">
          {cs.category}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {cs.oneLiner}
        </p>
      </header>

      {/* metrics band */}
      <div className="mb-12 grid grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-surface shadow-sm">
        {cs.metrics.map((m) => (
          <div key={m.label} className="px-6 py-6 text-center">
            <p className="text-3xl font-semibold text-accent">{m.value}</p>
            <p className="mt-1 text-xs text-muted">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        {/* sticky TOC */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-1">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
              On this page
            </p>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-accent-soft hover:text-accent"
              >
                <s.icon size={14} />
                {s.label}
              </a>
            ))}
            <div className="mt-6 border-t border-border pt-5">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cs.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[11px] text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </nav>
        </aside>

        <div className="space-y-6">
          <Block id="problem" icon={Target} title="The Problem">
            <p className="text-sm leading-relaxed text-muted">{cs.problem}</p>
          </Block>

          <Block id="discovery" icon={Search} title="Discovery">
            <Bullets items={cs.discovery} />
          </Block>

          <Block id="decisions" icon={Scale} title="Decisions & Trade-offs">
            <p className="mb-5 text-sm leading-relaxed text-muted">
              What I chose, what I sacrificed, and why.
            </p>
            <div className="space-y-4">
              {cs.decisions.map((d) => (
                <div
                  key={d.decision}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <p className="text-sm font-semibold">{d.decision}</p>
                  <p className="mt-2 text-xs text-muted">
                    <span className="font-mono font-medium text-amber">
                      trade-off
                    </span>{" "}
                    — {d.tradeoff}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    <span className="font-mono font-medium text-accent">
                      rationale
                    </span>{" "}
                    — {d.rationale}
                  </p>
                </div>
              ))}
            </div>
          </Block>

          <Block id="build" icon={Hammer} title="The Build">
            <Bullets items={cs.build} />
          </Block>

          {cs.videoUrl && (
            <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <PlayCircle size={18} />
                </span>
                <h2 className="text-lg font-semibold">Product Walkthrough</h2>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl border border-border">
                <iframe
                  src={cs.videoUrl}
                  title={`${cs.name} walkthrough`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <Block id="metrics" icon={Gauge} title="How I'd Measure Success">
            <div className="rounded-xl bg-accent-soft p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                North Star
              </p>
              <p className="mt-1.5 text-sm font-semibold text-foreground">
                {cs.northStar}
              </p>
            </div>
            <p className="mb-3 mt-5 font-mono text-[10px] uppercase tracking-widest text-muted">
              Guardrail metrics
            </p>
            <Bullets items={cs.guardrails} />
          </Block>

          <Block id="outcome" icon={TrendingUp} title="Outcome">
            <Bullets items={cs.outcome} />
          </Block>

          <Block id="next" icon={Lightbulb} title="What I'd Do Next">
            <p className="text-sm leading-relaxed text-muted">{cs.next}</p>
          </Block>

          {/* prev/next */}
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all hover:border-accent"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Next case study
              </p>
              <p className="mt-1 text-lg font-semibold group-hover:text-accent">
                {next.name}
              </p>
            </div>
            <ArrowRight
              size={20}
              className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
