import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samarth Birajdar | Software Engineer & Frontend Developer",
  description:
    "Portfolio of Samarth Birajdar — Software Engineer & Frontend Developer specializing in React.js, Next.js, TypeScript, Python, algorithmic problem solving, and modern web applications.",
  keywords: [
    "Samarth Birajdar",
    "Software Engineer",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript",
    "SaveIQ",
    "AI Software Engineering",
    "LeetCode 175+",
    "Full Stack Developer",
  ],
  authors: [{ name: "Samarth Birajdar" }],
  creator: "Samarth Birajdar",
  metadataBase: new URL("https://samarthbirajdar.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samarthbirajdar.com",
    title: "Samarth Birajdar | Software Engineer & Frontend Developer",
    description:
      "Aspiring Software Engineer passionate about building intuitive digital experiences, modern React.js/Next.js web applications, and AI integrations.",
    siteName: "Samarth Birajdar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samarth Birajdar | Software Engineer & Frontend Developer",
    description:
      "Building digital experiences that matter with React.js, Next.js, TypeScript, and Python.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#07080c] text-slate-100 antialiased selection:bg-violet-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
