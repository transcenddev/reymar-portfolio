// Canonical technical-stack data for the portfolio's two-tier "Working Stack"
// (Tier A) and "Broader Toolkit" (Tier B) sections.
//
// Sources of truth:
//   - notes/portfolio-contents.md  (the portfolio's own content inventory)
//   - tech arrays in src/data/projects.ts (per-project, verified usage)
//
// Tier A (Working Stack) lists technologies the author actively uses and is
// confident working with, grouped by development function.
// Tier B (Broader Toolkit) lists technologies used across shipped work,
// academic projects, and experiments; it is visually de-emphasised.
//
// Technology names are preserved verbatim from the source notes (e.g.
// "C# / .NET", "shadcn/ui", "pgvector"). No proficiency levels are asserted.
// No suitable monochrome icons exist in the project's asset set, so items are
// rendered by name only.

export type TechItem = {
  /** Display name, preserved from the source notes. */
  name: string;
};

/** A labelled group of technologies. */
export type StackCategory = {
  title: string;
  items: TechItem[];
};

/** Broader-toolkit category with an optional collapsed visibility threshold. */
export type ToolkitCategory = StackCategory & {
  /** Number of items shown before the "Show more" toggle (defaults to DEFAULT_TOOLKIT_VISIBLE). */
  visibleCount?: number;
};

/** Default items shown per broader-toolkit category before collapsing. */
export const DEFAULT_TOOLKIT_VISIBLE = 5;

/**
 * Tier A — Working Stack.
 * Verified core technologies grouped by actual development function.
 * Source: notes/portfolio-contents.md ("Working stack section").
 */
export const workingStack: StackCategory[] = [
  {
    title: "Product engineering",
    items: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend and data",
    items: [
      { name: "Node.js" },
      // { name: "Prisma" },
      // { name: "PostgreSQL" },
      // { name: "Redis" },
    ],
  },
  {
    title: "Infrastructure and delivery",
    items: [
      // { name: "Docker" },
      { name: "GitHub Actions" },
      { name: "Vercel" },
      // { name: "Cloudflare" },
      // { name: "Nginx" },
      // { name: "AWS S3" },
    ],
  },
];

/**
 * Tier B — Broader Toolkit.
 * Verified technologies worked with across shipped projects, academic work,
 * and development experiments. Items are ordered so the most representative
 * technologies appear first when a category is collapsed to the visible count.
 */
export const broaderToolkit: ToolkitCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Java" },
      { name: "PHP" },
      // { name: "MicroPython" },
      { name: "SQL" },
      // { name: "C# / .NET" },
      // { name: "C++" },
    ],
  },
  {
    title: "Frameworks and libraries",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Express" },
      { name: "Laravel" },
      { name: "Tailwind CSS" },
      { name: "shadcn/ui" },
      { name: "Socket.IO" },
    ],
  },
  {
    title: "Data and storage",
    items: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Supabase" },
      // { name: "Elasticsearch" },
      // { name: "pgvector" },
      { name: "SQLite" },
    ],
  },
  // {
  //   title: "Infrastructure and deployment",
  //   items: [
  //     // { name: "Docker Compose" },
  //     // { name: "Inngest" },
  //     { name: "Linux" },
  //     { name: "Ubuntu / Debian" },
  //     { name: "DigitalOcean" },
  //     // { name: "Hetzner" },
  //   ],
  // },
  {
    title: "AI platforms and tooling",
    items: [
      { name: "OpenAI" },
      { name: "Claude" },
      { name: "Gemini" },
      { name: "Vercel AI Gateway" },
      { name: "Ollama" },
    ],
  },
  // {
  //   title: "Observability and monitoring",
  //   items: [{ name: "Sentry" }, { name: "Grafana" }, { name: "Prometheus" }],
  // },
  {
    title: "Payment systems",
    items: [
      { name: "Stripe" },
      // { name: "Polar" },
      { name: "PayPal" },
      // { name: "Xendit" },
      // { name: "Lemon Squeezy" },
    ],
  },
  {
    title: "Business operations and collaboration",
    items: [
      { name: "GoHighLevel (GHL)" },
      { name: "n8n" },
      { name: "Cal.com" },
      { name: "GitHub Projects" },
      // { name: "ClickUp" },
      { name: "Slack" },
    ],
  },
  {
    title: "Development tools",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Cursor" },
      // { name: "Bun" },
    ],
  },
  {
    title: "Creative and multimedia tools",
    items: [
      { name: "Figma" },
      { name: "pnpm" },
      { name: "Canva" },
      { name: "CapCut" },
      { name: "DaVinci Resolve" },
    ],
  },
];
