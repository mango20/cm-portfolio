import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import InitialsIcon from "../ui/InitialsIcon";
import Socials from "../ui/Socials";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-6 py-6 sm:flex-row sm:py-8">
        <a
          href="#home"
          aria-label="Charmaine Lilan Manga - Back to home"
          className="flex items-center gap-3"
        >
          <InitialsIcon />

          <span className="flex flex-col gap-1">
            <span className="font-heading text-sm font-bold tracking-tight text-foreground">
              Charmaine Lilan Manga
            </span>
            <span className="text-xs text-muted">Full-Stack Developer</span>
          </span>
        </a>

        <div>
          <Socials />
        </div>
      </div>

      <div className="border-t border-border py-4">
        <div className="flex items-start justify-center text-center sm:items-center text-muted">
          © 2026 Charmaine Lilan Manga. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
