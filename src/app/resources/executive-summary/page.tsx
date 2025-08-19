import NextLink from "next/link";
import { Box, Button, Link, Typography } from "@mui/material";

export default function ExecutiveSummaryPage() {
  const pdfPath = "/resources/executive-summary.pdf";
  const citationText =
    "Rodriguez D. Executive Summary of The State of AI Safety for Parents & Educators, 2025 - First Edition. Sullivan, MO: Windrose & Company; 2025.";
  const shareUrl = "https://ai.windrose.dev/resources/executive-summary";

  return (
    <Box component="main" id="content" className="flex flex-col gap-8 p-4">
      {/* Inline PDF viewer */}
      <Box
        className="
          relative isolate mx-auto
          w-full md:w-2/3 max-w-5xl
          h-[75vh] min-h-[520px]
          overflow-hidden rounded-xl border shadow bg-white
          z-0
        "
        data-testid="pdf-viewer"
      >
        <object
          data={pdfPath}
          type="application/pdf"
          className="block h-full w-full"
          aria-label="Abstract PDF"
        >
          <iframe
            src={pdfPath}
            title="Abstract PDF"
            className="h-full w-full"
            style={{ border: 0, position: "relative", zIndex: 0 }}
          />
        </object>
      </Box>

      <Button component={Link} href={pdfPath} download variant="contained" className="self-start">
        Download PDF
      </Button>

      <Box component="nav" data-testid="outline">
        <Typography variant="h5" className="mb-2 font-semibold">
          Related Content
        </Typography>
        <ul className="list-disc pl-5">
          <li><Link component={NextLink} href="/resources">Resources</Link></li>
          <li><Link component={NextLink} href="/blog">Blog</Link></li>
        </ul>
      </Box>

      <Box component="section" className="border-l-4 border-gray-400 pl-4">
        <Typography variant="h6" className="mb-1 font-semibold">Cite this work</Typography>
        <Typography>{citationText}</Typography>
      </Box>

      <Box data-testid="share-buttons" className="flex gap-4">
        <Link
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
          target="_blank" rel="noopener noreferrer"
        >
          Twitter
        </Link>
        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          target="_blank" rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </Box>
    </Box>
  );
}
