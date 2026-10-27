"use client";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center justify-center gap-2 text-accent transition-colors hover:text-accent-hover"
    >
      <span>Back to top</span>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
