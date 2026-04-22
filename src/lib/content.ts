export type LinkItem = {
  label: string;
  href: string;
  isPrimary?: boolean;
};

export type MetricItem = {
  value: string;
  label: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  employment: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  tools: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  description: string;
};

export type CaseStudy = {
  title: string;
  context: string;
  company?: {
    label: string;
    href: string;
  };
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  architecture: string[];
  githubUrl?: string;
};

export type ArchitectureSystem = {
  title: string;
  description: string;
  flow: string[];
  principles: string[];
};

export type InsightItem = {
  title: string;
  description: string;
  status: string;
};

export type HeroVisual = {
  src: string;
  alt: string;
};

export const profile = {
  name: "Bikash Sapkota",
  role: "Geospatial Big Data Engineer",
  headline: "I build geospatial data platforms that turn mobility signals into reliable decisions.",
  subheadline:
    "Big data engineer focused on GPS-scale pipelines, spatial analytics, and production data products for smart cities, mobility, and urban planning teams.",
  location: "Tokyo, Japan",
  email: "hello@bikashsapkota.com",
  meetingUrl: "https://calendar.app.google/w4uhT4E225E8cjHj6",
  languages: ["English", "Nepali"],
  resumeUrl: null as string | null,
  valueProposition:
    "I design systems that ingest high-volume location data, validate it, enrich it with spatial context, and ship it as analytics-ready datasets, dashboards, maps, and APIs.",
  about:
    "My work sits at the intersection of distributed data engineering and geospatial analytics. I care about the parts that make data products dependable: ingestion contracts, partitioning strategy, spatial indexing, reproducible transformations, cost-aware cloud execution, and clear outputs that technical and non-technical teams can trust.",
};

