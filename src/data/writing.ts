export type Article = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
  takeaways: string[];
};

export const articles: Article[] = [
  {
    slug: "building-taught-me-prds",
    title: "What building production apps taught me about writing PRDs",
    dek: "I spent years writing requirements for engineers. Then I became the engineer. Here's what changed.",
    date: "2026-05",
    readTime: "5 min",
    sections: [
      {
        heading: "The requirement I never would have written",
        paragraphs: [
          "When I built the AI Performance Mirror, I hit a problem no PRD of mine had ever anticipated: the Zoho Sprint API returns time-tracking data in a shape that makes daily aggregation genuinely awkward. As a PM writing a spec, I would have typed 'pull task and time data from Zoho Sprint' and moved on — one line, obviously simple. As the builder, that one line cost me two days.",
          "That gap — between what a requirement costs to write and what it costs to build — is invisible until you've been on both sides of it. Most PRD friction between PMs and engineers isn't disagreement about the product. It's the PM pricing requirements in sentences while engineering prices them in days.",
        ],
      },
      {
        heading: "PRDs are risk documents, not feature lists",
        paragraphs: [
          "Building changed what I put in a PRD. I now write requirements in three tiers: the job-to-be-done (non-negotiable), the mechanism (my suggestion, engineering's decision), and the polish (explicitly cuttable). When I built the Inventory Availability Viewer in 15 days, this tiering wasn't a documentation style — it was the survival strategy. Anything I couldn't tier, I couldn't scope; anything I couldn't scope, I couldn't ship.",
          "The other change: I write down what I don't know. Every PRD now has an 'assumptions I haven't validated' section. As a builder, unvalidated assumptions were the things that blew up my timeline. As a PM, surfacing them upfront is the cheapest de-risking tool that exists.",
        ],
      },
      {
        heading: "Empathy is quantitative",
        paragraphs: [
          "PMs talk about 'engineering empathy' as a soft skill. After shipping production apps myself, I think it's actually a quantitative one: it's the ability to estimate the true cost distribution of your own requirements. Which of these ten lines is the expensive one? Before building, I couldn't tell you. Now I usually can — and when I can't, I ask before the sprint starts, not during it.",
          "You don't need to become an engineer to write better PRDs. But building one real thing, end to end, will change your specs more than any template ever will.",
        ],
      },
    ],
    takeaways: [
      "Tier every requirement: job-to-be-done / mechanism / polish — and mark what's cuttable",
      "Add an 'assumptions I haven't validated' section to every PRD",
      "One line of spec can hide days of work — learn to spot which line",
    ],
  },
  {
    slug: "fifteen-day-playbook",
    title: "0→1 in 15 days: my AI build playbook",
    dek: "The exact process I used to ship a customer-facing product in 15 days, solo — commissioned by the CEO, built with AI tools.",
    date: "2026-03",
    readTime: "7 min",
    sections: [
      {
        heading: "Days 1–3: Scope like your timeline depends on it",
        paragraphs: [
          "The brief was one line from the CEO: customers should be able to see our billboard inventory. The first three days had no code. I interviewed the sales team on what customers actually asked for, and the answer was strikingly consistent: availability, pricing, and format. Not audience data, not photos, not specs — three fields covered roughly 90% of inbound questions.",
          "That gave me the scoping rule for everything that followed: if a feature didn't help a customer answer 'what's available and can I raise my hand?', it didn't exist. The most important product decision of the whole project — request-only, no booking — was made here, on day 2, before a single screen was designed.",
        ],
      },
      {
        heading: "Days 4–6: Design the flow, not the screens",
        paragraphs: [
          "I designed the entire user journey as a flow first: browse → filter → detail → request. Only then did I sketch screens, and only the four the flow required. Working with AI build tools rewards this discipline enormously — a clear flow turns into clear prompts, and clear prompts turn into working code. Vague design intent is the number one thing that makes AI-assisted building slow.",
        ],
      },
      {
        heading: "Days 7–12: Build in vertical slices",
        paragraphs: [
          "With Claude AI and Replit AI Builder, I built one complete vertical slice at a time: the browse view end-to-end (data → UI → deploy), then filtering, then the request flow. Never horizontal layers. Every evening the product was deployable, which meant every morning I could show someone something real and course-correct cheaply.",
          "The AI tools were force multipliers, but the leverage came from PM skills: knowing what to build next, writing precise acceptance criteria as prompts, and ruthlessly rejecting scope the flow didn't need. AI made me fast; the scoping made me finish.",
        ],
      },
      {
        heading: "Days 13–15: Ship ugly-proof, not bug-proof",
        paragraphs: [
          "The final days went to the failure modes that would destroy trust — stale availability data, broken request submissions — not to visual polish. A customer forgives a plain interface; they never forgive requesting a billboard that turned out to be unavailable. Guardrails first, gloss later.",
          "It went live on day 15. Stakeholders and customers could browse real inventory and submit requests directly — a demand channel that hadn't existed two weeks earlier.",
        ],
      },
    ],
    takeaways: [
      "Spend the first 20% of the timeline on scope — it buys back the rest",
      "Kill the riskiest assumption first (ours: 'customers want to browse'), defer the rest",
      "Build vertical slices; be deployable every single day",
      "Protect trust-critical paths before polishing anything",
    ],
  },
];
