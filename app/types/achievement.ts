export interface PreviewImage {
  src: string;
  title?: string;
  alt?: string;
  description?: string;
  sourceUrl?: string;
}

export interface AchievementLink {
  label: string;
  href: string;
}

export interface Achievement {
  number: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  images: PreviewImage[];
  links: AchievementLink[];
}
