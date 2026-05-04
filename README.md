# Shashank Shinde — Portfolio

Personal portfolio website built with **Next.js**, TypeScript, and Tailwind CSS.

**Live site:** [shashank-shinde.vercel.app](https://shashank-shinde.vercel.app/)

## Overview

This site showcases:

- About information
- Skills and technology stack
- Project highlights
- Professional experience
- Education
- Contact and social links

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide icons

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)

### Install

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

The app runs at [http://localhost:8080](http://localhost:8080).

## Build and Preview

### Production Build

```bash
npm run build
```

### Run Production Build Locally

```bash
npm run start
```

## Lint & Test

```bash
npm run lint
npm test
```

## Deployment

Deploy on [Vercel](https://vercel.com) from this repo. The canonical URL is configured in `src/lib/site.ts` (`CANONICAL_SITE_URL`). To use a **custom domain**, set the environment variable `NEXT_PUBLIC_SITE_URL` to `https://your-domain.com` in the Vercel project settings.

## Content Locations

Main portfolio content is maintained in:

- `src/data/projects.ts`
- `src/data/experience.ts`
- `src/data/education.ts`
- `src/data/skills.ts`

Page layout and sections:

- `src/components/HomePage.tsx`

Metadata and SEO:

- `src/app/layout.tsx`
- `src/lib/site.ts`
