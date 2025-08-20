"use client";

import React, { FC, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";

type ProjectData = {
  id: string;
  title: string;
  description: string;
  client: string;
  services: string;
  timeline: string;
  images: string[];
  liveUrl: string;
  relatedProjects: string[];
};

type ProjectDetailProps = {
  project: ProjectData;
  onProjectChange: (projectId: string) => void;
  onBack: () => void;
};

const ProjectDetail: FC<ProjectDetailProps> = ({
  project,
  onProjectChange,
  onBack,
}) => {
  const [isSwitching, setIsSwitching] = useState(false);

  const safeImages = useMemo(() => {
    const imgs = Array.isArray(project.images) ? project.images : [];
    return [imgs[0], imgs[1], imgs[2]].filter(Boolean) as string[];
  }, [project.images]);

  const related = useMemo(() => {
    const base = project.relatedProjects || [];
    if (base.length === 0) return [];
    const targetCount = 6; // limit to 6 items total (3 masonry + 3 bottom)
    return Array.from({ length: targetCount }, (_, i) => base[i % base.length]);
  }, [project.relatedProjects]);

  const masonryItems = useMemo(() => {
    if (related.length <= 3) return [];
    return related.slice(0, related.length - 3);
  }, [related]);

  const bottomRowItems = useMemo(() => {
    if (related.length < 3) return related;
    return related.slice(-3);
  }, [related]);

  useEffect(() => {
    // When project prop changes, stop loading state
    if (isSwitching) {
      setIsSwitching(false);
    }
  }, [project.id, isSwitching]);

  const handleRelatedClick = (projectId: string) => {
    setIsSwitching(true);
    onProjectChange(projectId);
  };

  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl">{project.title}</h2>
          <p className="mt-6 md:text-lg text-stone-700 max-w-3xl">
            {project.description}
          </p>
          <div className="mt-8">
            <a
              href={project.liveUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="md:inline-flex">
                Live project
              </Button>
            </a>
          </div>
        </div>

        {/* Info grid */}
        <div className="mt-10 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-stone-500 text-sm">Client</div>
            <div className="text-stone-900 md:text-lg">{project.client}</div>
          </div>
          <div>
            <div className="text-stone-500 text-sm">Services</div>
            <div className="text-stone-900 md:text-lg">{project.services}</div>
          </div>
          <div>
            <div className="text-stone-500 text-sm">Timeline</div>
            <div className="text-stone-900 md:text-lg">{project.timeline}</div>
          </div>
        </div>

        {/* Images */}
        <div className="mt-10 md:mt-16 lg:mt-20 space-y-8">
          {[0, 1, 2].map((index) => {
            const imgSrc = safeImages[index];
            return (
              <div
                key={index}
                className="relative w-full aspect-[4/3] bg-stone-300 overflow-hidden"
              >
                {imgSrc ? (
                  <Image
                    src={imgSrc}
                    alt={`${project.title} image ${index + 1}`}
                    className="object-cover"
                    fill
                  />
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Recent projects (masonry) */}
        <div className="mt-16 md:mt-24">
          <h3 className="text-3xl md:text-5xl max-w-3xl">
            Check out some of my recent projects
          </h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {masonryItems.map((id, idx) => {
              const tone = ["bg-stone-300", "bg-stone-200", "bg-stone-400"][
                idx % 3
              ];
              return (
                <button
                  key={`${id}-${idx}`}
                  onClick={() => handleRelatedClick(id)}
                  className={`relative w-full ${tone} aspect-[4/3] transition-all duration-300 hover:brightness-95`}
                  aria-label={`Open ${id}`}
                >
                  <span className="absolute bottom-2 left-2 text-xs text-stone-700/80">
                    {id}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Balanced bottom row of 3 */}
          {bottomRowItems.length > 0 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {bottomRowItems.map((id, idx) => {
                const tone = ["bg-stone-300", "bg-stone-200", "bg-stone-400"][
                  idx % 3
                ];
                return (
                  <button
                    key={`${id}-bottom-${idx}`}
                    onClick={() => handleRelatedClick(id)}
                    className={`relative w-full ${tone} aspect-[4/3] transition-all duration-300 hover:brightness-95`}
                    aria-label={`Open ${id}`}
                  >
                    <span className="absolute bottom-2 left-2 text-xs text-stone-700/80">
                      {id}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-10">
          <Button variant="secondary" onClick={onBack}>
            See all
          </Button>
        </div>

        {/* Loading overlay while switching */}
        {isSwitching && (
          <div className="fixed inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center z-50">
            <div className="text-stone-900">Loading…</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
