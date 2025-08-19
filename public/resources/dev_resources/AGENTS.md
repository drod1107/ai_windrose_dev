# AI Safety Academic Website - Project Guide

## Project Structure

- /src/app - Next.js App Router pages and API routes
- /src/components - Shared React components
- /content/blog - MDX blog posts
- /public - Static assets including paper.pdf

## Coding Conventions

- TypeScript strict mode enabled
- MUI components with Tailwind utility classes for spacing/layout
- Functional components with hooks only
- Named exports for components
- Zod validation for all external data
- Consistent error handling with proper TypeScript types

## Testing Requirements

- Jest + React Testing Library for unit tests
- Playwright for E2E tests
- Run: npm test (unit), npm run test:e2e (integration)
- Minimum 90% coverage for new code
- TDD approach: write failing tests first

## Programmatic Checks (Must Pass)

- TypeScript: npx tsc --noEmit
- Linting: npm run lint (zero warnings)
- Formatting: npm run format:check
- Tests: npm test (all passing)
- Build: npm run build (successful)
- Lighthouse: Performance ≥95, Accessibility ≥95

## PR Guidelines

- Atomic commits with conventional commit format
- Feature branches from main
- All checks must pass before merge
- Include test coverage report

## Build & Deployment

- Local: npm run dev (port 3000)
- Build: npm run build && npm run start
- Deploy: vercel --prod (after preview verification)
