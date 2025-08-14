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
  // Path to the PDF stored in the public folder
  const pdfPath = "/paper.pdf";
  // Placeholder citation text displayed in the citation block
  const citationText = "Doe, J. (2024). AI Safety Paper. Windrose Publishing.";
  // Static URL used for social shares; adjust in production for accuracy
  const shareUrl = "https://example.com/paper";

  return (
    <Box component="main" id="content" className="flex flex-col gap-8 p-4">
      {/* Inline PDF viewer */}
      <Box className="h-[80vh] w-full" data-testid="pdf-viewer">
        <object
          data={pdfPath}
          type="application/pdf"
          className="h-full w-full"
        />
      </Box>

      {/* Primary download button */}
      <Button
        component={Link}
        href={pdfPath}
        download
        variant="contained"
        className="self-start"
      >
        Download PDF
      </Button>

      {/* Outline linking to related site sections */}
      <Box component="nav" data-testid="outline">
        <Typography variant="h5" className="mb-2 font-semibold">
          Related Content
        </Typography>
        <ul className="list-disc pl-5">
          <li>
            <Link component={NextLink} href="/resources">
              Resources
            </Link>
          </li>
          <li>
            <Link component={NextLink} href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </Box>

      {/* Citation block for academic referencing */}
      <Box component="section" className="border-l-4 border-gray-400 pl-4">
        <Typography variant="h6" className="mb-1 font-semibold">
          Cite this work
        </Typography>
        <Typography>{citationText}</Typography>
      </Box>

      {/* Simple share buttons without tracking */}
      <Box data-testid="share-buttons" className="flex gap-4">
        <Link
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Link>
        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </Box>
    </Box>
  );
}
