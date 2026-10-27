import { skillGroups } from "@/app/data/skills";
import TagList from "../ui/TagList";

interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export default function Skills() {
  return (
    <section id="skills" className="space-y-8" aria-labelledby="skills-heading">
      <div className="max-w-3xl space-y-4">
        <p className="text-eyebrow">Technical Skills</p>

        <h2 id="skills-heading" className="text-section-title text-foreground">
          Tools of my trade.
        </h2>

        <p className="text-base text-muted sm:text-lg">
          The technologies, tools, and practices I use to build maintainable,
          user-focused web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="surface-card flex h-full flex-col gap-5 p-5 transition-colors duration-200 hover:border-border-strong sm:p-6"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                {group.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted">
                {group.description}
              </p>
            </div>

            <TagList items={group.skills} variant="subtle" />
          </article>
        ))}
      </div>
    </section>
  );
}
