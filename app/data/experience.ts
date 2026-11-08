import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    title: "Frontend Engineer",
    company: "Samsung Southeast Asia & Oceania",
    location: "On-site",
    period: "Apr 2025 – Aug 2026",
    description: [
      "Developed and maintained multiple web applications using React.js and Tailwind CSS.",
      "Built and enhanced administrative dashboards, reusable components, and application pages.",
      "Refactored existing codebases and contributed to bug fixes, feature enhancements, and performance improvements.",
      "Collaborated with designers, backend engineers, and QA teams to deliver reliable and user-friendly applications.",
      "Contributed to initiatives that improved CSM/CQM metrics and updated Node.js environments to maintain application compatibility.",
    ]
      .map((item) => `• ${item}`)
      .join("\n"),
    image: "/images/experience/samsung-logo.jpg",
  },
  {
    title: "Frontend Developer",
    company: "Acquiro",
    location: "Philippines · Hybrid",
    period: "Mar 2023 – Apr 2025",
    description: [
      "Led frontend development and spearheaded the migration of the NXT website from PHP to a modern React.js architecture using Sass and Bootstrap.",
      "Designed, developed, and refactored responsive, reusable UI components to improve application performance, maintainability, and user experience.",
      "Integrated third-party AI services to implement chatbot functionality and applied SEO best practices to improve website visibility, search engine indexing, and performance.",
      "Contributed to backend development by building RESTful APIs, implementing new features, and developing responsive email templates using Node.js and Express.js.",
      "Mentored interns and collaborated with frontend developers, UI/UX designers, QA engineers, and DevOps teams throughout the development lifecycle, including automated deployments to AWS S3.",
    ]
      .map((item) => `• ${item}`)
      .join("\n"),
    image: "/images/experience/acquiroph-logo.jpg",
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "Aug 2022 – Feb 2025",
    description: [
      "Designed application wireframes and UI/UX prototypes using Figma.",
      "Developed full-stack web applications using the MERN Stack.",
      "Built responsive and interactive user interfaces using React.js, Tailwind CSS, and Sass.",
      "Developed backend services, RESTful APIs, and database integrations using Node.js, Express.js, and MongoDB.",
      "Collaborated with backend developers and project managers, conducted application testing, and handled deployment to ensure quality and functionality.",
    ]
      .map((item) => `• ${item}`)
      .join("\n"),
  },
  {
    title: "Web Developer",
    company: "Wilshire Financial Network",
    location: "California, United States · Remote",
    period: "Apr 2022 – Jun 2022",
    description: [
      "Led the development team by coordinating tasks, delegating responsibilities, and monitoring project progress.",
      "Collaborated with team members to ensure efficient task distribution and timely project completion.",
      "Developed a responsive real estate website using WordPress and Elementor.",
      "Deployed and configured the website on Hostinger to make it accessible online.",
      "Created project documentation and presented the completed website, demonstrating its features and functionality.",
    ]
      .map((item) => `• ${item}`)
      .join("\n"),
    image: "/images/experience/wilshire-logo.jpg",
  },
  {
    title: "Software and Application Administrator",
    company: "Questronix Corporation",
    location: "Philippines · Remote",
    period: "Dec 2021 – Mar 2022",
    description: [
      "Developed business applications using Microsoft Power Apps, SharePoint, and Power Automate.",
      "Built and customized application interfaces to support business processes and improve workflow efficiency.",
      "Created automated workflows using Power Automate to streamline repetitive tasks and processes.",
      "Assisted developers in creating reusable components to improve application consistency and maintainability.",
      "Presented developed applications and demonstrated their features and functionality to the lead developer and supervisor.",
    ]
      .map((item) => `• ${item}`)
      .join("\n"),
    image: "/images/experience/questronixcorp-logo.jpg",
  },
];
