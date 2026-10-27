import { projects } from "@/app/data/projects";
import InfoCard, { type InfoCardData } from "../ui/card/InfoCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="space-y-8"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-3xl space-y-4">
        <p className="text-eyebrow">Selected Work</p>

        <h2
          id="projects-heading"
          className="text-section-title text-foreground"
        >
          Projects I've worked on.
        </h2>

        <p className="text-base text-muted sm:text-lg">
          A selection of professional projects showcasing my experience
          building, maintaining, and improving modern web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((project) => (
          <InfoCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
