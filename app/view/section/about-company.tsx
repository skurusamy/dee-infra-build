import Image from "next/image";

const WRAP = "wrap";

export default function AboutCompany() {
  return (
    <section className="py-20 bg-white section">
      <div className={WRAP}>
        {/* TOP ROW: Photo • Copy • Sketch */}
        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* Left photo (tall) */}
          <div className="md:col-span-4">
            <div className="relative h-[420px] md:h-[500px] w-full max-w-[340px] sm:max-w-[300px] md:max-w-[300px] rounded-2xl overflow-hidden shadow">
              <Image
                src="/about-left.jpg"       // <- put image in /public
                alt="Construction equipment"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

          {/* Center copy */}
          <div className="md:col-span-6">
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white shadow-sm px-2 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-neutral-700">
              About our company
            </div>

            <h2 className="mt-5 text-[40px] leading-[1.05] md:text-[64px] font-extrabold tracking-tight text-neutral-900">
              Chennai’s Trusted Name for
              <span className="block">Quality Homes</span>
            </h2>

            <p className="mt-6 text-lg text-neutral-700 leading-8 max-w-2xl">
              Dee Infra Buildtec – Chennai’s trusted name in construction. We build
              dream homes, duplexes, and villas with engineering precision, Vasthu
              compliance, and lasting quality — from planning to interiors, delivered
              on time with care and integrity.
            </p>
          </div>

          {/* Right sketch (narrow light grey tile) */}
          <div className="md:col-span-2">
            <div className="relative h-[400px] md:h-[1000px] rounded-xl overflow-hidden">
              <Image
                src="/project-bg.png"     // <- put sketch in /public
                alt="City sketch"
                fill
                className="object-contain p-4 md:p-6"
              />
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="mt-12 rounded-2xl bg-sky-700 text-white shadow-xl ring-1 ring-black/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center">
            {/* 1 */}
            <div className="p-10 md:p-12">
              <div className="text-[72px] leading-none font-extrabold">20+</div>
              <div className="mt-3 text-lg opacity-95">Complete Projects</div>
            </div>

            {/* 2 */}
            <div className="p-10 md:p-12 md:border-l md:border-white/20">
              <div className="text-[72px] leading-none font-extrabold">20+</div>
              <div className="mt-3 text-lg opacity-95">Projects Completed</div>
            </div>

            {/* 3 */}
            <div className="p-10 md:p-12 md:border-l md:border-white/20">
              <div className="text-[72px] leading-none font-extrabold">20+</div>
              <div className="mt-3 text-lg opacity-95">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
