// app/view/layouts/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Quick links",
    items: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "/expertise" },
      { label: "Company", href: "/company" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Warehouse Construction", href: "/expertise#warehouse" },
      { label: "House Construction", href: "/expertise#house" },
      { label: "Commercial Spaces", href: "/expertise#commercial" },
      { label: "Infrastructure Projects", href: "/expertise#infra" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/company#about" },
      { label: "Team", href: "/company#team" },
      { label: "Careers", href: "/company#careers" },
      { label: "News", href: "/company#news" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blogs", href: "/company#blog" },
      { label: "FAQs", href: "/contact#faqs" },
      { label: "Support", href: "/contact#support" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      aria-label={label}
      href={href}
      target="_blank"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      {/* ---------- Top CTA band ---------- */}
      <div className="relative border-b border-white/10">
        {/* optional faint blueprint bg (put /footer-pattern.svg in /public) */}
       {/* Left-side background only */}
<div className="pointer-events-none absolute inset-y-0 left-10 w-[680px] md:w-[20%] opacity-10">
  <Image
    src="/project-bg.png"   // put file in /public
    alt=""
    fill
    className="object-cover object-left"
    aria-hidden
  />
  {/* fade into the dark bg on the right */}
  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-neutral-900" />
</div>

        <div className="relative w-full pl-6 sm:pl-10 lg:pl-24 pr-4 py-10 md:py-14">
          <h2 className="max-w-5xl text-3xl md:text-5xl font-semibold leading-tight">
            Your Dream Project Awaits —{" "}
            <span className="text-white/80">Get Started</span>{" "}
            <span className="text-sky-400 font-extrabold">Today!</span>
          </h2>
          <Link
            href="/#quote"
            prefetch={false}
            //onClick={handleClick}
            className="group inline-flex items-center gap-2 rounded-[999px] bg-sky-600 px-5 py-2 text-white font-semibold hover:bg-sky-700 transition"
          >
            ↗
          </Link>
        </div>
      </div>

      {/* ---------- Middle: logo + columns ---------- */}
      <div className="w-full pl-6 sm:pl-10 lg:pl-24 pr-4 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10">
          {/* Brand block */}
          <div>
            <div className="rounded-2xl bg-white p-4 w-64">
              <Image src="/logo.png" alt="DEE INFRA BUILDTEC" width={220} height={90} />
            </div>
            <p className="mt-4 text-lg text-white/85 max-w-xs">
              We’re Solutions for all construction
            </p>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <nav key={col.title}>
                <h3 className="text-lg font-semibold mb-4">{col.title}</h3>
                <ul className="space-y-3 text-white/80">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <Link href={it.href} className="hover:text-white transition">
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="border-t border-white/10">
        <div className="w-full pl-6 sm:pl-10 lg:pl-24 pr-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>
            Copyright {new Date().getFullYear()} — All Rights Reserved By{" "}
            <Link href="/" className="underline hover:text-white">
              Construct.Co
            </Link>
          </p>

          <div className="flex items-center gap-3">
            <SocialIcon href="https://facebook.com" label="Facebook">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.95 8.44-9.94z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://x.com" label="X (Twitter)">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M18.3 2H21l-6.9 7.9L22 22h-6.9l-4.6-5.9L4.3 22H2l7.5-8.6L2 2h6.9l4.2 5.6L18.3 2zm-1.2 18h2L9.1 4H7.1l10 16z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://behance.net" label="Behance">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M22 7h-6V5h6v2zM9.7 11.7c.9-.4 1.4-1.2 1.4-2.3C11.1 7.4 9.9 6 7.2 6H2v12h5.6c3 0 4.4-1.6 4.4-3.9 0-1.7-.8-2.8-2.3-3.4zM4.7 8.4h2.4c1.1 0 1.7.6 1.7 1.5s-.6 1.5-1.8 1.5H4.7V8.4zm2.6 7.3H4.7v-3h2.7c1.3 0 2 .7 2 1.5s-.7 1.5-2.1 1.5zM17.2 6.9c-3 0-5 2.1-5 5.1s2 5.1 5 5.1c2.2 0 3.6-.9 4.4-2.4l-2-.9c-.4.8-1.2 1.3-2.4 1.3-1.4 0-2.4-.8-2.6-2.3h7.2c.1-.4.1-.8.1-1.2 0-3-1.9-4.7-4.7-4.7zm-2.4 4.1c.3-1.2 1.2-1.9 2.4-1.9 1.1 0 2 .7 2.2 1.9h-4.6z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" label="LinkedIn">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M6.94 6.5A2.44 2.44 0 1 1 2.06 6.5a2.44 2.44 0 0 1 4.88 0zM2.5 8.98h4.99V22H2.5V8.98zM9.49 8.98h4.78v1.77h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 5.99 3.33 5.99 7.66V22h-4.99v-6.2c0-1.48-.03-3.39-2.07-3.39-2.07 0-2.39 1.61-2.39 3.29V22H9.49V8.98z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
