"use client";

import NextLink from "next/link";
import { Box, Button, Typography } from "@mui/material";

export const Hero = () => (
  <Box
    component="section"
    className="flex flex-col items-center gap-6 py-24 text-center"
  >
    <Typography component="h1" variant="h2" className="font-bold">
      Keeping Kids Safe in the Age of AI
    </Typography>
    <Typography variant="h5" className="max-w-2xl">
      Practical, child‑focused guidance for parents and educators as generative
      AI enters homes and classrooms.
    </Typography>
    <Box className="flex gap-4 pt-4">
      <Button component={NextLink} href="/paper" variant="contained">
        Read the Full Report
      </Button>
      <Button component={NextLink} href="/subscribe" variant="outlined">
        Subscribe for Updates
      </Button>
    </Box>
  </Box>
);
