# Windrose AI Safety Site

A full-stack Next.js 15 application delivering AI safety resources for families and educators. Built with TypeScript, Tailwind CSS, and Material UI, data is stored in PostgreSQL via Prisma and content comes from MDX files.

## Architecture

- **Framework & Language** – Next.js App Router, TypeScript, strict mode
- **UI** – Material UI components styled with Tailwind utility classes
- **Content** – Blog posts in `content/blog/*.mdx`; paper served from `public/paper.pdf`
- **Data & API** – Prisma ORM with a `Subscriber` model exposed through `/api/subscribe`
- **Validation** – Zod schemas for external input
- **Analytics** – Optional Google Analytics 4 snippet gated by `NEXT_PUBLIC_GA_ID`
- **Testing** – Jest + React Testing Library for units, Playwright for end-to-end flows

### Directory Layout

```
/
├─ src/
│  ├─ app/
│  │  ├─ (site)            # shared UI components, hooks, theme
│  │  ├─ api/subscribe     # POST endpoint for newsletter sign-ups
│  │  ├─ blog/[…slug]      # MDX blog routes
│  │  ├─ book-a-call       # calendar iframe
│  │  ├─ paper             # PDF viewer & download
│  │  ├─ resources         # downloadable resources
│  │  └─ subscribe         # dedicated subscribe page
│  ├─ lib                  # MDX and Prisma helpers
│  └─ types                # shared TypeScript types
├─ content/blog            # MDX posts with front-matter
├─ prisma                  # Prisma schema & migrations
└─ public                  # static assets
```

## Current Features

- Responsive layout with header, footer, and dark-mode toggle
- Home page introducing the mission and newsletter signup
- Paper page with inline PDF viewer, citation block, and share links
- Resources page offering free checklists and matrices
- MDX blog with tag support, pagination, related posts, RSS, and sitemap
- Subscribe page and `/api/subscribe` endpoint saving emails to Postgres
- Book-a-call page embedding a scheduling link
- Optional GA4 analytics and stubbed cookie banner

## Getting Started

1. **Prerequisites**
   - Node.js ≥ 20 and npm ≥ 10
   - A PostgreSQL database (local or hosted)
2. **Clone & Install**
   ```bash
   git clone https://github.com/your-org/windrose_website_v3.git
   cd windrose_website_v3
   npm install
   ```
3. **Environment**
   ```bash
   cp .env.example .env
   # edit .env with values described below
   ```
4. **Run**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

## Environment Variables

| Variable                   | Description                                                      | Where to get                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `DATABASE_URL`             | PostgreSQL connection string used by Prisma and `/api/subscribe` | [PostgreSQL downloads](https://www.postgresql.org/download/) or hosted providers like [Neon](https://neon.tech)                 |
| `NEXT_PUBLIC_CALENDAR_URL` | Appointment scheduling link for Book-a-Call page                 | Create an Appointment Schedule in Google Calendar: [calendar.google.com/appointments](https://calendar.google.com/appointments) |
| `NEXT_PUBLIC_GA_ID`        | GA4 measurement ID. Leave empty to disable analytics             | Create a GA4 property and copy the Measurement ID from [Google Analytics](https://analytics.google.com/)                        |

Store these in `.env`. Contributors do not configure Vercel environments; deployment is handled by project maintainers.

## Database & Migrations

Prisma manages the schema for the PostgreSQL database. Apply migrations locally with:

```bash
npm run migrate:deploy
```

This command also runs during `npm run build`; ensure `DATABASE_URL` is set.

## Content & Assets

- **Paper** – place `paper.pdf` in `public/`
- **Blog posts** – add `.mdx` files under `content/blog/` with front-matter
- **Google Appointments** – set `NEXT_PUBLIC_CALENDAR_URL` to your scheduling link

## Testing

Run all checks before committing:

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run test:e2e       # requires Playwright browsers
npm run build
npx -y @lhci/cli@0.11.0 autorun --collect.staticDistDir=.next
```

Playwright browsers may require additional system dependencies (`npx playwright install-deps`).

## Contributing

Contributors focus on local development and pull requests only; deployments are performed by project maintainers and require no interaction with Vercel.
