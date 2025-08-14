// MUI theme configuration
// Provides light/dark palettes, system font stack, and component defaults.

import { createTheme, PaletteMode } from "@mui/material";

// Generates a theme based on the provided color mode.
export const createAppTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        // Primary blue chosen for good contrast on both themes
        main: "#0ea5e9",
      },
      secondary: {
        // Secondary accent color
        main: "#9333ea",
      },
      background: {
        default: mode === "light" ? "#ffffff" : "#0a0a0a",
        paper: mode === "light" ? "#ffffff" : "#0a0a0a",
      },
      grey: {
        100: "#f3f4f6",
        900: "#111827",
      },
    },
    typography: {
      // System font stack for familiarity and performance
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
    },
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: { fontWeight: 600 },
          h2: { fontWeight: 600 },
        },
      },
    },
  });

export type AppTheme = ReturnType<typeof createAppTheme>;
