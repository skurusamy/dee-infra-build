"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, type MouseEvent } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/expertise", label: "Expertise" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

function scrollToQuote() {
  const el = document.getElementById("quote");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleQuoteClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" || pathname?.startsWith("/?")) {
      e.preventDefault();
      setOpen(false);
      scrollToQuote();
    }
  };

  return (
    <>
      {/* Header bar */}
      <header className="fixed top-1 left-1 right-1 z-[200]">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex items-center justify-between gap-3 rounded-[24px] border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg px-4 py-2">
            {/* Logo */}
            <Link href="/" className="shrink-0" aria-label="DEE INFRA BUILDTEC Home">
              <Image src="/logo.png" alt="DEE INFRA BUILDTEC" width={220} height={80} className="h-14 md:h-16 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:block" aria-label="Primary">
              <ul className="flex items-center gap-8 text-[18px]">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className={`pb-1 transition ${
                        pathname === n.href
                          ? "text-sky-700 font-semibold border-b-2 border-sky-600"
                          : "text-gray-800 hover:text-sky-700"
                      }`}
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/#quote"
              prefetch={false}
              onClick={handleQuoteClick}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2 text-white font-semibold hover:bg-sky-700 transition"
            >
              GET FREE QUOTE <span aria-hidden>↗</span>
            </Link>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-2">
              <Link
                href="/#quote"
                prefetch={false}
                onClick={handleQuoteClick}
                className="inline-flex items-center gap-1 rounded-full bg-sky-600 px-3 py-2 text-white text-sm font-semibold hover:bg-sky-700 transition"
              >
                Quote <span aria-hidden>↗</span>
              </Link>

              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="#111" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed inset-x-1 top-[76px] z-[190] transition ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="rounded-2xl border border-white/40 bg-white/95 shadow-xl overflow-hidden">
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-[16px] text-gray-800 hover:text-sky-700"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
