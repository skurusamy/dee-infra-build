"use client";

import { useEffect, useState } from "react";
import { fetchTestimonials } from "../../services/testimonial-service";

const WRAP = "wrap";

export default function Testimonials() {
  const [items, setItems] = useState<any[]>([]);
  const [i, setI] = useState(0);

  useEffect(() => { fetchTestimonials().then(setItems); }, []);
  if (!items.length) return null;

  const t = items[i];

  return (
    <section className="section py-16 bg-neutral-900 text-white">
      <div className={WRAP}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">WHAT OUR CLIENTS SAY</h2>
          <div className="flex items-center gap-3 text-white/80">
            <button onClick={() => setI((p) => (p + items.length - 1) % items.length)}
                    className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/15">‹</button>
            <span className="text-sm">{i + 1} / {items.length}</span>
            <button onClick={() => setI((p) => (p + 1) % items.length)}
                    className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/15">›</button>
          </div>
        </div>

        <div className="bg-neutral-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
          <img src={t.image} alt={t.name} className="h-16 w-16 rounded-full object-cover" />
          <div>
            <p className="text-lg mb-3">“{t.text}”</p>
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-white/70">{t.role}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
