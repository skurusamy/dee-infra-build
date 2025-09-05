import type { Testimonial } from "../models/testimonial";

export async function fetchTestimonials(): Promise<Testimonial[]> {
  return [
    {
      id: "t1",
      name: "Ramesh Kumar",
      role: "Warehouse owner",
      text:
        "Dee Infra Buildtec handled our warehouse project from start to finish with exceptional professionalism. Delivered on time and ready for operations.",
      image: "/testimonials/client1.jpg",
    },
    {
      id: "t2",
      name: "Priya Menon",
      role: "Home owner",
      text: "Our dream home became reality—great attention to detail and communication.",
      image: "/testimonials/client2.jpg",
    },
    {
      id: "t3",
      name: "Arun Raj",
      role: "Developer",
      text: "Reliable and efficient delivery on our commercial project.",
      image: "/testimonials/client3.jpg",
    },
  ];
}
