# Copilot Instructions for Reymar Portfolio

Next.js 14 portfolio site with App Router, Tailwind CSS, Framer Motion (`motion`), and custom text animations via `split-type`.

## Project Structure

- **Sections** (`src/sections/`): Full-page blocks (Hero, Projects, Testimonials) that compose pages
- **Components** (`src/components/`): Reusable UI (Button, AnimatedSection, ProjectDetail)
- **Pages** (`src/app/`): Route files import sections as default exports, render in sequence
- **Hooks** (`src/hooks/`): Custom animation logic (e.g., `useTextRevealAnimation.tsx`)

**Critical patterns:**

- Client components require `"use client"` directive (all animations/hooks need this)
- Static assets: `src/assets/` (import statements) vs `public/assets/` (direct string paths)
- Project data lives in-component (`projects/[id]/page.tsx`) as `projectsData: Record<string, ProjectData>`
- Pages compose sections directly: `<Header /><Hero /><Intro />...` (no wrapper divs)

## Animation System

### Text Reveal Pattern (Primary Animation)

**Hook:** `useTextRevealAnimation` (`src/hooks/useTextRevealAnimation.tsx`)

```tsx
// Always use this pattern for animated text
const { scope, entranceAnimation } = useTextRevealAnimation();

useEffect(() => {
  entranceAnimation();
}, [entranceAnimation]);

<motion.h1 ref={scope}>Animated text here</motion.h1>;
```

**How it works:**

1. `split-type` splits text into `.word` and `.line` spans in `useEffect`
2. CSS (`.word` class): `translate-y-full` hides words below viewport initially
3. Animation: Words animate to `translateY(0)` + `opacity: 1` with stagger
4. **Critical:** Always includes `if (!scope.current) return;` null checks

**CSS classes** (`globals.css`):

- `.section` - Standard padding (`py-24 md:py-32 lg:py-40`)
- `.line` - Overflow container (`overflow-hidden`)
- `.word` - Initial hidden state (`translate-y-full`)

### Standard Enter Animations

Use `AnimatedSection` component for fade-in content:

```tsx
<AnimatedSection className="container" delay={0.1}>
  {/* Fades in from y: 40 → 0, opacity: 0 → 1 */}
</AnimatedSection>
```

### Scroll-Based Animations

```tsx
const scrollingDiv = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: scrollingDiv,
  offset: ["start end", "end end"],
});
const width = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);
```

See `Hero.tsx` for complete implementation.

## Component Patterns

### Button (`src/components/Button.tsx`)

- Variants: `primary` (filled), `secondary` (outlined), `text` (underline on hover)
- Uses `twMerge` for className merging
- `iconAfter` prop for trailing animated icons
- Named group: `group/button` for child hover effects

**Icon slide animation pattern:**

```tsx
<div className="overflow-hidden size-5">
  <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform">
    <svg>...</svg>
    <svg>...</svg> {/* Duplicate icon for slide effect */}
  </div>
</div>
```

### Dynamic Routes (`projects/[id]/page.tsx`)

- Data stored in-component as `projectsData` object (not external JSON)
- Client-side switching: `useState(projectId)` changes active project without navigation
- Related projects: `base[i % base.length]` cycles through array

### Media Handling (`ProjectDetail.tsx`)

```tsx
const isVideo = mediaSrc.endsWith(".mp4");
// Videos: <video src={path} muted loop /> with viewport autoplay
// Images: <Image src={path} fill /> in aspect-ratio container
```

**Asset path rules:**

- Import from `src/assets/`: `import img from '@/assets/images/hero.jpg'`
- Reference `public/assets/`: `src="/assets/videos/demo.mp4"` (string path)

## Styling Conventions

**Tailwind config** (`tailwind.config.ts`):

- Breakpoints: `sms: 375px`, `md: 768px`, `lg: 1200px`
- Container: auto-centered with responsive padding (1rem → 2rem → 4rem)
- Primary color: `#5928e5` (use `text-primary`, `bg-primary`, `border-primary`)
- Stone palette: `stone-200/900` for base colors
- Dark mode: configured but not active

**Responsive patterns:**

```tsx
className="text-4xl md:text-7xl lg:text-8xl" // Typography
style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }} // Fluid scaling
```

**Named groups** for nested hover states:

```tsx
<div className="group/project">
  <div className="group-hover/project:pl-4 transition-all">...</div>
</div>
```

## Navigation Pattern

**Smooth scroll** with hash-based navigation:

```tsx
const handleClickNavItem = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("data-hash");
  if (!targetId) return;
  const target = document.getElementById(targetId);
  if (target) target.scrollIntoView({ behavior: "smooth" });
};

<Button data-hash="projects" onClick={handleClickNavItem}>
  View Projects
</Button>;
```

Home page handles hash scrolling on mount (`page.tsx` - `useEffect` for `window.location.hash`).

## Development Workflow

**Commands:**

- `npm run dev` - Dev server (localhost:3000)
- `npm run build` - Production build
- `npm run lint` - ESLint check

**Prettier:** 2-space indentation (see `prettier.config.js`)

## Common Tasks

**Add a project:**

1. Update `projectsData` in `projects/[id]/page.tsx`
2. Add card to `projects` array in `Projects.tsx` with imported thumbnail
3. Place media in `public/assets/images/` or `public/assets/videos/`

**Add a section:**

1. Create `src/sections/NewSection.tsx` (default export)
2. Import in `page.tsx` and render: `<NewSection />`
3. Add `"use client"` if using hooks/state

**Font setup** (`layout.tsx`):

- Primary: Archivo (200/400/500/600/700 weights) → `--font-archivo`
- Decorative: Imperial Script → `--font-imperial`
