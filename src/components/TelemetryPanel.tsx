"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  Gauge,
  Layers,
  Timer,
  Wifi,
  PackageCheck,
} from "lucide-react";
import Reveal from "./Reveal";

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: React.ElementType;
};

function grade(ms: number, good: number, ok: number) {
  if (ms <= good) return { tone: "text-teal bg-teal-soft", label: "good" };
  if (ms <= ok) return { tone: "text-amber bg-amber-soft", label: "ok" };
  return { tone: "text-red-600 bg-red-50", label: "slow" };
}

export default function TelemetryPanel() {
  const [metrics, setMetrics] = useState<Metric[] | null>(null);
  const [scores, setScores] = useState<Record<string, { tone: string; label: string }>>({});

  useEffect(() => {
    // Real measurements from the browser's Performance API — no fake numbers.
    const nav = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming | undefined;
    const paint = performance.getEntriesByType("paint");
    const fcp = paint.find((p) => p.name === "first-contentful-paint");

    const ttfb = nav ? Math.round(nav.responseStart - nav.requestStart) : null;
    const domLoad = nav
      ? Math.round(nav.domContentLoadedEventEnd - nav.startTime)
      : null;
    const fullLoad = nav ? Math.round(nav.loadEventEnd - nav.startTime) : null;
    const fcpMs = fcp ? Math.round(fcp.startTime) : null;
    const transfer = nav ? (nav.transferSize / 1024).toFixed(1) : null;
    const conn =
      (navigator as unknown as { connection?: { effectiveType?: string } })
        .connection?.effectiveType ?? "unknown";

    const m: Metric[] = [
      {
        label: "Time to First Byte",
        value: ttfb === null ? "—" : `${ttfb} ms`,
        detail: "Server response for this page load",
        icon: Timer,
      },
      {
        label: "First Contentful Paint",
        value: fcpMs === null ? "—" : `${fcpMs} ms`,
        detail: "First pixel of content rendered",
        icon: Activity,
      },
      {
        label: "DOM Ready",
        value: domLoad === null ? "—" : `${domLoad} ms`,
        detail: "Document parsed and interactive",
        icon: Layers,
      },
      {
        label: "Full Page Load",
        value: fullLoad !== null && fullLoad > 0 ? `${fullLoad} ms` : "—",
        detail: "All resources finished loading",
        icon: Gauge,
      },
      {
        label: "HTML Transfer Size",
        value: transfer === null ? "—" : `${transfer} KB`,
        detail: "Bytes over the wire for this document",
        icon: PackageCheck,
      },
      {
        label: "Your Connection",
        value: conn,
        detail: "Effective network type (browser-reported)",
        icon: Wifi,
      },
    ];

    setMetrics(m);
    setScores({
      "Time to First Byte": ttfb === null ? { tone: "", label: "" } : grade(ttfb, 200, 600),
      "First Contentful Paint": fcpMs === null ? { tone: "", label: "" } : grade(fcpMs, 1000, 2500),
      "DOM Ready": domLoad === null ? { tone: "", label: "" } : grade(domLoad, 1500, 3000),
    });
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {(metrics ?? []).map((m, i) => {
        const Icon = m.icon;
        const score = scores[m.label];
        return (
          <Reveal key={m.label} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon size={18} />
                </span>
                {score?.label && (
                  <span
                    className={`rounded px-2 py-0.5 font-mono text-[10px] font-medium ${score.tone}`}
                  >
                    {score.label}
                  </span>
                )}
              </div>
              <p className="mt-4 font-mono text-2xl font-semibold">{m.value}</p>
              <p className="mt-1 text-sm font-medium">{m.label}</p>
              <p className="mt-1 text-xs text-muted">{m.detail}</p>
            </div>
          </Reveal>
        );
      })}
      {!metrics && (
        <p className="text-sm text-muted">Measuring this page load…</p>
      )}
    </div>
  );
}
