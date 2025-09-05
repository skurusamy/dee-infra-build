// app/components/Services.tsx
import Image from "next/image";
import { fetchServices } from "../../services/services-service";
import type { Service } from "../../models/services";
import { Factory, Home, Building2, HardHat } from "lucide-react";

// Fallback icon if service.icon is not provided
function fallbackIconFor(s: Service) {
  const cls = "h-7 w-7 text-[#2b66bf]"; // blue inside white circle
  const t = s.title.toLowerCase();
  if (t.includes("warehouse")) return <Factory className={cls} />;
  if (t.includes("house") || t.includes("residential")) return <Home className={cls} />;
  if (t.includes("commercial")) return <Building2 className={cls} />;
  if (t.includes("infrastructure") || t.includes("projects")) return <HardHat className={cls} />;
  return <Building2 className={cls} />;
}

export default async function ServicesSection() {
  const services: Service[] = await fetchServices();

  return (
    <section className="relative py-16">
      {/* SECTION BACKGROUND IMAGE + soft wash */}
      <Image
        src="/service-bg.jpg" // <- put your bg image in /public/bg/
        alt=""
        fill
        sizes="120vw"
        priority={false}
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-24">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-[#2b66bf]">
          OUR SERVICES
        </h2>

        {/* Exactly 3 per row on desktop, centered */}
        <ul className="mt-10 mx-auto max-w-[1200px] flex flex-wrap justify-center gap-8">
          {services.map((s, i) => {
            const IconNode = s.icon ?? fallbackIconFor(s);

            return (
              <li key={s.id} className="list-none">
                <article
                  tabIndex={0}
                  className="
                    group relative
                    w-[300px] sm:w-[330px] lg:w-[360px]
                    overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5
                    transform-gpu transition duration-300 ease-out
                    hover:scale-[1.06] md:hover:scale-[1.08]
                    hover:shadow-2xl hover:z-10 focus:outline-none
                  "
                >
                  {/* Top image */}
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={i === 0}
                    />
                  </div>

                  {/* BLUE BAND + ICON 
                      - Mobile: visible
                      - Desktop: fades/slides in on hover/focus
                  */}
                  <div
                    className="
                      pointer-events-none absolute inset-x-0 top-[44%] z-[1]
                      transition-all duration-300 ease-out
                      md:opacity-0 md:translate-y-2
                      md:group-hover:opacity-100 md:group-hover:translate-y-0
                      md:group-focus-within:opacity-100 md:group-focus-within:translate-y-0
                    "
                    aria-hidden
                  >
                    <div className="mx-0 rounded-md bg-[#2b66bf] shadow-lg">
                      <div className="relative h-14">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-xl ring-1 ring-black/10">
                            {IconNode}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-7 pt-14 pb-8 relative z-[1]">
                    <h3 className="text-xl font-semibold text-gray-900 text-center">{s.title}</h3>

                    {/* Mobile: show 2 lines always */}
                    <p className="mt-3 text-[15px] leading-7 text-gray-600 text-center md:hidden
                                  [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
                      {s.desc}
                    </p>

                    {/* Desktop: reveal 2 lines on hover/focus (with a smooth height fade) */}
                    <p className="
                          mt-3 hidden text-[15px] leading-7 text-gray-600 text-center md:block
                          md:max-h-0 md:opacity-0 md:overflow-hidden
                          md:transition-all md:duration-300
                          md:group-hover:max-h-20 md:group-hover:opacity-100
                          md:group-focus-within:max-h-20 md:group-focus-within:opacity-100
                          [-webkit-line-clamp:2] [-webkit-box-orient:vertical]
                        ">
                      {s.desc}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
