"use client";

import { useMemo, useState } from "react";
import ProjectDetail from "@/components/ProjectDetail";
import { notFound, useParams, useRouter } from "next/navigation";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { projectsById } from "@/data/projects";

export default function ProjectPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const projectId = params?.id as string;

  const [activeId, setActiveId] = useState(projectId);

  const project = useMemo(() => projectsById[activeId], [activeId]);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <ProjectDetail
        project={project}
        onProjectChange={(id) => setActiveId(id)}
         onBack={() => router.push("/#work")}
      />
      <Footer />
    </>
  );
}
