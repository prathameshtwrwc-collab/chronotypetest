# Chronotype Development Rules

## Color System Rules

### Primary Colors (Use CSS Variables)
- `--midnight` (#0A1421): Primary dark, headers, text
- `--teal` (#0F766E): Primary accent, buttons, links
- `--emerald` (#0D9488): Teal hover states
- `--cyan` (#67E8F9): Light accent, highlights
- `--warm-white` (#FAF8F5): Page background
- `--cream` (#F5F2ED): Dashboard backgrounds
- `--stone` (#EDE8E0): Card borders, dividers
- `--slate` (#64748B): Secondary text

### Chronotype-Specific Colors
- **Lark**: `--sunrise` (#E8B86D), `--dawn` (#F4D9B0)
- **Owl**: `--owl-purple` (#4C3F6E)
- **Eagle**: `--eagle-amber` (#B97D3A)

### Color Usage Rules
- NEVER use arbitrary colors outside the defined palette
- For backgrounds: prefer `--warm-white`, `--cream`, `--navy`, `--deep-navy`
- For accents: use `--teal` as primary, `--cyan` for highlights
- For text: `--midnight` for primary, `--slate` for secondary
- Chronotype cards must use their specific palette colors

## Layout Rules

### Section Structure
- Use `section-light`, `section-dark`, or `section-navy` for section backgrounds
- Always include `py-24` or `py-20` for vertical padding
- Add `border-b border-[#EDE8E0]` between sections
- Container: `max-w-5xl|6xl|7xl mx-auto px-8`

### Grid Layout
- Use `md:grid-cols-12` for main layouts
- Column spans: `md:col-span-X` for positioning
- Gap sizing: `gap-x-16` for horizontal, `gap-y-12` for vertical

### Responsive
- Mobile-first approach with `md:` prefix
- Check responsive behavior after changes

## Typography Rules

### Font Sizes & Spacing
- Hero headings: `text-display` (clamp-based responsive)
- Section headings: `text-[52px]` to `text-[56px]` with `tracking-[-0.04em]`
- Body text: `text-[15px]` to `text-[17px]`
- Secondary text: `text-sm` with `--slate` color
- Labels/Tags: `text-xs` with `tracking-[3px]` or `tracking-[4px]`

### Text Styling
- Primary text: `text-[#0A1421]` or `text-white` (on dark)
- Secondary text: `text-[#64748B]` or `text-[#A5B4C2]` (on dark)
- Accent text: `text-[#0F766E]`

## Component Patterns

### Buttons
- Primary action: `rounded-2xl` or `rounded-3xl` with `bg-[#0A1421] text-white`
- Secondary action: `border border-[#C9C2B5]` with `text-[#0A1421]`
- Hover states: Always include smooth transitions
- Text: `tracking-wide` or `tracking-wider`, uppercase for actions

### Cards
- Use `rounded-3xl` for premium feel
- Background: `bg-white` or card-specific (`bg-[#0D1624]` for dark)
- Border: `border border-[#EDE8E0]` or `border border-white/10` (dark)
- Hover: `whileHover={{ y: -4 }}` or `whileHover={{ scale: 1.01 }}`

### Inputs
- Use `.input-premium` or `.input-dark` classes
- Rounded corners: `rounded-2xl`
- Include focus states with proper colors

## Animation Rules

### Framer Motion
- Subtle hover lifts: `whileHover={{ y: -4 }}`
- Scale hover: `whileHover={{ scale: 1.01 }}`
- Smooth transitions using cubic-bezier(0.23, 1, 0.32, 1)
- Include `transition` properties for animations

### Reduced Motion
- Respect `prefers-reduced-motion` media query (already in CSS)

## Dashboard Rules

### SuperAdmin
- Background: `bg-[#FAF8F5]`
- Navbar: `sticky top-0 z-50` with `backdrop-blur`
- Cards: `bg-white rounded-3xl border`
- Tables: Use `.table-premium` class

### OrgAdmin
- Background: `bg-[#F5F2ED]`
- Navbar: `.dashboard-nav` class
- Cards: `bg-white border border-[#EDE8E0]`

### Common Dashboard Patterns
- Use `px-9` for dashboard containers (vs `px-8` for sections)
- Tab navigation with active states
- Stat cards for analytics

## File Organization Rules

### New Components
- Section components → `src/components/sections/`
- Dashboard components → `src/components/dashboards/`
- Reusable UI → `src/components/ui/`
- Types → `src/types/index.ts`
- Static content → `src/lib/content.ts`

### Naming Conventions
- Components: PascalCase (e.g., `FourPillars.tsx`)
- Files: kebab-case not required, follow existing pattern
- Props interfaces: `{ComponentName}Props`

## Code Quality Rules

### TypeScript
- Use interfaces from `src/types/index.ts`
- Define proper prop types for all components
- Avoid `any` type - use proper typing

### Imports
- Group imports: React, libraries, local components, types
- Use `@/` alias for src imports (configured in vite.config.ts)

### Styling
- Prefer utility classes over inline styles
- Use existing CSS classes (`.glass`, `.input-premium`, etc.)
- Maintain consistent spacing and rounding

## Testing & Verification
- Run `npm run dev` to verify changes
- Check all four modes: public, superadmin, orgadmin, user
- Verify responsive design on different screen sizes