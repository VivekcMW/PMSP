import {
  Bot,
  BarChart3,
  Megaphone,
  Workflow,
  Wrench,
  Brain,
} from "lucide-react";

export const profile = {
  name: "Suraj Prakash",
  title: "Product Manager",
  tagline: "I don't just write PRDs. I ship them.",
  subtitle:
    "PM · DOOH & Programmatic Ad Tech · AI-Assisted 0→1 Builder",
  location: "Kuala Lumpur, Malaysia",
  email: "surajprakash251993@gmail.com",
  phoneMY: "+60-1112576896",
  phoneIN: "+91-8707366896",
  linkedin: "https://linkedin.com/in/suraj-prakash-8460bb147",
  summary:
    "Product Manager with 5+ years scaling B2B SaaS products across DOOH and programmatic ad tech, combined with hands-on experience independently designing, building, and shipping AI-powered production applications. I take products from requirement gathering through live deployment without dedicated engineering support — delivering measurable productivity gains and new revenue channels.",
};

export const stats = [
  { value: 5, suffix: "+", label: "Years in Ad Tech SaaS" },
  { value: 2, suffix: "", label: "AI Products Shipped Solo" },
  { value: 15, suffix: " days", label: "Fastest 0→1 Launch" },
  { value: 30, suffix: "%", label: "Development Rework Reduced" },
  { value: 6, suffix: "+", label: "Markets Onboarded (LATAM + Asia)" },
];

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  oneLiner: string;
  badge: string;
  metrics: { value: string; label: string }[];
  problem: string;
  discovery: string[];
  build: string[];
  outcome: string[];
  decisions: { decision: string; tradeoff: string; rationale: string }[];
  northStar: string;
  guardrails: string[];
  videoUrl?: string;
  stack: string[];
  next: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-performance-mirror",
    name: "AI Performance Mirror",
    category: "HR Productivity Analytics Platform",
    oneLiner:
      "An end-to-end AI-powered employee productivity platform giving HR a manager-agnostic view of performance across the organization.",
    badge: "0→1 · Solo Build",
    metrics: [
      { value: "3", label: "AI modules shipped" },
      { value: "1", label: "person, end to end" },
      { value: "0", label: "dedicated engineers" },
    ],
    problem:
      "HR had no independent, standardized view of employee productivity. Performance visibility depended entirely on manager reporting — inconsistent, subjective, and impossible to compare across teams. Task data lived in Zoho Sprint, meeting behavior in calendars, and unplanned work was invisible.",
    discovery: [
      "Gathered requirements directly with the HR department — mapping what 'productivity visibility' actually meant to them versus what managers reported.",
      "Identified three signal sources: sprint task data, calendar/meeting load, and planned-vs-unplanned activity.",
      "Defined the constraint upfront: no dedicated engineering resources — the build had to be fully AI-assisted.",
    ],
    build: [
      "Designed and built the platform end-to-end using generative AI development tools (Claude AI, Replit AI Builder) — from requirement gathering through production release.",
      "Integrated directly with the Zoho Sprint API to automatically pull task and time-tracking data, applying AI to generate day-to-day productivity and KRA-progress summary reports.",
      "Built Calendar Insight — meeting load, time-management behavior, and AI-generated meeting summaries.",
      "Built Activity Insight — planned vs. unplanned task tracking, feeding a unified performance dashboard.",
    ],
    outcome: [
      "Gave HR an independent, manager-agnostic view of employee productivity and KRA progress.",
      "Standardized performance visibility across the organization — one dashboard, one definition of productivity.",
      "Shipped to production with zero dedicated engineering support.",
    ],
    decisions: [
      {
        decision: "Built for HR as the single user, not managers or employees",
        tradeoff: "Sacrificed broader adoption and self-serve employee views in v1",
        rationale: "The core problem was HR's lack of an independent lens. Adding more personas would have diluted the value proposition and tripled scope.",
      },
      {
        decision: "Pulled data exclusively from Zoho Sprint + calendars, no manual input",
        tradeoff: "Blind spots for work not tracked in sprints",
        rationale: "Manual input kills adoption and reintroduces the manager-bias problem the product existed to solve. Automated signals only — imperfect but trustworthy.",
      },
      {
        decision: "AI-generated summaries instead of raw dashboards for daily review",
        tradeoff: "Less granular drill-down in early versions",
        rationale: "HR's job-to-be-done was 'understand quickly', not 'analyze deeply'. Summaries matched the workflow; raw data stayed one click away.",
      },
    ],
    northStar: "Share of employees whose KRA progress HR can assess without asking a manager",
    guardrails: [
      "Report accuracy — % of AI summaries flagged as wrong by HR",
      "Employee trust — no perception of surveillance (qualitative pulse)",
      "Coverage — % of tracked work vs. total work signals",
    ],
    stack: ["Claude AI", "Replit AI Builder", "Zoho Sprint API", "Gemini API"],
    next: "Add trend-based alerting so HR is proactively notified of productivity pattern shifts, rather than reviewing reports reactively.",
  },
  {
    slug: "inventory-availability-viewer",
    name: "Inventory Availability Viewer",
    category: "Ad Inventory Self-Serve Platform",
    oneLiner:
      "A customer-facing OOH/DSP inventory visibility tool — conceived, designed, and shipped in 15 days, commissioned directly by the CEO.",
    badge: "Shipped in 15 Days",
    metrics: [
      { value: "15", label: "days from brief to live" },
      { value: "1", label: "person, end to end" },
      { value: "0", label: "dedicated engineers" },
    ],
    problem:
      "Global stakeholders and customers had no self-serve way to see billboard availability, pricing, or format. Every inventory question routed through internal teams — slowing deals and hiding demand signals.",
    discovery: [
      "Commissioned directly by the CEO with a hard timeline — scoped ruthlessly to the core job: 'let a customer see what's available and raise their hand.'",
      "Mapped the minimum data set customers needed: availability, pricing, and format (static/digital).",
      "Single-handedly owned UX design — wireframes to final flows.",
    ],
    build: [
      "Built the full platform solo using AI development tools (Claude AI, Replit AI Builder) — UX design through deployment.",
      "Delivered real-time visibility into billboard availability, pricing, and format across the network.",
      "Enabled stakeholders and customers to browse inventory and submit requests directly on the platform.",
    ],
    outcome: [
      "Shipped 0→1 in 15 days, single-handedly.",
      "Increased platform accessibility for global stakeholders and customers.",
      "Opened a direct channel for inbound demand — supporting revenue growth.",
    ],
    decisions: [
      {
        decision: "Request-only flow in v1 — no booking, no checkout",
        tradeoff: "Left transaction revenue on the table at launch",
        rationale: "The riskiest assumption was demand visibility, not payment. Request-only validated demand in 15 days; booking could follow the evidence.",
      },
      {
        decision: "Three data points only: availability, pricing, format",
        tradeoff: "No audience data, photos, or specs in v1",
        rationale: "Customer interviews showed 90% of inbound questions were these three fields. Everything else was polish, not the job-to-be-done.",
      },
      {
        decision: "Built solo with AI tools instead of waiting for an engineering slot",
        tradeoff: "Technical debt accepted; not built on the core platform stack",
        rationale: "An engineering slot was quarters away. A live tool generating demand signals beat a perfect tool that didn't exist.",
      },
    ],
    northStar: "Qualified inventory requests submitted per week",
    guardrails: [
      "Request quality — % of requests sales accepts as qualified",
      "Data freshness — availability accuracy vs. source of truth",
      "Time-to-quote — no regression vs. the manual process",
    ],
    stack: ["Claude AI", "Replit AI Builder", "Real-time Inventory Data"],
    next: "Layer in programmatic deal initiation so a browse-and-request flow becomes a browse-and-book flow.",
  },
];

