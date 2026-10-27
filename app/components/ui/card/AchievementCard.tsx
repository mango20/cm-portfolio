"use client";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ButtonWithIcon from "../button/ButtonWithIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryBadge from "../badge/CategoryBadge";
import { Achievement, PreviewImage } from "@/app/types/achievement";

interface AchievementCardProps extends Achievement {
  onImageClick: (image: PreviewImage) => void;
}

export default function AchievementCard({
  number,
  category,
  title,
  subtitle,
  description,
  images,
  links,
  onImageClick,
}: AchievementCardProps) {
  const imageCount = images.length;

  const galleryLayout =
    imageCount >= 3
      ? "grid-cols-1 sm:grid-cols-2 grid-rows-none sm:grid-rows-2"
      : imageCount === 2
        ? "grid-cols-1 grid-rows-2"
        : "grid-cols-1 grid-rows-1";

  return (
    <article className="surface-card flex h-full min-h-0 flex-col overflow-hidden transition-colors duration-200">
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-sm font-semibold text-accent">
            {number}
          </span>

          <CategoryBadge>{category}</CategoryBadge>
        </div>

        <div className="shrink-0 space-y-1.5">
          <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
            {title}
          </h3>

          <p className="text-xs font-medium text-accent">{subtitle}</p>

          <p className="text-sm leading-relaxed text-muted">{description}</p>
        </div>

        {imageCount > 0 && (
          <div
            className={`grid flex-1 gap-3 ${galleryLayout} ${
              imageCount >= 3
                ? "min-h-104 auto-rows-fr"
                : imageCount === 2
                  ? "min-h-104 auto-rows-fr"
                  : "min-h-80"
            }`}
          >
            {images.map((image) => (
              <figure key={image.src} className="flex min-h-0 min-w-0 flex-col">
                <button
                  type="button"
                  onClick={() => onImageClick(image)}
                  aria-label={`Preview ${image.title}`}
                  className="group relative block min-h-48 w-full flex-1 overflow-hidden rounded-md bg-surface text-left focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <img
                    src={image.src}
                    alt={image.alt ?? image.title}
                    loading="lazy"
                    className="achievement-image h-full! transition-transform duration-500 ease-out group-hover:scale-110"
                  />

                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition-colors duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                    <span className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium">
                      Preview ↗
                    </span>
                  </span>
                </button>

                <figcaption className="shrink-0 px-1 pt-2">
                  <p className="text-xs leading-relaxed text-muted">
                    {image.title}
                  </p>

                  {image.sourceUrl && (
                    <a
                      href={image.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex text-xs font-medium text-accent hover:text-accent-hover hover:underline"
                    >
                      Visit source ↗
                    </a>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {links.length > 0 && (
          <div className="mt-auto shrink-0 border-t border-border pt-3">
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
                  {link.label}
                </ButtonWithIcon>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
