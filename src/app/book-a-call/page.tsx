import { Box, Link, Typography } from "@mui/material";

export default function BookACallPage() {
  const calendarUrl =
    process.env.NEXT_PUBLIC_CALENDAR_URL || "https://calendar.google.com";

  return (
    <Box
      component="main"
      id="content"
      className="flex flex-col items-center gap-6 p-4 text-center"
    >
      <Typography variant="h4" className="font-semibold">
        Book a Call
      </Typography>
      <Box className="w-full max-w-3xl">
        <iframe
          src={calendarUrl}
          title="Book a Call"
          className="h-[800px] w-full border-0"
          data-testid="calendar-iframe"
          allowFullScreen
        />
      </Box>
      <Typography>
        If the calendar does not load, {""}
        <Link href={calendarUrl} target="_blank" rel="noopener noreferrer">
          open it in a new tab
        </Link>
        .
      </Typography>
    </Box>
  );
}
