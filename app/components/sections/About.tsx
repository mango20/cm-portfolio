import { faCode, faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardWithIcon from "../ui/card/CardWithIcon";
import { aboutContent } from "@/app/data/about";

const principleIcons = {
  cubes: faCubes,
  code: faCode,
} as const;

export default function About() {
  return (
    <section id="about" className="space-y-8">
      <div className="max-w-3xl space-y-4">
        <p className="text-eyebrow">About Me</p>

        <h2 className="text-section-title text-foreground">
          A little about what I do.
        </h2>

        <div className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg flex flex-col gap-3">
          <p>
            I'm a Full-Stack Developer focused on building scalable, responsive,
            and user-friendly web applications. I enjoy turning ideas into
            functional digital solutions through thoughtful frontend
            development, reliable backend systems, API integration, and
            efficient database design.
          </p>

          <p>
            I use tools like GitHub Copilot, ChatGPT, Claude, and Gauss to
            enhance my development workflow, troubleshoot complex problems, and
            work more efficiently. I value clean code, maintainability, and
            continuous learning to deliver high-quality software.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
          My approach to development
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {aboutContent.principles.map((principle) => (
            <CardWithIcon
              key={principle.title}
              layout="vertical"
              variant="outline"
              hover={false}
              background="surface"
              icon={
                <FontAwesomeIcon
                  icon={principleIcons[principle.icon]}
                  aria-hidden="true"
                />
              }
              title={principle.title}
              description={principle.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
