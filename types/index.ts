export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  status?: "active" | "wip" | "archived";
}

export interface TechItem {
  icon: string;
  name: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  username: string;
  title: string;
  subtitle: string;
  githubUrl: string;
}
