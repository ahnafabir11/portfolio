import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

export default function CaseStudies() {
  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map(({ slug, title, thumbnail, description }) => (
        <ProjectCard
          key={slug}
          link={slug}
          title={title}
          image={thumbnail}
          description={description}
        />
      ))}
    </div>
  );
}
