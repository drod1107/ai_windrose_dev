import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

interface Resource {
  title: string;
  description: string;
  href: string;
}

const resources: Resource[] = [
  {
    title: "Home AI Safety Checklist",
    description: "Practical steps to secure your home.",
    href: "/resources/home-ai-safety-checklist"
  },
  {
    title: "School Readiness Matrix",
    description: "Evaluate how prepared your school is for AI integration.",
    href: "/resources/school-readiness-matrix"
  },
  {
    title: "Executive Summary",
    description: "A high-level overview of the key findings and recommendations.",
    href: "/resources/executive-summary"
  },
  {
    title: "Abstract",
    description: "A brief summary of the key points and findings.",
    href: "/resources/abstract"
  },
  {
    title: "Policy Brief",
    description: "Child‑first legislative proposals that ban perpetual data licensing and require moderation on youth-facing AI platforms.",
    href: "/resources/policy-brief"
  }
];

export default function ResourcesPage() {
  return (
    <Box
      component="main"
      id="content"
      className="grid gap-6 p-4 md:grid-cols-3"
    >
      {resources.map((r) => (
        <Card key={r.title} className="flex flex-col justify-between">
          <CardContent>
            <Typography variant="h6" className="mb-2 font-semibold">
              {r.title}
            </Typography>
            <Typography>{r.description}</Typography>
          </CardContent>
          <CardActions>
            <Button
              component={NextLink}
              href={r.href}
              variant="contained"
              aria-label={`Download ${r.title}`}
            >
              Download
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
