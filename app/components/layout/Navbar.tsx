"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import InitialsIcon from "../ui/InitialsIcon";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/button/Button";
import { navLinks } from "@/app/data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const scrollToContact = () => {
    closeMenu();
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      aria-label="Main navigation"
      className="relative mx-auto flex w-full items-center justify-between gap-4"
    >
      <a
        href="#home"
        onClick={closeMenu}
        className="flex min-w-0 shrink-0 items-center gap-3"
        aria-label="Charmaine Lilan Manga - Home"
      >
        <InitialsIcon />

        <span className="hidden min-w-0 flex-col sm:flex">
          <span className="truncate font-heading text-sm font-bold leading-tight tracking-tight text-foreground sm:text-base">
            Charmaine Lilan Manga
          </span>
          <span className="mt-1 text-xs leading-tight text-muted sm:text-sm">
            Full-Stack Developer
          </span>
        </span>
      </a>

      <ul className="hidden items-center gap-5 lg:flex xl:gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <ThemeToggle />

        <div className="hidden sm:block">
          <Button variant="primary" onClick={scrollToContact}>
            Let's Talk
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-accent-soft lg:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full z-50 mt-5 rounded-xl border border-border bg-surface p-4 shadow-lg lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-accent-soft hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-3 border-t border-border pt-3">
            <button
              type="button"
              onClick={scrollToContact}
              className="flex w-full items-center justify-between rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:opacity-90"
            >
              Let's Talk
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
