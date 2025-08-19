import NextLink from "next/link";
import { Box, Button, Link, Typography } from "@mui/material";

/**
 * PaperPage renders the research paper with auxiliary information.
 *
 * The component embeds a PDF viewer, provides a direct download link,
 * surfaces related resources, offers citation text, and exposes simple
 * share links. All elements are annotated for testing and clarity.
 */

export default function PaperPage() {
  const pdfPath = "/resources/paper.pdf";
  const citationText =
    "Rodriguez D. The State of AI Safety for Parents & Educators, 2025 - First Edition. Sullivan, MO: Windrose & Company; 2025. Available from https://ai_safety.windrose.dev";
  const shareUrl = "https://ai.windrose.dev/paper";

  return (
    <Box component="main" id="content" className="flex flex-col gap-8 p-4">
      {/* Inline PDF viewer (centered, bounded, no overlap) */}
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
          aria-label="AI Safety Paper PDF"
        >
          {/* Fallback for browsers/extensions that break <object> */}
          <iframe
            src={pdfPath}
            title="AI Safety Paper PDF"
            className="h-full w-full"
            style={{ border: 0, position: "relative", zIndex: 0 }}
          />
        </object>
      </Box>

      {/* Primary download button */}
      <Button component={Link} href={pdfPath} download variant="contained" className="self-start">
        Download PDF
      </Button>

      {/* Related content */}
      <Box component="nav" data-testid="outline">
        <Typography variant="h5" className="mb-2 font-semibold">
          Related Content
        </Typography>
        <ul className="list-disc pl-5">
          <li><Link component={NextLink} href="/resources">Resources</Link></li>
          <li><Link component={NextLink} href="/blog">Blog</Link></li>
        </ul>
      </Box>

      {/* Citation block */}
      <Box component="section" className="border-l-4 border-gray-400 pl-4">
        <Typography variant="h6" className="mb-1 font-semibold">Cite this work</Typography>
        <Typography>{citationText}</Typography>
      </Box>

      {/* Share buttons */}
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
