"use client";

import NextLink from "next/link";
import { Box, Typography, Link as MUILink } from "@mui/material";

export const TrustSection = () => (
  <Box
    component="section"
    className="py-16 text-center center justify-items-center"
  >
    <Typography variant="h4" className="mb-4 font-semibold">
      We publish openly and put child safety before hype.
    </Typography>
    <Typography className="block mx-auto max-w-3xl text-center ">
      Our work translates complex AI frameworks into clear, role-specific
      steps—and every post invites transparency, dialogue, and peer review.
      Explore more on the{" "}
      <MUILink component={NextLink} href="/blog" className="underline">
        blog
      </MUILink>
      .
    </Typography>
  </Box>
);
