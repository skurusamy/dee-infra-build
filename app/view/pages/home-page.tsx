import Hero from "../layouts/hero";
import AboutCompany from "../section/about-company";
import FeaturedProjects from "../section/featured-projects";
import Partners from "../section/partners";
import Services from "../section/services";
import Testimonials from "../section/testimonials";
import Vision from "../section/vision";
import GetQuote from "../section/get-quotes-form";


export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Partners />
      <Vision />
      <AboutCompany />
      <Services />
      <Testimonials />
      <FeaturedProjects />
      <GetQuote />
    </main>
  );
}
