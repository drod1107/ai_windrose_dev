// Color mode hook
// Manages light/dark state with SSR-safe defaults and persistence.

"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { PaletteMode } from "@mui/material";

// Key for localStorage persistence
const STORAGE_KEY = "color-mode";

interface ColorModeContextValue {
  mode: PaletteMode;
  toggle: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue | undefined>(
  undefined,
);

// Provider handling system preference, localStorage, and change events.
export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem(
      STORAGE_KEY,
    ) as PaletteMode | null;
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Persist to localStorage and update html class for Tailwind dark mode.
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, mode);
    const root = document.documentElement;
    root.classList.remove(mode === "light" ? "dark" : "light");
    root.classList.add(mode);
  }, [mode]);

  // Listen to system theme and storage events.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMedia = (e: MediaQueryListEvent) =>
      setMode(e.matches ? "dark" : "light");
    media.addEventListener("change", handleMedia);
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        setMode(e.newValue as PaletteMode);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      media.removeEventListener("change", handleMedia);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const toggle = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  const value = useMemo(() => ({ mode, toggle }), [mode]);

  return React.createElement(ColorModeContext.Provider, { value }, children);
};

// Hook to consume the color mode context.
export const useColorMode = () => {
  const ctx = useContext(ColorModeContext);
  if (!ctx)
    throw new Error("useColorMode must be used within ColorModeProvider");
  return ctx;
};
