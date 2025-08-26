import { Project } from "@/app/models/project";
import ProjectCard from "./project-card";

export default function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-6 sm:gap-7 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(p => <ProjectCard key={p.id} project={p} />)}
    </div>
  );
}
