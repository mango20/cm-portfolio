import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import InitialsIcon from "../ui/InitialsIcon";
import Socials from "../ui/Socials";
import BackToTop from "../ui/BackToTop";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-5 py-6 sm:flex-row sm:gap-6 sm:py-8">
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

        <div className="flex flex-col items-center gap-3 sm:order-3 sm:items-end">
          <BackToTop />

          <p className="flex items-center gap-1.5 text-xs text-muted">
            <FontAwesomeIcon icon={faCopyright} aria-hidden="true" />
            <span>2026 Charmaine Lilan Manga. All rights reserved.</span>
          </p>
        </div>

        <div className="flex items-center justify-center sm:order-2">
          <Socials />
        </div>
      </div>
    </footer>
  );
}
