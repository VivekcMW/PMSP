import { NextResponse } from "next/server";
import {
  profile,
  caseStudies,
  timeline,
  skills,
  certifications,
  education,
  competencies,
} from "@/data/resume";

function buildContext(): string {
  const cs = caseStudies
    .map(
      (c) =>
        `${c.name} (${c.category}): ${c.oneLiner} Problem: ${c.problem} Outcomes: ${c.outcome.join(" ")} North Star metric: ${c.northStar}`
    )
    .join("\n");
  const roles = timeline
    .map((t) => `${t.role} at ${t.company} (${t.period}): ${t.notes.join(" ")}`)
    .join("\n");
  const skillList = skills
    .map((s) => `${s.group}: ${s.items.join(", ")}`)
    .join("\n");
  const certs = certifications.map((c) => `${c.name} (${c.issuer})`).join("; ");
  const edu = education
    .map((e) => `${e.degree}, ${e.school} (${e.period})`)
    .join("; ");
  const comps = competencies
    .map((c) => `${c.name}: ${c.evidence.join(" ")}`)
    .join("\n");

  return `PROFILE: ${profile.name}, ${profile.title}. ${profile.summary} Location: ${profile.location}. Email: ${profile.email}. LinkedIn: ${profile.linkedin}.

CASE STUDIES:
${cs}

CAREER HISTORY:
${roles}

SKILLS:
${skillList}

CERTIFICATIONS: ${certs}

EDUCATION: ${edu}

PM COMPETENCIES:
${comps}`;
}

const FALLBACK_TOPICS: { keywords: string[]; answer: () => string }[] = [
  {
    keywords: ["experience", "background", "career", "years", "who is", "about"],
    answer: () =>
      `${profile.name} is a ${profile.title} based in ${profile.location}. ${profile.summary}`,
  },
  {
    keywords: ["build", "built", "ship", "project", "product", "ai", "case stud", "mirror", "inventory"],
    answer: () =>
      caseStudies
        .map((c) => `${c.name} — ${c.oneLiner}`)
        .join("\n\n") +
      "\n\nFull deep dives are on the Work page.",
  },
  {
    keywords: ["skill", "tool", "stack", "tech", "sql", "tableau", "figma", "jira"],
    answer: () =>
      skills.map((s) => `${s.group}: ${s.items.join(", ")}`).join("\n"),
  },
  {
    keywords: ["role", "job", "moving walls", "current", "work history", "policybazaar"],
    answer: () =>
      timeline
        .slice(0, 3)
        .map((t) => `${t.role} at ${t.company} (${t.period})`)
        .join("\n") + "\n\nThe full changelog is on the About page.",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "linkedin", "phone"],
    answer: () =>
      `Email: ${profile.email}\nLinkedIn: ${profile.linkedin}\nPhone (MY): ${profile.phoneMY}\nOr use the Contact page.`,
  },
  {
    keywords: ["education", "degree", "mba", "cert"],
    answer: () =>
      education.map((e) => `${e.degree} — ${e.school} (${e.period})`).join("\n") +
      `\n\nCertifications include: ${certifications.slice(0, 5).map((c) => c.name).join("; ")} and more.`,
  },
  {
    keywords: ["metric", "measure", "north star", "data"],
    answer: () =>
      caseStudies
        .map((c) => `${c.name} — North Star: ${c.northStar}`)
        .join("\n") +
      "\n\nEvery case study documents North Star and guardrail metrics.",
  },
];

function fallbackAnswer(question: string): string {
  const q = question.toLowerCase();
  for (const topic of FALLBACK_TOPICS) {
    if (topic.keywords.some((k) => q.includes(k))) return topic.answer();
  }
  return `I can answer questions about Suraj's experience, the AI products he's built, his skills, metrics thinking, education, or how to contact him. Try asking "What has he shipped?" or "What's his background?"`;
}

export async function POST(req: Request) {
  let question: string;
  try {
    const body = await req.json();
    question = String(body.question ?? "").slice(0, 500);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (!question.trim()) {
    return NextResponse.json({ error: "Empty question" }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey,
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [
                {
                  text: `You are the portfolio assistant for Suraj Prakash, a Senior Product Manager. Answer questions about him using ONLY the context below. Be concise (2-4 sentences), professional, and specific. If asked something outside the context, say you only answer questions about Suraj's professional background. Never invent facts.\n\n${buildContext()}`,
                },
              ],
            },
            contents: [{ role: "user", parts: [{ text: question }] }],
            generationConfig: { maxOutputTokens: 300, temperature: 0.4 },
          }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        const text =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ??
          fallbackAnswer(question);
        return NextResponse.json({ answer: text, mode: "ai" });
      }
    } catch {
      // fall through to local mode
    }
  }

  return NextResponse.json({
    answer: fallbackAnswer(question),
    mode: "local",
  });
}
