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
    relatedProjects: [
      "read-ai-website",
      "personal-portfolio",
      "play-highlights",
    ],
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
    relatedProjects: [
      "read-ai-website",
      "play-highlights",
      "covid-health-declaration",
    ],
  },
  "play-highlights": {
    id: "play-highlights",
    title: "Play Highlights (Videography & Content Creation)",
    description: "Creativity + editing workflow.",
    client: "Various",
    services: "Videography, Content Creation",
    timeline: "1 year",
    images: [],
    liveUrl: "#",
    relatedProjects: [
      "sp-madrid-ai-multimedia",
      "personal-portfolio",
      "covid-health-declaration",
    ],
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
    relatedProjects: [
      "sp-madrid-ai-multimedia",
      "read-ai-website",
      "play-highlights",
    ],
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
