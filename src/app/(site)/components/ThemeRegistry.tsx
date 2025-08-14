// ThemeRegistry component
// Sets up Emotion cache and MUI ThemeProvider with Tailwind-friendly order.

"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import createCache from "@emotion/cache";
import type { EmotionCache } from "@emotion/cache";
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
  const [cache, setCache] = useState<EmotionCache | null>(null);

  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>(
      "meta[name='emotion-insertion-point']",
    );
    setCache(createCache({ key: "mui", insertionPoint: meta ?? undefined }));
  }, []);

  if (!cache) {
    return null;
  }

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
