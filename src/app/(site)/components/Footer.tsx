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
        <MUILink href="mailto:80010850+drod1107@users.noreply.github.com" className="underline">
          Contact us directly
        </MUILink>
      </Typography>
      <Box className="flex gap-4" component="div">
        {/* Social placeholders */}
        <MUILink href="https://www.instagram.com/ai_safely" component={NextLink} className="hover:underline">
          Instagram
        </MUILink>
      </Box>
      <Typography component="p" className="text-center">
        © {new Date().getFullYear()} · <MUILink href="/license" component={NextLink}>Custom License.</MUILink> <br />You may redistribute this for non-profit purposes only; all other rights reserved.
      </Typography>
    </Box>
  </footer>
);
