import { GitCommitHorizontal } from "lucide-react";
import { timeline } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section id="changelog" className="scroll-mt-20 border-y border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          kicker="Career Changelog"
          title="Release History"
          subtitle="Every role, shipped like a release. Six versions, continuously deployed since 2017."
        />

        <div className="relative ml-4 border-l-2 border-border pl-8 sm:ml-8">
          {timeline.map((t, i) => (
            <Reveal key={t.version} delay={i * 0.05}>
              <div className="relative pb-12 last:pb-0">
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-surface">
                  <GitCommitHorizontal size={13} className="text-accent" />
                </span>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-accent px-2 py-0.5 font-mono text-xs font-medium text-white">
                    {t.version}
                  </span>
                  {t.current && (
                    <span className="rounded-md bg-teal-soft px-2 py-0.5 font-mono text-xs font-medium text-teal">
                      latest
                    </span>
                  )}
                  <span className="font-mono text-xs text-muted">{t.period}</span>
                </div>

                <h3 className="mt-2 text-lg font-semibold">
                  {t.role}{" "}
                  <span className="font-normal text-muted">· {t.company}</span>
                </h3>

                <ul className="mt-3 space-y-1.5">
                  {t.notes.map((n) => (
                    <li key={n} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
