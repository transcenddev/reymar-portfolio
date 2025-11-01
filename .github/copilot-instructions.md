# Copilot Instructions for Reymar Portfolio

Next.js 14 portfolio site using App Router, Tailwind CSS, Framer Motion (`motion` package), and custom text reveal animations via `split-type`.

## Architecture Overview

**Component Hierarchy:**

- **Pages** (`src/app/`): Route files that compose sections sequentially without wrapper divs
- **Sections** (`src/sections/`): Full-page blocks (Hero, Projects, Testimonials) - always default exports
- **Components** (`src/components/`): Reusable UI elements (Button, AnimatedSection, ProjectDetail)
- **Hooks** (`src/hooks/`): Animation logic (primarily `useTextRevealAnimation.tsx`)

**Critical Patterns:**

- All interactive/animated components MUST include `"use client"` directive (Next.js App Router requirement)
- **CRITICAL**: Always import from `motion/react`, NEVER from `framer-motion` (legacy package causing conflicts)
- Asset paths: Import from `src/assets/` for build optimization, reference `public/assets/` as strings
- Project data is colocated in `projects/[id]/page.tsx` as `projectsData: Record<string, ProjectData>`
- Dynamic routing uses client-side state (`useState(projectId)`) to switch projects without navigation
- Sections render directly in pages: `<Header /><Hero /><Intro />` - no container divs

## Animation System

### Text Reveal Animation (Primary Pattern)

**Implementation** - `useTextRevealAnimation` hook (`src/hooks/useTextRevealAnimation.tsx`):

```tsx
"use client"; // Required for all animations

const { scope, entranceAnimation } = useTextRevealAnimation();

useEffect(() => {
  entranceAnimation();
}, [entranceAnimation]);

return <motion.h1 ref={scope}>Your animated text</motion.h1>;
```

**How It Works:**

1. `SplitType` splits text into `.word` and `.line` spans on mount
2. CSS `.word` class hides words with `translate-y-full`
3. Animation transitions to `translateY(0)` + `opacity: 1` with stagger effect
4. **Critical:** Always includes `if (!scope.current) return;` null safety checks

**Required CSS Classes** (`globals.css`):

- `.section` - Responsive section padding (`py-24 md:py-32 lg:py-40`)
- `.line` - Overflow container for reveal effect (`overflow-hidden`)
- `.word` - Initial hidden state (`translate-y-full`)

### Fade-In Animations

Use `AnimatedSection` for standard entrance animations:

```tsx
import { motion } from "motion/react"; // Correct package

<motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0 }}
>
  {/* Content fades in */}
</motion.section>;
```

### Scroll Detection with useInView

Track when elements enter viewport (`Services.tsx`, `Intro.tsx`, `Footer.tsx`):

```tsx
import { useInView } from "motion/react";

const ref = useRef<HTMLDivElement>(null);
const isInView = useInView(ref, { once: true, amount: 0.3 }); // Triggers once when 30% visible

return <div ref={ref}>{isInView && <AnimatedContent />}</div>;
```

### Scroll-Linked Animations

Example from `Hero.tsx`:

```tsx
const scrollingDiv = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: scrollingDiv,
  offset: ["start end", "end end"], // Start/end trigger points
});
const width = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);
```

### Menu Toggle Animation

`Header.tsx` demonstrates sequenced animations with `useAnimate`:

```tsx
const [topLineScope, topLineAnimate] = useAnimate();
// Sequence: translate → rotate in array format
topLineAnimate([
  [topLineScope.current, { translateY: 4 }],
  [topLineScope.current, { rotate: 45 }],
]);
```

### Video Autoplay on Scroll

`ProjectDetail.tsx` implements viewport-based video playback:

```tsx
const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

useEffect(() => {
  const handleScroll = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        const rect = video.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        isVisible ? video.play() : video.pause();
      }
    });
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

### Mouse-Following Image Preview

`Projects.tsx` shows hover-following cursor preview:

```tsx
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
const [isHovered, setIsHovered] = useState(false);

