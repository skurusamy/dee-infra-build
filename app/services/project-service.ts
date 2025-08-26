import { Project } from "../models/project";

export async function fetchProjects(): Promise<Project[]> {
  return [
    {
      id: "1",
      title: "Logistics hub expansion",
      image: "/projects/logistics.webp",
      status: "COMPLETED",
    },
    {
      id: "2",
      title: "Riverside Residence",
      image: "/projects/riverside.jpg",
      status: "COMPLETED",
    },
    {
      id: "3",
      title: "Downtown Office Tower",
      image: "/projects/office.webp",
      status: "COMPLETED",
    },
    {
      id: "4",
      title: "Metropolitan Lofts",
      image: "/projects/lofts.jpg",
      status: "UPCOMING",
    },
    {
      id: "5",
      title: "Healthcare Innovation Center",
      image: "/projects/healthcare.jpeg",
      status: "UPCOMING",
    },
    {
      id: "6",
      title: "Skyline Tower",
      image: "/projects/skyline.jpeg",
      status: "UPCOMING",
    },
  ];
}
