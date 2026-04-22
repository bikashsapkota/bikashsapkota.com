export type LinkItem = {
  label: string;
  href: string;
  isPrimary?: boolean;
};

export type ExperienceItem = {
  role: string;
  company: string;
  employment: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  description: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type CaseStudy = {
  title: string;
  context: string;
  description: string;
  outcomes: string[];
  tags: string[];
};

export const profile = {
  name: "Bikash Sapkota",
  role: "Geospatial Big Data Engineer",
  headline: "Building data platforms for smart cities and urban planning.",
  location: "Tokyo, Japan",
  email: "hello@bikashsapkota.com",
  languages: ["English", "Nepali"],
  resumeUrl: null as string | null,
  bio:
    "I build production data systems across geospatial analytics, AI/ML, and optimization. My work spans mobility ETL/ELT pipelines, people-flow analysis, pricing optimization, OpenADR integrations, and OCR-driven document intelligence.",
};

export const links: LinkItem[] = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    isPrimary: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/bikashsapkota",
    isPrimary: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bikashsapkota/",
    isPrimary: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/bikash.sapkota.794",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Big Data Engineer (GeoSpatial)",
    company: "LocationMind",
    employment: "Permanent",
    period: "Jan 2025 - Present",
    location: "Tokyo, Japan",
    highlights: [
      "Design, build, and maintain scalable ingestion and ETL/ELT pipelines for mobility and geospatial datasets with reproducible data quality.",
      "Implement validation, normalization, aggregation, geospatial joins, and time-series feature generation to make location data analysis-ready.",
      "Develop analytical models and outputs for people-flow analysis, visualization, dashboards, maps, and CSV data products.",
      "Partner with researchers, consultants, and product teams to support mobility use cases using people-flow focused AI models and features.",
      "Improve monitoring, performance, cost, documentation, and governance across the data lifecycle.",
    ],
    skills: ["Amazon EC2", "Data Analysis", "ETL/ELT", "Geospatial joins", "Time-series features"],
  },
  {
    role: "AI Engineer",
    company: "GridSolutions Inc",
    employment: "Permanent",
    period: "Nov 2021 - Jan 2025",
    location: "Tokyo, Japan",
    highlights: [
      "Researched electricity pricing problems and implemented core business logic for optimization workflows.",
      "Created and deployed optimization modules using Mixed-Integer Nonlinear Programming to improve pricing strategies.",
      "Developed API interfaces for integration with client platforms.",
      "Deployed, maintained, and resolved bugs in OpenADR VEN projects.",
      "Refactored project architecture to remove single points of failure.",
    ],
    skills: ["Machine Learning", "Python", "Optimization", "MINLP", "OpenADR", "API design"],
  },
  {
    role: "Machine Learning Engineer",
    company: "Bottle",
    employment: "Permanent",
    period: "Nov 2019 - Nov 2021",
    location: "Kathmandu, Nepal",
    highlights: [
      "Led end-to-end project lifecycles as a team lead, from planning through delivery.",
      "Collaborated with system architects to define implementation architecture aligned with client needs.",
      "Developed RESTful APIs that integrated machine learning functionality into client applications.",
    ],
    skills: ["AWS Lambda", "Amazon EC2", "Machine Learning", "REST APIs", "Team leadership"],
  },
  {
    role: "Machine Learning and OCR Engineer",
    company: "Smart Data Solutions",
    employment: "Full-time",
    period: "Jul 2018 - Nov 2019",
    location: "Kathmandu, Nepal",
    highlights: [
      "Extracted characters from scanned paper claims using Tesseract, FineReader, and Cartouche.",
      "Classified claims from extracted text using Random Forest models in WEKA.",
      "Extracted information from claims using regular expressions and named entity recognition.",
      "Improved manual keying interfaces to speed up operational workflows.",
    ],
    skills: ["OCR", "Tesseract", "FineReader", "WEKA", "Random Forest", "NER"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Geospatial Data",
    items: ["Mobility datasets", "People-flow analytics", "Geospatial joins", "Location intelligence", "Map-ready outputs"],
  },
  {
    title: "Data Engineering",
    items: ["ETL/ELT pipelines", "Validation", "Normalization", "Aggregation", "Data quality", "Governance"],
  },
  {
    title: "AI, ML, Optimization",
    items: ["Machine learning", "MINLP", "Pricing optimization", "Random Forest", "Named entity recognition", "OCR"],
  },
  {
    title: "Backend and Cloud",
    items: ["Python", "REST APIs", "AWS Lambda", "Amazon EC2", "OpenADR VEN", "Cloud applications"],
  },
  {
    title: "Delivery",
    items: ["Stakeholder deliverables", "Dashboards", "CSV data products", "Monitoring", "Performance tuning", "Cost optimization"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "BSc CSIT",
    institution: "Tribhuvan University",
    location: "Nepal",
    description:
      "Bachelor of Science in Computer Science and Information Technology, grounding later work in software systems, data, and applied machine learning.",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Geospatial data platforms",
    description: "Scalable ingestion, preprocessing, enrichment, and analysis workflows for mobility and location datasets.",
  },
  {
    title: "AI/ML systems",
    description: "Production-oriented machine learning integrations, feature pipelines, and applied model workflows.",
  },
  {
    title: "Optimization workflows",
    description: "Business logic and optimization modules for pricing, decision support, and system integration.",
  },
  {
    title: "Cloud data applications",
    description: "APIs, dashboards, exports, and cloud-hosted services that make analytical systems usable by teams.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Mobility Data Platform",
    context: "Geospatial data engineering",
    description:
      "A public-safe case study based on recent work building ingestion and transformation workflows for mobility datasets.",
    outcomes: [
      "Standardized raw location inputs into reusable analytical datasets.",
      "Added quality checks, normalization, aggregation, and geospatial enrichment.",
      "Produced data products ready for analysis, visualization, and downstream modeling.",
    ],
    tags: ["ETL/ELT", "Geospatial", "Data quality", "Time series"],
  },
  {
    title: "People-Flow Analytics Outputs",
    context: "Location intelligence products",
    description:
      "A generic project frame for turning movement data into stakeholder-ready analytical outputs.",
    outcomes: [
      "Modeled people-flow patterns for dashboards, maps, and CSV exports.",
      "Supported research, consulting, and product workflows with reproducible data outputs.",
      "Connected data engineering work to AI-assisted mobility use cases.",
    ],
    tags: ["People flow", "Dashboards", "Maps", "Data products"],
  },
  {
    title: "Energy Pricing Optimization",
    context: "AI and optimization systems",
    description:
      "A non-proprietary case study based on optimization and integration work in electricity pricing systems.",
    outcomes: [
      "Implemented optimization modules using Mixed-Integer Nonlinear Programming.",
      "Built API interfaces for client-platform integration.",
      "Improved reliability by refactoring architecture and maintaining OpenADR VEN projects.",
    ],
    tags: ["MINLP", "Python", "APIs", "OpenADR"],
  },
];

export const testimonial = {
  quote: "one of the most dependable and inspiring colleagues",
  author: "Abhijeet Anand",
  context: "GridSolutions colleague",
};
