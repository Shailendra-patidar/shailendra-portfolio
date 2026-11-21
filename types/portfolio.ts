export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "AI/ML & Healthcare" | "Computer Vision & NLP" | "Predictive Analytics" | "Generative AI & RAG";
  description: string;
  problem: string;
  approach: string;
  keyFeatures: string[];
  technologies: string[];
  architectureOverview: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    description: string;
    category: string;
  }[];
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  badge?: string;
  type: "experience" | "education" | "milestone";
  description: string;
  achievements: string[];
  skills: string[];
}
