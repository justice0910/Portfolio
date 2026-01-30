import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Michael Chen - AI/ML & Full Stack Engineer",
  description: "Portfolio of Michael Chen, a Senior AI/ML and Full-Stack Engineer with 16+ years of experience designing large-scale ML platforms, LLM-powered systems, and production-grade AI solutions at Meta and Yahoo.",
  keywords: "Michael Chen, AI/ML Engineer, Full Stack Developer, Machine Learning, LLM, PyTorch, TensorFlow, React, Meta, Yahoo, MLOps",
  authors: [{ name: "Michael Chen" }],
  openGraph: {
    title: "Michael Chen - AI/ML & Full Stack Engineer",
    description: "Senior AI/ML and Full-Stack Engineer with 16+ years building large-scale ML systems at Meta and Yahoo, serving hundreds of millions of users.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
