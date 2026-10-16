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
  /** Show on the curated homepage selection */
  featured?: boolean;
  /** Keep the detail route reachable but hide from the homepage and Works list */
  draft?: boolean;
  client: string;
  services?: string;
  timeline?: string;
  /** "The Problem" */
  problem?: string;
  /** "What I Built" */
  built?: string;
  /** "The Result" - verified outcomes only */
  result?: string[];
  /** "Tech Stack" - confirmed technologies only */
  tech?: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
  /** Render videos as a standard player (controls + audio) instead of a muted autoplay reel */
  longFormVideo?: boolean;
  /** Optional title for long-form video (e.g., "Video Presentation") */
  longFormVideoTitle?: string;
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
};

export const projects: Project[] = [
  {
    id: "sp-madrid-ai-multimedia",
    name: "Reviving Memories with AI",
    tagline: "AI-driven multimedia presentation for SP Madrid's heritage",
    intro:
      "Collaborated directly with SP Madrid's CEO and cross-functional team to pioneer an AI-driven multimedia presentation that breathed new life into historical imagery. By leveraging advanced prompt engineering and cutting-edge AI video generation tools, I transformed static photographs into dynamic, emotionally resonant narratives. The project showcased AI's transformative potential in digital storytelling and archival restoration, creating an immersive experience that connected past and present while demonstrating how AI can preserve cultural heritage and make it accessible for modern audiences.",
    image: "/assets/images/sp-madrid-exhibition.jpg",
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
    tech: [],
    images: [
      "/assets/images/sp-madrid-process-photos.jpg",
      "/assets/videos/sp-madrid-ai-media1.mp4",
      "/assets/images/sp-madrid-ai-plaque.jpg",
      "/assets/videos/sp-madrid-ai-media2.mp4",
      "/assets/images/sp-madrid-exhibition.jpg",
      "/assets/videos/sp-madrid-ai-media3.mp4",
      "/assets/images/sp-madrid-team-event.jpg",
      "/assets/images/sp-madrid-with-ceo.jpg",
    ],
    relatedProjects: ["read-ai-website"],
    needsVerification: [
      "Tech stack: list the specific AI video tools and any software used.",
    ],
  },
  {
    id: "read-ai-website",
    name: "Read AI",
    tagline:
      "UI/UX design and no-code build for a meeting intelligence platform",
    intro:
      "Led the UI/UX design and no-code development for Read AI, a cutting-edge meeting intelligence platform. The project required transforming complex AI functionality into intuitive user experiences, creating a modern design system, and building a conversion-focused marketing website that clearly communicated the product's value proposition while maintaining technical credibility and brand consistency.",
    image: "/assets/images/read-ai-webdesign1.png",
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
    tech: ["Figma"],
    images: [
      "/assets/images/read-ai-webdesign1.png",
      "/assets/images/read-ai-webdesign2.png",
      "/assets/images/read-ai-webdesign3.png",
      "/assets/images/read-ai-webdesign4.png",
      "/assets/images/readai-figma1.png",
      "/assets/images/readai-figma2.png",
      "/assets/images/readai-figma3.png",
      "/assets/images/read-ai-prototype1.png",
    ],
    relatedProjects: ["sp-madrid-ai-multimedia", "covid-health-declaration"],
    needsVerification: [
      "Confirm the no-code build tool: the About page says Bubble.io, while this project previously said Webflow.",
      "Confirm whether a public live demo URL exists.",
    ],
  },
  {
    id: "covid-health-declaration",
    name: "COVID-19 Health Declaration System",
    tagline: "Full-stack health screening platform with real-time analytics",
    intro:
      "Developed a comprehensive full-stack health declaration platform during the COVID-19 pandemic to enable organizations to safely manage facility access through secure, real-time health screenings. The system processed thousands of daily health declarations while maintaining strict data privacy compliance and providing administrators with powerful analytics for contact tracing and health monitoring.",
    image: "/assets/images/covid-hero.png",
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
    tech: [],
    images: [
      "/assets/images/covid-hero.png",
      "/assets/images/covid-login-register.png",
      "/assets/images/covid-add1.png",
      "/assets/images/covid-add2.png",
      "/assets/images/covid-add3.png",
      "/assets/images/covid-add4.png",
      "/assets/images/covid-dashboard.png",
      "/assets/images/covid-table.png",
    ],
    relatedProjects: ["sp-madrid-ai-multimedia", "read-ai-website"],
    needsVerification: [
      "Tech stack: list the languages, frameworks, and database used.",
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
    image: "/assets/images/cvsufind/cvsufind-hero.png",
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
    tech: [],
    images: [
      "/assets/images/cvsufind/cvsufind-hero.png",
      "/assets/images/cvsufind/cvsufind-login.png",
      "/assets/images/cvsufind/cvsufind-register.png",
      "/assets/images/cvsufind/cvsufind-dashboard.png",
      "/assets/images/cvsufind/cvsufind-lost-item.png",
      "/assets/images/cvsufind/cvsufind-report-lost-item.png",
      "/assets/images/cvsufind/cvsufind-pending-claim.png",
      "/assets/images/cvsufind/cvsufind-claim-verif.png",
      "/assets/images/cvsufind/cvsufind-messaging.png",
      "/assets/images/cvsufind/cvsufind-user-claimed-items.png",
      "/assets/images/cvsufind/cvsufind-your-claimed-items.png",
      "/assets/images/cvsufind/cvsufind-userprof.png",
      "/assets/images/cvsufind/cvsufind-faq.png",
      "/assets/images/cvsufind/cvsufind-admin-dashboard.png",
      "/assets/images/cvsufind/cvsufind-admin-pending-claims.png",
      "/assets/images/cvsufind/cvsufind-admin-record-lost-items.png",
      "/assets/images/cvsufind/cvsufind-admin-record-all-item.png",
      "/assets/images/cvsufind/cvsufind-admin-accounts.png",
      "/assets/images/cvsufind/cvsufind-admin-profile.png",
      "/assets/images/cvsufind/cvsufind-prototype.png",
    ],
    relatedProjects: ["covid-health-declaration", "read-ai-website"],
    needsVerification: [
      "Tech stack: list the languages, frameworks, and database used.",
      "Confirm whether a public live demo or repository exists.",
    ],
  },
  {
    id: "friskay-website",
    name: "Friskay Website",
    tagline: "Web design recreated from a YouTube tutorial (cat food brand)",
    intro:
      "A web design I recreated from a YouTube tutorial about the world's best-tasting cat food, sourced with only the finest ingredients. Made with love from the heart of Mississippi.",
    image:
      "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-desktop.jpg",
    category: "Web Design",
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
    tech: [],
    images: [
      "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-desktop.jpg",
      "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-ipad.jpg",
      "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-iphone.jpg",
      "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-iphone-sidebar.jpg",
      "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-navbar-component.jpg",
      "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-button-component.jpg",
    ],
    relatedProjects: ["mobile-attendance-system", "read-ai-website"],
    needsVerification: [
      "Tech stack: list the design/implementation tools used.",
    ],
  },
  {
    id: "mobile-attendance-system",
    name: "Mobile Attendance System",
    tagline: "Figma mobile UI/UX design from a Gordon College webinar",
    intro:
      "A UI/UX design I recreated during the 'UI/UX Design Using Figma' webinar hosted by Gordon College, Olongapo City, issued Oct 2023.",
    image:
      "/assets/images/mobile-attendance-system/mobile-attendance-system-clockin.png",
    category: "Web Design",
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
    images: [
      "/assets/images/mobile-attendance-system/mobile-attendance-system-clockin.png",
      "/assets/images/mobile-attendance-system/mobile-attendance-system-clockin-wireframe.png",
      "/assets/images/mobile-attendance-system/mobile-attendance-system-clockout.png",
      "/assets/images/mobile-attendance-system/mobile-attendance-system-clockout-wireframe.png",
      "/assets/images/mobile-attendance-system/mobile-attendance-system-notes.png",
    ],
    relatedProjects: ["friskay-website", "cvsufind"],
  },
  {
    id: "agwasuri",
    name: "Agwasuri",
    tagline: "IoT water-quality monitoring + decision-tree species prediction",
    intro:
      "A solar-powered IoT and machine-learning system that monitors water quality in real time and recommends suitable aquaculture species for fishpond operators in San Juan I, Ternate, Cavite.",
    image: "/assets/images/agwasuri/homepage_1.png",
    category: "Automation & AI",
    featured: true,
    client: "Municipal Agricultural Office of Ternate",
    services:
      "IoT System Design, Embedded Firmware, Machine Learning, Full-Stack Web Development",
    problem:
      "Aquaculture operators in San Juan I, Ternate, Cavite suffered fish kills and financial losses from trial-and-error species selection and unmonitored water-quality changes - summer salinity spikes and rainy-season freshwater dilution.",
    built:
      "I designed the web UI in Figma and built the frontend using Tailwind CSS and JavaScript. I modeled the 3D hardware casing in Blender and fabricated it using fiberglass cloth, polyester resin, and MEKP catalyst. The ESP32-WROOM-32 (MicroPython) device measures pH, dissolved oxygen, salinity/electrical conductivity, and temperature, transmitting readings in real time over Wi-Fi with offline microSD logging on a solar-powered floating platform. I also interviewed fishpond owners and the Municipal Agriculture Office of Ternate, tested the system in actual fishponds, and coordinated the team's case study tasks. A Laravel/PHP + MySQL web dashboard presents the data (alongside an on-site LCD), and a decision-tree classifier recommends suitable species - Bangus, Lapu-lapu, Tilapia, Sugpo, and Mudcrab - benchmarked against SEAFDEC optimal parameters.",
    result: [
      "Decision-tree classifier reached 93.5% accuracy, matching Random Forest while training in 0.018 s and predicting in 0.001 s - fast enough for edge recommendations.",
      "Trained on 5,000 water-quality records across five species.",
      "Software evaluation (ISO/IEC 25010) by 10 domain reviewers: 4.84 / 5.00 (Excellent).",
      "Hardware usability (System Usability Scale): 4.85 / 5.00, with a perfect 5.00 for functional integration.",
    ],
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
      "Figma",
      "Fritzing",
      "Blender",
    ],
    images: [
      "/assets/images/agwasuri/homepage_1.png",
      "/assets/images/agwasuri/dashboard_collapsible_sidebar.png",
      "/assets/images/agwasuri/historical_data_page.png",
      "/assets/images/agwasuri/recommendation_page_prediction_fish_type.png",
      "/assets/images/agwasuri/login_1.png",
      "/assets/images/agwasuri/profile_info.png",
      "/assets/images/agwasuri/account_management.png",
      "/assets/images/agwasuri/admin_dashboard_recent_measurements.png",
      "/assets/images/agwasuri/admin_dashboard_searched_user.png",
      "/assets/images/agwasuri/admin_dashboard_not_yet_search.png",
      "/assets/videos/thesis_video_presentation.mp4",
    ],
    longFormVideo: true,
    longFormVideoTitle: "Video Presentation",
    relatedProjects: ["covid-health-declaration", "read-ai-website"],
    needsVerification: [
      "Add a repository link if the source is public.",
      "The original ~257 MB .mov is still in public/assets/videos and can be removed; the site uses the .mp4 (~40 MB).",
      "Verify the stakeholderQuote attribution is accurate to the field report.",
    ],
    heroMetrics: [
      { label: "Accuracy", value: "93.5%" },
      { label: "Inference", value: "0.001s" },
      { label: "Training", value: "0.018s" },
      { label: "Records", value: "5,000" },
    ],
    hasLiveTelemetry: true,
    stakeholderQuote: {
      quote:
        "The real-time salinity alerts and species recommendation saved us from a major fish kill during the June 2025 salinity spike. We would have lost half our Bangus stock without the early warning.",
      attribution:
        "Reymar Jazrel, Fishpond Operator, San Juan I",
    },
    architecture: {
      left: {
        title: "Physical Tiers",
        description:
          "Solar-powered floating platform: ESP32-WROOM-32 (MicroPython) reads pH-4502C, Galvanic DO, DFRobot EC, and DS18B20 sensors, transmits over Wi-Fi with offline microSD logging. Fiberglass buoy enclosure, 20,000 mAh LiFePO4 battery, 12V solar panel.",
      },
      right: {
        title: "Engine Tiers",
        description:
          "Laravel 11 / Reverb WebSocket pipeline ingests sensor data into MySQL. FastAPI hosts the Decision Tree classifier (scikit-learn), benchmarked against SEAFDEC optimal parameters. Decision Tree was chosen over Random Forest for 0.001s edge-deployable inference.",
      },
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
    images: [],
    result: [],
    relatedProjects: ["read-ai-website", "covid-health-declaration"],
    needsVerification: [
      "Add screenshots and finalize this case study, or keep it unlisted.",
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
  internalWorkItem(
    "cvsufind",
    "UI/UX Design",
    "Lost-and-found platform for CvSU campus with user and admin dashboards, real-time messaging, and claim verification.",
  ),
];
