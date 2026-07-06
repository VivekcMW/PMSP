"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  BarChart3,
  Brain,
  Zap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const fundamentals = [
  {
    icon: Heart,
    title: "User Empathy",
    line: "AI is only magic when it solves a real human problem.",
  },
  {
    icon: BarChart3,
    title: "Data Fluency",
    line: "Knowing what the data can prove — and what it can't.",
  },
  {
    icon: Brain,
    title: "Model Intuition",
    line: "Knowing what AI can and can't do before writing the PRD.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    line: "Ship the prototype yourself. Validate in days, not quarters.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI",
    line: "Trust, fairness, and transparency are product features.",
  },
];

const ORBIT_DURATION = 60;
const SIZE = 380;
const RADIUS = 145;

export default function AiPmLoop() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % fundamentals.length),
      3200
    );
    return () => clearInterval(id);
  }, []);

  const current = fundamentals[active];

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative"
        style={{ width: SIZE, height: SIZE, maxWidth: "100%" }}
      >
        {/* orbit ring */}
        <div
          className="absolute rounded-full border border-dashed border-accent/25"
          style={{
            width: RADIUS * 2,
            height: RADIUS * 2,
            left: SIZE / 2 - RADIUS,
            top: SIZE / 2 - RADIUS,
          }}
        />

        {/* center node */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30"
          >
            <Sparkles size={20} />
            <span className="mt-1 font-mono text-xs font-medium">AI PM</span>
          </motion.div>
        </div>

        {/* orbiting nodes */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: ORBIT_DURATION,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {fundamentals.map((f, i) => {
            const angle = (i / fundamentals.length) * 2 * Math.PI - Math.PI / 2;
            const x = SIZE / 2 + RADIUS * Math.cos(angle);
            const y = SIZE / 2 + RADIUS * Math.sin(angle);
            const Icon = f.icon;
            const isActive = i === active;
            return (
              <motion.div
                key={f.title}
                className="absolute"
                style={{ left: x, top: y }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: ORBIT_DURATION,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.18 : 1,
                    boxShadow: isActive
                      ? "0 0 0 6px rgba(29, 101, 175, 0.15)"
                      : "0 1px 3px rgba(15, 28, 46, 0.08)",
                  }}
                  transition={{ duration: 0.4 }}
                  className={`-ml-7 -mt-7 flex h-14 w-14 items-center justify-center rounded-full border ${
                    isActive
                      ? "border-accent bg-accent text-white"
                      : "border-border bg-surface text-accent"
                  }`}
                >
                  <Icon size={22} />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* active fundamental caption */}
      <div className="mt-2 h-16 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-mono text-sm font-medium text-accent">
              {current.title}
            </p>
            <p className="mx-auto mt-1 max-w-xs text-xs leading-relaxed text-muted">
              {current.line}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
