"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Change color theme"
        disabled
        className="flex size-8 shrink-0 items-center justify-center text-foreground"
      >
        <span className="size-5 rounded-full" aria-hidden="true" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex size-8 shrink-0 items-center justify-center text-foreground transition-colors"
    >
      <FontAwesomeIcon
        icon={isDark ? faSun : faMoon}
        className="size-5 text-accent"
        aria-hidden="true"
      />
    </button>
  );
}
