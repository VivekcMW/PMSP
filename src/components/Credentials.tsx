import { Award, GraduationCap, Sparkles } from "lucide-react";
import { certifications, education } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Credentials"
          title="Education & Certifications"
        />

        <div className="mb-10 grid gap-6 md:grid-cols-2">
          {education.map((e) => (
            <Reveal key={e.degree}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <h3 className="font-semibold">{e.degree}</h3>
                  <p className="mt-1 text-sm text-muted">{e.school}</p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {e.period} · {e.focus}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.03}>
              <div
                className={`flex h-full items-start gap-3 rounded-xl border p-4 ${
                  c.ai
                    ? "border-accent/30 bg-accent-soft"
                    : "border-border bg-surface"
                }`}
              >
                <span className={c.ai ? "text-accent" : "text-muted"}>
                  {c.ai ? <Sparkles size={16} /> : <Award size={16} />}
                </span>
                <div>
                  <p className="text-sm font-medium leading-snug">{c.name}</p>
                  <p className="mt-0.5 text-xs text-muted">
                    {c.issuer}
                    {c.ai && (
                      <span className="ml-2 rounded bg-accent px-1.5 py-0.5 font-mono text-[10px] text-white">
                        AI TRACK
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
