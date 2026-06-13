# Development Rules & Guidelines

## Color System Rules

### Primary Colors (Use as-is)
- `--midnight: #0A1421` - Primary dark background (NOT #000000)
- `--navy: #121C2E` - Secondary dark backgrounds
- `--teal: #0F766E` - Primary accent (buttons, highlights, links)
- `--cyan: #67E8F9` - Bright accent (highlights, focus states)

### Light Theme Colors
- `--warm-white: #FAF8F5` - Main page background
- `--cream: #F5F2ED` - Card backgrounds
- `--stone: #EDE8E0` - Border/divider color
- `--slate: #64748B` - Secondary text

### Chronotype Colors
- **Lark**: `#E8B86D` (sunrise), `#F4D9B0` (dawn), `#FEF9F0` (background)
- **Eagle**: `#B97D3A` (amber), `#C5A46E` (gold), `#F8F6F1` (background)
- **Owl**: `#4C3F6E` (purple), `#3C3158` (deep purple), `#F2F1F8` (background)

**Rule**: Never introduce new colors. Use existing system colors only.

## Typography Rules

### Font Classes
- `.text-display` - For H1 display headings (clamp sizing)
- `.text-hero-sub` - For hero subtitle text
- `-webkit-font-smoothing: antialiased` - Always use on body

### Text Colors
- Primary text: `text-[#0A1421]` (midnight)
- Secondary text: `text-[#64748B]` (slate)
- Accent text: `text-[#0F766E]` (teal)
- Bright accent: `text-[#67E8F9]` (cyan)

### Letter Spacing
- Headings: `-0.04em` or `-0.045em` (tight)
- Uppercase labels: `tracking-[3px]` or `tracking-[4px]`
- Body text: Normal tracking

## Component Patterns

### Buttons
- Primary: `btn-premium` with `bg-[#0A1421]` or `bg-[#0F766E]`
- Hover: translate-y(-1px) + shadow (handled by `.btn-premium`)
- Active: translate-y(0) (handled by `.btn-premium`)
- Rounded: `rounded-2xl` (primary), `rounded-3xl` (large CTAs)

### Cards
- Use: `rounded-3xl` with border
- Background: White with `border-[#EDE8E0]` or chronotype-specific backgrounds
- Hover: `whileHover={{ y: -4 }}` with motion or `hover:shadow-xl`

### Inputs
- Light mode: `input-premium` class
- Dark mode: `input-dark` class
- Focus: teal border (`var(--teal)`) or cyan (`var(--cyan)`)

### Section Containers
- Use `.section-light`, `.section-navy`, or `.section-dark`
- Padding: `py-20` or `py-24`
- Container: `max-w-7xl mx-auto px-8` or `px-9`

## Animation Rules

### Transition Timing
```css
cubic-bezier(0.23, 1.0, 0.32, 1)
```
- UI interactions: `0.2s`
- State transitions: `0.4s`
- Cycle rings: `1.2s`

### Framer Motion
- Use `motion` components sparingly for hover states
- Prefer subtle transforms (-4px, -1px, +1px)
- Always respect reduced motion preference

## Layout Grid Rules

### Container Widths
- Hero sections: `max-w-5xl`
- Main content: `max-w-7xl`
- Side panels: `max-w-6xl`
- Narrow content: `max-w-3xl`

### Padding
- Desktop sections: `px-8` or `px-9`
- Mobile: handled by responsive units
- Section vertical: `py-20` or `py-24`

## Section Alternation Pattern
The public site follows a light/dark alternation:
1. Hero - `bg-[#FAF8F5]` (warm-white)
2. WhySleep - default light
3. SleepCycles - dark theme
4. Disorders - light
5. WarningSigns - dark
6. Impact - light
7. ChronotypesIntro - light
8. LarkEagleOwl - light
9. Performance - dark
10. FourPillars - light
11. Benefits - `section-navy`
12. SleepFacts - light
13. Guidance - dark
14. FAQ - light
15. Footer - `bg-[#0A1421]` (midnight)

## Dashboard Rules

### SuperAdmin Theme
- Background: `bg-[#FAF8F5]`
- Navigation: solid white with backdrop blur
- Cards: `bg-white border rounded-3xl`

### OrgAdmin Theme
- Background: `bg-[#F5F2ED]`
- Navigation: `.dashboard-nav` (glass effect)
- Uses organization's primary color for branding

### UserPanel Theme
- Follows similar patterns to OrgAdmin

## Chronotype Card Rules (LarkEagleOwl.tsx)
- Each card uses chronotype-specific palettes
- Lark: `#E8B86D` accent bars
- Eagle: `#B97D3A` accent bars  
- Owl: `#4C3F6E` accent bars
- Energy graph uses matching accent colors

## Four Pillars Rules
- Active state: `bg-[#0A1421] text-white`
- Inactive: `border-[#EDE8E0] bg-white`
- Pillar numbers: font-mono with teal accent
- Expanded detail: `border-t border-white/15 text-[#67E8F9]`

## FAQ Rules
- Accordion items: `divide-y divide-[#EDE8E0]`
- Open indicator: `+`/`–` in `text-[#0F766E]`
- Question: `text-xl font-medium tracking-tight`

## Glass Effects
- `.glass`: `rgba(255, 255, 255, 0.72)` with blur 24px
- `.glass-dark`: `rgba(18, 28, 46, 0.65)` with blur 24px
- Dashboard nav: `rgba(250, 248, 245, 0.96)` with blur 20px

## Do NOT
- Use inline styles for colors outside the system
- Add new CSS variables without updating this document
- Change the cubic-bezier easing for transitions
- Use different border-radius values (stick to 2xl, 3xl)
- Modify the font stack
- Add new fonts or icon libraries without approval
