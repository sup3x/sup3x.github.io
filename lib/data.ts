import { Project, TechItem, Stat, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Kerim",
  username: "sup3x",
  title: "Developer & CLI Tool Builder",
  subtitle: "Building developer tools in TypeScript — load testing, environment management, and Git visualization",
  githubUrl: "https://github.com/sup3x",
};

export const stats: Stat[] = [
  { value: "3", label: "Published Packages" },
  { value: "100%", label: "TypeScript" },
  { value: "MIT", label: "Licensed" },
];

export const projects: Project[] = [
  {
    slug: "reqbench",
    title: "reqbench",
    description:
      "Simple, beautiful API load testing from the terminal. Latency percentiles, status code bars, distribution histogram, and JSON export — one command, zero config.",
    tags: ["TypeScript", "CLI", "npm", "API Testing"],
    githubUrl: "https://github.com/sup3x/reqbench",
    status: "active",
  },
  {
    slug: "envi",
    title: "envi",
    description:
      "Universal .env file manager — switch, diff, and validate environments with one command. 8 commands, 159 tests, cross-platform. Published as envi-switch on npm.",
    tags: ["TypeScript", "CLI", "npm", "DevTools"],
    githubUrl: "https://github.com/sup3x/envi",
    status: "active",
  },
  {
    slug: "git-poster",
    title: "git-poster",
    description:
      "Turn your Git history into a beautiful poster. Generates SVG/PNG contribution heatmap posters with 5 built-in themes — fully local, no account required.",
    tags: ["TypeScript", "CLI", "SVG", "Git"],
    githubUrl: "https://github.com/sup3x/git-poster",
    status: "active",
  },
];

export const techItems: TechItem[] = [
  {
    icon: "🔷",
    name: "TypeScript",
    description: "Primary language across all projects — strict mode, type-safe CLI tools",
  },
  {
    icon: "🟢",
    name: "Node.js",
    description: "Runtime for all CLI tools — streams, child processes, fs operations",
  },
  {
    icon: "📦",
    name: "npm Publishing",
    description: "All 3 projects published as npm packages — global CLI installs",
  },
  {
    icon: "⚡",
    name: "CLI Development",
    description: "Commander, chalk, progress bars — beautiful terminal interfaces",
  },
  {
    icon: "🧪",
    name: "Testing",
    description: "Vitest test suites with high coverage — 159+ tests across projects",
  },
  {
    icon: "🔄",
    name: "CI/CD",
    description: "GitHub Actions pipelines — multi-OS, multi-Node version matrices",
  },
  {
    icon: "🔧",
    name: "Developer Tooling",
    description: "Building practical tools that solve real developer pain points",
  },
  {
    icon: "🐙",
    name: "Open Source",
    description: "All projects MIT licensed — open to contributions and collaboration",
  },
];
