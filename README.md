# Bikash Sapkota Personal Website

A single-page personal website for Bikash Sapkota, built with Next.js App Router, TypeScript, Tailwind CSS, and pnpm.

## Getting Started

Install dependencies and start the development server:

```bash
corepack pnpm install
corepack pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

```bash
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm build
```

## Content

Structured content lives in `src/lib/content.ts`. If a resume PDF is added later, place it under `public/` and set `profile.resumeUrl`.

## Deploy

The project is ready for Vercel's default Next.js deployment flow.
