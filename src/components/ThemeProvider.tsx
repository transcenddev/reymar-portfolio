"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}
