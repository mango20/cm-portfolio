export interface ProjectLink {
  label: string;
  href: string;
}

export type ProjectStatus = "internal" | "live" | "down" | "external";

export interface Project {
  title: string;
  category?: string;
  description: string;
  tags: string[];
  period?: string;
  image?: string;
  imageAlt?: string;
  links?: ProjectLink[];
  status?: ProjectStatus;
  statusLabel?: string;
}
