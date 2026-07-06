export type Teardown = {
  slug: string;
  product: string;
  title: string;
  angle: string;
  readTime: string;
  context: string;
  diagnosis: { point: string; detail: string }[];
  opportunities: { name: string; description: string; effort: string; impact: string }[];
  recommendation: string;
  metrics: { northStar: string; guardrails: string[] };
};

export const teardowns: Teardown[] = [
  {
    slug: "google-maps-dooh",
    product: "Google Maps",
    title: "Google Maps is sitting on the world's best DOOH planning tool",
    angle: "Opportunity teardown — new ad surface",
    readTime: "6 min",
    context:
      "Google Maps knows where a billboard's audience is, how fast it's moving, where it came from, and where it's going. Yet DOOH advertisers still plan campaigns with static reach estimates and third-party audience panels. Maps has the supply-side data to become the measurement and planning layer for a ~$9B global DOOH market — without placing a single ad inside the app.",
    diagnosis: [
      {
        point: "DOOH's core problem is proof, not inventory",
        detail:
          "Advertisers don't lack screens to buy; they lack believable evidence of who saw them. Every DOOH player builds audience estimation from mobile SDK panels — noisy, small-sample, privacy-fragile. Google has ground-truth movement data at population scale.",
      },
      {
        point: "Maps already monetizes intent, but ignores exposure",
        detail:
          "Promoted pins monetize 'where should I go?'. But Maps could also answer 'who passed this location?' — the exact currency DOOH trades on. That's a measurement product, not an ads product, and it has no consumer-experience cost.",
      },
      {
        point: "Privacy is the moat, not the blocker",
        detail:
          "Differential privacy + aggregate-only reporting (as used in Popular Times) already solves this. Selling aggregated exposure indices requires no new data collection — only new packaging of existing aggregates.",
      },
    ],
    opportunities: [
      {
        name: "Maps Audience Index for DOOH",
        description:
          "An aggregate footfall + dwell index per location, sold via API to DOOH SSPs and measurement firms. Same privacy envelope as Popular Times.",
        effort: "Medium",
        impact: "High",
      },
      {
        name: "Planning layer in Google Ads",
        description:
          "Let advertisers overlay DOOH inventory (via partner feeds) on Maps data to plan screen selection alongside their digital campaigns.",
        effort: "High",
        impact: "High",
      },
      {
        name: "Attribution bridge",
        description:
          "Store-visit conversions already exist for search ads. Extend the same methodology to DOOH exposure zones — closing the loop DOOH has never had.",
        effort: "High",
        impact: "Very High",
      },
    ],
    recommendation:
      "Start with the Audience Index — it's a data product with existing privacy infrastructure, no consumer surface changes, and immediate willingness-to-pay from every DOOH measurement vendor currently paying for inferior panel data. Ship it as a paid API, learn the demand curve, then decide whether the planning and attribution layers justify deeper investment.",
    metrics: {
      northStar: "DOOH ad spend planned or measured using Maps data (quarterly)",
      guardrails: [
        "Privacy — zero individual-level data exposure; k-anonymity threshold on every aggregate",
        "Accuracy — index correlation vs. ground-truth sensor studies",
        "Ecosystem health — no channel conflict with existing Maps ads revenue",
      ],
    },
  },
  {
    slug: "the-trade-desk-dooh",
    product: "The Trade Desk",
    title: "Why buying DOOH in The Trade Desk still feels like buying display",
    angle: "UX/workflow teardown — domain deep dive",
    readTime: "5 min",
    context:
      "The Trade Desk is the reference DSP for programmatic buying, and DOOH is its fastest-growing emerging channel. But the buying workflow treats a 70-foot billboard like a 300×250 banner: same targeting paradigm, same reporting, same mental model. Having onboarded DOOH advertisers across LATAM and Asia, I've watched this mismatch push mid-market buyers back to managed service.",
    diagnosis: [
      {
        point: "One impression ≠ one viewer, but the UI pretends it does",
        detail:
          "DOOH impressions are multiplied (one play = N estimated viewers). TTD surfaces this in documentation, not in the buying flow — so budget pacing and frequency metrics silently mean different things across channels in the same campaign view.",
      },
      {
        point: "Geography is the primary targeting dimension, but it's buried",
        detail:
          "For DOOH, screen location is 80% of the decision. The flow still leads with audience segments — inherited from display — and offers maps as a secondary view, inverting how OOH buyers actually think.",
      },
      {
        point: "No creative context preview",
        detail:
          "Buyers can't see what a screen looks like in situ (venue type, height, surroundings) without leaving the platform. In OOH, the physical context IS the media value.",
      },
    ],
    opportunities: [
      {
        name: "Map-first buying mode for DOOH line items",
        description:
          "Flip the hierarchy: start from a map of screens, layer audience data on top. Matches the buyer's mental model.",
        effort: "Medium",
        impact: "High",
      },
      {
        name: "Impression-multiplier transparency",
        description:
          "Show plays vs. estimated impressions as separate, always-visible numbers in pacing, bidding, and reporting.",
        effort: "Low",
        impact: "Medium",
      },
      {
        name: "In-flow venue previews",
        description:
          "Street-level imagery and venue metadata inline in the screen selection flow — the digital equivalent of a site visit.",
        effort: "Medium",
        impact: "Medium",
      },
    ],
    recommendation:
      "Ship impression-multiplier transparency first — it's low-effort, addresses the trust gap that makes DOOH budgets fragile, and requires no new data partnerships. The map-first buying mode is the strategic bet: it converts the channel from 'display buyers experimenting with DOOH' to 'OOH buyers moving programmatic', which is the larger prize.",
    metrics: {
      northStar: "DOOH spend per active advertiser (monthly)",
      guardrails: [
        "Self-serve completion rate for first DOOH campaign setup",
        "Managed-service escalations per 100 DOOH campaigns (should fall)",
        "Cross-channel campaign adoption — DOOH added to existing digital plans",
      ],
    },
  },
  {
    slug: "youtube-shorts-monetization",
    product: "YouTube Shorts",
    title: "Shorts monetization: closing the creator value gap",
    angle: "Strategy teardown — consumer scale",
    readTime: "6 min",
    context:
      "Shorts wins attention but monetizes it at a fraction of long-form rates, and creators feel it — RPMs on Shorts run far below classic YouTube. The risk isn't revenue today; it's creator allocation tomorrow. Every hour a creator optimizes for TikTok because Shorts pays less is compounding damage to YouTube's core moat: the creator ecosystem.",
    diagnosis: [
      {
        point: "The ad unit doesn't fit the unit of consumption",
        detail:
          "Interstitial ads between Shorts monetize the session, not the video. Revenue attribution to individual creators becomes pooled and opaque — weakening the incentive link that made long-form YouTube an economy rather than a platform.",
      },
      {
        point: "Shopping is under-leveraged where it fits best",
        detail:
          "Short vertical video is the highest-converting discovery format in commerce (see Douyin). Shorts has product tagging, but it's creator-initiated and friction-heavy rather than a first-class monetization rail.",
      },
      {
        point: "Premium revenue share treats all watch time as equal",
        detail:
          "A minute of Shorts and a minute of long-form earn structurally different amounts, yet both compete for the same Premium subscriber's attention. This quietly taxes the format YouTube most needs to defend.",
      },
    ],
    opportunities: [
      {
        name: "Creator-attributed session ads",
        description:
          "Attribute interstitial revenue to the creators whose content held the session, weighted by engagement — restoring the direct create→earn link.",
        effort: "Medium",
        impact: "High",
      },
      {
        name: "Native shopping rail",
        description:
          "One-tap product carousel on commerce-intent Shorts, with automated product matching for eligible creators. Douyin-proven pattern, YouTube-scale catalog via Merchant Center.",
        effort: "High",
        impact: "Very High",
      },
      {
        name: "Brand-creator marketplace for Shorts",
        description:
          "Extend BrandConnect with Shorts-specific formats and guaranteed-view pricing — monetizing the format's strength (reach velocity) instead of apologizing for its weakness (session depth).",
        effort: "Medium",
        impact: "High",
      },
    ],
    recommendation:
      "Prioritize creator-attributed session ads. It's not the biggest revenue line — shopping is — but it repairs the incentive structure everything else depends on. Creator allocation is the leading indicator of platform health; RPM parity perception is what moves it. Shopping follows once creators are committed to the format.",
    metrics: {
      northStar: "Share of multi-platform creators posting to Shorts first",
      guardrails: [
        "Shorts RPM as % of long-form RPM (trend toward parity)",
        "Viewer session quality — no ad-load-driven retention decline",
        "Long-form cannibalization — total watch-time-weighted revenue neutral or positive",
      ],
    },
  },
];
