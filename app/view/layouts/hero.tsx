import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Construction site"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="text-white pl-4 sm:pl-8 lg:pl-24"> 
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/50 bg-white/10 px-4 py-1 text-xs tracking-widest">
            EXPERT SOLUTIONS
          </div>

          {/* Headings */}
          <h1 className="mt-4 text-5xl sm:text-6xl lg:text-[130px] leading-[0.95] font-extrabold">
            BUILDING FUTURES
          </h1>

          {/* Outlined secondary line */}
          <h2
            className="mt-3 text-4xl sm:text-5xl lg:text-[85px] leading-[1.05] font-extrabold"
            style={{ WebkitTextStroke: "2px #ffffff", color: "transparent" }}
          >
            Constructing Solutions
          </h2>
        </div>
      </div>
    </section>
  );
}
