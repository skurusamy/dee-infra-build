import type { Service } from "../models/services";

export async function fetchServices(): Promise<Service[]> {
    return [
{
    id: 's1',
    title: "Warehouse Construction",
    desc: "End-to-end industrial builds, optimized for throughput, safety, and future expansion.",
    image: "/services/warehouse.jpg",
  },
  {
    id: 's2',
    title: "Commercial Spaces",
    desc: "Smart, flexible spaces for offices, retail, and mixed-use—built to attract and retain customers.",
    image: "/services/commercial.jpg",
  },
  {
    id: 's3',
    title: "Infrastructure Projects",
    desc: "Reliable civil works—roads, utilities, and public facilities—delivered to rigorous standards.",
    image: "/services/infrastructure.jpg",
  }]
};