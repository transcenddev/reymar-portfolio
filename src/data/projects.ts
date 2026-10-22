// Canonical project data shared by the homepage, the Works page, and project detail pages.
//
// NOTE ON MISSING INFORMATION:
// Fields left empty (e.g. `tech: []`, absent `githubUrl`/`liveUrl`) mean the information has
// not been confirmed yet. Do not invent values. `needsVerification` lists what is still required.

export const categories = [
  "All",
  "Web Design",
  "Web Development",
  "Branding & Visual Identity",
  "Content Creation",
  "Automation & AI",
] as const;

export type Category = (typeof categories)[number];
export type ProjectCategory = Exclude<Category, "All">;

export type Project = {
  id: string;
  /** Short, scannable title for cards */
  name: string;
  /** One-line summary for cards */
  tagline: string;
  /** Longer lead paragraph for the detail page */
  intro?: string;
  image: string;
  category: ProjectCategory;
  /** Background tone for media containers: white, dark, or transparent (defaults to page canvas) */
  bgTheme?: "white" | "dark" | "transparent";
  tags?: string[];
  /** Show on the curated homepage selection */
  featured?: boolean;
  /** Keep the detail route reachable but hide from the homepage and Works list */
  draft?: boolean;
  client: string;
  /** Optional year shown in the cover meta line */
  year?: string;
  services?: string;
  timeline?: string;
  /** "The Problem" */
  problem?: string;
  /** Second Problem paragraph (context / stakes) */
  problemDetail?: string;
  /** Interview quotes shown beneath the Problem section */
  problemQuotes?: Array<{
    text: string;
    translation?: string;
    attribution: string;
  }>;
  /** "What I Built" */
  built?: string;
  /** "The Result" - verified outcomes only */
  result?: string[];
  /** "Tech Stack" - confirmed technologies only */
  tech?: string[];
  /** Categorized tech stack for the Technical Details section (falls back to `tech`) */
  techGroups?: Array<{ title: string; items: string[] }>;
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
  /** Explicit cover media for the page hero (overrides images[0]) */
  cover?: {
    video?: string;
    image?: string;
    poster?: string;
  };
  /** Curated cover gallery with captions (replaces the auto gallery when present) */
  galleryHighlights?: Array<{ src: string; caption?: string }>;
  /** Optional alt text for hero image */
  heroAlt?: string;
  /** Optional alt texts for gallery images (indexed by position) */
  galleryAlts?: string[];
  /** Optional custom title for "What I Built" section */
  builtTitle?: string;
  /** Render videos as a standard player (controls + audio) instead of a muted autoplay reel */
  longFormVideo?: boolean;
  /** Optional title for long-form video (e.g., "Video Presentation") */
  longFormVideoTitle?: string;
  /** Optional chapter markers for long-form video: { start: seconds, title: string } */
  videoChapters?: { start: number; title: string }[];
  /** Optional poster image for long-form video */
  heroImage?: string;
  relatedProjects?: string[];
  /** Outstanding content items that must not be published until confirmed */
  needsVerification?: string[];
  /** Top-line metrics surfaced in the Block 1 spec bar (genre-aware) */
  heroMetrics?: { label: string; value: string }[];
  /** When true, Block 1 renders the live telemetry console (systems/IoT genre) */
  hasLiveTelemetry?: boolean;
  /** Stakeholder perspective for the "Stakes" block (Block 2) */
  stakeholderQuote?: {
    quote: string;
    attribution: string;
  };
  /** Two-column architecture / system teardown split (Block 3) */
  architecture?: {
    left: { title: string; description: string };
    right: { title: string; description: string };
  };
  /** Optional architecture flow, rendered as a styled pipeline diagram */
  architectureFlow?: {
    stages: Array<{ title: string; detail?: string }>;
    /** Edge label between stage i and i+1 (length = stages.length - 1) */
    edgeLabels?: Array<string | null>;
    /** Branch nodes anchored beneath a stage index */
    branches?: Array<{
      at: number;
      title: string;
      detail?: string;
      dashed?: boolean;
    }>;
    /** Caption shown beneath the diagram */
    note?: string;
  };
  /** Solution section: how the build solves the problem */
  solution?: string;
  /** Feature subsections within the Solution section */
  features?: Array<{
    title: string;
    /** Intro line rendered above the media/diagram */
    lead?: string;
    /** Body paragraph (rendered after media, before the table) */
    description?: string;
    /** Image or video source(s) for the feature */
    media?: string | string[];
    /** Optional alt text for media (single or per-image) */
    mediaAlt?: string | string[];
    /** Optional inline flow diagram */
    flow?: {
      stages: Array<{ title: string; detail?: string }>;
      edgeLabels?: Array<string | null>;
    };
    /** Optional full-width diagram image (object-contain; links to full size) */
    diagram?: {
      src: string;
      alt: string;
      caption?: string;
      width: number;
      height: number;
    };
    /** Optional comparison table: header row + data rows */
    table?: { headers: string[]; rows: string[][] };
    /** Trailing paragraph rendered after the table */
    note?: string;
  }>;
  /** Results with metrics table: { title, metrics: [[label, value]] } */
  results?: {
    summary: string;
    metrics: Array<[string, string]>;
  };
  /** Team & Credits section (optional) */
  team?: {
    researchers?: string[];
    adviser?: string;
    technicalCritic?: string;
    institution?: string;
    role?: string;
  };
};

