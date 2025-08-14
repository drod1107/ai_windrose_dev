// Header component
// Displays site navigation and the dark mode toggle with accessible features.

"use client";

import NextLink from "next/link";
import { Box, Link as MUILink } from "@mui/material";
import { DarkModeToggle } from "./DarkModeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/paper", label: "Paper" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/call", label: "Book a Call" },
];

export const Header = () => (
  <header className="border-b">
    {/* Skip link for keyboard users */}
    <a href="#content" className="sr-only focus:not-sr-only">
      Skip to content
    </a>
    <nav
      aria-label="Main navigation"
      className="flex flex-wrap items-center justify-between gap-4 p-4"
    >
      <Box className="flex items-center gap-4 flex-wrap">
        <MUILink
          component={NextLink}
          href="/"
          className="font-bold no-underline"
        >
          Windrose
        </MUILink>
        <Box component="ul" className="flex flex-wrap gap-4" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <MUILink
                component={NextLink}
                href={link.href}
                className="hover:underline"
              >
                {link.label}
              </MUILink>
            </li>
          ))}
        </Box>
      </Box>
      <DarkModeToggle />
    </nav>
  </header>
);
