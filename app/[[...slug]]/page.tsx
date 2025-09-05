// app/[[...slug]]/page.tsx
import HomePage from "../view/pages/home-page";
import ProjectsPage from "../view/pages/projects-page";
import ExpertisePage from "../view/pages/expertise-page";
import CompanyPage from "../view/pages/company-page";
import ContactPage from "../view/pages/contact-page";
import GetQuotesPage from "../view/section/get-quotes-form";
import { notFound } from "next/navigation";

const ROUTES: Record<string, React.ComponentType<any>> = {
  "": HomePage,
  projects: ProjectsPage,
  expertise: ExpertisePage,
  company: CompanyPage,
  contact: ContactPage,
  quote: GetQuotesPage,
};


export default async function RoutedPage(props: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await props.params;     
  const key = (slug ?? []).join("/");         
  const Comp = ROUTES[key];
  if (!Comp) notFound();
  return <Comp />;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ["projects"] },
    { slug: ["expertise"] },
    { slug: ["company"] },
    { slug: ["contact"] },
    { slug: ["quote"] },
  ];
}

// Also await params in metadata
export async function generateMetadata(
  props: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await props.params;  
  const key = (slug ?? []).join("/");
  const titles: Record<string, string> = {
    "": "Home",
    projects: "Projects",
    expertise: "Expertise",
    company: "Company",
    contact: "Contact"
  };
  return { title: titles[key] ? `DEE Infra | ${titles[key]}` : "DEE Infra" };
}
