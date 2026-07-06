import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
import Credentials from "@/components/Credentials";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/resume";
import { MapPin, Briefcase, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Product Manager with 5+ years scaling B2B SaaS across DOOH and programmatic ad tech.",
};

const highlights = [
  {
    icon: Briefcase,
    title: "5+ years in Ad Tech SaaS",
    text: "From Business Analyst to Senior Executive PM at Moving Walls — retail analytics, client onboarding, change management, innovation, and product leadership.",
  },
  {
    icon: Rocket,
    title: "AI-assisted 0→1 builder",
    text: "Hands-on experience independently designing, building, and shipping AI-powered production applications — no dedicated engineering support.",
  },
  {
    icon: MapPin,
    title: "LATAM + Asia markets",
    text: "Onboarded and scaled clients across Mexico, Brazil, Colombia, Chile, and Asian markets.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="02 / About"
        title="The person behind the products"
        dek={profile.summary}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <h.icon size={20} />
                </span>
                <h2 className="mt-4 font-semibold">{h.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {h.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Timeline />
      <Credentials />
    </>
  );
}
