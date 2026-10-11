"use client";

import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { projectsById, type Project } from "@/data/projects";

const isVideoSrc = (src: string) => /\.(mp4|mov|webm)$/i.test(src);

type ProjectDetailProps = {
  project: Project;
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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const handleChange = (e: MediaQueryListEvent) => {
      // Runtime changes only — initial state is already sourced from the
      // useState initializer to avoid a hydration flash.
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const effectiveAutoplay = autoplayEnabled && !prefersReducedMotion;

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const safeMedia = useMemo(() => {
    const media = Array.isArray(project.images) ? project.images : [];
    return media.filter(Boolean) as string[];
  }, [project.images]);

  const hasAutoplayVideos =
    !project.longFormVideo && safeMedia.some(isVideoSrc);

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
            if (video.paused) {
              void video.play().catch((error: unknown) => {
                // A pause during an in-flight play request is expected when
                // scrolling quickly and produces an AbortError in browsers.
                if (
                  !(error instanceof DOMException) ||
                  error.name !== "AbortError"
                ) {
                  console.error("Video playback failed:", error);
                }
              });
            }
          } else if (!video.paused) {
            video.pause();
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [effectiveAutoplay]); // eslint-disable-line react-hooks/exhaustive-deps

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
          <h1 className="font-display text-statement font-bold text-balance">
            {project.name}
          </h1>
          {project.intro && (
            <div className="mt-6">
              <h3 className="text-sm text-stone-500 uppercase tracking-wider mb-2">
                Overview
              </h3>
              <p className="md:text-lg text-stone-700 max-w-3xl">
                {project.intro}
              </p>
            </div>
          )}
          {(project.githubUrl || project.liveUrl) && (
            <div className="mt-8">
              <h3 className="text-sm text-stone-500 uppercase tracking-wider mb-3">
                Project Links
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" className="md:inline-flex">
                      GitHub
                    </Button>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" className="md:inline-flex">
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Info grid */}
        <div className="mt-10 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-stone-500 text-sm">Client</div>
            <div className="text-stone-900 md:text-lg">{project.client}</div>
          </div>
          {project.services && (
            <div>
              <div className="text-stone-500 text-sm">Services</div>
              <div className="text-stone-900 md:text-lg">
                {project.services}
              </div>
            </div>
          )}
          {project.timeline && (
            <div>
              <div className="text-stone-500 text-sm">Timeline</div>
              <div className="text-stone-900 md:text-lg">
                {project.timeline}
              </div>
            </div>
          )}
        </div>

        {/* Challenge Section */}
        {project.problem && (
          <div className="mt-10 md:mt-16 lg:mt-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
              Challenge
            </h2>
            <p className="text-stone-700 md:text-lg leading-relaxed max-w-4xl">
              {project.problem}
            </p>
          </div>
        )}

        {/* What I Did Section */}
        {project.built && (
          <div className="mt-10 md:mt-16 lg:mt-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
              What I Did
            </h2>
            <p className="text-stone-700 md:text-lg leading-relaxed max-w-4xl">
              {project.built}
            </p>
          </div>
        )}

        {/* Tech Stack Section */}
        {project.tech && project.tech.length > 0 && (
          <div className="mt-10 md:mt-16 lg:mt-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
              Tech Stack
            </h2>
            <ul className="flex flex-wrap gap-2 font-mono telemetry">
              {project.tech.map((tool) => (
                <li
                  key={tool}
                  className="rounded-none border border-stone-300 px-3 py-1 text-sm text-stone-700 md:text-base font-sans"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Images and Videos */}
        <div className="mt-10 md:mt-16 lg:mt-20 space-y-8">
          {safeMedia.map((mediaSrc, index) => {
            const isVideo = isVideoSrc(mediaSrc);
            const isLongForm = isVideo && project.longFormVideo;
            const isLastVideo = index === safeMedia.length - 1 && isLongForm;
            return (
              <div
                key={index}
                className={`relative w-full bg-[#050505] overflow-hidden ${
                  isVideo ? (isLongForm ? "aspect-video" : "aspect-[4/3]") : ""
                }`}
              >
                {isLongForm && project.longFormVideoTitle && isLastVideo && (
                  <h4 className="mb-3 text-sm text-stone-500 uppercase tracking-wider">
                    {project.longFormVideoTitle}
                  </h4>
                )}
                {isVideo ? (
                  isLongForm ? (
                    <video
                      src={mediaSrc}
                      controls
                      playsInline
                      preload="metadata"
                      className="object-contain w-full h-full"
                    />
                   ) : (
                     <div className="relative w-full h-full">
                        <video
                          id={`media-video-${index}`}
                          ref={(el) => {
                            if (el) {
                              videoRefs.current[index] = el;
                            }
                          }}
                          src={mediaSrc}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          autoPlay={effectiveAutoplay}
                          className={`object-cover w-full h-full ${!effectiveAutoplay ? "hidden" : ""}`}
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            const video = videoRefs.current[index];
                            if (video) {
                              if (video.paused) {
                                void video.play();
                              } else {
                                video.pause();
                              }
                            }
                          }}
                          aria-label="Toggle video playback"
                          aria-controls={`media-video-${index}`}
                          aria-pressed={effectiveAutoplay}
                         className="absolute top-2 right-2 p-1.5 rounded bg-black/30 text-white hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 transition-colors duration-200"
                       >
                         {effectiveAutoplay ? (
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5v-15m7.5 7.5L10.5 4.5v15" />
                           </svg>
                         ) : (
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12v8.25l15-4.125V7.375L4.5 3.75v8.25z" />
                           </svg>
                         )}
                       </button>
                     </div>
                   )
                ) : (
                  <Image
                    src={mediaSrc}
                    alt={`${project.name} media ${index + 1}`}
                    className="w-full h-auto"
                    width={1920}
                    height={1080}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Outcome Section */}
        {project.result && project.result.length > 0 && (
          <div className="mt-10 md:mt-16 lg:mt-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8">
              Outcome
            </h2>
            <ul className="space-y-4 max-w-4xl font-mono telemetry">
              {project.result.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-stone-700 md:text-lg"
                >
                  <span className="text-primary text-xl mt-1 flex-shrink-0">
                    •
                  </span>
                  <span className="leading-relaxed font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recent projects (masonry) */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-3xl md:text-5xl max-w-3xl">
            Check out some of my recent projects
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {masonryItems.map((id, idx) => {
              const tone = ["bg-stone-300", "bg-stone-200", "bg-stone-400"][
                idx % 3
              ];
              const projectData = projectsById[id];
              const label = projectData ? projectData.name : id;
              return (
                <Link
                  key={`${id}-${idx}`}
                  href={`/projects/${id}`}
                  onClick={() => handleRelatedClick(id)}
                  className={`relative w-full ${tone} aspect-[4/3] transition-all duration-300 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
                  aria-label={`View ${label}`}
                >
                  <span className="absolute bottom-2 left-2 text-xs text-stone-700/80">
                    {id}
                  </span>
                </Link>
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
                 const projectData = projectsById[id];
                 const label = projectData ? projectData.name : id;
                 return (
                   <Link
                     key={`${id}-bottom-${idx}`}
                     href={`/projects/${id}`}
                     onClick={() => handleRelatedClick(id)}
                     className={`relative w-full ${tone} aspect-[4/3] transition-all duration-300 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
                     aria-label={`View ${label}`}
                   >
                     <span className="absolute bottom-2 left-2 text-xs text-stone-700/80">
                       {id}
                     </span>
                   </Link>
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
          {hasAutoplayVideos && (
            <Button
              variant="primary"
              onClick={toggleAutoplay}
              aria-pressed={autoplayEnabled}
            >
              {prefersReducedMotion
                ? "Reduced motion active"
                : autoplayEnabled
                  ? "Disable Autoplay"
                  : "Enable Autoplay"}
            </Button>
          )}
        </div>

        {/* Loading overlay while switching */}
        {isSwitching && (
          <div
            className="fixed inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center z-50"
            aria-busy="true"
            aria-live="polite"
            role="status"
          >
            <div className="text-stone-900">Loading…</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
