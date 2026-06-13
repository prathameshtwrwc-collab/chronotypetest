export interface Organization {
  id: string;
  name: string;
  slug: string;
  logoText: string;
  primaryColor: string;
  accentColor: string;
  contactEmail: string;
  contactPhone: string;
  clinicAddress: string;
  website: string;
  active: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'SUPER_ADMIN' | 'ORG_ADMIN' | 'USER';
  orgId?: string;
  chronotype?: 'LARK' | 'EAGLE' | 'OWL';
  joinedAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SleepFact {
  id: string;
  fact: string;
  source: string;
  category: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  readTime: number;
  category: string;
}

export interface ContactRequest {
  id: string;
  name: string;
  email: string;
  organization?: string;
  message: string;
  type: string;
  createdAt: string;
  status: 'new' | 'reviewed' | 'resolved';
}

export interface AuditLog {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  details?: string;
}

export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  whySleepTitle: string;
  whySleepBody: string;
  cyclesTitle: string;
  disordersTitle: string;
  warningTitle: string;
  impactTitle: string;
  chronotypesTitle: string;
  performanceTitle: string;
  pillarsTitle: string;
  benefitsTitle: string;
  factsTitle: string;
  guidanceTitle: string;
  faqTitle: string;
}

export interface ThemeConfig {
  primary: string;
  accent: string;
}

export type Role = 'SUPER_ADMIN' | 'ORG_ADMIN' | 'USER' | 'PUBLIC';
