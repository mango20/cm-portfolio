import type { ReactNode } from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ExperienceCardProps {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
  variant?: "card" | "minimal";
}

export default function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
  icon,
  image,
  imageAlt,
  className = "",
  variant = "card",
}: ExperienceCardProps) {
  return (
    <article
      className={`flex items-start gap-4 ${
        variant === "card" ? "surface-card p-5 sm:p-6" : ""
      } ${className}`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-border bg-accent-soft text-lg text-accent">
        {image ? (
          <img
            src={image}
            alt={imageAlt ?? `${company} logo`}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        ) : (
          (icon ?? <FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />)
        )}
      </div>

      <div className="min-w-0 flex-1 space-y-3">
        <div className="space-y-1">
          <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
            {title}
          </h3>

          <p className="font-medium text-foreground">{company}</p>

          <p className="text-sm text-subtle">
            {location ? `${location} · ` : ""}
            {period}
          </p>
        </div>

        <p className="whitespace-pre-line text-sm leading-7 text-muted sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}
