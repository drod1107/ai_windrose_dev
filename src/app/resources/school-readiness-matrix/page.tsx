import { Box, Button, Typography } from "@mui/material";
import NextLink from "next/link";

export default function SchoolMatrixPage() {
  return (
    <Box component="main" id="content" className="flex flex-col gap-4 p-4">
      <Typography variant="h4" className="font-semibold">
        School Readiness Matrix
      </Typography>
      <Typography>
        Evaluate how prepared your school is for AI integration.
      </Typography>
      <Button
        component={NextLink}
        href="/resources/school-readiness-matrix.pdf"
        download
        variant="contained"
        aria-label="Download School Readiness Matrix"
      >
        Download
      </Button>
    </Box>
  );
}
