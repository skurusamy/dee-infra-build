import Image from "next/image";
import Link from "next/link";
import type { Project } from "../../models/project";

const pillClasses: Record<Project["status"], string> = {
  COMPLETED:
    "text-green-700 border-green-400 bg-green-50",
  UPCOMING:
    "text-amber-700 border-amber-400 bg-amber-50",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="rounded-3xl overflow-hidden border border-gray-200 bg-white
                 shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-0.5"
    >
      {/* Top image */}
      <div className="relative w-full aspect-[16/10]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          priority={false}
        />
      </div>

      {/* Body */}
      <div className="px-6 sm:px-7 pt-6 pb-7">
        {/* Big title */}
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          {project.title}
        </h3>

        {/* Action row */}
        <div className="mt-6 flex items-center justify-between">
          <Link
            href={`/projects/${project.id}`}
            className="text-gray-900 font-semibold tracking-wide text-sm sm:text-base
                       inline-flex items-center gap-2 group"
          >
            <span>VIEW DETAILS</span>
            <span className="translate-y-[1px] transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </Link>

          <span
            className={`px-4 py-1.5 rounded-full border-2 text-xs sm:text-sm font-semibold ${pillClasses[project.status]}`}
          >
            {project.status}
          </span>
        </div>
      </div>
    </article>
  );
}
