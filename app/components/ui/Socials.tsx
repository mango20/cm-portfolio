import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socials = [
  { icon: faGithub, href: "https://github.com/mango20", label: "GitHub" },
  {
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/in/charmaine-manga-66ab29226/",
    label: "LinkedIn",
  },
  {
    icon: faEnvelope,
    href: "mailto:mangacharmainelilan@gmail.com",
    label: "Email",
  },
];

export default function Socials() {
  return (
    <div className="flex gap-3">
      {socials.map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target={label !== "Email" ? "_blank" : undefined}
          rel={label !== "Email" ? "noopener noreferrer" : undefined}
        >
          <FontAwesomeIcon
            icon={icon}
            className="text-xl text-muted transition-colors hover:text-accent"
          />
        </a>
      ))}
    </div>
  );
}
