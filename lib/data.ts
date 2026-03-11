import { Project, TechItem, Stat, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Kerim",
  username: "sup3x",
  title: "Developer & Tech Enthusiast",
  subtitle: "Exploring AI, automation and software experiments",
  githubUrl: "https://github.com/sup3x",
};

export const stats: Stat[] = [
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Tech Stacks" },
  { value: "∞", label: "Curiosity" },
];

export const projects: Project[] = [
  {
    slug: "ai-experiment",
    title: "AI Experiment",
    description:
      "Neural network playground for testing and exploring machine learning concepts with real-time visualization",
    tags: ["Python", "PyTorch", "AI"],
    githubUrl: "https://github.com/sup3x",
    status: "active",
  },
  {
    slug: "automation-tool",
    title: "Automation Tool",
    description:
      "Workflow automation suite for streamlining repetitive tasks across CI/CD pipelines and dev environments",
    tags: ["Node.js", "CLI", "Automation"],
    githubUrl: "https://github.com/sup3x",
    status: "active",
  },
  {
    slug: "dev-dashboard",
    title: "Dev Dashboard",
    description:
      "Real-time developer dashboard aggregating GitHub stats, deployment status, and project health metrics",
    tags: ["React", "TypeScript", "API"],
    githubUrl: "https://github.com/sup3x",
    status: "active",
  },
  {
    slug: "system-monitor",
    title: "System Monitor",
    description:
      "Lightweight system resource monitor with terminal UI for tracking CPU, memory, and network usage",
    tags: ["Rust", "TUI", "Systems"],
    githubUrl: "https://github.com/sup3x",
    status: "wip",
  },
  {
    slug: "dotfiles",
    title: "Dotfiles",
    description:
      "Personal development environment configuration — shell, editor, terminal setup with automated bootstrapping",
    tags: ["Bash", "Config", "DevOps"],
    githubUrl: "https://github.com/sup3x",
    status: "active",
  },
  {
    slug: "code-snippets",
    title: "Code Snippets",
    description:
      "Collection of reusable code snippets, algorithms, and utility functions across multiple languages",
    tags: ["TypeScript", "Python", "Go"],
    githubUrl: "https://github.com/sup3x",
    status: "wip",
  },
];

export const techItems: TechItem[] = [
  {
    icon: "🤖",
    name: "Artificial Intelligence",
    description: "LLMs, neural networks, prompt engineering, and ML pipelines",
  },
  {
    icon: "⚙️",
    name: "Automation",
    description: "CI/CD, workflow automation, scripting, and task orchestration",
  },
  {
    icon: "🛠️",
    name: "Software Tools",
    description: "CLI tools, developer utilities, and productivity enhancers",
  },
  {
    icon: "🔬",
    name: "System Experiments",
    description: "Low-level tinkering, OS internals, and reverse engineering",
  },
  {
    icon: "🌐",
    name: "Open Source",
    description: "Contributing to and building community-driven projects",
  },
  {
    icon: "🔒",
    name: "Security",
    description: "AppSec, CTFs, vulnerability research, and hardening systems",
  },
  {
    icon: "☁️",
    name: "Cloud & DevOps",
    description: "Containers, orchestration, infrastructure as code, CI/CD",
  },
  {
    icon: "📊",
    name: "Data & Analytics",
    description: "Data pipelines, visualization, and insight-driven tooling",
  },
];
