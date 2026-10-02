export interface ServiceItem {
  id: string;
  category: 'acquisition' | 'strategy' | 'retention' | 'creative' | 'analytics';
  title: string;
  shortDescription: string;
  longDescription: string;
  deliverables: string[];
  metricsFocus: string[];
  keyTools: string[];
  iconName: string;
}

export interface ProcessWeek {
  id: string;
  phase: string;
  timeframe: string;
  title: string;
  summary: string;
  milestones: string[];
  clientCommitment: string;
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  clientIndustry: string;
  challenge: string;
  solution: string;
  primaryMetric: string;
  primaryLabel: string;
  secondaryMetric: string;
  secondaryLabel: string;
  timeframe: string;
}

export interface StandardPillar {
  id: string;
  title: string;
  badge: string;
  description: string;
  commitments: string[];
}

export interface ProjectInquiry {
  fullName: string;
  email: string;
  company: string;
  website: string;
  budgetRange: string;
  services: string[];
  timeline: string;
  notes: string;
}
