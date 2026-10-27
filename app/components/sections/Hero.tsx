import {
  faArrowUpRightFromSquare,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ButtonWithIcon from "../ui/button/ButtonWithIcon";
import CategoryBadge from "../ui/badge/CategoryBadge";
import Socials from "../ui/Socials";
import { heroContent } from "@/app/data/hero";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center gap-8 text-center sm:gap-10"
    >
      <CategoryBadge variant="success" className="px-4 py-2">
        {heroContent.availability}
      </CategoryBadge>
      <div className="flex max-w-3xl flex-col items-center gap-5">
        <p className="text-eyebrow">{heroContent.greeting}</p>
        <h1 className="text-display">
          {heroContent.firstName}{" "}
          <span className="text-accent">{heroContent.lastName}</span>
        </h1>

        <p className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {heroContent.role}
        </p>

        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {heroContent.description}
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-6 pt-1">
        <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <ButtonWithIcon
            variant="primary"
            rightIcon={
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                aria-hidden="true"
              />
            }
            href="#projects"
            className="justify-center"
          >
            Explore My Work
          </ButtonWithIcon>

          <ButtonWithIcon
            variant="outline"
            icon={<FontAwesomeIcon icon={faDownload} aria-hidden="true" />}
            href={heroContent.secondaryAction.href}
            target="_blank"
            className="justify-center"
          >
            Download CV
          </ButtonWithIcon>
        </div>

        <Socials />
      </div>
    </section>
  );
}
