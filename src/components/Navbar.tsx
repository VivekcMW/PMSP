"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, FileDown } from "lucide-react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/teardowns", label: "Teardowns" },
  { href: "/writing", label: "Writing" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/why-me", label: "Why Me" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-sm text-white">
            SP
          </span>
          <span className="hidden sm:block">I am Suraj Prakash</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                isActive(l.href)
                  ? "font-medium text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {l.label}
              {isActive(l.href) && (
                <span className="absolute inset-x-3 -bottom-3.25 h-0.5 rounded-full bg-accent" />
              )}
            </Link>
          ))}
          <a
            href="/Suraj-Prakash-Resume.pdf"
            download="Suraj-Prakash-Resume.pdf"
            className="ml-3 flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            <FileDown size={16} />
            Resume
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-surface px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm ${
                isActive(l.href) ? "font-medium text-accent" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/Suraj-Prakash-Resume.pdf"
            download="Suraj-Prakash-Resume.pdf"
            className="mt-2 flex w-fit items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white"
          >
            <FileDown size={16} />
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
