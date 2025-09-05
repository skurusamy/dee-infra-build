import Image from "next/image";
import Link from "next/link";
import { fetchPartners } from "../../services/partner-service";

const WRAP_TWEAK =
    "mx-auto w-full max-w-[1500px] pl-2 sm:pl-4 lg:pl-6 pr-4 sm:pr-8 lg:pr-0";

export default async function Partners() {
  const items = await fetchPartners();

  return (
    <section className="section relative -mt-10 sm:-mt-8 lg:-mt-28 z-20">
      <div className={WRAP_TWEAK}>
        {/* shift the whole card to the RIGHT (tweak ml values as you like) */}
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden ml-2 sm:ml-4 lg:ml-8">
          <div className="grid grid-cols-1 md:grid-cols-[30%_1fr]">
            {/* left title block */}
            <div className="p-8 flex items-center justify-center border-b md:border-b-0 md:border-r">
              <h3 className="text-4xl font-bold text-sky-700 leading-snug">
                Our <br /> Trusted <br /> Partners
              </h3>
            </div>

            {/* logos: ONLY this block scrolls horizontally */}
            <div className="py-8">
  <div
    className="
      overflow-x-auto overscroll-x-contain scroll-smooth
      snap-x snap-mandatory
      [scrollbar-width:none] [-ms-overflow-style:none]
      [&::-webkit-scrollbar]:hidden
      scroll-px-8 sm:scroll-px-12 md:scroll-px-16   /* snap includes padding */
    "
    aria-label="Partner logos"
  >
    <ul className="flex items-center gap-8 sm:gap-12 md:gap-16 px-8 sm:px-12 md:px-16">
      {items.map((p) => {
        const img = (
          <Image
            key={p.id}
            src={p.logo}
            alt={p.name}
            width={ 150}
            height={ 75}
            className="h-12 sm:h-14 md:h-30 w-auto object-contain"
          />
        );
        const content = p.url ? (
          <Link href={p.url} target="_blank" aria-label={p.name}>
            {img}
          </Link>
        ) : (
          img
        );
        return (
          <li key={p.id} className="shrink-0 snap-start">
            {content}
          </li>
        );
      })}
    </ul>
  </div>
</div>

            {/* /logos */}
          </div>
        </div>
      </div>
    </section>
  );
}
