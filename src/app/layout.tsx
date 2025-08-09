import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  display: "swap",
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Reymar Portfolio",
  description: "Created with Reymar",
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
