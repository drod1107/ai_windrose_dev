// ThemeRegistry component
// Sets up Emotion cache and MUI ThemeProvider with Tailwind-friendly order.

"use client";

import { ReactNode, useMemo } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { ColorModeProvider, useColorMode } from "../hooks/useColorMode";
import { createAppTheme } from "../theme";

interface Props {
  children: ReactNode;
}

// Internal component so we can consume color mode after provider initialization.
const ThemeInner = ({ children }: Props) => {
  const { mode } = useColorMode();
  const theme = useMemo(() => createAppTheme(mode), [mode]);
  const cache = useMemo(() => {
    const emotionInsertionPoint =
      typeof document !== "undefined"
        ? (document.querySelector(
            "meta[name='emotion-insertion-point']",
          ) as HTMLElement | null)
        : null;

    return createCache({
      key: "mui",
      insertionPoint: emotionInsertionPoint ?? undefined,
    });
  }, []);

  return (
    <CacheProvider value={cache}>
      {/* injectFirst ensures MUI styles load before Tailwind to avoid specificity issues */}
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
};

export const ThemeRegistry = ({ children }: Props) => (
  <ColorModeProvider>
    <ThemeInner>{children}</ThemeInner>
  </ColorModeProvider>
);
