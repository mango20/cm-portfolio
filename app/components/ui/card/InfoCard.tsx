"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-regular-svg-icons";

import CategoryBadge from "../badge/CategoryBadge";
import TagList from "../TagList";
import ButtonWithIcon from "../button/ButtonWithIcon";
import { Project } from "@/app/types/project";

export interface InfoCardLink {
  label: string;
  href: string;
}

export type InfoCardStatus = "internal" | "live" | "down" | "external";

export interface InfoCardData {
  title: string;
  category?: string;
  description: string;
  tags: string[];
  period?: string;
  image?: string;
  imageAlt?: string;
  links?: InfoCardLink[];
  status?: InfoCardStatus;
  statusLabel?: string;
}

interface InfoCardProps extends Project {}

const statusConfig: Record<
  InfoCardStatus,
  {
    label: string;
    variant: "success" | "default" | "internal" | "danger";
  }
> = {
  internal: {
    label: "Internal Project",
    variant: "internal",
  },
  live: {
    label: "Live",
    variant: "success",
  },
  down: {
    label: "Server Down",
    variant: "danger",
  },
  external: {
    label: "External",
    variant: "default",
  },
};

export default function InfoCard({
  title,
  category,
  description,
  tags,
  period,
  image,
  imageAlt,
  links = [],
  status,
  statusLabel,
}: InfoCardProps) {
  const resolvedStatus = status ?? (links.length > 0 ? "live" : undefined);

  const statusInfo = resolvedStatus ? statusConfig[resolvedStatus] : undefined;

  return (
    <article className="surface-card group flex h-full min-w-0 flex-col overflow-hidden transition-[border-color,box-shadow] duration-200 hover:border-border-strong">
      <div className="relative h-50! w-full shrink-0 overflow-hidden border-b border-border bg-surface">
        {image ? (
          <img
            src={image}
            alt={imageAlt ?? title}
            loading="lazy"
            className="absolute inset-0 h-50! w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div
            role="img"
            aria-label={`${title} project cover`}
            className="relative flex h-50! w-full flex-col items-center justify-center overflow-hidden bg-surface"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface-elevated shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
              <FontAwesomeIcon
                icon={faCloud}
                className="h-8 w-8 text-accent"
                aria-hidden="true"
              />
            </div>

            <div className="relative mt-4 max-w-[85%] space-y-2 text-center">
              <p className="font-heading text-lg font-bold tracking-tight text-foreground">
                {title}
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                {status === "internal"
                  ? "Internal Project"
                  : (category ?? "Project")}
              </p>
            </div>

            <div className="absolute bottom-0 h-px w-1/2 bg-linear-to-r from-transparent via-accent/50 to-transparent" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 space-y-2">
            {category && <p className="text-eyebrow text-[10px]">{category}</p>}

            <h3 className="wrap-break-word font-heading text-lg font-bold tracking-tight text-foreground">
              {title}
            </h3>
          </div>

          {period && (
            <span className="shrink-0 rounded-md border border-border bg-surface-elevated px-2 py-1 text-[10px] font-medium leading-relaxed text-muted">
              {period}
            </span>
          )}
        </div>

        {statusInfo && (
          <div>
            <CategoryBadge variant={statusInfo.variant}>
              {statusLabel ?? statusInfo.label}
            </CategoryBadge>
          </div>
        )}

        <p className="text-sm leading-relaxed text-muted">{description}</p>

        <TagList items={tags} variant="subtle" />
        <div className="mt-auto border-t border-border pt-3">
          {links.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {links.map((link) => (
                <ButtonWithIcon
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  target="_blank"
                  variant="primary"
                  rightIcon={
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  }
                  iconPosition="right"
                  className="rounded-full! px-3 py-2 text-xs"
                >
                  {link.label || "Visit Website"}
                </ButtonWithIcon>
              ))}
            </div>
          ) : (
            <p className="inline-flex items-center gap-2 py-2 text-xs font-medium text-muted">
              <FontAwesomeIcon
                icon={faLock}
                className="text-[11px] text-subtle"
                aria-hidden="true"
              />
              {resolvedStatus === "down"
                ? "Currently Unavailable"
                : resolvedStatus === "external"
                  ? "No Public Link"
                  : "Private Project"}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
