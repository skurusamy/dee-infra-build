import type { Partner } from "../models/partner";

export async function fetchPartners(): Promise<Partner[]> {
  return [
    { id: "l1", name: "Logo 1", logo: "/partners/logo1.png", width: 120, height: 60 },
    { id: "l2", name: "Logo 2", logo: "/partners/logo2.png", width: 120, height: 60 },
    { id: "l3", name: "Logo 3", logo: "/partners/logo3.png", width: 120, height: 60 },
    { id: "l4", name: "Logo 4", logo: "/partners/logo4.png", width: 120, height: 60 },
    { id: "l5", name: "Logo 5", logo: "/partners/logo5.png", width: 120, height: 60 },
  ];
}
