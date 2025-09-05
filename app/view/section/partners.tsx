import Image from "next/image";
import Link from "next/link";
import { fetchPartners } from "../../services/partner-service";

const WRAP = "mr-auto w-full max-w-[2200px] pl-4 sm:pl-8 lg:pl-24 pr-4";

export default async function Partners() {
  const items = await fetchPartners();

  return (
    // negative top margin + higher z-index makes this card sit on top of the hero image
    <section className="relative -mt-16 sm:-mt-20 lg:-mt-28 z-20">
      <div className={WRAP}>
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[30%_1fr]">
            {/* left title block */}
            <div className="p-8 flex items-center justify-center border-b md:border-b-0 md:border-r">
              <h3 className="text-4xl font-bold text-sky-700 leading-snug">
                Our <br /> Trusted <br /> Partners
              </h3>
            </div>

            {/* logos */}
            <div className="px-6 py-8 flex items-center justify-center">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-8 sm:gap-12">
                {items.map((p) => {
                  const img = (
                    <Image
                      key={p.id}
                      src={p.logo}
                      alt={p.name}
                      width={p.width ?? 120}
                      height={p.height ?? 60}
                      className="object-contain"
                    />
                  );
                  return p.url ? (
                    <Link key={p.id} href={p.url} target="_blank" aria-label={p.name}>
                      {img}
                    </Link>
                  ) : (
                    <div key={p.id}>{img}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
