"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#privacy", label: "Privacy" },
  { href: "#how-it-works", label: "How it works" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-xs font-bold text-black">
            FS
          </span>
          <span className="text-sm font-semibold tracking-tight">
            ForScribe
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-transform hover:scale-105"
        >
          Download
        </a>
      </div>
    </header>
  );
}
