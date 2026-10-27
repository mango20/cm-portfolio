import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    title: "Frontend Engineer",
    company: "Samsung R&D Institute Philippines",
    location: "Taguig, Philippines",
    period: "2025–2026",
    description: [
      "Developed and launched frontend features from Figma and Zeplin designs using React and TypeScript.",
      "Integrated REST APIs, built reusable UI components, and developed unit tests using Jest and React Testing Library.",
      "Refactored existing code to improve performance, maintainability, and code quality.",
      "Participated in code reviews, quality validation (CQM/SAM), and collaborated with designers, QA engineers, backend developers, and distributed teams to deliver features in an Agile environment.",
    ]
      .map((item) => `• ${item}`)
      .join("\n"),
    image: "/images/experience/samsung-logo.jpg",
  },
  {
    title: "Frontend Developer",
    company: "Acquiro Solutions and Tech Inc. (Globe Group)",
    location: "Taguig, Philippines",
    period: "2023–2025",
    description: [
      "Converted Figma designs into responsive, cross-browser web applications.",
      "Developed reusable React components to improve consistency and code maintainability.",
      "Integrated REST APIs and implemented frontend business logic.",
      "Worked closely with product, design, and backend teams in Agile development.",
    ]
      .map((item) => `• ${item}`)
      .join("\n"),
  },
  {
    title: "Full-stack Developer",
    company: "Freelance",
    period: "2022–2024",
    description: [
      "Built responsive websites and web applications for multiple clients.",
      "Integrated third-party and REST APIs.",
      "Optimized websites for performance, accessibility, and SEO.",
      "Maintained and enhanced existing client applications.",
    ]
      .map((item) => `• ${item}`)
      .join("\n"),
  },
];
