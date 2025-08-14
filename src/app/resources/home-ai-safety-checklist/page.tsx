import { Box, Button, Typography } from "@mui/material";
import NextLink from "next/link";

export default function HomeChecklistPage() {
  return (
    <Box component="main" id="content" className="flex flex-col gap-4 p-4">
      <Typography variant="h4" className="font-semibold">
        Home AI Safety Checklist
      </Typography>
      <Typography>
        Download the checklist to evaluate your home&apos;s AI readiness.
      </Typography>
      <Button
        component={NextLink}
        href="/resources/home-ai-safety-checklist.pdf"
        download
        variant="contained"
        aria-label="Download Home AI Safety Checklist"
      >
        Download
      </Button>
    </Box>
  );
}
