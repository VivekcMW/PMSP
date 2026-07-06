import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AskAI from "@/components/AskAI";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://surajprakash.vercel.app"),
  title: {
    default: "Suraj Prakash — Senior Product Manager",
    template: "%s — Suraj Prakash",
  },
  description:
    "Senior Product Manager specializing in DOOH & programmatic ad tech, and AI-assisted 0→1 product development. I don't just write PRDs — I ship them.",
  keywords: [
    "Product Manager",
    "AI Product Development",
    "DOOH",
    "Programmatic Ad Tech",
    "B2B SaaS",
    "Kuala Lumpur",
  ],
  authors: [{ name: "Suraj Prakash" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Suraj Prakash — Portfolio",
    title: "Suraj Prakash — Senior Product Manager",
    description:
      "Senior PM · DOOH & Programmatic Ad Tech · AI-Assisted 0→1 Builder. I don't just write PRDs — I ship them.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Prakash — Senior Product Manager",
    description:
      "Senior PM · DOOH & Programmatic Ad Tech · AI-Assisted 0→1 Builder. I don't just write PRDs — I ship them.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <AskAI />
      </body>
    </html>
  );
}
