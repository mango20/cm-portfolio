import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardWithIcon from "../ui/card/CardWithIcon";
import { education } from "@/app/data/education";

interface EducationItem {
  institution: string;
  year: string;
  degree: string;
  specialization: string;
  icon: typeof faGraduationCap;
}

export default function Education() {
  return (
    <section id="education" className="space-y-8">
      <div className="max-w-3xl space-y-4">
        <p className="text-eyebrow">Education</p>

        <h2 className="text-section-title text-foreground">Beyond the code.</h2>

        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          The academic foundation behind my approach to software development and
          building meaningful digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {education.map((item) => (
          <CardWithIcon
            key={item.institution}
            layout="vertical"
            variant="outline"
            hover={false}
            background="surface"
            icon={<FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" />}
            title={item.institution}
            description={`${item.degree} · ${item.specialization}`}
            className="h-full"
          />
        ))}
      </div>
    </section>
  );
}
