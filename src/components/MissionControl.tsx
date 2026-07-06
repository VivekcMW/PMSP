"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  Globe2,
  CheckCircle2,
  GitPullRequest,
  Bot,
} from "lucide-react";

const feed = [
  {
    icon: CheckCircle2,
    text: "Inventory Viewer — deployed",
    meta: "day 15 · 0 engineers",
    tone: "teal",
  },
  {
    icon: Bot,
    text: "AI Performance Mirror — live",
    meta: "Zoho Sprint API · production",
    tone: "accent",
  },
  {
    icon: GitPullRequest,
    text: "Programmatic feature rollout",
    meta: "dependencies cleared · shipped",
    tone: "accent",
  },
  {
    icon: CheckCircle2,
    text: "Usability testing round complete",
    meta: "rework ↓30%",
    tone: "teal",
  },
];

const kpis = [
  { icon: Rocket, label: "Products shipped solo", value: "2" },
  { icon: TrendingUp, label: "Rework reduced", value: "−30%" },
  { icon: Globe2, label: "Markets onboarded", value: "6+" },
];

const sparkPoints = "0,36 20,30 40,32 60,22 80,25 100,14 120,18 140,8 160,10 180,2";

export default function MissionControl() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible((v) => (v >= feed.length ? 1 : v + 1));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-md">
      {/* window chrome */}
      <div className="rounded-2xl border border-border bg-surface shadow-xl shadow-accent/5">
        <div className="flex items-center gap-2 border-b border-border px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal" />
          <span className="ml-3 font-mono text-xs text-muted">
            mission-control — suraj@pm
          </span>
        </div>

        <div className="p-5">
          {/* KPI tiles */}
          <div className="grid grid-cols-3 gap-3">
            {kpis.map((k) => {
              const Icon = k.icon;
              return (
                <div
                  key={k.label}
                  className="rounded-xl border border-border bg-background p-3"
                >
                  <Icon size={15} className="text-accent" />
                  <p className="mt-2 text-lg font-semibold leading-none">
                    {k.value}
                  </p>
                  <p className="mt-1.5 text-[10px] leading-tight text-muted">
                    {k.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* sparkline */}
          <div className="mt-4 rounded-xl border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium">Product velocity</p>
              <span className="rounded bg-teal-soft px-1.5 py-0.5 font-mono text-[10px] font-medium text-teal">
                ↑ trending
              </span>
            </div>
            <svg viewBox="0 0 180 40" className="mt-3 h-12 w-full">
              <defs>
                <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1D65AF" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#1D65AF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.polyline
                points={sparkPoints}
                fill="none"
                stroke="#1D65AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
              />
              <polygon
                points={`${sparkPoints} 180,40 0,40`}
                fill="url(#sparkFill)"
              />
            </svg>
          </div>

          {/* shipping feed */}
          <div className="mt-4 rounded-xl border border-border bg-background p-4">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
              Shipping log
            </p>
            <div className="space-y-2.5">
              <AnimatePresence initial={false}>
                {feed.slice(0, visible).map((f) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.text}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="flex items-start gap-2.5"
                    >
                      <Icon
                        size={14}
                        className={
                          f.tone === "teal" ? "mt-0.5 text-teal" : "mt-0.5 text-accent"
                        }
                      />
                      <div>
                        <p className="text-xs font-medium leading-snug">
                          {f.text}
                        </p>
                        <p className="font-mono text-[10px] text-muted">
                          {f.meta}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
