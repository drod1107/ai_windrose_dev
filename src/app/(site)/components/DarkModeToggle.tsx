// DarkModeToggle
// Accessible button that switches between light and dark themes.

"use client";

import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useColorMode } from "../hooks/useColorMode";

export const DarkModeToggle = () => {
  const { mode, toggle } = useColorMode();
  const isDark = mode === "dark";

  return (
    <IconButton
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      color="inherit"
    >
      {isDark ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};
