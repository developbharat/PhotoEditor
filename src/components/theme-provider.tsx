import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "@wits/next-themes";
import { type ThemeProviderProps } from "@wits/next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
