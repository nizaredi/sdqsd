import { ServiceItem, ProcessWeek, CaseStudy, StandardPillar } from '../types';

export const BUSINESS_INFO = {
  name: 'Quickmail Solutions LLC',
  address: '30 N Gould St Ste R, Sheridan, WY 82801, United States',
  cityStateZip: 'Sheridan, WY 82801',
  country: 'United States',
  email: 'contact@quickmailsolutions.com',
  businessHours: 'Monday – Friday, 8:00 AM – 6:00 PM MT',
  entityType: 'Limited Liability Company',
  jurisdiction: 'Wyoming, United States',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'lead-generation',
    category: 'acquisition',
    title: 'Lead Generation',
    shortDescription: 'High-intent search ads, paid social funnels, and conversion-optimized landing pages engineered for qualified customer acquisition.',
    longDescription: 'We build end-to-end inbound and paid acquisition systems that turn cold traffic into pipeline revenue. By pairing intent-matched ad copy with frictionless dedicated landing pages, we lower Customer Acquisition Cost (CAC) while scaling qualified lead volume.',
    deliverables: [
      'High-converting bespoke landing pages (Next.js/React or Webflow)',
      'Paid Social campaign architectures (Meta, LinkedIn, TikTok)',
      'Search Engine Advertising (Google Ads, Bing, intent capture)',
      'A/B multivariate split-testing & offer iteration',
      'Negative keyword filtering & fraud click elimination'
    ],
    metricsFocus: ['Cost Per Lead (CPL)', 'Conversion Rate (CVR)', 'Qualified Pipeline Value', 'Lead-to-Opportunity Velocity'],
    keyTools: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'Unbounce/Custom LP'],
    iconName: 'Target'
  },
  {
    id: 'marketing-strategy',
    category: 'strategy',
    title: 'Marketing Strategy',
    shortDescription: 'Data-grounded positioning, competitive benchmarking, and capital-efficient budget allocation across channels.',
    longDescription: 'Before spending ad dollars, we define precisely who your ideal buyer is, why they choose you over alternatives, and which channels will yield the shortest payback window. We eliminate guesswork with clear unit economics modeling.',
    deliverables: [
      'Competitive landscape analysis & messaging whitespace audit',
      'Ideal Customer Profile (ICP) & buyer persona documentation',
      'Multi-channel budget allocation & scenario modeling',
      'Quarterly performance roadmaps & KPI scorecards',
      'Value proposition refinement & angle testing'
    ],
    metricsFocus: ['Payback Period', 'Customer Acquisition Cost (CAC)', 'Channel Contribution Margin', 'Share of Voice'],
    keyTools: ['SparkToro', 'SEMrush', 'Tableau', 'Google Looker Studio'],
    iconName: 'Compass'
  },
  {
    id: 'crm-retention',
    category: 'retention',
    title: 'CRM & Customer Retention',
    shortDescription: 'Automated lifecycle journeys, customer segmentation, loyalty workflows, and automated follow-ups that compound LTV.',
    longDescription: 'Acquisition is only half the battle. We build behavioral CRM architectures that reactivate dormant accounts, increase repeat order frequency, and ensure no incoming lead falls through the cracks with automated sales handoffs.',
    deliverables: [
      'Multi-tier behavioral segmentation & churn risk triggers',
      'Automated nurture sequences & lead qualification scoring',
      'Post-purchase loyalty and upsell email/SMS flows',
      'Sales CRM pipeline integration (HubSpot, Salesforce, Pipedrive)',
      'Re-engagement win-back campaigns for stalled deals'
    ],
    metricsFocus: ['Customer Lifetime Value (LTV)', 'Repeat Purchase Rate', 'Sales Response Time', 'Churn Reduction'],
    keyTools: ['HubSpot', 'Klaviyo', 'ActiveCampaign', 'Customer.io'],
    iconName: 'Users'
  },
  {
    id: 'content-copywriting',
    category: 'creative',
    title: 'Content & Copywriting',
    shortDescription: 'Persuasive website messaging, direct-response ad creative, and editorial articles that establish category authority.',
    longDescription: 'Words that speak directly to the customer pain point outperform clever slogans every time. We craft clear, high-contrast messaging that eliminates friction, explains complex offerings clearly, and drives decisive buyer action.',
    deliverables: [
      'Direct-response ad creative variants (hooks, angles, bodies)',
      'Full-funnel website & landing page conversion copywriting',
      'Authoritative thought leadership & SEO comparison articles',
      'Case study interviews and customer testimonial formatting',
      'Email drip sequences & sales enablement decks'
    ],
    metricsFocus: ['Click-Through Rate (CTR)', 'Time on Page', 'Scroll Depth', 'Form Completion Rate'],
    keyTools: ['Figma', 'Grammarly Business', 'Clearscope', 'HEMI Studio'],
    iconName: 'FileText'
  },
  {
    id: 'analytics-reporting',
    category: 'analytics',
    title: 'Analytics & Reporting',
    shortDescription: 'Server-side tracking setup, privacy-first attribution modeling, and clear monthly executive dashboards.',
    longDescription: 'Clean data is the foundation of profitable growth. We implement robust, cookieless-compliant server-side tracking so you know exactly which dollar spent produced which customer, without vanity metrics or inflated attribution.',
    deliverables: [
      'Server-side Google Tag Manager & Conversions API (CAPI) setup',
      'Google Analytics 4 custom event and funnel configuration',
      'Multi-touch attribution models & channel contribution audits',
      'Real-time executive Looker Studio / PowerBI dashboards',
      'Monthly strategic review meetings with actionable next steps'
    ],
    metricsFocus: ['Return on Ad Spend (ROAS)', 'Attributed Revenue', 'Blended CAC', 'Data Fidelity Rate'],
    keyTools: ['GA4', 'Server-Side GTM', 'Meta CAPI', 'Looker Studio'],
    iconName: 'BarChart3'
  }
];

