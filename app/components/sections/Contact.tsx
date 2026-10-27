"use client";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpRightFromSquare,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ButtonWithIcon from "../ui/button/ButtonWithIcon";
import { contactData } from "@/app/data/contact";

export default function Contact() {
  const { email, socials } = contactData;
  const socialIcons = {
    github: faGithub,
    linkedin: faLinkedinIn,
    email: faEnvelope,
  };

  return (
    <section id="contact" className="space-y-8">
      <div className="max-w-2xl space-y-4">
        <p className="text-eyebrow">Get in touch</p>

        <h2 className="text-section-title text-foreground">
          Let's build something meaningful.
        </h2>

        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I'm open to new opportunities, collaborations, and exciting challenges
          where I can contribute my skills, learn, and grow as a developer. If
          you have an opportunity in mind, I'd love to connect and hear from
          you.
        </p>
      </div>

      <div className="surface-card card-hover overflow-hidden">
        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-accent-soft text-accent">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-xl"
                aria-hidden="true"
              />
            </div>

            <div className="min-w-0 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Email me
              </p>

              <p className="break-all font-heading text-sm font-semibold text-foreground sm:text-base">
                {email}
              </p>
            </div>
          </div>

          <ButtonWithIcon
            href={`mailto:${email}`}
            variant="primary"
            icon={<FontAwesomeIcon icon={faPaperPlane} />}
            iconPosition="left"
            className="shrink-0 rounded-full! px-5 py-3 text-sm"
          >
            Get in touch
          </ButtonWithIcon>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Find me online
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {socials
            .filter(({ icon }) => icon !== "email")
            .map(({ label, href, icon }) => (
              <ButtonWithIcon
                key={label}
                href={href}
                variant="outline"
                icon={<FontAwesomeIcon icon={socialIcons[icon]} />}
                rightIcon={
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-xs"
                  />
                }
                iconPosition="left"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-xl! px-4 py-3 text-sm"
              >
                {label}
              </ButtonWithIcon>
            ))}
        </div>
      </div>
    </section>
  );
}
