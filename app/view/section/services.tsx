const WRAP = "mr-auto w-full max-w-[1200px] pl-4 sm:pl-8 lg:pl-24 pr-4";

const items = [
  { title: "Warehouse Construction", desc: "Tailored solutions for logistics facilities." },
  { title: "House Construction", desc: "From modern to traditional—crafted with care." },
  { title: "Commercial Spaces", desc: "High-quality offices and retail spaces." },
  { title: "Infrastructure Projects", desc: "Roads, bridges, and major civil works." },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className={WRAP}>
        <h2 className="text-center text-3xl font-bold text-sky-700 mb-12">OUR SERVICES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(({ title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="h-10 w-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mb-4 font-bold">
                •
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
