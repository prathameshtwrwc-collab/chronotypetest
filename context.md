# Chronotype Project Context

## Project Overview
A premium sleep awareness ecosystem built with React + Vite + Tailwind CSS. Features a long-scroll public experience with three dashboard modes: Super Admin, Org Admin, and User Panel.

## Tech Stack
- **React**: 19.2.6 (with hooks)
- **Vite**: 7.3.2 (build tool)
- **Tailwind CSS**: 4.1.17 (utility-first CSS)
- **TypeScript**: 5.9.3
- **Framer Motion**: 12.40.0 (animations)
- **Lucide React**: 1.18.0 (icons)
- **Sonner**: 2.0.7 (toast notifications)

## Project Structure
```
chronotypetest/
├── src/
│   ├── main.tsx           # App entry point
│   ├── index.css          # Global styles, color variables, utilities
│   ├── App.tsx            # Main app with mode routing
│   ├── types/
│   │   └── index.ts       # TypeScript interfaces
│   ├── lib/
│   │   └── content.ts     # Default content data
│   ├── components/
│   │   ├── ui/            # Reusable UI components (Navbar, ScrollProgress, ContactModal)
│   │   ├── sections/      # Main page sections (Hero, WhySleep, Benefits, FAQ, etc.)
│   │   └── dashboards/    # Dashboard views (SuperAdmin, OrgAdmin, UserPanel)
│   └── utils/
│       └── cn.ts          # Tailwind class merger utility
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

## Application Modes
- **public**: Long-scroll premium landing page experience
- **superadmin**: Organization management, CMS, analytics
- **orgadmin**: Organization branding, team management, reports
- **user**: User panel (placeholder)

## Key Design Tokens (CSS Variables)
- `--midnight`: #0A1421 (primary dark)
- `--navy`: #121C2E
- `--deep-navy`: #0D1624
- `--teal`: #0F766E (primary accent)
- `--emerald`: #0D9488
- `--cyan`: #67E8F9 (light accent)
- `--soft-cyan`: #A5F3FC
- `--warm-white`: #FAF8F5 (background)
- `--cream`: #F5F2ED
- `--stone`: #EDE8E0 (borders)
- `--slate`: #64748B (secondary text)
- `--gold`: #C5A46E
- `--sunrise`: #E8B86D (Lark)
- `--dawn`: #F4D9B0
- `--owl-purple`: #4C3F6E (Owl)
- `--eagle-amber`: #B97D3A (Eagle)

## Component Patterns

### Section Structure
All main sections use consistent wrapper:
```tsx
<section className="section-light|section-dark|section-navy py-24 border-b border-[#EDE8E0]">
  <div className="max-w-5xl|6xl|7xl mx-auto px-8">
    {/* Content */}
  </div>
</section>
```

### Typography Classes
- `.text-display`: Hero headings (clamp(3.25rem, 7vw, 6.75rem))
- `.text-hero-sub`: Hero subtitles (clamp(1.125rem, 2.1vw, 1.5rem))

### Button Styles
- `.btn-premium`: Primary hover animation (translateY(-1px) + shadow)
- `.btn-teal`: Teal background with emerald hover
- Rounded-2xl or rounded-3xl for buttons
- Tracking-wide for button text

### Card Styles
- `.glass` / `.glass-dark`: Backdrop blur effect
- `.card-lark` / `.card-eagle` / `.card-owl`: Chronotype-specific cards
- `rounded-3xl` for cards

### Input Styles
- `.input-premium`: White background with teal focus
- `.input-dark`: Dark background with cyan focus

## Layout Conventions
- Container max-widths: max-w-5xl, max-w-6xl, max-w-7xl
- Horizontal padding: px-8 (sections), px-9 (dashboards)
- Section height: min-h-[100dvh] for hero
- Grid: md:grid-cols-12 for main layouts
- Border: border-b border-[#EDE8E0] between sections

## Animation Patterns
- Framer Motion: `whileHover={{ y: -4 }}`, `whileHover={{ scale: 1.01 }}`
- Floating elements: `animation: float 6s ease-in-out infinite`
- Scroll progress: fixed top bar with gradient