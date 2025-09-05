import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Imperial_Script } from 'next/font/google';
import "./globals.css";

const archivo = Archivo({
  display: "swap",
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-archivo",
});

const imperialScript = Imperial_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-imperial',
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
    <html lang="en">
      <body
        className={`antialiased bg-stone-200 text-stone-900 ${archivo.className}`}
      >
        {children}
      </body>
    </html>
  );
}
