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
  "artisan-brew-co": {
    id: "artisan-brew-co",
    title: "Artisan Brew Co.",
    description:
      "Landio is where bold ideas come to life, transforming concepts into stunning, functional designs.",
    client: "iktaworks.co",
    services: "Product design",
    timeline: "2 weeks",
    images: [],
    liveUrl: "#",
    relatedProjects: ["wavelength-studios", "nova-fitness", "urban-plates"],
  },
  "wavelength-studios": {
    id: "wavelength-studios",
    title: "Wavelength Studios",
    description:
      "A creative studio platform with immersive visuals and a modular content system.",
    client: "wavelength.io",
    services: "Product design",
    timeline: "3 weeks",
    images: [],
    liveUrl: "#",
    relatedProjects: ["artisan-brew-co", "nova-fitness", "bloom-botanicals"],
  },
  "nova-fitness": {
    id: "nova-fitness",
    title: "Nova Fitness",
    description:
      "A modern fitness brand presence: crisp typography, bold imagery, and clear flows.",
    client: "nova.fit",
    services: "Web design",
    timeline: "10 days",
    images: [],
    liveUrl: "#",
    relatedProjects: ["artisan-brew-co", "wavelength-studios", "urban-plates"],
  },
  "urban-plates": {
    id: "urban-plates",
    title: "Urban Plates",
    description:
      "Restaurant landing and menu browsing experience with emphasis on photography.",
    client: "urbanplates.com",
    services: "UI/UX",
    timeline: "2 weeks",
    images: [],
    liveUrl: "#",
    relatedProjects: [
      "artisan-brew-co",
      "bloom-botanicals",
      "wavelength-studios",
    ],
  },
  "bloom-botanicals": {
    id: "bloom-botanicals",
    title: "Bloom Botanicals",
    description:
      "D2C brand experience focusing on product storytelling and conversion.",
    client: "bloom.shop",
    services: "Ecommerce design",
    timeline: "4 weeks",
    images: [],
    liveUrl: "#",
    relatedProjects: ["artisan-brew-co", "nova-fitness", "urban-plates"],
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


