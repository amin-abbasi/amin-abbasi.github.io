// Type definitions for profile JSON data

export interface NavbarSection {
  title: string;
  href: string;
  type?: "link";
}

export interface NavbarLogo {
  source: string;
  height?: number;
  width?: number;
}

export interface NavbarData {
  logo?: NavbarLogo;
  sections: NavbarSection[];
}

export interface RouteSection {
  component: string;
  path: string;
  headerTitle: string;
}

export interface RoutesData {
  sections: RouteSection[];
}

export interface HomeData {
  name: string;
  roles: string[];
}

export interface SocialData {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface AboutData {
  description: string;
}

export interface Skill {
  skillName: string;
  skillLevel: number;
}

export interface SkillsData {
  intro: string;
  skills: Skill[];
}

export interface Education {
  title: string;
  university: string;
  duration: string;
  desc?: string[];
}

export interface EducationData {
  experiences: Education[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  desc: string[];
}

export interface ExperiencesData {
  experiences: Experience[];
}

export interface Project {
  id: number;
  title: string;
  description?: string;
  bodyText?: string;
  image?: string;
  tags?: string[];
  source?: string;
  demo?: string;
  links?: {
    text: string;
    href: string;
  }[];
}

export interface ProjectsData {
  projects: Project[];
}
