import { operatingSystem } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function OperatingSystem() {
  return (
    <section id="how-i-work" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="How I Work"
          title="My Operating System"
          subtitle="A continuous loop — with one difference from most PMs: I don't stop at Define."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {operatingSystem.map((os, i) => (
            <Reveal key={os.step} delay={i * 0.08}>
              <div
                className={`h-full rounded-2xl border p-6 shadow-sm ${
                  os.step === "03"
                    ? "border-accent bg-accent-soft"
                    : "border-border bg-surface"
                }`}
              >
                <span
                  className={`font-mono text-3xl font-semibold ${
                    os.step === "03" ? "text-accent" : "text-border"
                  }`}
                >
                  {os.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{os.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {os.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {os.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
