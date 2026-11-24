export type Locale = "en" | "pt";

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  clients?: string[];
  highlights: string[];
  tech: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  context: string;
  challenge: string;
  contribution: string[];
  tech: string[];
  results: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  highlighted?: boolean;
  items: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  program: string;
  status: string;
}

export interface PersonalFocus {
  id: string;
  title: string;
  description: string;
  tech: string[];
}

export interface NavItem {
  id: string;
  href: string;
  label: string;
}
