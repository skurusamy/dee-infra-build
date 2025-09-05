import Image from "next/image";
import { fetchProjects } from "../../services/project-service";

const WRAP = "mr-auto w-full max-w-[1200px] pl-4 sm:pl-8 lg:pl-24 pr-4";

export default async function FeaturedProjects() {
  const projects = await fetchProjects();

  return (
    <section className="py-16 bg-gray-50">
      <div className={WRAP}>
        <h2 className="text-center text-3xl font-bold text-sky-700 mb-10">OUR FEATURED PROJECT</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p: any) => (
            <article key={p.id} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="relative h-48">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg leading-snug">{p.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <button className="text-sm text-sky-700 font-semibold">VIEW DETAILS ↗</button>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      p.status === "Completed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {p.status?.toUpperCase()}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