const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
  setMousePosition({ x: e.clientX + 20, y: e.clientY + 20 });
};

// Preview image follows cursor
<div
  className="fixed w-80 aspect-video pointer-events-none"
  style={{
    left: mousePosition.x,
    top: mousePosition.y,
    transform: "translate(-50%, -50%)",
    opacity: isHovered ? 1 : 0,
  }}
>
  <Image src={image} ... />
</div>
```

### Dynamic Role Cycling Animation

`Hero.tsx` implements cycling text with smooth fade transitions:

```tsx
const roles = [
  "software engineer",
  "content creator",
  "hybrid athlete",
  "designer",
  "AI & automation builder",
  "storyteller",
];
const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

// Cycle through roles every 3 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
  }, 3000);
  return () => clearInterval(interval);
}, []);

// In JSX - use AnimatePresence with mode="wait" for smooth transitions
<span className="inline-block min-w-[280px]">
  <AnimatePresence mode="wait">
    <motion.span
      key={currentRoleIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-primary"
    >
      {roles[currentRoleIndex]}
    </motion.span>
  </AnimatePresence>
</span>;
```

## Component Patterns

### Button Component (`src/components/Button.tsx`)

**Variants:**

- `primary` - Filled background (`bg-primary text-white`)
- `secondary` - Outlined with hover fill (`hover:bg-primary hover:text-white`)
- `text` - Underline on hover using `after:` pseudo-element

**Features:**

- `twMerge` for className composition
- `iconAfter` prop for trailing icons with slide animation
- Named group `group/button` for nested hover effects

**Icon Slide Pattern** (duplicate icon technique):

```tsx
<div className="overflow-hidden size-5">
  <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform">
    <svg>...</svg>
    <svg>...</svg> {/* Duplicate slides into view */}
  </div>
</div>
```

### Dynamic Project Routes (`projects/[id]/page.tsx`)

**Data Management:**

- All project data stored as `projectsData: Record<string, ProjectData>` object within component
- Client-side project switching: `useState(activeId)` changes displayed project without page navigation
- Related projects cycle using modulo: `relatedProjects[i % relatedProjects.length]`

**Structure:**

```tsx
const [activeId, setActiveId] = useState(params.id);
const project = useMemo(() => projectsData[activeId], [activeId]);
// ProjectDetail component handles rendering + switching via onProjectChange
```

### Media Rendering (`ProjectDetail.tsx`)

**Video vs Image Detection:**

```tsx
const isVideo = mediaSrc.endsWith(".mp4");

// Videos: <video src={path} muted loop autoplay /> (autoplay on viewport)
// Images: <Image src={path} fill /> in aspect-ratio container
```

**Asset Path Rules:**

- **Imported assets** (optimized): `import hero from '@/assets/images/hero.jpg'` → use `hero.src`
- **Public assets** (strings): `src="/assets/videos/demo.mp4"` for videos/large files

## Styling Conventions

**Tailwind Configuration** (`tailwind.config.ts`):

- Custom breakpoints: `sms: 375px`, `md: 768px`, `lg: 1200px`
- Container: Auto-centered with responsive padding (`1rem` → `2rem` → `4rem`)
- Primary brand color: `#5928e5` (access via `text-primary`, `bg-primary`, `border-primary`)
- Base palette: `stone-200/900` for backgrounds and text
- Dark mode: Class-based (`class`) with `next-themes` integration - ACTIVE
  - Theme provider wraps app in `layout.tsx` with `defaultTheme="light"`
  - Use `useTheme()` hook from `next-themes` to access/toggle theme
  - CSS variables in `globals.css` define theme-specific colors (`--background`, `--foreground`, etc.)
  - All transitions have `duration-300` for smooth theme switching

**Responsive Typography Patterns:**

```tsx
className="text-4xl md:text-7xl lg:text-8xl" // Step-based scaling
style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }} // Fluid scaling (min, preferred, max)
```

**Named Group Pattern** (for nested hover states):

```tsx
<div className="group/project">
  <div className="group-hover/project:pl-4 transition-all">
    {/* Responds to parent hover */}
  </div>
</div>
```

**Common named groups in codebase:**

- `group/button` - Button component hover effects
- `group/nav-item` - Mobile menu items
- `group/project` - Project cards and detail views

## Navigation Pattern

**Hash-Based Smooth Scrolling** (`Header.tsx` + `page.tsx`):

```tsx
// Header navigation handler
const navigateToHashOrRoute = (href: string) => {
  if (href.startsWith("#")) {
    const isHomePage = window.location.pathname === "/";
    if (isHomePage) {
      // Same page: smooth scroll
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else {
      // Other page: navigate to home with hash
      router.push(`/${href}`);
    }
  } else {
    router.push(href); // Regular route navigation
  }
};

// Home page mounts and scrolls to hash
useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100); // Delay ensures DOM ready
  }
}, []);
```

**Mobile Menu Pattern:**

- Fixed overlay nav (`fixed top-0 left-0 w-full h-0`) expands to `h-full` on open
- Sequenced hamburger animation: translate → rotate using `useAnimate` arrays
- Menu items have sliding background effect on hover using absolute positioned div

## Development Workflow

**Commands:**

- `npm run dev` - Dev server (localhost:3000)
- `npm run build` - Production build
- `npm run lint` - ESLint check

**Code Formatting:**

- Prettier: 2-space indentation (`prettier.config.js`)
- ESLint: Next.js config extends `eslint-config-next`

**Key Dependencies:**

- `motion` (v11.12.0) - NOT `framer-motion` - Framer's newer package
- `split-type` (v0.3.4) - Text splitting for animations
- `tailwind-merge` - ClassName composition utility

## Common Tasks

**Add a project:**

1. Update `projectsData` in `projects/[id]/page.tsx` with new project object
2. Add card to `projects` array in `Projects.tsx` with imported thumbnail
3. Place media in `public/assets/images/` or `public/assets/videos/`

**Add a section:**

1. Create `src/sections/NewSection.tsx` (must be default export)
2. Import in `page.tsx` and render: `<NewSection />`
3. Add `"use client"` directive if using hooks/state/animations

**Font setup** (`layout.tsx`):

- Primary: Archivo (200/400/500/600/700 weights) → `--font-archivo` variable
- Fonts loaded via `next/font/google` for optimal performance
- Applied globally via className in body tag

## Theme System

**Implementation** (`next-themes` package):

```tsx
// ThemeProvider wraps entire app (layout.tsx)
<ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
  {children}
</ThemeProvider>;

// Toggle theme in components (Header.tsx, ThemeToggle.tsx)
import { useTheme } from "next-themes";
const { theme, setTheme } = useTheme();
setTheme(theme === "dark" ? "light" : "dark");
```

**CSS Variables Pattern** (`globals.css`):

- Define colors as RGB values in `:root` and `.dark` selectors
- Access via `bg-background`, `text-foreground`, `border-border` etc.
- All elements inherit `transition-colors duration-300` for smooth switching
- Avoid hardcoded `dark:` classes where possible - use semantic tokens instead

## Known Issues to Fix

**Import Inconsistencies** - Several files still import from deprecated `framer-motion`:

- `src/components/AnimatedSection.tsx`
- `src/components/PageLoader.tsx`
- `src/components/MediaSkeleton.tsx`
- `src/components/ImageWithBlur.tsx`
- `src/components/VideoWithLoading.tsx`
- `src/app/play/page.tsx`
- `src/app/about/page.tsx`

**Fix**: Replace `import { motion } from "framer-motion"` with `import { motion } from "motion/react"`

**Note**: Most core sections and hooks have been correctly updated to use `motion/react`. The above files are legacy components that need migration.
