import type { SkillGroup } from "../types/skill";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & APIs",
    description: "Developing application logic and integrating services.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "API Integration",
      "SQL",
      "Authentication",
    ],
  },
  {
    title: "Testing & Collaboration",
    description: "Ensuring code quality and collaborating effectively.",
    skills: [
      "Git",
      "GitHub",
      "Jest",
      "React Testing Library",
      "Debugging",
      "Code Reviews",
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Tools that support efficient development and delivery.",
    skills: ["npm", "Postman", "Figma", "VS Code", "Responsive Design"],
  },
];
