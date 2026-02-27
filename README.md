# FUNKIPHINO — Event Ticketing Platform

A modern, responsive event ticketing web application built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Tech Stack

| Layer       | Technology                        |
| ----------- | --------------------------------- |
| Framework   | Next.js 16 (App Router)           |
| UI Library  | React 19                          |
| Styling     | Tailwind CSS v4, CSS Variables    |
| Language    | TypeScript 5                      |
| Fonts       | Inter, Dancing Script (Google)    |
| Images      | Next.js Image (local + remote)    |

## Project Structure

```
festicng-web/
├── app/
│   ├── globals.css          # Design tokens (CSS variables), animations
│   ├── layout.tsx           # Root layout, metadata, font imports
│   └── page.tsx             # Page orchestrator — composes all sections
├── components/
│   ├── icons.tsx            # Reusable SVG icon components
│   ├── Header.tsx           # Sticky nav, mobile menu, auth dropdown
│   ├── HeroCarousel.tsx     # Auto-sliding hero with prev/next controls
│   ├── EventsSection.tsx    # Search bar, category filters, event grid
│   ├── EventCard.tsx        # Individual event card with like & buy
│   ├── AboutSection.tsx     # Band info, stats, rating badge
│   ├── PerformanceBanner.tsx# Full-bleed parallax image section
│   ├── GallerySection.tsx   # Photo grid with lightbox trigger
│   ├── Lightbox.tsx         # Full-screen image viewer with nav
│   ├── Footer.tsx           # Contact form, upcoming events, credits
│   ├── TicketModal.tsx      # Ticket purchase flow with qty selector
│   └── AuthModal.tsx        # Login/register with Google & Apple OAuth
├── lib/
│   └── constants.ts         # Types, data, images, config, helpers
├── public/
│   ├── nainoa-shizuru-*.jpg # Concert crowd photo
│   └── anthony-delanoix-*.jpg # Heart hands concert photo
├── next.config.ts           # Remote image patterns (Figma assets)
├── tsconfig.json            # TypeScript config with @ path alias
└── package.json
```

## Features

- **Hero Carousel** — Auto-sliding images (5s interval) with arrow navigation
- **Event Discovery** — Search by name/location/date + category filter chips
- **Ticket Purchase** — Modal with quantity selector, price calculation, confirmation
- **Like System** — Toggle hearts on event cards with live counter
- **Photo Gallery** — Grid with hover zoom + full-screen lightbox with prev/next
- **Contact Form** — Validated form (name, email, message) with success feedback
- **Authentication** — Login/register modals with Google & Apple social sign-in
- **Mobile Responsive** — Hamburger menu, touch-friendly, adaptive layout
- **Design System** — CSS custom properties for consistent theming

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone <repo-url>
cd festicng-web
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Design Tokens

All design decisions are centralized in `app/globals.css` as CSS custom properties:

- `--bg-*` — Background colors (primary, secondary, dark, card, glass, overlay)
- `--accent` / `--accent-dark` — Brand indigo palette
- `--cat-*` — Category badge colors (concert, festival, soiree, etc.)
- `--text-*` — Typography colors (primary, secondary, muted, price)
- `--border-*` — Border opacity levels
- `--shadow-*` — Shadow depths (sm through xl, pill, card)
- `--radius-*` — Border radii

## Architecture Decisions

- **Component isolation** — Each section is a self-contained component managing its own local state (forms, filters, carousel timers)
- **Page as orchestrator** — `page.tsx` only handles shared state (likes, modals) and passes callbacks down
- **No external UI library** — All components use Tailwind + inline SVG icons for zero dependency overhead
- **CSS Variables over Tailwind theme** — Enables runtime theming and keeps the design system framework-agnostic
- **`"use client"` boundary** — Only interactive components are client-side; static sections remain server-renderable

## License

Private project.