export const timeline = [
  {
    version: "v6.0",
    role: "Senior Executive Product Manager",
    company: "Moving Walls",
    period: "Apr 2024 – Present",
    current: true,
    notes: [
      "Own end-to-end product roadmap for the DOOH programmatic platform, prioritizing by market trends, user research, and competitive analysis.",
      "Lead cross-functional teams (engineering, design, business) to deliver seamless user experiences aligned with GTM strategy.",
      "Conduct focus groups, user interviews, and usability testing — reducing development rework by ~30%.",
      "Manage rollout of new programmatic features: dependencies, stakeholder comms, post-launch iteration.",
      "Independently designed and shipped AI-assisted internal tools beyond the core roadmap.",
    ],
  },
  {
    version: "v5.0",
    role: "Senior Business Analyst – Innovation",
    company: "Moving Walls",
    period: "Jul 2023 – Apr 2024",
    current: false,
    notes: [
      "Spearheaded strategic planning and process optimization for innovation projects across Latin American and Asian markets.",
      "Partnered with leadership to prioritize initiatives by impact using business and data analytics.",
    ],
  },
  {
    version: "v4.0",
    role: "Business Analyst – Change Management",
    company: "Moving Walls",
    period: "Jan 2023 – Jun 2023",
    current: false,
    notes: [
      "Led Zoho CRM implementation and designed an employee reward system (XOXO Day).",
      "Drove business process improvements aligned with the CEO's strategic vision.",
    ],
  },
  {
    version: "v3.0",
    role: "Business Analyst – Client Onboarding",
    company: "Moving Walls",
    period: "Feb 2021 – Jan 2023",
    current: false,
    notes: [
      "Managed end-to-end client onboarding for Mexico, Brazil, Colombia, Chile, and Asian markets.",
      "Enabled clients to maximize platform ROI through cross-functional issue resolution.",
    ],
  },
  {
    version: "v2.0",
    role: "Business Analyst – Retail",
    company: "Moving Walls",
    period: "Mar 2020 – Feb 2021",
    current: false,
    notes: [
      "Built data visualizations and dashboards with Tableau and AWS QuickSight for retail decision-making.",
    ],
  },
  {
    version: "v1.0",
    role: "Associate Sales Consultant",
    company: "PolicyBazaar.com",
    period: "Nov 2017 – May 2018",
    current: false,
    notes: [
      "Consultative financial product sales — foundational customer needs analysis and solution selling.",
    ],
  },
];

