import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Open to senior product roles, AI product consulting, and interesting 0→1 problems.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="04 / Contact"
        title="Let's build the roadmap"
        dek="Open to senior product roles, AI product consulting, and interesting 0→1 problems. Based in Kuala Lumpur, working across Asia and beyond."
      />
      <Contact />
    </>
  );
}
