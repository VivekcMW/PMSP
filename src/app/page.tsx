import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CaseStudies />
      <Testimonials />

      {/* CTA strip */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-accent px-8 py-10 text-white sm:flex-row sm:px-12">
              <div>
                <h2 className="text-2xl font-semibold">
                  Let&apos;s build the roadmap.
                </h2>
                <p className="mt-2 text-sm text-white/80">
                  Open to senior product roles, AI product consulting, and
                  interesting 0→1 problems.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
              >
                Get in touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
