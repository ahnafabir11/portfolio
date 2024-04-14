import { HeroParallax } from "@/components/ui/hero-parallax";
import { parallaxProjects } from "@/data/projects";
import CaseStudies from "./case-studies";

export default function Projects() {
  return (
    <main>
      <HeroParallax products={parallaxProjects} />

      <section className="mx-auto py-20 container">
        <h1 className="scroll-m-20 mb-20 font-extrabold text-4xl text-center lg:text-5xl tracking-tight">
          Case Studies
        </h1>

        <CaseStudies />
      </section>
    </main>
  );
}