export const operatingSystem = [
  {
    step: "01",
    title: "Discover",
    description:
      "Focus groups, user interviews, and usability testing to validate concepts before a line of code exists.",
    tools: ["Figma", "Miro", "User Interviews"],
  },
  {
    step: "02",
    title: "Define",
    description:
      "Roadmaps prioritized by market trends, competitive analysis, and impact — with clear user stories and OKRs.",
    tools: ["Jira", "Notion", "Confluence"],
  },
  {
    step: "03",
    title: "Build (AI-Assisted)",
    description:
      "Where most PMs stop, I keep going — designing, building, and deploying production apps with AI tools.",
    tools: ["Claude AI", "Replit AI Builder", "API Integration"],
  },
  {
    step: "04",
    title: "Measure",
    description:
      "Data-backed iteration: dashboards, A/B tests, and post-launch feedback loops driving the next cycle.",
    tools: ["Tableau", "SQL", "Power BI"],
  },
];

export const skills = [
  {
    group: "AI Product Development",
    icon: Bot,
    items: [
      "Claude AI (Vibe Coding)",
      "Replit AI Builder",
      "Generative AI App Design",
      "API Integration (Zoho Sprint, Gemini)",
    ],
  },
  {
    group: "PM Tools",
    icon: Wrench,
    items: ["Jira", "Confluence", "Notion", "Miro", "Trello", "Figma"],
  },
  {
    group: "Analytics",
    icon: BarChart3,
    items: ["Tableau", "AWS QuickSight", "SQL", "Power BI"],
  },
  {
    group: "Ad Tech",
    icon: Megaphone,
    items: [
      "DOOH Programmatic",
      "DSP/SSP Ecosystems",
      "Audience Targeting",
      "Campaign Analytics",
    ],
  },
  {
    group: "Methodologies",
    icon: Workflow,
    items: [
      "Agile / Scrum",
      "User Story Development",
      "UAT",
      "OKRs / KPIs",
      "A/B Testing",
    ],
  },
  {
    group: "AI / Data",
    icon: Brain,
    items: [
      "Google AI Studio",
      "Responsible AI Principles",
      "Data Science (SQL)",
    ],
  },
];

