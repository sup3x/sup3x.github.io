import { Project, TechItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Kerim",
  username: "sup3x",
  title: "Developer & Tech Enthusiast",
  subtitle: "Exploring AI, automation and software experiments",
  githubUrl: "https://github.com/sup3x",
};

export const projects: Project[] = [
  {
    slug: "ai-experiment",
    title: "AI Experiment",
    description: "Neural network playground for testing and exploring machine learning concepts",
    tags: ["Python", "AI"],
    githubUrl: "https://github.com/sup3x",
  },
  {
    slug: "automation-tool",
    title: "Automation Tool",
    description: "Workflow automation suite for streamlining repetitive tasks",
    tags: ["Node", "CLI"],
    githubUrl: "https://github.com/sup3x",
  },
  {
    slug: "software-utility",
    title: "Software Utility",
    description: "Developer productivity tool for everyday coding workflows",
    tags: ["TypeScript", "Tool"],
    githubUrl: "https://github.com/sup3x",
  },
];

export const techItems: TechItem[] = [
  {
    icon: "🤖",
    name: "AI",
    description: "Exploring artificial intelligence and machine learning",
  },
  {
    icon: "⚙️",
    name: "Automation",
    description: "Building tools that automate repetitive workflows",
  },
  {
    icon: "🛠️",
    name: "Software Tools",
    description: "Creating useful utilities for developers",
  },
  {
    icon: "🔬",
    name: "System Experiments",
    description: "Tinkering with systems and low-level experiments",
  },
  {
    icon: "🌐",
    name: "Open Source",
    description: "Contributing to and building open source projects",
  },
];
