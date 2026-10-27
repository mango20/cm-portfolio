import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Mobile Backend as a Service (mBaaS)",
    category: "Professional",
    period: "2025 – 2026",
    status: "internal",
    description:
      "Developed and maintained an administrative dashboard, integrated REST APIs, refactored existing features, resolved bugs, and implemented unit tests using Jest and React Testing Library.",
    tags: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Chakra UI",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    title: "Next Xperience Today (NXT)",
    category: "Professional",
    image: "/images/projects/nxt.png",
    imageAlt: "Next Xperience Today job-posting platform",
    period: "2023 – 2025",
    status: "down",
    description:
      "Modernized a legacy PHP job-posting platform into a React application for job seekers and employers, with job listings, posting forms, dashboards, and chatbot integration.",
    tags: ["React", "TypeScript", "Redux", "Sass", "Node.js", "Express.js"],
  },
  {
    title: "Digital Democracy eLearning",
    category: "Professional",
    image: "/images/projects/eLearning.png",
    imageAlt: "Digital Democracy eLearning platform",
    period: "2025",
    status: "live",
    description:
      "Developed a responsive eLearning platform promoting digital democracy, citizen participation, digital collaboration, and good governance in the Philippines.",
    tags: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
    ],
    links: [
      {
        label: "Visit Website",
        href: "https://elearning.mbc.com.ph/",
      },
    ],
  },
];
