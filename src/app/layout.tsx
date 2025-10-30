import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const archivo = Archivo({
  display: "swap",
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Reymar Mirante | Web Design, Content & AI",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`antialiased bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50 transition-colors duration-300 ${archivo.className}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
