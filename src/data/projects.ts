export interface Project {
  title: string;
  summary: string;
  angle: string;
  href: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "DevSecOps Notes",
    summary: "A growing collection of notes around secure delivery, application security, and DevSecOps practice.",
    angle: "Security ideas translated into developer-friendly reference material.",
    href: "https://github.com/gogvale/DevSecOps-Notes",
    tags: ["AppSec", "DevSecOps", "Secure SDLC"],
  },
  {
    title: "Security Notes",
    summary: "Personal cybersecurity notes and research material collected while studying and practicing security topics.",
    angle: "A public learning trail across defensive security and risk thinking.",
    href: "https://github.com/gogvale/CyberSecNotes",
    tags: ["Security", "Research", "Learning"],
  },
  {
    title: "PHP + GraphQL Shopping Cart",
    summary: "A work-in-progress shopping cart application built with PHP, GraphQL, React, and Relay.",
    angle: "A practical app surface for API, frontend, and secure design experiments.",
    href: "https://github.com/gogvale/demo_project",
    tags: ["PHP", "GraphQL", "React"],
  },
  {
    title: "Solar Panel Stats",
    summary: "Ruby tooling for checking solar panel generation by hour, week, and month.",
    angle: "Small automation around real-world data and operational visibility.",
    href: "https://github.com/gogvale/solar_panel_stats",
    tags: ["Ruby", "Automation", "Data"],
  },
];