export const PROCESS_TIMELINE: ProcessWeek[] = [
  {
    id: 'week-1',
    phase: '01',
    timeframe: 'Week 1',
    title: 'Audit & Discovery',
    summary: 'Comprehensive analysis of historical ad spend, existing landing pages, tracking integrity, and competitor positioning.',
    milestones: [
      'Access audit across Google Ads, Meta, LinkedIn, and CRM',
      'Conversion tracking & pixel integrity verification',
      'Historical spend efficiency & leak identification',
      '60-minute strategic kickoff session with leadership'
    ],
    clientCommitment: '60 minutes for discovery session + providing standard platform read access.',
    deliverables: [
      'Full Technical Tracking & Attribution Audit Report',
      'Competitor Messaging & Keyword Matrix',
      'Quick-Win Opportunities Checklist'
    ]
  },
  {
    id: 'week-2',
    phase: '02',
    timeframe: 'Week 2',
    title: 'Strategy & Setup',
    summary: 'Architecting dedicated landing pages, writing ad creative hooks, building audience segments, and verifying server-side tracking.',
    milestones: [
      'Dedicated landing page design & conversion copywriting',
      'Ad creative production across primary and secondary angles',
      'Audience segmentation, intent lists & exclusion protocols',
      'Server-side tracking deployment and sandbox test purchases'
    ],
    clientCommitment: '30-minute review of ad angles and landing page approval.',
    deliverables: [
      'Staged High-Converting Landing Page ready for launch',
      'Initial Ad Creative Suite (Copy & Visual hooks)',
      'Campaign Architecture & Budget Allocation Blueprint'
    ]
  },
  {
    id: 'weeks-3-6',
    phase: '03',
    timeframe: 'Weeks 3–6',
    title: 'Campaign Launch & Calibration',
    summary: 'Controlled rollout of multivariate ad variants, search query harvesting, and daily algorithmic calibration to stabilize CPL.',
    milestones: [
      'Controlled ad launch with baseline spend capping',
      'Real-time query negative-matching to prevent ad waste',
      'First-pass A/B headline and CTA split-test execution',
      'Bi-weekly lead quality check with your sales team'
    ],
    clientCommitment: 'Brief weekly async check-in on lead quality from your sales team.',
    deliverables: [
      'Active High-Intent Campaign Clusters across approved channels',
      'Live 24/7 Looker Studio Performance Dashboard',
      'Mid-Flight Optimization & Query Log'
    ]
  },
  {
    id: 'ongoing',
    phase: '04',
    timeframe: 'Ongoing',
    title: 'Optimization & Scaling',
    summary: 'Systematic budget reallocation toward winning ad groups, audience expansion, LTV compounding, and monthly executive reviews.',
    milestones: [
      'Continuous creative refreshment to combat ad fatigue',
      'Algorithmic budget scale on validated positive-ROAS cohorts',
      'CRM re-engagement and lifecycle sequence tuning',
      'Detailed monthly strategy review & next month roadmap'
    ],
    clientCommitment: 'Monthly 45-minute executive review call.',
    deliverables: [
      'Comprehensive Monthly ROI & Executive Attribution Report',
      'Next-Sprint Growth Experiments Pipeline',
      'Quarterly Budget & Channel Expansion Proposal'
    ]
  }
];

