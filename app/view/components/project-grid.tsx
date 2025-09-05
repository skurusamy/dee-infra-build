import { Project } from "@/app/models/project";
import ProjectCard from "./project-card";

export default function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(p => <ProjectCard key={p.id} project={p} />)}
    </div>
  );
}
