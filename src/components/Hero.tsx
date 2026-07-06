"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, MapPin, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/resume";
import MissionControl from "./MissionControl";

const phrases = [
  "gathering requirements...",
  "designing UX...",
  "building with AI...",
  "deployed to production ✓",
];

function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (deleting && text.length > 0) {
          setText(text.slice(0, -1));
        } else if (deleting) {
          setDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        } else if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      },
      deleting ? 25 : 55
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <span className="font-mono text-sm text-accent sm:text-base">
      $ {text}
      <span className="animate-pulse">▌</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="grid-bg relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted shadow-sm">
              <MapPin size={13} className="text-accent" />
              {profile.location}
              <span className="mx-1 h-1 w-1 rounded-full bg-border" />
              <CheckCircle2 size={13} className="text-teal" />
              Open to opportunities
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
              I don&apos;t just write PRDs.{" "}
              <span className="text-accent">I ship them.</span>
            </h1>

            <p className="mt-5 text-sm font-medium text-muted sm:text-base">
              {profile.subtitle}
            </p>

            <div className="mt-8 w-fit rounded-lg border border-border bg-surface px-5 py-3 text-left shadow-sm max-lg:mx-auto">
              <Typewriter />
            </div>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted max-lg:mx-auto sm:text-base">
              {profile.summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 max-lg:justify-center">
              <Link
                href="/work"
                className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                View My Work
                <ArrowRight size={16} />
              </Link>
              <a
                href="/Suraj-Prakash-Resume.pdf"
                className="flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <FileDown size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <MissionControl />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
