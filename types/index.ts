export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export interface TechItem {
  icon: string;
  name: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  username: string;
  title: string;
  subtitle: string;
  githubUrl: string;
}
