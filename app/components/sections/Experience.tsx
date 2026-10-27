import { experiences } from "@/app/data/experience";
import ExperienceCard from "../ui/card/ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <div className="max-w-3xl space-y-4">
        <p className="text-eyebrow">Career Journey</p>

        <h2 className="text-section-title text-foreground">
          Where I've contributed.
        </h2>

        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          My professional journey building web applications, collaborating with
          cross-functional teams, and creating better user experiences.
        </p>
      </div>

      <div className="flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${experience.period}`}
            {...experience}
            variant="minimal"
            className={
              index < experiences.length - 1
                ? "border-b border-border py-6 sm:py-8"
                : "py-6 sm:py-8"
            }
          />
        ))}
      </div>
    </section>
  );
}
