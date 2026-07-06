import Link from "next/link";
import { profile } from "@/data/resume";

const sitemap = [
  { href: "/work", label: "Work" },
  { href: "/teardowns", label: "Teardowns" },
  { href: "/writing", label: "Writing" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/why-me", label: "Why Me" },
  { href: "/telemetry", label: "Telemetry" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-sm text-white">
                SP
              </span>
              <span>Suraj Prakash</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted">
              This site: designed, built &amp; shipped by me —{" "}
              <span className="font-medium text-foreground">
                0 engineers involved.
              </span>
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {sitemap.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex justify-end border-t border-border pt-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Suraj Prakash · {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
