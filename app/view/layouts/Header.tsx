"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MouseEvent } from "react";

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

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // If we're already on the homepage, prevent navigation and scroll
    if (pathname === "/" || pathname?.startsWith("/?")) {
      e.preventDefault();
      scrollToQuote();
    }
  };

  return (
    <header className="fixed top-1 left-1 right-0 z-50">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex items-center justify-between gap-4 rounded-[24px] border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg px-4 sm:px-6 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="DEE INFRA BUILDTEC"
              width={250}
              height={200}
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Centered nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10 text-[18px]">
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

          {/* CTA */}
          <Link
            href="/#quote"
            prefetch={false}
            onClick={handleClick}
            className="group inline-flex items-center gap-2 rounded-[999px] bg-sky-600 px-5 py-2 text-white font-semibold hover:bg-sky-700 transition"
          >
            GET FREE QUOTE
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/25 group-hover:bg-white/35">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
