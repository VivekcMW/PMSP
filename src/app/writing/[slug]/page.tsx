import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, ListChecks } from "lucide-react";
import { articles } from "@/data/writing";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return {
    title: a ? a.title : "Article",
    description: a?.dek,
  };
}

export default async function ArticlePage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const index = articles.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const a = articles[index];
  const next = articles[(index + 1) % articles.length];

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link
        href="/writing"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={15} />
        All writing
      </Link>

      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {a.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">{a.dek}</p>
        <p className="mt-4 flex items-center gap-1.5 text-xs text-muted">
          <Clock size={12} />
          {a.readTime} read
        </p>
      </header>

      <div className="space-y-10">
        {a.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-xl font-semibold">{s.heading}</h2>
            <div className="mt-3 space-y-4">
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}

        <div className="rounded-2xl border border-accent bg-accent-soft p-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white">
              <ListChecks size={18} />
            </span>
            <h2 className="text-lg font-semibold">Takeaways</h2>
          </div>
          <ul className="space-y-2.5">
            {a.takeaways.map((t) => (
              <li key={t} className="flex gap-2.5 text-sm leading-relaxed">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/writing/${next.slug}`}
          className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all hover:border-accent"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Next essay
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
