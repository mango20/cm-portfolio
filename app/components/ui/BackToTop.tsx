"use client";

import { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [contactBottom, setContactBottom] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);

      const contact = document.getElementById("contact");

      if (contact) {
        const rect = contact.getBoundingClientRect();
        const buttonHeight = 48;
        const spacing = 16;

        const bottomPosition = window.innerHeight - rect.bottom + spacing;

        setContactBottom(
          rect.bottom < window.innerHeight
            ? Math.max(spacing, bottomPosition)
            : null,
        );
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      title="Back to top"
      className="fixed right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-accent-foreground sm:right-8"
      style={{
        bottom: contactBottom !== null ? `${contactBottom}px` : "24px",
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" />
    </button>
  );
}
