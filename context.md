# Chronotype Digital Ecosystem - Project Context

## Project Overview
A premium sleep awareness ecosystem built with React + Vite + Tailwind CSS. The application educates users about chronotypes (Lark, Eagle, Owl) and sleep science through a long-scroll public experience with dashboard interfaces for administration.

## Technology Stack
- **Framework**: React 19.2.6 with React DOM
- **Build Tool**: Vite 7.3.2 with @vitejs/plugin-react
- **Styling**: Tailwind CSS 4.1.17 with @tailwindcss/vite
- **Animation**: Framer Motion 12.40.0
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Utilities**: clsx, tailwind-merge
- **Build Plugin**: vite-plugin-singlefile (for bundled output)

## Directory Structure
```
chronotype-digital-ecosystem-design/
├── index.html                 # Entry HTML with theme color #0A1421
├── vite.config.ts            # Vite configuration with singlefile plugin
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
├── src/
│   ├── main.tsx             # React entry point
│   ├── index.css            # Global styles and design system
│   ├── App.tsx              # Main app with mode routing
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── lib/
│   │   └── content.ts       # Default content and CMS data
│   ├── components/
│   │   ├── ui/              # Shared UI components
│   │   │   ├── Navbar.tsx   # Top navigation with mode switcher
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── ContactModal.tsx
│   │   ├── sections/        # Public site sections (long-scroll)
│   │   │   ├── Hero.tsx
│   │   │   ├── WhySleep.tsx
│   │   │   ├── SleepCycles.tsx
│   │   │   ├── Disorders.tsx
│   │   │   ├── WarningSigns.tsx
│   │   │   ├── Impact.tsx
│   │   │   ├── ChronotypesIntro.tsx
│   │   │   ├── LarkEagleOwl.tsx
│   │   │   ├── Performance.tsx
│   │   │   ├── FourPillars.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── SleepFacts.tsx
│   │   │   ├── Guidance.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Footer.tsx
│   │   └── dashboards/      # Admin interfaces
│   │       ├── SuperAdmin.tsx
│   │       ├── OrgAdmin.tsx
│   │       └── UserPanel.tsx
│   └── assets/              # Static assets (if any)
└── public/                # Static public assets (if any)
```

## Application Modes
The app operates in 4 distinct modes via routing in `App.tsx`:
- **public** - Long-scroll educational experience (default)
- **superadmin** - Platform-wide administration (organizations, content, analytics)
- **orgadmin** - Organization-specific management (branding, team, leads)
- **user** - User dashboard panel

## Design System

### Color Palette
**Primary Dark System:**
- `--midnight: #0A1421` - Primary dark background
- `--navy: #121C2E` - Secondary dark
- `--deep-navy: #0D1624` - Card backgrounds
- `--teal: #0F766E` - Primary accent
- `--emerald: #0D9488` - Teal hover state
- `--cyan: #67E8F9` - Bright accent
- `--soft-cyan: #A5F3FC` - Light accent

**Light System:**
- `--warm-white: #FAF8F5` - Page backgrounds
- `--cream: #F5F2ED` - Card backgrounds
- `--stone: #EDE8E0` - Borders, dividers
- `--slate: #64748B` - Secondary text

**Chronotype-specific Colors:**
- **Lark**: Dawn palette (`#E8B86D`, `#F4D9B0`, `#FEF9F0`)
- **Eagle**: Amber palette (`#B97D3A`, `#C5A46E`, `#F8F6F1`)
- **Owl**: Purple palette (`#4C3F6E`, `#3C3158`, `#F2F1F8`)

**Section Classes:**
- `.section-light` - `bg-var(--warm-white)`
- `.section-dark` - `bg-var(--midnight)` with white text
- `.section-navy` - `bg-var(--navy)`

### Typography
- Font family: system-ui stack (ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- Display headings: `clamp(3.25rem, 7vw, 6.75rem)` with `-0.04em` letter-spacing
- Hero sub: `clamp(1.125rem, 2.1vw, 1.5rem)`
- Font features: `"tnum", "ss01"` on h1-h3
- Tracking: tight to widest for hierarchy

### Spacing & Layout
- Max width containers: `max-w-7xl` (main), `max-w-6xl`, `max-w-5xl`, `max-w-3xl`
- Section padding: `py-20` or `py-24`
- Container padding: `px-8` or `px-9`
- Border radius: `rounded-2xl`, `rounded-3xl` (dominant)

### Components Patterns
- **Buttons**: `.btn-premium` class with cubic-bezier transitions, hover lift via translateY
- **Cards**: Rounded 3xl, subtle borders, hover elevation
- **Inputs**: `.input-premium` with focus rings in teal/cyan
- **Glass**: `.glass` and `.glass-dark` for frosted glass effect

### Animation
- Cubic-bezier: `cubic-bezier(0.23, 1.0, 0.32, 1)` (smooth, premium feel)
- Motion durations: 0.2s for UI, 0.4s for state transitions, 1.2s for cycle rings
- Reduced motion support via `@media (prefers-reduced-motion: reduce)`

## Key Features
1. Single-page long-scroll public experience
2. CMS mockup with localStorage persistence
3. Three chronotype archetypes (Lark, Eagle, Owl)
4. Four Pillars interactive module
5. Admin dashboards with white-label branding
6. Contact modal with form
7. Mode switching between public/admin/user views