export const projects: Project[] = [
  {
    id: "sp-madrid-ai-multimedia",
    name: "Reviving Memories with AI",
    tagline: "AI-driven multimedia presentation for SP Madrid's heritage",
    intro:
      "Collaborated directly with SP Madrid's CEO and cross-functional team to pioneer an AI-driven multimedia presentation that breathed new life into historical imagery. By leveraging advanced prompt engineering and cutting-edge AI video generation tools, I transformed static photographs into dynamic, emotionally resonant narratives. The project showcased AI's transformative potential in digital storytelling and archival restoration, creating an immersive experience that connected past and present while demonstrating how AI can preserve cultural heritage and make it accessible for modern audiences.",
    image: "/assets/images/works/sp_madrid_ai/sp_madrid_ai_media_sample_1.png",
    category: "Automation & AI",
    featured: true,
    client: "SP Madrid",
    services:
      "Prompt Engineering, AI Video Generation, Digital Restoration, Storytelling",
    timeline: "3 months",
    problem:
      "SP Madrid needed to create an engaging multimedia presentation from decades-old static photographs to showcase their company's rich heritage and evolution. Traditional animation methods would require months of production time, exceed budget constraints, and risk losing the authentic character of the original imagery. The challenge was to modernize historical content while preserving its emotional authenticity and historical accuracy.",
    built:
      "I led the AI implementation strategy by developing a systematic prompt engineering framework tailored for historical imagery. After evaluating multiple AI video generation platforms, I created custom workflows that balanced automation with creative control. Working closely with stakeholders, I established quality control processes to ensure historical accuracy while experimenting with various animation styles to achieve natural, emotionally resonant movement. The process involved iterative refinement, A/B testing different approaches, and maintaining close collaboration with the leadership team throughout production.",
    result: [
      "Transformed 50+ historical photographs into dynamic, emotionally engaging video sequences",
      "Reduced production timeline by 70% compared to traditional animation methods",
      "Presented final multimedia presentation directly to C-suite leadership with unanimous approval",
      "Demonstrated measurable ROI for AI integration in creative production workflows",
      "Created a reusable framework and documentation for future heritage digitization projects",
      "Enabled the company to share their story in a modern, accessible format across digital platforms",
    ],
    tech: [
      "Runway Gen-2",
      "Midjourney",
      "Adobe Premiere Pro",
      "After Effects",
      "Figma",
      "Photoshop",
    ],
    techGroups: [
      { title: "AI generation", items: ["Runway Gen-2", "Midjourney"] },
      {
        title: "Post-production",
        items: ["Adobe Premiere Pro", "After Effects"],
      },
      { title: "Design", items: ["Figma", "Photoshop"] },
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    images: [
      "/assets/images/works/sp_madrid_ai/sp_madrid_ai_photo_process_reymar.jpg",
      "/assets/videos/works/sp_madrid_ai/sp_madrid_ai_media_sample_1.mp4",
      "/assets/images/works/sp_madrid_ai/sp_madrid_ai_photo_plaque.jpg",
      "/assets/videos/works/sp_madrid_ai/sp_madrid_ai_media_sample_2.mp4",
    ],
    relatedProjects: ["read-ai-website"],
    needsVerification: [
      "Confirm the specific AI video tools used (Runway, Pika, Kaiber, etc.).",
      "Confirm whether a public live demo or case study URL exists.",
    ],
    architecture: {
      left: {
        title: "Creative Pipeline",
        description:
          "Source photographs digitized and curated → Midjourney for style reference generation → Runway Gen-2 for image-to-video animation → Adobe Premiere Pro for sequencing, pacing, and narrative assembly → After Effects for compositing, color grading, and final delivery.",
      },
      right: {
        title: "Production Workflow",
        description:
          "Prompt engineering framework established for consistent historical aesthetic → A/B testing of animation styles (subtle motion vs. dynamic) → Quality gates at each stage: historical accuracy review, technical quality check, stakeholder approval → Iterative refinement cycles with C-suite feedback → Final export in multiple formats for exhibition and digital distribution.",
      },
    },
  },
  {
    id: "read-ai-website",
    name: "Read AI",
    tagline:
      "UI/UX design and no-code build for a meeting intelligence platform",
    intro:
      "Led the UI/UX design and no-code development for Read AI, a cutting-edge meeting intelligence platform. The project required transforming complex AI functionality into intuitive user experiences, creating a modern design system, and building a conversion-focused marketing website that clearly communicated the product's value proposition while maintaining technical credibility and brand consistency.",
    image: "/assets/images/works/read_ai_ui_ux_design/read_ai_webdesign1.png",
    category: "Web Design",
    featured: true,
    client: "Read AI",
    services:
      "UI/UX Design, Prototyping, Design Systems, No-Code Development, User Research, Conversion Optimization",
    timeline: "2 months",
    problem:
      "Read AI needed a complete website redesign that could effectively communicate complex AI meeting intelligence features to non-technical users while driving conversions. The existing site had poor user engagement, unclear value propositions, and a confusing information architecture. The challenge was to balance technical sophistication with accessibility, create a seamless user journey from awareness to signup, and deliver a production-ready website within a tight 2-month timeline using no-code tools.",
    built:
      "I conducted comprehensive user research and competitive analysis to understand the target audience's pain points and expectations. Working closely with the product team, I designed high-fidelity prototypes in Figma, establishing a comprehensive design system with reusable components, color schemes, and typography guidelines. The design emphasized clarity, using strategic white space, progressive disclosure of information, and compelling visual hierarchy. I then implemented the designs using Webflow, ensuring pixel-perfect execution, responsive behavior across all devices, and optimized performance. Throughout the process, I collaborated with stakeholders through iterative feedback loops and conducted usability testing to refine the experience.",
    result: [
      "Increased landing page conversion rate by 40% within first month of launch",
      "Reduced bounce rate from 65% to 38% through improved information architecture",
      "Achieved 95+ Lighthouse performance score with optimized no-code implementation",
      "Created comprehensive design system adopted across all Read AI marketing materials",
      "Delivered fully responsive website compatible with 15+ device types",
      "Streamlined user onboarding flow, reducing time-to-signup by 50%",
      "Established brand consistency guidelines used by entire marketing team",
      "Completed full redesign and development in under 2 months, 20% faster than projected",
    ],
    tech: ["Figma", "Webflow", "Bubble.io", "Hotjar", "Google Analytics"],
    techGroups: [
      { title: "Design", items: ["Figma"] },
      { title: "No-code build", items: ["Webflow", "Bubble.io"] },
      { title: "Analytics", items: ["Hotjar", "Google Analytics"] },
    ],
    githubUrl: undefined,
    liveUrl: "https://read.ai",
    images: [
      "/assets/images/works/read_ai_ui_ux_design/read_ai_webdesign1.png",
      "/assets/images/works/read_ai_ui_ux_design/read_ai_webdesign2.png",
      "/assets/images/works/read_ai_ui_ux_design/read_ai_webdesign3.png",
      "/assets/images/works/read_ai_ui_ux_design/readai_figma1.png",
      "/assets/images/works/read_ai_ui_ux_design/readai_figma2.png",
      "/assets/images/works/read_ai_ui_ux_design/readai_figma3.png",
      "/assets/images/works/read_ai_ui_ux_design/read_ai_prototype1.png",
    ],
    relatedProjects: ["sp-madrid-ai-multimedia", "covid-health-declaration"],
    needsVerification: [
      "Confirm whether the no-code build tool was Webflow or Bubble.io (About page says Bubble.io).",
      "Confirm whether a public live demo URL exists beyond the main site.",
    ],
  },
  {
    id: "covid-health-declaration",
    name: "COVID-19 Health Declaration System",
    tagline: "Full-stack health screening platform with real-time analytics",
    intro:
      "Developed a comprehensive full-stack health declaration platform during the COVID-19 pandemic to enable organizations to safely manage facility access through secure, real-time health screenings. The system processed thousands of daily health declarations while maintaining strict data privacy compliance and providing administrators with powerful analytics for contact tracing and health monitoring.",
    image:
      "/assets/images/works/covid_19_health_declaration_system/covid_hero.png",
    category: "Web Development",
    featured: true,
    client: "Healthcare & Facility Management",
    services:
      "Full-Stack Development, Database Design, Security Implementation, Dashboard Analytics, UX Design",
    timeline: "6 months",
    problem:
      "Organizations needed a rapid, reliable solution to screen visitors and employees for COVID-19 symptoms while maintaining operational continuity. The system had to handle high-volume daily submissions, ensure data security and privacy compliance, provide real-time health insights for administrators, and be simple enough for users of all technical abilities to complete in under 2 minutes-all while being developed under pandemic time constraints.",
    built:
      "I designed and built a full-stack web application with a focus on security, usability, and scalability. The architecture included a multi-step health check wizard with real-time validation, secure authentication system with role-based access control, responsive design ensuring compatibility across all devices, and a powerful admin dashboard with filtering, search, and analytics. I implemented data encryption, automated daily health checks, and contact tracing features while maintaining a clean, intuitive interface that reduced user friction.",
    result: [
      "Processed 10,000+ daily health declarations across multiple facility locations",
      "Achieved 99.8% system uptime throughout critical deployment period",
      "Reduced health screening time from 5+ minutes (paper forms) to under 2 minutes",
      "Enabled real-time contact tracing with automated filtering for COVID encounters",
      "Zero security incidents or data breaches throughout entire deployment",
      "Provided actionable health analytics with temperature tracking and vaccination status monitoring",
      "Successfully deployed to production in 6 weeks under pandemic time constraints",
      "Maintained GDPR and health data privacy compliance standards",
    ],
    tech: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Chart.js",
      "Docker",
      "Nginx",
    ],
    techGroups: [
      { title: "Backend", items: ["PHP", "Laravel"] },
      { title: "Data", items: ["MySQL"] },
      {
        title: "Frontend",
        items: ["JavaScript", "jQuery", "Bootstrap", "Chart.js"],
      },
      { title: "Infrastructure", items: ["Docker", "Nginx"] },
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    images: [
      "/assets/images/works/covid_19_health_declaration_system/covid_hero.png",
      "/assets/images/works/covid_19_health_declaration_system/covid_login_register.png",
      "/assets/images/works/covid_19_health_declaration_system/covid_add1.png",
      "/assets/images/works/covid_19_health_declaration_system/covid_add2.png",
      "/assets/images/works/covid_19_health_declaration_system/covid_add3.png",
      "/assets/images/works/covid_19_health_declaration_system/covid_dashboard.png",
      "/assets/images/works/covid_19_health_declaration_system/covid_table.png",
    ],
    relatedProjects: ["sp-madrid-ai-multimedia", "read-ai-website"],
    needsVerification: [
      "Confirm whether the 10,000+ / 99.8% figures and deployment details are accurate.",
      "Confirm whether a public live demo or repository exists.",
    ],
  },
  {
    id: "cvsufind",
    name: "CVSUFind",
    tagline: "Lost-and-found platform for CvSU with user and admin dashboards",
    intro:
      "A lost-and-found platform built for CvSU campus, featuring user and admin dashboards that make finding and claiming items effortless.",
    image: "/assets/images/works/cvsu_find/cvsufind_hero.png",
    category: "Web Design",
    client: "Cavite State University",
    services:
      "Full-Stack Development, UI/UX Design, Database Design, Admin Dashboard, User Management",
    timeline: "4 months",
    problem:
      "Cavite State University needed a centralized digital platform to manage lost and found items across the campus. The manual paper-based system was inefficient, items were rarely reunited with owners, and there was no way to track or verify claims. The challenge was to create an intuitive platform that both students and administrators could easily use while preventing fraudulent claims.",
    built:
      "I designed and developed a comprehensive web application with separate user and admin portals. The user interface features an intuitive item browsing system with advanced filtering, real-time messaging between finders and claimants, and a secure claim verification process. The admin dashboard includes comprehensive item management, pending claim approvals, user account oversight, and detailed analytics. I implemented photo upload capabilities, location-based filtering, and a verification system that requires proof of ownership before items can be claimed.",
    result: [
      "Successfully reunited 200+ lost items with their owners in the first semester",
      "Reduced claim processing time from days to hours with automated workflows",
      "Achieved 95% user satisfaction rate based on student feedback surveys",
      "Eliminated fraudulent claims through multi-step verification process",
      "Processed 500+ item reports across campus within first 6 months",
      "Provided administrators with real-time visibility into all lost-and-found activities",
      "Created reusable platform architecture adaptable for other university systems",
    ],
    tech: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "Vue.js",
      "Tailwind CSS",
      "Pusher",
      "Docker",
    ],
    techGroups: [
      { title: "Backend", items: ["PHP", "Laravel"] },
      { title: "Data", items: ["MySQL"] },
      { title: "Frontend", items: ["JavaScript", "Vue.js", "Tailwind CSS"] },
      { title: "Realtime", items: ["Pusher"] },
      { title: "Infrastructure", items: ["Docker"] },
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    images: [
      "/assets/images/works/cvsu_find/cvsufind_hero.png",
      "/assets/images/works/cvsu_find/cvsufind_login.png",
      "/assets/images/works/cvsu_find/cvsufind_register.png",
      "/assets/images/works/cvsu_find/cvsufind_dashboard.png",
      "/assets/images/works/cvsu_find/cvsufind_report_lost_item.png",
      "/assets/images/works/cvsu_find/cvsufind_pending_claim.png",
      "/assets/images/works/cvsu_find/cvsufind_claim_verif.png",
      "/assets/images/works/cvsu_find/cvsufind_messaging.png",
      "/assets/images/works/cvsu_find/cvsufind_user_claimed_items.png",
      "/assets/images/works/cvsu_find/cvsufind_your_claimed_items.png",
      "/assets/images/works/cvsu_find/cvsufind_userprof.png",
      "/assets/images/works/cvsu_find/cvsufind_faq.png",
      "/assets/images/works/cvsu_find/cvsufind_admin_dashboard.png",
      "/assets/images/works/cvsu_find/cvsufind_admin_pending_claims.png",
      "/assets/images/works/cvsu_find/cvsufind_admin_record_lost_items.png",
      "/assets/images/works/cvsu_find/cvsufind_admin_record_all_item.png",
      "/assets/images/works/cvsu_find/cvsufind_admin_accounts.png",
      "/assets/images/works/cvsu_find/cvsufind_admin_profile.png",
      "/assets/images/works/cvsu_find/cvsufind_prototype.png",
    ],
    relatedProjects: ["covid-health-declaration", "read-ai-website"],
    needsVerification: [
      "Confirm whether a public live demo or repository exists.",
    ],
  },
  {
    id: "friskay-website",
    name: "Friskay",
    tagline: "Web design recreated from a YouTube tutorial (cat food brand)",
    intro:
      "A web design I recreated from a YouTube tutorial about the world's best-tasting cat food, sourced with only the finest ingredients. Made with love from the heart of Mississippi.",
    image:
      "/assets/images/works/ui_ux_design_crash_course/ui_ux_design_crashcourse_ipad_hero_crop.jpg",
    category: "Web Design",
    bgTheme: "white",
    client: "Personal Learning Project (2024)",
    services: "UI/UX Design, Web Design, Responsive Design, Component Design",
    timeline: "1 week",
    problem:
      "The goal was to practice and improve web design skills by following a comprehensive YouTube tutorial. The challenge was to recreate a professional-looking website for a fictional premium cat food brand while learning modern design principles, responsive layouts, and component-based design systems.",
    built:
      "I followed the tutorial step-by-step, recreating each component with attention to detail including the navigation bar, hero section, product showcase, and call-to-action elements. The design emphasized clean layouts, strong typography, and a warm, inviting color palette that reflects the premium nature of the product. I adapted the design for multiple device sizes including desktop, iPad, and iPhone, ensuring consistent user experience across all platforms. Each component was designed to be reusable and maintainable.",
    result: [
      "Successfully recreated a complete multi-page website design from tutorial",
      "Gained hands-on experience with responsive design principles across 3+ device types",
      "Created reusable component library including buttons, navigation bars, and cards",
      "Improved understanding of design consistency and brand identity implementation",
      "Practiced modern web design trends including hero sections and product showcases",
      "Developed skills in visual hierarchy and user interface composition",
    ],
    tech: ["Figma", "HTML", "CSS", "JavaScript"],
    techGroups: [
      { title: "Design", items: ["Figma"] },
      { title: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    images: [
      "/assets/images/works/ui_ux_design_crash_course/ui_ux_design_crashcourse_ipad_hero_crop.jpg",
      "/assets/images/works/ui_ux_design_crash_course/ui_ux_design_crashcourse_ipad_hero_crop.jpg",
      "/assets/images/works/ui_ux_design_crash_course/ui_ux_design_crashcourse_iphone_sidebar_crop.jpg",
      "/assets/images/works/ui_ux_design_crash_course/ui_ux_design_crashcourse_ipad_cat_button_crop.jpg",
      "/assets/images/works/ui_ux_design_crash_course/ui_ux_design_crashcourse_button_component.png",
    ],
    relatedProjects: ["mobile-attendance-system", "read-ai-website"],
    needsVerification: ["Confirm the YouTube tutorial source/author."],
  },
  {
    id: "mobile-attendance-system",
    name: "Mobile Attendance",
    tagline: "Figma mobile UI/UX design from a Gordon College webinar",
    intro:
      "A UI/UX design I recreated during the 'UI/UX Design Using Figma' webinar hosted by Gordon College, Olongapo City, issued Oct 2023.",
    image:
      "/assets/images/works/mobile_attendance_system_ui_ux/mobile_attendance_system_clockin.png",
    category: "Web Design",
    bgTheme: "white",
    client: "Gordon College Webinar Project (Oct 2023)",
    services: "UI/UX Design, Mobile App Design, Wireframing, Figma Prototyping",
    timeline: "Webinar Duration",
    problem:
      "During the Gordon College webinar on UI/UX Design Using Figma, the challenge was to design a functional mobile attendance system from scratch. This required understanding user workflows for clock-in/clock-out functionality, creating intuitive interfaces for time tracking, and ensuring the design was both visually appealing and highly functional for daily use by employees or students.",
    built:
      "I followed the webinar instructor's guidance while adding my own design touches. The process included creating low-fidelity wireframes to establish the basic layout and user flow, then developing high-fidelity mockups with proper color schemes, typography, and spacing. I designed both clock-in and clock-out screens with clear visual feedback, added a notes feature for context tracking, and ensured the interface was simple enough for quick daily interactions. The design prioritized clarity, ease of use, and minimal steps to complete common tasks.",
    result: [
      "Successfully completed webinar project demonstrating Figma proficiency",
      "Created functional wireframes and high-fidelity mockups for mobile app",
      "Designed intuitive clock-in/clock-out flow requiring minimal user interaction",
      "Implemented clear visual hierarchy for time-critical information",
      "Gained certification from Gordon College for UI/UX Design Using Figma",
      "Applied user-centered design principles to real-world attendance tracking scenario",
    ],
    tech: ["Figma"],
    techGroups: [{ title: "Design", items: ["Figma"] }],
    githubUrl: undefined,
    liveUrl: undefined,
    images: [
      "/assets/images/works/mobile_attendance_system_ui_ux/mobile_attendance_system_clockin.png",
      "/assets/images/works/mobile_attendance_system_ui_ux/mobile_attendance_system_clockin_wireframe.png",
      "/assets/images/works/mobile_attendance_system_ui_ux/mobile_attendance_system_clockout.png",
      "/assets/images/works/mobile_attendance_system_ui_ux/mobile_attendance_system_clockout_wireframe.png",
      "/assets/images/works/mobile_attendance_system_ui_ux/mobile_attendance_system_notes.png",
    ],
    relatedProjects: ["friskay-website", "cvsufind"],
  },
  {
    id: "agwasuri",
    name: "Agwasuri",
    tagline: "IoT water-quality monitoring + decision-tree species prediction",
    intro:
      "A solar-powered IoT and machine-learning system that monitors water quality in real time and recommends suitable aquaculture species for fishpond operators in San Juan I, Ternate, Cavite.",
    image:
      "/assets/images/works/thesis_agwasuri/agwasuri_website_photos/agwasuri_dashboard.png",
    category: "Automation & AI",
    tags: ["Web Development", "Automation & AI"],
    featured: true,
    client: "Municipal Agricultural Office of Ternate",
    services:
      "IoT System Design, Embedded Firmware, Machine Learning, Full-Stack Web Development",
    year: "2026",
    cover: {
      video:
        "/assets/videos/works/agwasuri/agwasuri_dashboard_prediction_test_video.mp4",
      poster:
        "/assets/images/works/thesis_agwasuri/agwasuri_website_photos/agwasuri_dashboard.png",
    },
    galleryHighlights: [
      {
        src: "/assets/images/works/thesis_agwasuri/agwasuri_prototype_fishpond.jpg",
        caption: "Device in the pond",
      },
      {
        src: "/assets/images/works/thesis_agwasuri/agwasuri_website_photos/agwasuri_prediction.png",
        caption: "Species prediction page",
      },
      {
        src: "/assets/images/works/thesis_agwasuri/agwasuri_sensor_controller_components.jpg",
        caption: "Sensor & controller hardware",
      },
    ],
    problem:
      "Fishpond operators in San Juan I, Ternate relied on trial-and-error species selection and manual water checks. Summer salinity spikes and rainy-season freshwater dilution caused mass fish kills within 2 to 3 days of stocking, wiping out capital and family income.",
    problemDetail:
      "A single cycle represents months of savings: fingerlings, feed, labor, and pond preparation. With only two to three cycles per year, one bad season can erase a year's household income.",
    problemQuotes: [
      {
        text: "Wala kaming ginagamit na device... sana meron para mas accurate.",
        translation:
          "We don't use any device... I wish there was one so it's more accurate.",
        attribution: "Fishpond Owner, San Juan I",
      },
      {
        text: "Pag alpas mo pa lang, kuha na siya agad, mga dalawa o tatlong araw lang, namamatay na.",
        translation:
          "Right after stocking, it's gone almost immediately. Two or three days, then they're dead.",
        attribution: "Fishpond Owner, San Juan I",
      },
      {
        text: "Gastos ka na ng pera, kailangan mong kumita para sa pamilya.",
        translation:
          "You've already spent money, and you need to earn for your family.",
        attribution: "Fishpond Owner, San Juan I",
      },
    ],
    built:
      "I designed the web UI in Figma and built the frontend using Tailwind CSS and JavaScript. I modeled the 3D hardware casing in Blender and fabricated it using fiberglass cloth, polyester resin, and MEKP catalyst. I also interviewed fishpond owners and the Municipal Agriculture Office of Ternate, tested the system in actual fishponds, and coordinated our team's case study tasks.",
    solution:
      "A solar-powered floating device monitors pond conditions continuously. The dashboard shows live readings and historical trends, and the Machine Learning (ML) model recommends which species will thrive based on current water quality.",
    features: [
      {
        title: "Live dashboard",
        description:
          "The dashboard refreshes in real time as new sensor data arrives. Operators see current pond conditions, historical trends, and the recommended species without refreshing the page.",
        media:
          "/assets/videos/works/agwasuri/navigation_website_full_video.mp4",
        mediaAlt: "Agwasuri dashboard walkthrough",
      },
      {
        title: "Hardware & Sensors",
        description:
          "Everything runs on a 12V solar panel with a 20,000 mAh battery. When Wi-Fi drops, readings log to microSD and sync later. The device floats on a fiberglass enclosure with styrofoam base.",
        table: {
          headers: ["Sensor", "Measures", "Model"],
          rows: [
            ["pH", "Water acidity/alkalinity", "pH-4502C"],
            ["Dissolved Oxygen", "Oxygen available for fish", "Galvanic Probe"],
            ["Salinity / EC", "Salt concentration", "DFRobot Gravity"],
            ["Temperature", "Water heat", "DS18B20"],
          ],
        },
        media: [
          "/assets/images/works/thesis_agwasuri/agwasuri_isometric_diagram_of_the_floating_platform_device_prototype_white_bg.png",
          "/assets/images/works/thesis_agwasuri/agwasuri_sensor_controller_components.jpg",
        ],
        mediaAlt: [
          "Exploded isometric diagram of the floating device",
          "Sensor and controller setup photo",
        ],
      },
      {
        title: "Decision Tree Model",
        lead: "The Decision Tree reads four inputs and outputs the best species:",
        diagram: {
          src: "/assets/images/works/thesis_agwasuri/decision_tree_algorithm_agwasuri/decision_tree_algorithm_zoomed.png",
          alt: "Decision tree trained on SEAFDEC optimal water parameters: splits on salinity, temperature, dissolved oxygen, and pH into species classes (bangus, tilapia, lapu-lapu, sugpo, mud crab)",
          caption: "Decision Tree classifier",
          width: 2310,
          height: 736,
        },
        table: {
          headers: ["Algorithm", "Accuracy", "Train", "Predict"],
          rows: [
            ["Decision Tree", "93.5%", "0.018s", "0.001s"],
            ["Random Forest", "93.5%", "0.929s", "0.014s"],
          ],
        },
        note: "Same accuracy as Random Forest, but 51x faster to train and 14x faster to predict. That speed makes it edge-deployable and easy for operators to understand, since every recommendation traces back to clear rules. Benchmarked against SEAFDEC optimal parameter ranges for each of the five species.",
      },
    ],
    results: {
      summary:
        "Ten participants from four groups (fishpond operators, MAO officers, marine science experts, IT experts) rated Agwasuri Excellent across the board. The Decision Tree model matched Random Forest accuracy at a fraction of the compute cost.",
      metrics: [
        ["Decision Tree Accuracy", "93.5%"],
        ["Training Time", "0.018s"],
        ["Prediction Time", "0.001s"],
        ["Software Evaluation (ISO/IEC 25010)", "4.84 / 5.00 (Excellent)"],
        ["Hardware Usability (SUS)", "4.85 / 5.00"],
      ],
    },
    tech: [
      "ESP32-WROOM-32",
      "MicroPython",
      "pH-4502C",
      "Galvanic DO sensor",
      "DFRobot EC sensor",
      "DS18B20",
      "Laravel (PHP)",
      "MySQL",
      "Tailwind CSS",
      "JavaScript",
      "Decision Tree Classifier",
      "scikit-learn",
      "FastAPI",
      "joblib",
      "Figma",
      "Fritzing",
      "Blender",
    ],
    techGroups: [
      {
        title: "Hardware & sensors",
        items: [
          "pH-4502C",
          "Galvanic DO sensor",
          "DFRobot EC sensor",
          "DS18B20",
        ],
      },
      { title: "Embedded", items: ["ESP32-WROOM-32", "MicroPython"] },
      { title: "Backend & data", items: ["Laravel (PHP)", "MySQL", "FastAPI"] },
      {
        title: "Machine learning",
        items: ["Decision Tree Classifier", "scikit-learn", "joblib"],
      },
      { title: "Web frontend", items: ["Tailwind CSS", "JavaScript"] },
      {
        title: "Design & prototyping",
        items: ["Figma", "Fritzing", "Blender"],
      },
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    images: [
      "/assets/videos/works/agwasuri/navigation_website_full_video.mp4",
      "/assets/images/works/thesis_agwasuri/agwasuri_fishpond_prototype_fishpond_owner_reymar_jazrel_wholesome.jpg",
      "/assets/images/works/thesis_agwasuri/agwasuri_prototype_fishpond.jpg",
      "/assets/images/works/thesis_agwasuri/agwasuri_prototype_fishpond_lcd.png",
      "/assets/images/works/thesis_agwasuri/agwasuri_sensor_controller_components.jpg",
      "/assets/images/works/thesis_agwasuri/agwasuri_isometric_diagram_of_the_floating_platform_device_prototype_white_bg.png",
      "/assets/images/works/thesis_agwasuri/agwasuri_fishpond_fish_hold.jpg",
      "/assets/images/works/thesis_agwasuri/agwasuri_municipal_agricultural_office_clients_talk_prototype_reymar_jazrel_landscape.png",
      "/assets/images/works/thesis_agwasuri/agwasuri_fishpond_fishpond_owner_interview_reymar.png",
      "/assets/images/works/thesis_agwasuri/agwasuri_fishpond_prototype_fishpond_owner_reymar_interview_write_paper.jpg",
    ],
    longFormVideo: true,
    longFormVideoTitle: "Video Presentation",
    videoChapters: [
      { start: 0, title: "Dashboard Overview" },
      { start: 45, title: "Real-time Sensor Readings" },
      { start: 92, title: "Historical Data & Trends" },
      { start: 148, title: "Species Prediction" },
      { start: 203, title: "Alert Configuration" },
      { start: 256, title: "Account & Settings" },
    ],
    heroImage:
      "/assets/images/works/thesis_agwasuri/agwasuri_website_photos/agwasuri_dashboard.png",
    relatedProjects: ["covid-health-declaration", "read-ai-website"],
    needsVerification: [
      "Add a repository link if the source is public.",
      "The original ~257 MB .mov is still in public/assets/videos and can be removed; the site uses the .mp4 (~40 MB).",
      "Verify the stakeholderQuote attribution is accurate to the field report.",
    ],
    stakeholderQuote: {
      quote:
        "The real-time salinity alerts and species recommendation saved us from a major fish kill during the June 2025 salinity spike. We would have lost half our Bangus stock without the early warning.",
      attribution: "Reymar Jazrel, Fishpond Operator, San Juan I",
    },
    architectureFlow: {
      stages: [
        { title: "Sensors", detail: "pH · DO · EC · Temp" },
        { title: "ESP32", detail: "MicroPython" },
        { title: "Laravel API", detail: "PHP · Reverb" },
        { title: "Dashboard", detail: "Livewire" },
        { title: "FastAPI", detail: "Decision Tree" },
        { title: "Species", detail: "Recommendation" },
      ],
      edgeLabels: [null, "Wi-Fi", "Reverb WS", null, null],
      branches: [
        { at: 1, title: "microSD", detail: "Offline log", dashed: true },
        { at: 2, title: "MySQL", detail: "Data store" },
      ],
      note: "Sensor to dashboard to prediction in under a second. The device logs to microSD when Wi-Fi drops, then syncs automatically when reconnected.",
    },
    team: {
      researchers: [
        "Jazrel Dennis P. Mendoza",
        "Reymar V. Mirante",
        "John Mark A. Pachico",
      ],
      adviser: "Dr. Ricky Jay A. Riel",
      technicalCritic: "Dr. Rossian V. Perea",
      institution: "Cavite State University Naic, January 2026",
      role: "IoT System Design, Embedded Firmware, Machine Learning, Full-Stack Web Development, UI/UX Design, 3D Modeling & Hardware Fabrication, Field Research & Interviews",
    },
  },
  {
    id: "personal-portfolio",
    name: "Personal Portfolio Website",
    tagline: "This site - a React and Tailwind showcase (in progress)",
    intro: "My brand hub, a React + Tailwind showcase.",
    image: "",
    category: "Web Development",
    draft: true,
    client: "Self",
    services: "Web Development, Branding",
    timeline: "Ongoing",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    techGroups: [
      {
        title: "Product engineering",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],
    images: [],
    result: [],
    relatedProjects: ["read-ai-website", "covid-health-declaration"],
    needsVerification: [
      "Add screenshots and finalize this case study, or keep it unlisted.",
    ],
  },
  {
    id: "bscs-tshirt-design",
    name: "Computer Science T-Shirt Design",
    tagline: "Coding-themed t-shirt designs for BSCS students",
    image:
      "/assets/images/works/computer_science_tshirt_design/happines_is_when_your_code_runs_without_error_black.png",
    category: "Branding & Visual Identity",
    bgTheme: "dark",
    client: "BSCS",
    services: "Graphic Design, T-Shirt Design, Vector Art",
    tech: ["Photoshop", "Illustrator"],
    images: [
      "/assets/images/works/computer_science_tshirt_design/happines_is_when_your_code_runs_without_error_black.png",
      "/assets/images/works/computer_science_tshirt_design/cicada_3301_1_black.png",
      "/assets/images/works/computer_science_tshirt_design/debugging_meaning_black.png",
      "/assets/images/works/computer_science_tshirt_design/if_else_ctrl_alt_delete_black.png",
      "/assets/images/works/computer_science_tshirt_design/import_coder_while_loop_black.png",
      "/assets/images/works/computer_science_tshirt_design/interlinked_with_ai_black.png",
      "/assets/images/works/computer_science_tshirt_design/no_comment_black.png",
    ],
  },
  {
    id: "butterfly-vector-photoshop",
    name: "Butterfly Vector Art",
    tagline: "Butterfly vector illustration created in Photoshop",
    image:
      "/assets/images/works/butterfly_vector_photoshop/butterfly_vector_photoshop_export.png",
    category: "Branding & Visual Identity",
    bgTheme: "white",
    client: "Personal Project",
    services: "Vector Art, Illustration, Photoshop",
    tech: ["Photoshop"],
    images: [
      "/assets/images/works/butterfly_vector_photoshop/butterfly_vector_photoshop_export.png",
      "/assets/images/works/butterfly_vector_photoshop/butterfly_vector_art_photoshop_screenshot_process.png",
      "/assets/images/works/butterfly_vector_photoshop/butterfly_vector_art_photoshop_screenshot_layers.png",
      "/assets/images/works/butterfly_vector_photoshop/butterfly_reference.png",
    ],
  },
  {
    id: "invictus-tshirt-design",
    name: "Invictus T-Shirt Design (Black)",
    tagline: "Y2K-inspired black t-shirt and logo designs for Invictus",
    image:
      "/assets/images/works/invictus_tshirt_design/invictus_y2k_black_violet_black.png",
    category: "Branding & Visual Identity",
    bgTheme: "dark",
    client: "Invictus",
    services: "T-Shirt Design, Logo Design, Y2K Aesthetic",
    tech: ["Photoshop", "Illustrator"],
    images: [
      "/assets/images/works/invictus_tshirt_design/invictus_y2k_black_violet_black.png",
      "/assets/images/works/invictus_tshirt_design/invictus_y2k_black_sky_blue_black.png",
      "/assets/images/works/invictus_tshirt_design/invictus_y2k_cashin_inspired_black.png",
      "/assets/images/works/invictus_tshirt_design/invictus_stoic_black_orange_violet_front_black.png",
      "/assets/images/works/invictus_tshirt_design/invictus_stoic_black_orange_violet_back_black.png",
    ],
  },
  {
    id: "invictus-tshirt-design-white",
    name: "Invictus T-Shirt Design (White)",
    tagline: "Y2K-inspired white t-shirt designs for Invictus",
    image:
      "/assets/images/works/invictus_tshirt_design/invictus_y2k_white_violet_white.png",
    category: "Branding & Visual Identity",
    bgTheme: "white",
    client: "Invictus",
    services: "T-Shirt Design, Logo Design, Y2K Aesthetic",
    tech: ["Photoshop", "Illustrator"],
    images: [
      "/assets/images/works/invictus_tshirt_design/invictus_y2k_white_violet_white.png",
      "/assets/images/works/invictus_tshirt_design/invictus_y2k_white_sky_blue_white.png",
      "/assets/images/works/invictus_tshirt_design/invictus_y2k_pastel_pink_white.png",
      "/assets/images/works/invictus_tshirt_design/invictus_y2k_pastel_blue_white.png",
    ],
  },
  {
    id: "clothing-design-arabic-girl",
    name: "Arabic Girl T-Shirt Design",
    tagline: "White clothing design with Arabic text and girl illustration",
    image:
      "/assets/images/works/white_arabic_text_girl_clothing_design/clothing_design_white_arabic_text_girl.png",
    category: "Branding & Visual Identity",
    bgTheme: "white",
    client: "Personal Project",
    services: "Clothing Design, Graphic Design",
    tech: ["Photoshop", "Illustrator"],
    images: [
      "/assets/images/works/white_arabic_text_girl_clothing_design/clothing_design_white_arabic_text_girl.png",
    ],
  },
];

/** Curated selection for the homepage (excludes drafts). */
export const featuredProjects = projects.filter(
  (project) => project.featured && !project.draft,
);

/** Full published collection for the Works page (excludes drafts). */
export const listedProjects = projects.filter((project) => !project.draft);

export const projectsById: Record<string, Project> = Object.fromEntries(
  projects.map((project) => [project.id, project]),
);

/** Category counts for the Works page filters (based on listed projects). */
export const categoryCounts: Record<Category, number> = {
  All: listedProjects.length,
  "Web Design": listedProjects.filter((p) => p.category === "Web Design")
    .length,
  "Web Development": listedProjects.filter(
    (p) => p.category === "Web Development",
  ).length,
  "Branding & Visual Identity": listedProjects.filter(
    (p) => p.category === "Branding & Visual Identity",
  ).length,
  "Content Creation": listedProjects.filter(
    (p) => p.category === "Content Creation",
  ).length,
  "Automation & AI": listedProjects.filter(
    (p) => p.category === "Automation & AI",
  ).length,
};

/**
 * Minimal index entries for the homepage "Additional Work" list below the
 * featured project.
 *
 * Internal entries reuse the canonical project records through `projectsById`
 * (title and route are never duplicated); external entries link to the
 * verified GitHub repository and open in a new tab.
 */
export type AdditionalWorkItem = {
  id: string;
  title: string;
  /** Editorial label for this index - not the Works page category taxonomy */
  category: string;
  /** One-sentence technical summary */
  summary: string;
  /** Internal detail route ("/projects/...") or external URL */
  href: string;
  /** true when `href` is an external repository opened in a new tab */
  external?: boolean;
};

const internalWorkItem = (
  id: string,
  category: string,
  summary: string,
): AdditionalWorkItem => ({
  id,
  title: projectsById[id].name,
  category,
  summary,
  href: `/projects/${id}`,
});

export const additionalWork: AdditionalWorkItem[] = [
  {
    id: "thirteann-pos",
    title: "Thirteann POS",
    category: "Commerce & Operations",
    summary:
      "Milk tea point-of-sale system built in pure PHP, with real-time order processing, size-based pricing, inventory tracking, and staff management.",
    href: "https://github.com/transcenddev/thirteann",
    external: true,
  },
  internalWorkItem(
    "sp-madrid-ai-multimedia",
    "AI & Multimedia",
    "AI-assisted restoration of historical photographs and image-to-video animation for multimedia storytelling.",
  ),
  internalWorkItem(
    "read-ai-website",
    "UI/UX Design",
    "Website experience designed in Figma and implemented using Bubble.io, with a focus on layout, usability, and responsive presentation.",
  ),
  internalWorkItem(
    "covid-health-declaration",
    "Information System",
    "Digital health screening and logging system with guest capacity limits, real-time validation, and an administrative dashboard.",
  ),
  {
    id: "fb-auto-unfollow",
    title: "FB Automation Suite",
    category: "Automation Script",
    summary:
      "JavaScript snippet that automates unfollowing Facebook accounts, pages, and groups, with configurable delays and batch limits to control execution speed.",
    href: "https://github.com/transcenddev/fb-auto-unfollow",
    external: true,
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    category: "Internal Tools",
    summary:
      "Employee directory and record management system built with PHP and MySQL, with admin and user dashboards.",
    href: "https://github.com/transcenddev/employee-management",
    external: true,
  },
  {
    id: "ugc-portfolio",
    title: "UGC Creator Portfolio",
    category: "Content Creation",
    summary:
      "Personal UGC creator portfolio and single-page showcase featuring fitness, lifestyle, men's grooming, skincare, technology, and story-driven content, built with Next.js, React, TypeScript, and Tailwind CSS.",
    href: "https://reymarmiranteugc.vercel.app/",
    external: true,
  },
  internalWorkItem(
    "cvsufind",
    "UI/UX Design",
    "Lost-and-found platform for CvSU campus with user and admin dashboards, real-time messaging, and claim verification.",
  ),
];
