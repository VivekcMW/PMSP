import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import OperatingSystem from "@/components/OperatingSystem";
import Skills from "@/components/Skills";
import AiPmLoop from "@/components/AiPmLoop";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How I work: a continuous Discover → Define → Build → Measure loop, grounded in the fundamentals of AI product management.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        kicker="03 / Approach"
        title="How I take products from idea to production"
        dek="A continuous loop — with one difference from most PMs: I don't stop at Define. I design, build, and deploy with AI development tools."
      />

      <OperatingSystem />

      <section className="border-y border-border bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            kicker="Foundations"
            title="AI PM Fundamentals"
            subtitle="The five principles that guide every AI product decision I make."
          />
          <Reveal>
            <div className="flex justify-center">
              <AiPmLoop />
            </div>
          </Reveal>
        </div>
      </section>

      <Skills />
    </>
  );
}
