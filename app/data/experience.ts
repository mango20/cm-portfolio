import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    title: "Frontend Engineer",
    company: "Samsung R&D Institute Philippines",
    location: "Taguig, Philippines",
    period: "2025–2026",
    description: [
      "Developed responsive frontend features from UI/UX designs and technical requirements.",
      "Integrated REST APIs to support dynamic data and application workflows.",
      "Wrote tests and refactored reusable components to improve code quality and maintainability.",
      "Collaborated with designers, QA engineers, and backend developers to troubleshoot issues and deliver polished interfaces.",
      "Focused on responsive layouts, component reusability, and consistent user experiences.",
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
      "Converted design mockups and product requirements into responsive web applications.",
      "Developed reusable React components and shared UI patterns for consistent interfaces.",
      "Integrated REST APIs to connect frontend components with backend services.",
      "Collaborated with product, design, and engineering teams to refine features and resolve UI issues.",
      "Improved usability and layout consistency across devices and screen sizes.",
    ]
      .map((item) => `• ${item}`)
      .join("\n"),
  },
  {
    title: "Full-stack Developer",
    company: "Freelance",
    period: "2022–2024",
    description: [
      "Designed, developed, and maintained websites based on client requirements.",
      "Built reusable UI components and integrated third-party APIs.",
      "Improved mobile responsiveness, accessibility, frontend performance, and SEO.",
      "Worked directly with clients to gather requirements, communicate progress, and incorporate feedback.",
      "Handled frontend implementation, testing, revisions, and ongoing website maintenance.",
    ]
      .map((item) => `• ${item}`)
      .join("\n"),
  },
];
