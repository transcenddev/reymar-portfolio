import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  display: "swap",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Reymar Mirante",
  description:
    "Reymar Mirante's portfolio showcasing expertise in Web Design & Development, Content Creation & Video Editing, Graphic & Brand Design, Digital Marketing, Personal Branding, and AI & Automation.",
  keywords: [
    "Reymar Mirante",
    "Web Design",
    "Web Development",
    "Content Creation",
    "Video Editing",
    "Graphic Design",
    "Brand Design",
    "Digital Marketing",
    "Personal Branding",
    "AI",
    "Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${interTight.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`antialiased bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50 transition-colors duration-300 font-sans ${inter.className}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
