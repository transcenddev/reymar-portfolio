# Copilot Instructions for Reymar Portfolio

## Architecture Overview

This is a Next.js 14+ portfolio site using the **App Router** (`src/app/`), styled with Tailwind CSS, and animated with `motion` (Framer Motion) and `split-type`. The architecture separates:

- **Sections** (`src/sections/`): Full-page layout blocks (Hero, Projects, Testimonials) that compose pages
- **Components** (`src/components/`): Reusable UI elements (Button, AnimatedSection, ProjectDetail)
- **Pages** (`src/app/`): Route definitions that import and compose sections
- **Hooks** (`src/hooks/`): Custom animation logic (e.g., `useTextRevealAnimation.tsx`)

Key architectural decisions:

- **Client components** are marked with `"use client"` (required for motion animations and hooks)
- **Static assets** live in both `src/assets/` (imported via Next.js) and `public/assets/` (direct references)
- **Project data** is defined in-component (see `projects/[id]/page.tsx` - `projectsData` object), not in separate data files

## Animation System

This project uses a **custom text reveal animation pattern** that's critical to understand:

1. **`useTextRevealAnimation` hook** (`src/hooks/useTextRevealAnimation.tsx`):

   - Uses `split-type` to break text into `.word` and `.line` spans
   - Returns `scope` ref, `entranceAnimation()`, and `exitAnimation()` functions
   - Always includes null checks (`if (!scope.current) return;`) to prevent crashes

2. **CSS classes** (`src/app/globals.css`):

   - `.section`: Standard vertical padding (responsive)
   - `.line`: Overflow hidden container
   - `.word`: Initial state is `translate-y-full` (hidden below)

3. **Usage pattern** (see `src/sections/Hero.tsx`):

   ```tsx
   const { scope, entranceAnimation } = useTextRevealAnimation();

   useEffect(() => {
     entranceAnimation();
   }, [entranceAnimation]);

   <motion.h1 ref={scope}>Text to animate</motion.h1>;
   ```

When creating animated text, always use this established pattern instead of inline motion variants.

## Component Patterns

### Button Component (`src/components/Button.tsx`)

- Uses `twMerge` from `tailwind-merge` to merge className props
- Three variants: `primary`, `secondary`, `text`
- Supports `iconAfter` prop for trailing icons with animated transitions
- Base classes include `group/button` for hover effects on children

Example icon animation pattern:

```tsx
<div className="overflow-hidden size-5">
  <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform">
    <svg>...</svg>
    <svg>...</svg> {/* Second icon for slide effect */}
  </div>
</div>
```

### Dynamic Route Pattern (`src/app/projects/[id]/page.tsx`)

- Project data is stored in a `projectsData: Record<string, ProjectData>` object within the page component
- Uses `useParams<{ id: string }>()` to get route params
- Implements client-side project switching via `useState(projectId)` without navigation
- Related projects use modulo logic to cycle: `base[i % base.length]`

## Styling Conventions

### Tailwind Usage

- Custom breakpoints: `sms: 375px`, `md: 768px`, `lg: 1200px` (defined in `tailwind.config.ts`)
- Container is auto-centered with responsive padding (1rem/2rem/4rem)
- Responsive patterns: `className="text-4xl md:text-7xl lg:text-8xl"`
- Use stone color palette (`stone-200`, `stone-900`) for base design
- Primary color is `#5928e5` (accessible via `text-primary`, `bg-primary`, `border-primary`)

### Custom CSS (avoid unless necessary)

- Only three custom classes exist: `.section`, `.line`, `.word` (see `globals.css`)
- Use Tailwind utilities for everything else

### Group Hover Pattern

Named groups for nested hover states:

```tsx
<div className="group/project">
  {" "}
  {/* or group/button */}
  <div className="group-hover/project:pl-4 transition-all">
    {/* Styles applied when parent is hovered */}
  </div>
</div>
```

## Media Handling

### Images vs Videos

- `ProjectDetail.tsx` handles both images and videos in the same array
- Videos are detected by `.mp4` extension: `const isVideo = mediaSrc.endsWith('.mp4')`
- Videos use `<video>` tag with `muted`, `loop`, and viewport-based autoplay
- Images use Next.js `<Image>` with `fill` prop for aspect-ratio containers

### Asset Paths

- **Imported assets**: `import heroImage from '@/assets/images/hero-image.jpg'` (for `src/assets/`)
- **Public assets**: `src="/assets/images/project.png"` (for `public/assets/`)
- Videos must be in `public/assets/videos/` to be referenced as strings

## Motion/Animation Patterns

### Scroll-based Animations (`src/sections/Hero.tsx`)

```tsx
const scrollingDiv = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: scrollingDiv,
  offset: ["start end", "end end"],
});
const width = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);
```

### Standard Enter Animations (`src/components/AnimatedSection.tsx`)

```tsx
<motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay }}
>
```

## Development Commands

- `npm run dev` - Start dev server (port 3000)
- `npm run build` - Production build
- `npm run start` - Serve production build
- `npm run lint` - ESLint check
- Prettier config: 2-space tabs (`prettier.config.js`)

## Common Tasks

### Adding a Project

1. Add data to `projectsData` object in `src/app/projects/[id]/page.tsx`
2. Add project card to `projects` array in `src/sections/Projects.tsx`
3. Import project thumbnail image in `Projects.tsx`
4. Add media files to `public/assets/images/` or `public/assets/videos/`

### Adding a Section

1. Create `src/sections/NewSection.tsx` as a default export
2. Import in `src/app/page.tsx`: `import NewSection from '@/sections/NewSection'`
3. Add to JSX: `<NewSection />` (sections render in order)
4. Mark as `"use client"` if using hooks/state

### Creating Icons

1. Add SVG to `src/assets/icons/`
2. Create component in `src/components/icons/IconName.tsx` wrapping the SVG
3. Export from `src/components/icons/index.ts`
4. Convention: PascalCase component name matches kebab-case file name

## Font Configuration

Two Google Fonts loaded via `next/font` in `layout.tsx`:

- **Archivo**: Primary font (weights: 200, 400, 500, 600, 700) → CSS variable `--font-archivo`
- **Imperial Script**: Decorative font → CSS variable `--font-imperial`

Applied to body: `className={archivo.className}`
