import { Box, Link, Typography } from "@mui/material";

export default function BookACallPage() {
  // you can keep it configurable via env var if you want,
  // but for now hard-wire your calendar embed URL
  const calendarUrl =
    process.env.NEXT_PUBLIC_CALENDAR_URL ||
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ23UWilO1cd2IM1uSQqE1jCSEgHav1XImda-cfXJDH5FW-AuMgyz1xFH27IsAaTBn-4ZOPVsU7F?gv=true";

  return (
    <Box
      component="main"
      id="content"
      className="flex flex-col items-center gap-6 p-4 text-center"
    >
      <Typography variant="h4" className="font-semibold">
        Book a Call
      </Typography>

      {/* Appointment scheduler iframe */}
      <Box className="w-full max-w-3xl">
        <iframe
          src={calendarUrl}
          title="Google Calendar Appointment Scheduling"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          data-testid="calendar-iframe"
        />
      </Box>

      <Typography>
        If the calendar does not load,{" "}
        <Link href={calendarUrl} target="_blank" rel="noopener noreferrer">
          open it in a new tab
        </Link>
        .
      </Typography>
    </Box>
  );
}