export const STANDARDS_PILLARS: StandardPillar[] = [
  {
    id: 'consent-marketing',
    title: 'Consent-Based Marketing',
    badge: '100% Opt-In',
    description: 'We strictly practice permission-based marketing. Every lead captured has explicitly opted in with verified intent, eliminating spam traps, reputation damage, and low-quality inquiries.',
    commitments: [
      'Clear, unbundled consent checkboxes on all capture funnels',
      'Zero purchase of scraped, third-party, or unverified contact lists',
      'Transparent unsubscribe and preference management systems',
      'Strict adherence to CAN-SPAM and CASL email delivery standards'
    ]
  },
  {
    id: 'data-privacy',
    title: 'GDPR & CCPA Compliance',
    badge: 'Privacy Engineered',
    description: 'Modern consumer privacy is non-negotiable. Our tracking infrastructures and landing pages are fully aligned with European GDPR, California CCPA, and global data privacy mandates.',
    commitments: [
      'Cookie banner consent modes with granular user controls',
      'First-party server-side tracking avoiding invasive third-party cookies',
      'Automated user data deletion and right-to-be-forgotten workflows',
      'Strict data processing agreements (DPA) on all deployed software'
    ]
  },
  {
    id: 'platform-policies',
    title: 'Platform Policy Adherence',
    badge: 'Zero Risk of Bans',
    description: 'We design campaigns with deep respect for Google, Meta, LinkedIn, and TikTok advertising guidelines, ensuring uninterrupted campaign runtimes and account health.',
    commitments: [
      'Proactive pre-launch compliance screening against ad policy triggers',
      'Transparent claims backed by verifiable business documentation',
      'Safe landing page content free of manipulative popups or countdown timers',
      'Direct partner liaison channels for rapid ad appeal resolution'
    ]
  },
  {
    id: 'client-ownership',
    title: '100% Client Data Ownership',
    badge: 'No Walled Gardens',
    description: 'You maintain absolute, sovereign ownership of your ad accounts, pixel history, customer lists, creative files, and analytical data. We never hold your assets hostage.',
    commitments: [
      'Campaigns built inside YOUR ad accounts with direct billing to you',
      'Pixel data, custom audiences, and lookalikes remain your property forever',
      'Full administrative access retained by your internal team at all times',
      'Zero proprietary lock-in or exit penalties if you choose to transition'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    clientIndustry: 'B2B Enterprise SaaS & Supply Chain',
    challenge: 'Rising LinkedIn CPL ($280+) and poor sales qualification from generic lead-gen forms.',
    solution: 'Re-architected search intent clusters on Google Ads and built an interactive ROI calculator landing page with direct calendar routing.',
    primaryMetric: '-58% CPL',
    primaryLabel: 'Reduction in Cost Per Qualified Opportunity',
    secondaryMetric: '$2.1M',
    secondaryLabel: 'Attributed Pipeline in 90 Days',
    timeframe: '90-Day Sprint'
  },
  {
    id: 'case-2',
    clientIndustry: 'High-Ticket Professional Services',
    challenge: 'Ad accounts suffering from pixel misattribution and high ad fatigue on Meta platforms.',
    solution: 'Deployed server-side GTM with Meta CAPI, implemented a video-first creative hook testing sprint, and automated CRM follow-up triggers.',
    primaryMetric: '+184%',
    primaryLabel: 'Increase in Scheduled Qualified Consultations',
    secondaryMetric: '3.9x',
    secondaryLabel: 'First-Year Customer Lifetime Value (LTV)',
    timeframe: '4-Month Program'
  },
  {
    id: 'case-3',
    clientIndustry: 'Specialized Commercial Logistics',
    challenge: 'Dependence on volatile broker referrals with zero direct inbound digital acquisition.',
    solution: 'Constructed geotargeted search funnels targeting freight decision-makers combined with automated quote estimation.',
    primaryMetric: '310+',
    primaryLabel: 'Verified Monthly Inbound Quote Inquiries',
    secondaryMetric: '14 min',
    secondaryLabel: 'Average Lead-to-Call Response Time',
    timeframe: 'Ongoing Partnership'
  }
];
