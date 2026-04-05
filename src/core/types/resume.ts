// src/core/types/resume.ts

/**
 * Shared Portfolio Data Interfaces
 * Consistent with localization JSON structures.
 */

export interface StatEntry {
    value: string;
    label: string;
}

export interface LeadershipPillar {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface LeadershipPhilosophy {
    title: string;
    pillars: LeadershipPillar[];
}

export interface Availability {
    location: string;
    timezone: string;
    status: string;
    remote: boolean;
}

export interface Testimonial {
    text: string;
    name: string;
    initials: string;
    role: string;
    summaryDescription: string;
    linkedinUrl: string;
}

export interface AboutData {
    about: string;
    quote?: string;
    imageSource: string;
    stats: StatEntry[];
    availability: Availability;
    testimonials: Testimonial[];
    leadershipPhilosophy?: LeadershipPhilosophy;
}

export interface ExperienceItem {
    title: string;
    subtitle: string;
    dateText: string;
    workType?: string;
    promoted?: boolean;
    promotionNote?: string;
    techStack?: string[];
    workDescription: string[];
    caseStudyId?: string;
}

export interface TechNode {
  id: string;
  title: string;
  icon: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  impactNote: string;
  techIds: string[];
}

export interface SoftSkillCategory {
  title: string;
  items: string[];
}

export interface SkillsData {
  intro: string;
  techs: TechNode[];
  groups: SkillGroup[];
  softSkills: SoftSkillCategory[];
}

export interface EducationItem {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText?: string | string[];
  bulletPoints?: string[];
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

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  tags: string[];
  problem: string;
  approach: string[];
  decisions: { title: string; rationale: string }[];
  metrics: Metric[];
  outcome: string;
  diagram?: string;
  previewSnippet?: string;
  previewLanguage?: string;
}

export interface HomeData {
  name: string;
  tagline?: string;
  roles: string[];
}

export interface SocialData {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface SocialLink {
    network: string;
    href: string;
}

// Navigation & Config Types
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

// Analytics / Admin Types
export interface PageView {
  id: string;
  timestamp: string;
  url: string;
  title: string;
  language: string;
  referrer: string;
  userAgent: string;
  country: string;
  isMobile: boolean;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
  };
}

export interface DashboardStats {
  totalViews: number;
  uniqueVisitors: number;
  topCountries: Record<string, number>;
  sourceTraffic: Record<string, number>;
}
