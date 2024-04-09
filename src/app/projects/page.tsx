import ProjectCard from "@/components/project-card";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Projects() {
  return (
    <main>
      <HeroParallax products={products} />

      <section className="mx-auto py-20 container">
        <h1 className="scroll-m-20 mb-20 font-extrabold text-4xl text-center lg:text-5xl tracking-tight">
          Case Studies
        </h1>

        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProjectCard
            title="Unsocial"
            link="/projects/unsocial"
            image="/projects/unsocial/1.jpg"
            description="A simplified version of social media."
          />
          <ProjectCard
            title="ReHRM"
            link="/projects/unsocial"
            image="/projects/unsocial/2.jpg"
            description="A simplified version of social media."
          />
          <ProjectCard
            title="Study Central"
            link="/projects/unsocial"
            image="/projects/unsocial/3.jpg"
            description="A simplified version of social media."
          />
          <ProjectCard
            title="Snap Convo"
            link="/projects/unsocial"
            image="/projects/unsocial/4.jpg"
            description="A simplified version of social media."
          />
          <ProjectCard
            title="Unsocial"
            link="/projects/unsocial"
            image="/projects/unsocial/5.jpg"
            description="A simplified version of social media."
          />
          <ProjectCard
            title="ReHRM"
            link="/projects/unsocial"
            image="/projects/unsocial/6.jpg"
            description="A simplified version of social media."
          />
          <ProjectCard
            title="Study Central"
            link="/projects/unsocial"
            image="/projects/unsocial/7.jpg"
            description="A simplified version of social media."
          />
          <ProjectCard
            title="Snap Convo"
            link="/projects/unsocial"
            image="/projects/unsocial/1.jpg"
            description="A simplified version of social media."
          />
        </div>
      </section>
    </main>
  );
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/projects/unsocial/1.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/projects/unsocial/2.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/projects/unsocial/3.jpg",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/projects/unsocial/4.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/projects/unsocial/5.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/projects/unsocial/6.jpg",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/projects/unsocial/7.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/projects/unsocial/1.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/projects/unsocial/2.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/projects/unsocial/3.jpg",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/projects/unsocial/4.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/projects/unsocial/5.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/projects/unsocial/6.jpg",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/projects/unsocial/7.jpg",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/projects/unsocial/1.jpg",
  },
];
