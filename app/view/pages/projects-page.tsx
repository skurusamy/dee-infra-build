import { fetchProjects } from "@/app/services/project-service";
import ProjectGrid from "../components/project-grid";
import Image from "next/image";

export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <section className="section relative py-16 overflow-hidden">  {/* <- relative! */}

      {/* Background layer */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/project-bg.png"    
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
        {/* optional light/dark tint so cards stay readable */}
        <div className="absolute inset-0 bg-white/80" />
        {/* or use bg-black/30 for a darker look */}
      </div>

      {/* Foreground content */}
      <div className="relative max-w-6xl mx-auto px-6">
        <h1 className="text-center text-3xl font-bold text-sky-700 mb-10">
          OUR FEATURED PROJECT
        </h1>
        <ProjectGrid items={projects} />
      </div>
    </section>
  );
}