export const certifications = [
  { name: "Introduction to Generative AI Studio", issuer: "Google Cloud", ai: true },
  { name: "Introduction to Responsible AI", issuer: "Google", ai: true },
  { name: "Introduction to Large Language Models", issuer: "Google Cloud", ai: true },
  { name: "Transformer Models and BERT Model", issuer: "Google Cloud", ai: true },
  { name: "Encoder-Decoder Architecture", issuer: "Google Cloud", ai: true },
  { name: "SQL for Data Science", issuer: "Coursera", ai: false },
  { name: "AWS Fundamentals: Going Cloud-Native", issuer: "AWS", ai: false },
  { name: "Supply Market Analysis", issuer: "Rutgers University", ai: false },
  { name: "Scrum Fundamentals Certified (SFC)", issuer: "SCRUMstudy", ai: false },
  { name: "UI/UX For Beginners", issuer: "Great Learning", ai: false },
  { name: "Indian Financial Market", issuer: "NSE / NCFM", ai: false },
];

export const education = [
  {
    degree: "Master of Business Administration (MBA)",
    school: "Manipal International University, Malaysia",
    period: "2019 – 2020",
    focus: "Business Analysis · Finance · Marketing",
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    school: "Sikkim Manipal Institute of Technology",
    period: "2013 – 2017",
    focus: "Marketing & Human Resources",
  },
];

// NOTE: Draft quotes — replace with real, approved quotes before publishing.
export const testimonials = [
  {
    quote:
      "Suraj took a one-line brief and returned a live, customer-facing product in fifteen days. That pace of execution changed what we thought was possible internally.",
    author: "CEO",
    org: "Moving Walls",
  },
  {
    quote:
      "The Performance Mirror gave us something we never had — an independent view of productivity that doesn't depend on who your manager is.",
    author: "HR Lead",
    org: "Moving Walls",
  },
  {
    quote:
      "He validates before he builds. The usability rounds Suraj runs before rollout have measurably cut our rework.",
    author: "Engineering Lead",
    org: "Moving Walls",
  },
];

export const competencies = [
  {
    name: "Product Sense",
    definition: "Finding the right problem and the right shape of solution.",
    evidence: [
      "Scoped Inventory Viewer to 3 data points after interviews showed 90% of inbound questions were availability, pricing, and format.",
      "Reframed the HR productivity problem from 'more reporting' to 'manager-agnostic visibility' — the insight the product was built on.",
      "Run focus groups, user interviews, and usability testing before any rollout — cutting development rework by ~30%.",
    ],
  },
  {
    name: "Execution",
    definition: "Shipping — through ambiguity, constraints, and dependencies.",
    evidence: [
      "Shipped a customer-facing product 0→1 in 15 days, solo, commissioned directly by the CEO.",
      "Took two AI products from requirement gathering to production with zero dedicated engineers.",
      "Manage programmatic feature rollouts end-to-end: dependencies, stakeholder comms, post-launch iteration.",
    ],
  },
  {
    name: "Analytical Thinking",
    definition: "Metrics trees, data fluency, and evidence-based decisions.",
    evidence: [
      "Define North Star + guardrail metrics for every product I ship (documented in each case study).",
      "Built decision-making dashboards with Tableau and AWS QuickSight; SQL and Power BI fluent.",
      "Partner with leadership to prioritize innovation initiatives by measured impact across LATAM and Asia.",
    ],
  },
  {
    name: "Leadership & Drive",
    definition: "Influence without authority; momentum without permission.",
    evidence: [
      "Lead cross-functional teams (engineering, design, business) across enterprise DOOH platform delivery.",
      "Drove Zoho CRM implementation and org-wide change management aligned with CEO's strategic vision.",
      "Didn't wait for engineering resources — learned AI development tools and shipped the roadmap myself.",
    ],
  },
];
