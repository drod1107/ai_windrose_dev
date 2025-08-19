"use client";

import NextLink from "next/link";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Link as MUILink,
} from "@mui/material";

const items = [
  {
    title: "Parents Guide",
    description:
      "Vet AI apps, set family AI‑use agreements, and teach kids to fact‑check AI output.",
  },
  {
    title: "Educators Guide",
    description:
      "Integrate AI literacy, supervise classroom usage, and create clear reporting channels for harmful encounters.",
  },
  {
    title: "Readiness Matrix",
    description:
      "Assess your school or family’s safeguards and prioritize the next steps with a visual matrix.",
  },
  {
    title: "Policy Brief",
    description:
      "Child‑first legislative proposals that ban perpetual data licensing and require moderation on youth-facing AI platforms.",
  },
  {
    title: "Home AI Safety Checklist",
    description:
      "A practical checklist for parents and educators to ensure safe AI usage at home and in the classroom.",
  },
  {
    title: "School Readiness Matrix",
    description:
      "A tool for educators to evaluate and enhance their school's AI readiness and safety measures.",
  }
];

export const WhatsInside = () => (
  <Box component="section" className="py-16">
    <Container>
      <Typography
        component="h2"
        variant="h4"
        className="m-20 pb-10 text-center font-semibold"
      >
        What’s Inside
      </Typography>
      <Box className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MUILink
            key={item.title}
            component={NextLink}
            href="/resources"
            className="no-underline"
          >
            <Card className="h-full hover:shadow-md">
              <CardContent>
                <Typography variant="h6" className="mb-2 font-bold">
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </Card>
          </MUILink>
        ))}
      </Box>
    </Container>
  </Box>
);
