import { Box, Button, Typography } from "@mui/material";
import NextLink from "next/link";
import { Hero } from "./(site)/components/Hero";
import { WhatsInside } from "./(site)/components/WhatsInside";
import { TrustSection } from "./(site)/components/TrustSection";

export default function HomePage() {
  return (
    <Box component="main" id="content">
      <Hero />
      <WhatsInside />
      <TrustSection />
      <Box
        component="section"
        className="flex flex-col items-center gap-4 py-16 text-center"
      >
        <Typography variant="h4" className="font-semibold">
          Get Field-Tested AI Safety Tips
        </Typography>
        <Typography className="max-w-2xl">
          Join the Windrose newsletter for new resources, checklists, and research highlights. No spam—just actionable insights for families and schools. (Coming Soon!)
        </Typography>
        <Button component={NextLink} href="/subscribe" style={{ color: "white"}} variant="contained">
          Subscribe to our AI Safety Newsletter,
          <br />
          specially designed for parents and educators.
        </Button>
      </Box>
    </Box>
  );
}

