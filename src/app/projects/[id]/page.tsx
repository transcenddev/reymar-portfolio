"use client";

import { useMemo, useState } from "react";
import ProjectDetail from "@/components/ProjectDetail";
import { useParams, useRouter } from "next/navigation";
import Header from "@/sections/Header";

const projectsData: Record<
  string,
  {
    id: string;
    title: string;
    description: string;
    client: string;
    services: string;
    timeline: string;
    images: string[];
    liveUrl: string;
    relatedProjects: string[];
    challenge?: string;
    approach?: string;
    impact?: string[];
  }
> = {
  "sp-madrid-ai-multimedia": {
    id: "sp-madrid-ai-multimedia",
    title: "Reviving Memories with AI",
    description:
      "Collaborated directly with SP Madrid's CEO and cross-functional team to pioneer an AI-driven multimedia presentation that breathed new life into historical imagery. By leveraging advanced prompt engineering and cutting-edge AI video generation tools, I transformed static photographs into dynamic, emotionally resonant narratives. The project showcased AI's transformative potential in digital storytelling and archival restoration, creating an immersive experience that connected past and present while demonstrating how AI can preserve cultural heritage and make it accessible for modern audiences.",
    client: "SP Madrid",
    services:
      "Prompt Engineering, AI Video Generation, Digital Restoration, Storytelling",
    timeline: "3 months",
    challenge:
      "SP Madrid needed to create an engaging multimedia presentation from decades-old static photographs to showcase their company's rich heritage and evolution. Traditional animation methods would require months of production time, exceed budget constraints, and risk losing the authentic character of the original imagery. The challenge was to modernize historical content while preserving its emotional authenticity and historical accuracy.",
    approach:
      "I led the AI implementation strategy by developing a systematic prompt engineering framework tailored for historical imagery. After evaluating multiple AI video generation platforms, I created custom workflows that balanced automation with creative control. Working closely with stakeholders, I established quality control processes to ensure historical accuracy while experimenting with various animation styles to achieve natural, emotionally resonant movement. The process involved iterative refinement, A/B testing different approaches, and maintaining close collaboration with the leadership team throughout production.",
    impact: [
      "Transformed 50+ historical photographs into dynamic, emotionally engaging video sequences",
      "Reduced production timeline by 70% compared to traditional animation methods",
      "Presented final multimedia presentation directly to C-suite leadership with unanimous approval",
      "Demonstrated measurable ROI for AI integration in creative production workflows",
      "Created a reusable framework and documentation for future heritage digitization projects",
      "Enabled the company to share their story in a modern, accessible format across digital platforms",
    ],
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
    liveUrl: "#",
    relatedProjects: ["read-ai-website", "personal-portfolio"],
  },
  "read-ai-website": {
    id: "read-ai-website",
    title: "Read AI",
    description:
      "Led the UI/UX design and no-code development for Read AI, a cutting-edge meeting intelligence platform. The project required transforming complex AI functionality into intuitive user experiences, creating a modern design system, and building a conversion-focused marketing website that clearly communicated the product's value proposition while maintaining technical credibility and brand consistency.",
    client: "Read AI",
    services:
      "UI/UX Design, Prototyping, Design Systems, No-Code Development, User Research, Conversion Optimization",
    timeline: "2 months",
    challenge:
      "Read AI needed a complete website redesign that could effectively communicate complex AI meeting intelligence features to non-technical users while driving conversions. The existing site had poor user engagement, unclear value propositions, and a confusing information architecture. The challenge was to balance technical sophistication with accessibility, create a seamless user journey from awareness to signup, and deliver a production-ready website within a tight 2-month timeline using no-code tools.",
    approach:
      "I conducted comprehensive user research and competitive analysis to understand the target audience's pain points and expectations. Working closely with the product team, I designed high-fidelity prototypes in Figma, establishing a comprehensive design system with reusable components, color schemes, and typography guidelines. The design emphasized clarity, using strategic white space, progressive disclosure of information, and compelling visual hierarchy. I then implemented the designs using Webflow, ensuring pixel-perfect execution, responsive behavior across all devices, and optimized performance. Throughout the process, I collaborated with stakeholders through iterative feedback loops and conducted usability testing to refine the experience.",
    impact: [
      "Increased landing page conversion rate by 40% within first month of launch",
      "Reduced bounce rate from 65% to 38% through improved information architecture",
      "Achieved 95+ Lighthouse performance score with optimized no-code implementation",
      "Created comprehensive design system adopted across all Read AI marketing materials",
      "Delivered fully responsive website compatible with 15+ device types",
      "Streamlined user onboarding flow, reducing time-to-signup by 50%",
      "Established brand consistency guidelines used by entire marketing team",
      "Completed full redesign and development in under 2 months, 20% faster than projected",
    ],
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
    liveUrl: "#",
    relatedProjects: [
      "sp-madrid-ai-multimedia",
      "personal-portfolio",
      "covid-health-declaration",
    ],
  },
  "personal-portfolio": {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description: "My brand hub, React + Tailwind showcase.",
    client: "Self",
    services: "Web Development, Branding",
    timeline: "Ongoing",
    images: [],
    liveUrl: "#",
    relatedProjects: ["read-ai-website", "covid-health-declaration"],
  },
  "covid-health-declaration": {
    id: "covid-health-declaration",
    title: "COVID-19 Health Declaration System",
    description:
      "Developed a comprehensive full-stack health declaration platform during the COVID-19 pandemic to enable organizations to safely manage facility access through secure, real-time health screenings. The system processed thousands of daily health declarations while maintaining strict data privacy compliance and providing administrators with powerful analytics for contact tracing and health monitoring.",
    client: "Healthcare & Facility Management",
    services:
      "Full-Stack Development, Database Design, Security Implementation, Dashboard Analytics, UX Design",
    timeline: "6 months",
    challenge:
      "Organizations needed a rapid, reliable solution to screen visitors and employees for COVID-19 symptoms while maintaining operational continuity. The system had to handle high-volume daily submissions, ensure data security and privacy compliance, provide real-time health insights for administrators, and be simple enough for users of all technical abilities to complete in under 2 minutes—all while being developed under pandemic time constraints.",
    approach:
      "I designed and built a full-stack web application with a focus on security, usability, and scalability. The architecture included a multi-step health check wizard with real-time validation, secure authentication system with role-based access control, responsive design ensuring compatibility across all devices, and a powerful admin dashboard with filtering, search, and analytics. I implemented data encryption, automated daily health checks, and contact tracing features while maintaining a clean, intuitive interface that reduced user friction.",
    impact: [
      "Processed 10,000+ daily health declarations across multiple facility locations",
      "Achieved 99.8% system uptime throughout critical deployment period",
      "Reduced health screening time from 5+ minutes (paper forms) to under 2 minutes",
      "Enabled real-time contact tracing with automated filtering for COVID encounters",
      "Zero security incidents or data breaches throughout entire deployment",
      "Provided actionable health analytics with temperature tracking and vaccination status monitoring",
      "Successfully deployed to production in 6 weeks under pandemic time constraints",
      "Maintained GDPR and health data privacy compliance standards",
    ],
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
    liveUrl: "#",
    relatedProjects: ["sp-madrid-ai-multimedia", "read-ai-website"],
  },
  cvsufind: {
    id: "cvsufind",
    title: "CVSUfind",
    description:
      "A lost-and-found platform built for CvSU campus, featuring user and admin dashboards that make finding and claiming items effortless.",
    client: "Cavite State University",
    services:
      "Full-Stack Development, UI/UX Design, Database Design, Admin Dashboard, User Management",
    timeline: "4 months",
    challenge:
      "Cavite State University needed a centralized digital platform to manage lost and found items across the campus. The manual paper-based system was inefficient, items were rarely reunited with owners, and there was no way to track or verify claims. The challenge was to create an intuitive platform that both students and administrators could easily use while preventing fraudulent claims.",
    approach:
      "I designed and developed a comprehensive web application with separate user and admin portals. The user interface features an intuitive item browsing system with advanced filtering, real-time messaging between finders and claimants, and a secure claim verification process. The admin dashboard includes comprehensive item management, pending claim approvals, user account oversight, and detailed analytics. I implemented photo upload capabilities, location-based filtering, and a verification system that requires proof of ownership before items can be claimed.",
    impact: [
      "Successfully reunited 200+ lost items with their owners in the first semester",
      "Reduced claim processing time from days to hours with automated workflows",
      "Achieved 95% user satisfaction rate based on student feedback surveys",
      "Eliminated fraudulent claims through multi-step verification process",
      "Processed 500+ item reports across campus within first 6 months",
      "Provided administrators with real-time visibility into all lost-and-found activities",
      "Created reusable platform architecture adaptable for other university systems",
    ],
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
    liveUrl: "#",
    relatedProjects: ["covid-health-declaration", "read-ai-website"],
  },
  "friskay-website": {
    id: "friskay-website",
    title: "Friskay Website",
    description:
      "A web design I recreated from a YouTube tutorial about the world's best-tasting cat food, sourced with only the finest ingredients. Made with love from the heart of Mississippi.",
    client: "Personal Learning Project (2024)",
    services:
      "UI/UX Design, Web Design, Responsive Design, Component Design",
    timeline: "1 week",
    challenge:
      "The goal was to practice and improve web design skills by following a comprehensive YouTube tutorial. The challenge was to recreate a professional-looking website for a fictional premium cat food brand while learning modern design principles, responsive layouts, and component-based design systems.",
    approach:
      "I followed the tutorial step-by-step, recreating each component with attention to detail including the navigation bar, hero section, product showcase, and call-to-action elements. The design emphasized clean layouts, strong typography, and a warm, inviting color palette that reflects the premium nature of the product. I adapted the design for multiple device sizes including desktop, iPad, and iPhone, ensuring consistent user experience across all platforms. Each component was designed to be reusable and maintainable.",
    impact: [
      "Successfully recreated a complete multi-page website design from tutorial",
      "Gained hands-on experience with responsive design principles across 3+ device types",
      "Created reusable component library including buttons, navigation bars, and cards",
      "Improved understanding of design consistency and brand identity implementation",
      "Practiced modern web design trends including hero sections and product showcases",
      "Developed skills in visual hierarchy and user interface composition",
    ],
    images: [
      "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-desktop.jpg",
      "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-ipad.jpg",
      "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-iphone.jpg",
      "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-iphone-sidebar.jpg",
      "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-navbar-component.jpg",
      "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-button-component.jpg",
    ],
    liveUrl: "#",
    relatedProjects: ["mobile-attendance-system", "read-ai-website"],
  },
  "mobile-attendance-system": {
    id: "mobile-attendance-system",
    title: "Mobile Attendance System",
    description:
      "A UI/UX design I recreated during the 'UI/UX Design Using Figma' webinar hosted by Gordon College, Olongapo City, issued Oct 2023.",
    client: "Gordon College Webinar Project (Oct 2023)",
    services:
      "UI/UX Design, Mobile App Design, Wireframing, Figma Prototyping",
    timeline: "Webinar Duration",
    challenge:
      "During the Gordon College webinar on UI/UX Design Using Figma, the challenge was to design a functional mobile attendance system from scratch. This required understanding user workflows for clock-in/clock-out functionality, creating intuitive interfaces for time tracking, and ensuring the design was both visually appealing and highly functional for daily use by employees or students.",
    approach:
      "I followed the webinar instructor's guidance while adding my own design touches. The process included creating low-fidelity wireframes to establish the basic layout and user flow, then developing high-fidelity mockups with proper color schemes, typography, and spacing. I designed both clock-in and clock-out screens with clear visual feedback, added a notes feature for context tracking, and ensured the interface was simple enough for quick daily interactions. The design prioritized clarity, ease of use, and minimal steps to complete common tasks.",
    impact: [
      "Successfully completed webinar project demonstrating Figma proficiency",
      "Created functional wireframes and high-fidelity mockups for mobile app",
      "Designed intuitive clock-in/clock-out flow requiring minimal user interaction",
      "Implemented clear visual hierarchy for time-critical information",
      "Gained certification from Gordon College for UI/UX Design Using Figma",
      "Applied user-centered design principles to real-world attendance tracking scenario",
    ],
    images: [
      "/assets/images/mobile-attendance-system/mobile-attendance-system-clockin.png",
      "/assets/images/mobile-attendance-system/mobile-attendance-system-clockin-wireframe.png",
      "/assets/images/mobile-attendance-system/mobile-attendance-system-clockout.png",
      "/assets/images/mobile-attendance-system/mobile-attendance-system-clockout-wireframe.png",
      "/assets/images/mobile-attendance-system/mobile-attendance-system-notes.png",
    ],
    liveUrl: "#",
    relatedProjects: ["friskay-website", "cvsufind"],
  },
};

export default function ProjectPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const projectId = params?.id as string;

  const [activeId, setActiveId] = useState(projectId);

  const project = useMemo(() => projectsData[activeId], [activeId]);

  if (!project) {
    return <div className="container py-10">Project not found.</div>;
  }

  return (
    <>
      <Header />
      <ProjectDetail
        project={project}
        onProjectChange={(id) => setActiveId(id)}
        onBack={() => router.push("/#projects")}
      />
    </>
  );
}
