export type ProjectStatus = "COMPLETED" | "UPCOMING";

export interface Project {
  id: string;
  title: string;
  image: string;
  status: ProjectStatus;
}
