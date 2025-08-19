"use client";

import { Box } from "@mui/material";

export const NewsletterForm = () => {
  return (
    <Box className="w-full flex justify-center">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd8kFJgNBBVpx6kc_DHkOVYyFNrXj8vgeAhfiXe7Zyfl29Brw/viewform?embedded=true"
        width="640"
        height="2198"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </Box>
  );
};
