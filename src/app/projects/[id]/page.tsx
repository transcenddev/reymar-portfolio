"use client";

import { useMemo, useState } from "react";
import ProjectDetail from "@/components/ProjectDetail";
import { useParams, useRouter } from "next/navigation";
import Header from "@/sections/Header";

const projectsData: Record<string, {
  id: string;
  title: string;
  description: string;
  client: string;
  services: string;
  timeline: string;
  images: string[];
  liveUrl: string;
  relatedProjects: string[];
}> = {
  "sp-madrid-ai-multimedia": {
    id: "sp-madrid-ai-multimedia",
    title: "SP Madrid AI Multimedia Project",
    description: "AI + storytelling + real-world impact.",
    client: "SP Madrid",
    services: "AI Development, Multimedia",
    timeline: "3 months",
    images: [],
    liveUrl: "#",
    relatedProjects: ["read-ai-website", "personal-portfolio", "play-highlights"],
  },
  "read-ai-website": {
    id: "read-ai-website",
    title: "Read AI Website",
    description: "UI/UX + no-code + product thinking.",
    client: "Read AI",
    services: "UI/UX Design, No-Code Development",
    timeline: "2 months",
    images: [],
    liveUrl: "#",
    relatedProjects: ["sp-madrid-ai-multimedia", "personal-portfolio", "covid-health-declaration"],
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
    relatedProjects: ["read-ai-website", "play-highlights", "covid-health-declaration"],
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
    relatedProjects: ["sp-madrid-ai-multimedia", "personal-portfolio", "covid-health-declaration"],
  },
  "covid-health-declaration": {
    id: "covid-health-declaration",
    title: "COVID Health Declaration System",
    description: "Functional, real-world system build.",
    client: "COVID",
    services: "System Development",
    timeline: "6 months",
    images: [],
    liveUrl: "#",
    relatedProjects: ["sp-madrid-ai-multimedia", "read-ai-website", "play-highlights"],
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


