// Footer component
// Displays contact info, social placeholders, and license notice.

"use client";

import { Box, Link as MUILink, Typography } from "@mui/material";
import NextLink from "next/link";

export const Footer = () => (
  <footer className="mt-8 border-t p-4">
    <Box className="flex flex-col items-center gap-2 text-sm" component="div">
      <Typography component="p">
        {/* Contact email */}
        <MUILink href="mailto:info@example.com" className="underline">
          info@example.com
        </MUILink>
      </Typography>
      <Box className="flex gap-4" component="div">
        {/* Social placeholders */}
        <MUILink href="#" component={NextLink} className="hover:underline">
          Twitter
        </MUILink>
        <MUILink href="#" component={NextLink} className="hover:underline">
          GitHub
        </MUILink>
      </Box>
      <Typography component="p">
        © {new Date().getFullYear()} · Content licensed under CC BY-SA.
      </Typography>
    </Box>
  </footer>
);
