# Project Plan

ROLE: You are Codex inside ChatGPT with the “Code” capability enabled. You are my software engineering agent. Work in a brand‑new repo. Explain your plan first, then execute it. After each logical phase, show diffs, logs, and what to test.

GOAL: Build and deploy a production‑ready website for my AI Safety project. Core knowledge stays free. The site must:

Host and display my full paper (PDF) with download.

Offer email capture (saved to Vercel Postgres) with double‑opt‑in-ready architecture.

Provide a Blog (MDX) with tags, RSS, and SEO.

Include a Book a Call page that embeds my Google Appointment scheduling link.

Use Next.js (App Router, TypeScript) + TailwindCSS styled alongside Google Material UI (MUI).

Be deployable on Vercel with minimal setup.

---

1) Project Scaffold

    Create a new Next.js app: npx create-next-app@latest ai-safety-site --ts --eslint --app --src-dir --use-npm

    Move into the project; initialize git.

    Install deps:

    UI: @mui/material @mui/icons-material @emotion/react @emotion/styled

    Styling: tailwindcss postcss autoprefixer

    MDX blog: @next/mdx gray-matter remark remark-gfm

    DB: @vercel/postgres prisma @prisma/client

    SEO/feeds: next-sitemap rss

    Misc: zod date-fns

    Configure Tailwind (init + add to globals.css).

    Set up MUI + Tailwind interoperability (Tailwind utility classes + MUI theme; ensure Emotion is the styled engine).

    Deliverables: package.json, tailwind.config, postcss.config, basic App Router file layout.

2) Design System & Layout

    Create a shared MUI theme (Typography tuned for readability, prefers system font stack).

    Build a responsive layout with:

    Top nav (logo/title, Home, Paper, Blog, Resources, Subscribe, Book a Call).

    Footer (CC license note for content, social links placeholders, contact email).

    Add dark mode toggle (persist in localStorage).

    Add basic SEO: `<head>` defaults, OpenGraph, Twitter Card, canonical.

    Deliverables: src/app/layout.tsx, src/app/(site)/components/Header.tsx, Footer.tsx, ThemeRegistry.tsx (or similar), dark-mode hook.

3) Home Page (Mission-first)

    Hero section: title, 1‑line mission, 2 CTAs: Read the Paper and Subscribe for Updates.

    “What’s inside” grid: Parents Guide, Educators Guide, Readiness Matrix, etc. (link to resources page).

    Trust section: brief about openness, safety-first ethos; link to blog highlights.

    Newsletter module: inline email capture (POST to /api/subscribe).

    Deliverables: src/app/page.tsx

4) Paper Page (Completed)

    Add src/public/paper.pdf placeholder; render with:

    Inline PDF viewer (`<object>` or `<embed>`) + Download button.

    Outline section that deep-links to blog posts or resources.

    Add “Cite this work” block (APA style placeholder, editable).

    Add “Share” buttons (no tracking).

    Deliverables: src/app/paper/page.tsx, /public/paper.pdf placeholder reference.

5) Resources Page

    Curate cards: Home AI Safety Checklist, School Readiness Matrix, etc.

    Each card → detail page (markdown‑ish) or external link to free assets.

    Make these free downloads (no gate).

    Deliverables: src/app/resources/page.tsx + simple child routes if needed.

6) Blog (MDX)

    Use MDX in App Router:

    Add MDX config in next.config.mjs with @next/mdx.

    Content directory: content/blog/*.mdx (frontmatter: title, date, tags, excerpt, slug).

    Blog index:

    List posts with date, tags, excerpt, pagination.

    Single post:

    Render MDX with basic components (h2/h3, blockquote, code).

    Add “Last updated” and related posts by tag.

    Add RSS feed at /rss.xml and sitemap via next-sitemap.

    Deliverables: routes src/app/blog/page.tsx, src/app/blog/[slug]/page.tsx, MDX loader, content/blog/example.mdx, feed & sitemap config.

7) Subscribe (Email Capture → Vercel Postgres)

    Add Prisma with a Subscriber model:

    datasource db { provider = "postgresql"; url = env("DATABASE_URL") }
    generator client { provider = "prisma-client-js" }

    model Subscriber {
    id        String   @id @default(cuid())
    email     String   @unique
    createdAt DateTime @default(now())
    confirmed Boolean  @default(false)
    source    String?
    }

    Create /api/subscribe (POST): validate with Zod, check duplicate, insert record.

    Add a hidden honeypot field for spam mitigation.

    Return friendly messages; no real email sending yet (we’ll add provider later).

    Create a /subscribe page with a larger form and privacy note.

    Deliverables: prisma/schema.prisma, /api/subscribe/route.ts, src/app/subscribe/page.tsx, DB migration scripts.

8) Book a Call

    Create /book-a-call page that embeds my Google Calendar Appointment link (I’ll paste the URL later).

    Provide fallback direct link if iframe is blocked by X‑Frame‑Options.

    Deliverables: src/app/book-a-call/page.tsx with an iframe embed component and fallback.

9) Env, Secrets, Deploy

    Add Vercel Postgres: create DB, set DATABASE_URL locally and on Vercel.

    Add a scripts section to run prisma migrate deploy on build.

    Provide a README.md with:

    Local dev steps

    Deploy steps (vercel CLI)

    Where to drop paper.pdf

    How to add new blog posts (MDX frontmatter)

    How to set Google Appointments URL

    Optional: GA4 and basic cookie banner (turned off by default; stub only).

    Deliverables: working deploy to a Vercel preview; instructions in README.

10) Accessibility, Performance, QA

    Lighthouse pass targets: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.

    Keyboard nav across all interactive elements.

    Color contrast checked in both light/dark.

    Add basic unit tests for:

    /api/subscribe (valid/invalid email, duplicate)

    Blog MDX rendering (smoke test)

    Deliverables: test files, Lighthouse report notes.

11) Acceptance Criteria (must hit all)

    Site builds & runs locally: npm run dev

    Deployed on Vercel (preview ok) with working:

    Home, Paper (inline view + download), Resources, Blog (index + post), Subscribe (form), Book a Call (embed)

    /api/subscribe writes emails to Vercel Postgres; duplicate safe; honeypot present

    Blog MDX pipeline functional with example post, RSS at /rss.xml, sitemap working

    Responsive, accessible, clean MUI x Tailwind styling

    Clear README with next steps (how to add content, envs, deploy)

---

When you’re ready, begin. Show your step-by-step plan, then execute phase 0. Pause after each phase for my review.
