"use client";

import React, { FC, useEffect, useMemo, useRef, useState } from "react";
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
  challenge?: string;
  approach?: string;
  impact?: string[];
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
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const safeMedia = useMemo(() => {
    const media = Array.isArray(project.images) ? project.images : [];
    return media.filter(Boolean) as string[];
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

  useEffect(() => {
    const handleScroll = () => {
      if (!autoplayEnabled) return;

      videoRefs.current.forEach((video) => {
        if (video) {
          const rect = video.getBoundingClientRect();
          const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
          if (isVisible) {
            video.play();
          } else {
            video.pause();
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [autoplayEnabled]);

  const handleRelatedClick = (projectId: string) => {
    setIsSwitching(true);
    onProjectChange(projectId);
  };

  const toggleAutoplay = () => {
    setAutoplayEnabled((prev) => !prev);
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

        {/* Challenge Section */}
        {project.challenge && (
          <div className="mt-10 md:mt-16 lg:mt-20">
            <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
              The Challenge
            </h3>
            <p className="text-stone-700 md:text-lg leading-relaxed max-w-4xl">
              {project.challenge}
            </p>
          </div>
        )}

        {/* Approach Section */}
        {project.approach && (
          <div className="mt-10 md:mt-16 lg:mt-20">
            <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
              The Approach
            </h3>
            <p className="text-stone-700 md:text-lg leading-relaxed max-w-4xl">
              {project.approach}
            </p>
          </div>
        )}

        {/* Images and Videos */}
        <div className="mt-10 md:mt-16 lg:mt-20 space-y-8">
          {safeMedia.map((mediaSrc, index) => {
            const isVideo = mediaSrc.endsWith(".mp4");
            return (
              <div
                key={index}
                className={`relative w-full bg-stone-300 overflow-hidden ${
                  isVideo ? "aspect-[4/3]" : ""
                }`}
              >
                {isVideo ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={mediaSrc}
                    muted
                    loop
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image
                    src={mediaSrc}
                    alt={`${project.title} media ${index + 1}`}
                    className="w-full h-auto"
                    width={1920}
                    height={1080}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Impact Section */}
        {project.impact && project.impact.length > 0 && (
          <div className="mt-10 md:mt-16 lg:mt-20">
            <h3 className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8">
              Key Results & Impact
            </h3>
            <ul className="space-y-4 max-w-4xl">
              {project.impact.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-stone-700 md:text-lg"
                >
                  <span className="text-primary text-xl mt-1 flex-shrink-0">
                    •
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

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

        {/* Back and Autoplay toggle */}
        <div className="mt-10 flex justify-between items-center">
          <Button variant="secondary" onClick={onBack}>
            See all
          </Button>
          <Button variant="primary" onClick={toggleAutoplay}>
            {autoplayEnabled ? "Disable Autoplay" : "Enable Autoplay"}
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
