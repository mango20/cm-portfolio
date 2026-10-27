"use client";

import { PreviewImage } from "@/app/types/achievement";
import { useEffect } from "react";

interface ImageModalProps {
  image: PreviewImage | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    if (!image) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={image.title}
        className="w-full max-w-5xl overflow-hidden rounded-xl border border-border bg-background shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <h3 className="truncate font-heading text-base font-semibold text-foreground">
              {image.title}
            </h3>

            {image.description && (
              <p className="mt-1 text-sm text-muted">{image.description}</p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close image preview"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-xl text-muted hover:bg-surface hover:text-foreground"
          >
            &times;
          </button>
        </div>

        <div className="flex max-h-[75vh] items-center justify-center overflow-auto bg-surface p-3 sm:p-6">
          <img
            src={image.src}
            alt={image.alt ?? image.title}
            className="max-h-[68vh] w-auto max-w-full rounded-md object-contain"
          />
        </div>

        {image.sourceUrl && (
          <div className="flex justify-end border-t border-border px-4 py-3 sm:px-5">
            <a
              href={image.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent-hover"
            >
              Visit source website ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
