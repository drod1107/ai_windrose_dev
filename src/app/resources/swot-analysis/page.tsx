import { Box, Button, Typography } from "@mui/material";
import NextLink from "next/link";

export default function SwotPage() {
  return (
    <Box component="main" id="content" className="flex flex-col gap-4 p-4">
      <Typography variant="h4" className="font-semibold">
        AI Safety SWOT Analysis
      </Typography>
      <Typography>
        Assess strengths, weaknesses, opportunities, and threats.
      </Typography>
      <Button
        component={NextLink}
        href="/resources/swot-analysis.pdf"
        download
        variant="contained"
        aria-label="Download AI Safety SWOT Analysis"
      >
        Download
      </Button>
    </Box>
  );
}