export const heroVisual: HeroVisual = {
  src: "/images/urban-gps-planning.png",
  alt:
    "Urban aerial map visualization with orange GPS movement arcs, blue road intensity corridors, and magenta footfall hotspots.",
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

export const metrics: MetricItem[] = [
  { value: "8+ yrs", label: "data / ML systems" },
  { value: "GPS-scale", label: "mobility analytics" },
  { value: "AWS + Spark", label: "cloud data platforms" },
  { value: "Tokyo", label: "Japan-based" },
];

export const techStack = [
  "Python",
  "Spark",
  "Kafka",
  "AWS S3",
  "AWS Glue",
  "ClickHouse",
  "Kubernetes",
  "H3",
  "GeoPandas",
  "ETL/ELT",
  "REST APIs",
  "OpenADR",
];

export const experience: ExperienceItem[] = [
  {
    role: "Big Data Engineer (GeoSpatial)",
    company: "LocationMind",
    companyUrl: "https://locationmind.com/",
    employment: "Permanent",
    period: "Jan 2025 - Present",
    location: "Tokyo, Japan",
    summary:
      "Building mobility and geospatial data pipelines that transform raw GPS-scale inputs into people-flow analytics, map-ready outputs, and decision products.",
    highlights: [
      "Design ingestion, validation, normalization, aggregation, and geospatial enrichment workflows for mobility datasets.",
      "Build time-series and spatial features for people-flow analysis, dashboards, maps, and CSV data products.",
      "Improve reproducibility, monitoring, performance, documentation, and governance across the data lifecycle.",
    ],
    skills: ["Python", "Spark", "AWS", "Geospatial joins", "Time-series features", "Data quality"],
  },
  {
    role: "AI Engineer",
    company: "GridSolutions Inc",
    companyUrl: "https://gridsolutions.co.jp/",
    employment: "Permanent",
    period: "Nov 2021 - Jan 2025",
    location: "Tokyo, Japan",
    summary:
      "Delivered optimization and integration systems for energy pricing workflows, including business logic, APIs, and OpenADR VEN projects.",
    highlights: [
      "Implemented optimization modules using Mixed-Integer Nonlinear Programming for pricing strategy workflows.",
      "Built API interfaces for client-platform integration and maintained OpenADR VEN projects.",
      "Refactored architecture to reduce single points of failure and improve operational reliability.",
    ],
    skills: ["Python", "Optimization", "MINLP", "OpenADR", "API design", "Reliability"],
  },
  {
    role: "Machine Learning Engineer",
    company: "Bottle",
    companyUrl: "https://bottle.com.np/",
    employment: "Permanent",
    period: "Nov 2019 - Nov 2021",
    location: "Kathmandu, Nepal",
    summary:
      "Led delivery of machine-learning-backed APIs and cloud services, bridging implementation architecture with client-facing product needs.",
    highlights: [
      "Led end-to-end project lifecycles from planning through production delivery.",
      "Collaborated with architects to define implementation plans aligned with client constraints.",
      "Developed REST APIs and cloud integrations that exposed ML functionality to applications.",
    ],
    skills: ["Machine learning", "REST APIs", "AWS Lambda", "Amazon EC2", "Team leadership"],
  },
  {
    role: "Machine Learning and OCR Engineer",
    company: "Smart Data Solutions",
    companyUrl: "https://sdata.us/",
    employment: "Full-time",
    period: "Jul 2018 - Nov 2019",
    location: "Kathmandu, Nepal",
    summary:
      "Built OCR and document-intelligence workflows for scanned claims, combining extraction, classification, and operational interface improvements.",
    highlights: [
      "Extracted characters from scanned claims using Tesseract, FineReader, and Cartouche.",
      "Classified extracted text with Random Forest models and extracted entities using rules and NER.",
      "Improved manual keying interfaces to reduce operational friction.",
    ],
    skills: ["OCR", "Tesseract", "FineReader", "WEKA", "Random Forest", "NER"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Data Engineering",
    description:
      "Designing batch and streaming pipelines with explicit data contracts, validation, partitioning, orchestration, and observability.",
    tools: ["Python", "Spark", "Kafka", "ETL/ELT", "Data quality", "Time-series features"],
  },
  {
    title: "Cloud & Infra",
    description:
      "Shipping data products on cloud infrastructure with cost-aware execution, containerized services, and production deployment habits.",
    tools: ["AWS S3", "AWS Glue", "EC2", "Kubernetes", "ClickHouse", "Monitoring"],
  },
  {
    title: "Geospatial",
    description:
      "Turning raw mobility traces into spatially indexed, map-ready analytics for people-flow, OD movement, road volume, and POI footfall.",
    tools: ["H3", "GeoPandas", "Spatial joins", "Mobility data", "Maps", "Location intelligence"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "BSc CSIT",
    institution: "Deerwalk Institute of Technology, Tribhuvan University",
    institutionUrl: "https://deerwalk.edu.np/DWIT/",
    location: "Nepal",
    description:
      "Bachelor of Science in Computer Science and Information Technology from Deerwalk Institute of Technology, affiliated with Tribhuvan University, grounding later work in software systems, data platforms, and applied machine learning.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Mobility Data Foundation",
    context: "GPS-scale geospatial pipelines",
    company: {
      label: "LocationMind",
      href: "https://locationmind.com/#contact-us",
    },
    problem:
      "Raw mobility inputs are noisy, high-volume, and difficult to reuse across research, consulting, analytics, and product workflows.",
    solution:
      "Designed reproducible ingestion and transformation layers that validate, normalize, aggregate, enrich, and prepare location records for downstream analytics.",
    impact: [
      "Reduced repeated preprocessing work by standardizing analytical datasets.",
      "Improved confidence in outputs through validation, documentation, and repeatable transformations.",
      "Created foundations for maps, dashboards, CSV exports, and model features.",
    ],
    stack: ["Python", "Spark", "AWS S3", "AWS Glue", "GeoPandas", "H3", "Data quality"],
    architecture: ["Raw GPS", "Validation", "Spatial enrichment", "Feature tables", "Analytics outputs"],
  },
  {
    title: "People-Flow Analytics Products",
    context: "Urban planning and location intelligence",
    company: {
      label: "LocationMind",
      href: "https://locationmind.com/#contact-us",
    },
    problem:
      "Urban and mobility teams need reliable views of movement patterns without manually interpreting raw GPS trajectories.",
    solution:
      "Built analytical outputs for OD movement, road-volume intensity, and POI-footfall patterns using spatial aggregation and map-ready data products.",
    impact: [
      "Translated movement signals into decision-ready geospatial outputs.",
      "Supported stakeholder workflows across research, consulting, and product teams.",
      "Made repeated mobility analysis easier to reproduce and compare over time.",
    ],
    stack: ["Python", "H3", "GeoPandas", "ClickHouse", "Maps", "CSV products"],
    architecture: ["GPS events", "Spatial indexing", "OD / volume / footfall", "Maps", "Stakeholder delivery"],
  },
  {
    title: "Energy Pricing Optimization System",
    context: "Optimization and platform integration",
    company: {
      label: "GridSolutions",
      href: "https://gridsolutions.co.jp/",
    },
    problem:
      "Pricing workflows needed optimization logic that could be integrated into operational systems and maintained over time.",
    solution:
      "Implemented optimization modules, API interfaces, and OpenADR-related integrations while improving architecture reliability.",
    impact: [
      "Moved optimization research closer to production workflows.",
      "Created integration surfaces for client platforms.",
      "Reduced operational risk by refactoring away single points of failure.",
    ],
    stack: ["Python", "MINLP", "REST APIs", "OpenADR", "Optimization", "System refactoring"],
    architecture: ["Business inputs", "Optimization module", "API layer", "Client systems", "Operations"],
  },
  {
    title: "Document Intelligence Pipeline",
    context: "OCR and operational automation",
    company: {
      label: "Smart Data Solutions",
      href: "https://sdata.us/",
    },
    problem:
      "Scanned claims required structured extraction and classification before they could move efficiently through operational workflows.",
    solution:
      "Combined OCR extraction, text classification, rule-based extraction, NER, and interface improvements to support faster manual review.",
    impact: [
      "Improved the path from scanned documents to structured operational data.",
      "Reduced friction for manual keying workflows.",
      "Connected ML extraction with practical back-office usability.",
    ],
    stack: ["OCR", "Tesseract", "FineReader", "WEKA", "Random Forest", "NER"],
    architecture: ["Scanned claims", "OCR", "Classification", "Entity extraction", "Review interface"],
  },
];

export const architectureSystems: ArchitectureSystem[] = [
  {
    title: "Mobility Data Lakehouse",
    description:
      "A reusable pattern for turning high-volume GPS data into analytics-ready spatial features and product outputs.",
    flow: ["Sources", "Kafka / batch ingest", "S3 raw zone", "Spark + Glue", "H3 feature marts", "ClickHouse / APIs"],
    principles: ["Schema contracts", "Partition-aware processing", "Spatial indexing", "Cost-aware compute", "Observable outputs"],
  },
  {
    title: "Geospatial Product Layer",
    description:
      "A serving layer designed for teams that need fast comparison across movement metrics, time windows, and geographic cells.",
    flow: ["Feature tables", "Aggregation jobs", "ClickHouse", "Map tiles / CSV", "Dashboards", "Decision workflows"],
    principles: ["Low-latency reads", "Reproducible exports", "Map-ready geometry", "Clear lineage", "Stakeholder trust"],
  },
];

export const insights: InsightItem[] = [
  {
    title: "Designing H3 Feature Tables for Mobility Analytics",
    description:
      "How to choose resolution, partitioning, and aggregation boundaries when GPS events need to become reusable spatial features.",
    status: "Planned",
  },
  {
    title: "Data Quality Checks That Matter for GPS Pipelines",
    description:
      "Practical validation patterns for timestamp consistency, coordinate sanity, duplicate trajectories, and downstream trust.",
    status: "Planned",
  },
  {
    title: "ClickHouse for Geospatial Data Products",
    description:
      "Where columnar serving fits after Spark transformations, and how to think about query shape, rollups, and product latency.",
    status: "Planned",
  },
];
