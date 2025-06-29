import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Anton Ryschchuck - Full Stack Developer",
  description: "Portfolio of Anton Ryschchuck, a passionate full-stack developer specializing in modern web technologies, React, Next.js, and innovative digital solutions.",
  keywords: "Anton Ryschchuck, Full Stack Developer, React, Next.js, Web Development, Portfolio",
  authors: [{ name: "Anton Ryschchuck" }],
  openGraph: {
    title: "Anton Ryschchuck - Full Stack Developer",
    description: "Portfolio of Anton Ryschchuck, passionate about building scalable, secure, and high-performance web and blockchain solutions",
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