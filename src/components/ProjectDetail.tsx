"use client";

import React, { FC, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import TelemetryHero from "@/components/TelemetryHero";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";
import { projectsById, type Project } from "@/data/projects";

const isVideoSrc = (src: string) => /\.(mp4|mov|webm|m4v)$/i.test(src);

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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => {
      // Runtime changes only — initial state is already sourced from the
      // useState initializer to prevent a hydration flash.
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const effectiveAutoplay = autoplayEnabled && !prefersReducedMotion;

  const items = useMemo(() => {
    const arr = Array.isArray(project.images) ? project.images : [];
    return arr.filter(Boolean) as string[];
  }, [project.images]);

  const hasAutoplayVideos = !project.longFormVideo && items.some(isVideoSrc);

  // Deduplicated related projects (must exist in projectsById)
  const related = useMemo(() => {
    const base = project.relatedProjects ?? [];
    return Array.from(new Set(base)).filter((id) => projectsById[id]);
  }, [project.relatedProjects]);

  // ----------------------------------------------------------------
  // A. Header
  // ----------------------------------------------------------------
  const renderHeader = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <span className="block font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
          {project.category}
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 max-w-3xl">
          {project.name}
        </h1>
        {project.client && (
          <p className="font-mono text-sm uppercase tracking-widest text-stone-600 dark:text-stone-400">
            {project.client}
          </p>
        )}
        <p className="font-sans text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
          {project.intro ?? project.tagline}
        </p>
      </div>

      {/* External links — only when URLs exist */}
      {(project.githubUrl || project.liveUrl) && (
        <div className="flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-stone-700 dark:text-stone-300 hover:text-primary transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 group-hover:translate-x-0.5 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m-3-3l3 3m0 0L12 12m3 3l-3 3"
                />
              </svg>
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-stone-700 dark:text-stone-300 hover:text-primary transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 group-hover:translate-x-0.5 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25a2.25 2.25 0 00-2.25 2.25v12.5A2.25 2.25 0 005.25 23h13.5A2.25 2.25 0 0021 20.75V9a2.25 2.25 0 00-2.25-2.25H13.5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6l3-3m0 0v8.25M16.5 3l-3 3"
                />
              </svg>
              Live demo
            </a>
          )}
        </div>
      )}
    </section>
  );

  // ----------------------------------------------------------------
  // B. Hero media (telemetry or image/video)
  // ----------------------------------------------------------------
  const renderHeroMedia = () => {
    if (project.hasLiveTelemetry) {
      return (
        <TelemetryHero
          prefersReducedMotion={prefersReducedMotion}
          className="my-6"
        />
      );
    }

    if (!items.length) return null;
    const mediaHero = items[0];

    // DEBUG: log what we're rendering
    console.log("[DEBUG ProjectDetail] renderHeroMedia", {
      projectId: project.id,
      hasLiveTelemetry: project.hasLiveTelemetry,
      longFormVideo: project.longFormVideo,
      mediaHero,
      videoChapters: project.videoChapters?.length,
      heroImage: project.heroImage,
    });

    return (
      <div className="relative aspect-[16/9] overflow-hidden bg-stone-200 dark:bg-stone-800 rounded-none mt-6">
        {isVideoSrc(mediaHero) ? (
          project.longFormVideo ? (
            <CustomVideoPlayer
              src={mediaHero}
              title={project.longFormVideoTitle ?? `${project.name} video`}
              chapters={project.videoChapters}
              poster={project.heroImage}
              className="w-full h-full"
            />
          ) : (
            <video
              src={mediaHero}
              muted
              loop
              playsInline
              preload="metadata"
              autoPlay={effectiveAutoplay}
              className="w-full h-full object-cover"
              aria-label={`${project.name} demo video`}
            />
          )
        ) : (
          <Image
            src={mediaHero}
            alt={project.heroAlt ?? `${project.name} hero`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        )}
      </div>
    );
  };

  // ----------------------------------------------------------------
  // B. Gallery grid
  // ----------------------------------------------------------------
  const renderGallery = () => {
    const galleryItems = items.slice(1);
    if (galleryItems.length === 0) return null;

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-stone-200 dark:bg-stone-800 mt-4 md:mt-6">
        {galleryItems.map((src, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] bg-stone-200 dark:bg-stone-800 overflow-hidden"
          >
            {isVideoSrc(src) ? (
              <video
                src={src}
                muted
                loop
                playsInline
                preload="metadata"
                autoPlay={effectiveAutoplay}
                className="w-full h-full object-cover"
                aria-label={`${project.name} footage ${index + 2}`}
              />
            ) : (
              <Image
                src={src}
                alt={
                  project.galleryAlts?.[index] ??
                  `${project.name} screenshot ${index + 2}`
                }
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  // ----------------------------------------------------------------
  // C. What I Built
  // ----------------------------------------------------------------
  const renderBuilt = () => {
    if (!project.built) return null;

    return (
      <section className="mt-16 md:mt-24 lg:mt-32">
        <span className="block font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
          What I Built
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          {project.builtTitle ?? "Implementation"}
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          {project.built.split("\n\n").map((paragraph: string, i: number) => (
            <p
              key={i}
              className="font-sans text-stone-700 dark:text-stone-300 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    );
  };

  // ----------------------------------------------------------------
  // D. Outcome
  // ----------------------------------------------------------------
  const renderOutcome = () => {
    if (!project.result || project.result.length === 0) return null;

    return (
      <section className="mt-16 md:mt-24 lg:mt-32">
        <span className="block font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
          Outcome
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          Verified results & deliverables
        </h2>
        <ul className="space-y-3 font-mono">
          {project.result.map((item, i) => (
            <li key={i} className="text-stone-700 dark:text-stone-300 text-sm">
              <span className="text-primary mr-3" aria-hidden="true">
                ↳
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  };

  // ----------------------------------------------------------------
  // E. Technical Details
  // ----------------------------------------------------------------
  const renderTech = () => {
    if (!project.tech || project.tech.length === 0) return null;

    const mid = Math.ceil(project.tech.length / 2);
    const columns = [project.tech.slice(0, mid), project.tech.slice(mid)];

    return (
      <section className="mt-16 md:mt-24 lg:mt-32">
        <span className="block font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
          Technical Details
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          Technologies used
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 font-mono">
          {columns.map((col, colIdx) => (
            <ul key={colIdx} className="space-y-2">
              {col.map((tech) => (
                <li
                  key={tech}
                  className="text-stone-700 dark:text-stone-300 text-sm"
                >
                  <span className="text-primary mr-3" aria-hidden="true">
                    ·
                  </span>
                  {tech}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>
    );
  };

  // ----------------------------------------------------------------
  // Optional: Problem
  // ----------------------------------------------------------------
  const renderProblem = () => {
    if (!project.problem) return null;

    return (
      <section className="mt-16 md:mt-24 lg:mt-32">
        <span className="block font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
          The Problem
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          Context & stakes
        </h2>
        <p className="font-sans text-stone-700 dark:text-stone-300 leading-relaxed max-w-3xl">
          {project.problem}
        </p>
      </section>
    );
  };

  // ----------------------------------------------------------------
  // Optional: Architecture
  // ----------------------------------------------------------------
  const renderArchitecture = () => {
    if (!project.architecture) return null;

    return (
      <section className="mt-16 md:mt-24 lg:mt-32">
        <span className="block font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
          Architecture
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          System design overview
        </h2>
        <div className="grid gap-px bg-stone-200 dark:bg-stone-800 md:grid-cols-2">
          <div className="bg-white dark:bg-neutral-950 p-6 md:p-8 border border-stone-200 dark:border-stone-800">
            <h3 className="font-display text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              {project.architecture.left.title}
            </h3>
            <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
              {project.architecture.left.description}
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-950 p-6 md:p-8 border border-stone-200 dark:border-stone-800">
            <h3 className="font-display text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              {project.architecture.right.title}
            </h3>
            <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
              {project.architecture.right.description}
            </p>
          </div>
        </div>
      </section>
    );
  };

  // ----------------------------------------------------------------
  // F. Navigation & related projects
  // ----------------------------------------------------------------
  const renderNavigation = () => (
    <section className="mt-16 md:mt-24 lg:mt-32 border-t border-stone-200 dark:border-stone-800 pt-8">
      {/* Related projects — only when available */}
      {related.length > 0 && (
        <div className="mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
            Related projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {related.map((relatedId) => {
              const rp = projectsById[relatedId];
              return (
                <Link
                  key={relatedId}
                  href={`/projects/${relatedId}`}
                  onClick={() => {
                    setIsSwitching(true);
                    onProjectChange(relatedId);
                  }}
                  className="group block p-4 border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-neutral-900 transition-colors"
                  aria-label={`View ${rp ? rp.name : relatedId}`}
                >
                  <div className="flex items-start gap-4">
                    {rp?.image && (
                      <div className="relative w-20 h-15 flex-shrink-0 overflow-hidden bg-stone-200 dark:bg-stone-800">
                        <Image
                          src={rp.image}
                          alt={rp.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="space-y-1">
                      <span className="block font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
                        {rp?.category}
                      </span>
                      <h3 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-primary transition-colors">
                        {rp ? rp.name : relatedId}
                      </h3>
                      <p className="font-sans text-sm text-stone-600 dark:text-stone-400 line-clamp-2">
                        {rp ? rp.tagline : ""}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Back to work + Autoplay controls */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <Button variant="secondary" onClick={onBack}>
          See all projects
        </Button>
        {hasAutoplayVideos && (
          <Button
            variant="primary"
            onClick={() => setAutoplayEnabled((v) => !v)}
            aria-pressed={autoplayEnabled}
          >
            {prefersReducedMotion
              ? "Reduced motion active"
              : autoplayEnabled
                ? "Disable autoplay"
                : "Enable autoplay"}
          </Button>
        )}
      </div>
    </section>
  );

  return (
    <section className="section">
      <div className="container">
        {/* A. Header */}
        {renderHeader()}

        {/* B. Visuals (telemetry or media) */}
        {renderHeroMedia()}
        {renderGallery()}

        {/* C. What I Built */}
        {renderBuilt()}

        {/* Optional: The Problem */}
        {renderProblem()}

        {/* Optional: Architecture */}
        {renderArchitecture()}

        {/* D. Outcome */}
        {renderOutcome()}

        {/* E. Technical Details */}
        {renderTech()}

        {/* F. Navigation */}
        {renderNavigation()}

        {/* Loading overlay while switching projects */}
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
