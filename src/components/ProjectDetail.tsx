"use client";

import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import TelemetryHero from "@/components/TelemetryHero";
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
      // useState initializer to prevent a hydration flash.
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const effectiveAutoplay = autoplayEnabled && !prefersReducedMotion;

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Derive the first few media items for the Block 4 preview grid
  const previewMedia = useMemo(() => {
    const media = Array.isArray(project.images) ? project.images : [];
    return media.filter(Boolean).slice(0, 3) as string[];
  }, [project.images]);

  // Derive metrics for the Block 1 spec bar
  const metrics = useMemo(() => {
    if (project.heroMetrics && project.heroMetrics.length >= 4) {
      return project.heroMetrics.slice(0, 4);
    }
    // Fallback: synthesize from result array keywords (AgwaSuri-style)
    if (project.result) {
      const r = project.result.join(" ");
      const extracted = [
        { label: "Accuracy", value: r.match(/(\d{2,3}\.\d+%)/)?.[1] ?? "—" },
      ];
      return extracted;
    }
    return [];
  }, [project.heroMetrics, project.result]);

  const hasAutoplayVideos =
    !project.longFormVideo && previewMedia.some(isVideoSrc);

  // Deduplicated related projects
  const related = useMemo(() => {
    const base = project.relatedProjects ?? [];
    if (base.length === 0) return [];
    return Array.from(base);
  }, [project.relatedProjects]);

  // ------------------------------------------------------------------
  // BLOCK 1: Header & Spec Strip
  // ------------------------------------------------------------------
  const BlockHeader = () => (
    <section className="space-y-8">
      {/* Title / category / client / lead */}
      <div className="space-y-4">
        <span className="block font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
          {project.category}
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 max-w-3xl">
          {project.name}
        </h1>
        {project.client && (
          <p className="font-mono text-sm uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
            {project.client}
          </p>
        )}
        <p className="font-sans text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          {project.intro ?? project.tagline}
        </p>
      </div>

      {/* Block 1 hero: live telemetry console for systems-genre projects,
          or a 4-card metric spec bar for all others */}
      {project.hasLiveTelemetry ? (
        <TelemetryHero
          prefersReducedMotion={prefersReducedMotion}
          className="mt-6"
        />
      ) : (
        <div
          className="grid gap-px bg-neutral-200 dark:bg-neutral-800"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
        >
          {metrics.length > 0
            ? metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-white dark:bg-neutral-950 p-6 border border-neutral-200 dark:border-neutral-800"
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                    {m.label}
                  </div>
                  <div className="font-display text-3xl font-bold text-neutral-900 dark:text-neutral-100 tabular-nums">
                    {m.value}
                  </div>
                </div>
              ))
            : Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={`metric-placeholder-${i}`}
                  className="bg-neutral-100/60 dark:bg-neutral-900/30 border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-none p-6 flex flex-col justify-end"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                    [METRIC {i + 1}]
                  </span>
                </div>
              ))}
        </div>
      )}
    </section>
  );

  // ------------------------------------------------------------------
  // BLOCK 2: Field Problem & Stakes
  // ------------------------------------------------------------------
  const BlockProblem = () => (
    <section className="mt-16 md:mt-24 lg:mt-32">
      <div className="grid gap-px bg-neutral-200 dark:bg-neutral-800 md:grid-cols-2">
        {/* Left — operational problem narrative */}
        <div className="bg-white dark:bg-neutral-950 p-6 md:p-8 border border-neutral-200 dark:border-neutral-800">
          <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Field Problem
          </h2>
          {project.problem ? (
            <p className="font-sans text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.problem}
            </p>
          ) : (
            <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-none h-48 flex items-center justify-center">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                [PROBLEM NARRATIVE]
              </span>
            </div>
          )}
        </div>
        {/* Right — stakeholder quote / interview card */}
        <div className="bg-white dark:bg-neutral-950 p-6 md:p-8 border border-neutral-200 dark:border-neutral-800">
          <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Stakeholder Perspective
          </h2>
          {project.stakeholderQuote ? (
            <blockquote className="space-y-3">
              <p className="font-sans text-neutral-700 dark:text-neutral-300 italic leading-relaxed">
                &ldquo;{project.stakeholderQuote.quote}&rdquo;
              </p>
              <footer className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                — {project.stakeholderQuote.attribution}
              </footer>
            </blockquote>
          ) : (
            <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-none h-48 flex items-center justify-center">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                [STAKEHOLDER QUOTE]
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );

  // ------------------------------------------------------------------
  // BLOCK 3: Core Architecture / System Teardown
  // ------------------------------------------------------------------
  const BlockArchitecture = () => (
    <section className="mt-16 md:mt-24 lg:mt-32">
      <div className="grid gap-px bg-neutral-200 dark:bg-neutral-800 md:grid-cols-2">
        {/* Left — physical / frontend tier */}
        <div className="bg-white dark:bg-neutral-950 p-6 md:p-8 border border-neutral-200 dark:border-neutral-800">
          <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {project.architecture?.left.title ?? "Physical Tier"}
          </h2>
          {project.architecture?.left.description ? (
            <p className="font-sans text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.architecture.left.description}
            </p>
          ) : (
            <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-none aspect-[4/3] flex items-center justify-center">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                [HARDWARE / FRONTEND TEARDOWN]
              </span>
            </div>
          )}
        </div>
        {/* Right — engine / backend tier */}
        <div className="bg-white dark:bg-neutral-950 p-6 md:p-8 border border-neutral-200 dark:border-neutral-800">
          <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {project.architecture?.right.title ?? "Engine Tier"}
          </h2>
          {project.architecture?.right.description ? (
            <p className="font-sans text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.architecture.right.description}
            </p>
          ) : (
            <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-none aspect-[4/3] flex items-center justify-center">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                [ARCHITECTURE / PIPELINE]
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );

  // ------------------------------------------------------------------
  // BLOCK 4: Artifact Walkthrough & Verification
  // ------------------------------------------------------------------
  const BlockArtifacts = () => (
    <section className="mt-16 md:mt-24 lg:mt-32">
      {/* 3-column media preview grid */}
      <div
        className="grid gap-px bg-neutral-200 dark:bg-neutral-800 mb-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
      >
        {previewMedia.length > 0
          ? previewMedia.map((src, index) => {
              const isVideo = isVideoSrc(src);
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-950 aspect-[4/3] overflow-hidden border border-neutral-200 dark:border-neutral-800"
                >
                  {isVideo ? (
                    <video
                      id={`artifact-video-${index}`}
                      ref={(el) => {
                        if (el) videoRefs.current[index] = el;
                      }}
                      src={src}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      autoPlay={effectiveAutoplay}
                      className={`w-full h-full object-cover ${!effectiveAutoplay ? "hidden" : ""}`}
                    />
                  ) : (
                    <Image
                      src={src}
                      alt={`${project.name} artifact ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 210px"
                      className="object-cover"
                    />
                  )}
                </div>
              );
            })
          : Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`media-placeholder-${i}`}
                className="bg-neutral-100/60 dark:bg-neutral-900/30 border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-none aspect-[4/3] flex items-center justify-center"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                  [MEDIA {i + 1}]
                </span>
              </div>
            ))}
      </div>

      {/* Outcome verification scorecard */}
      <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 rounded-none">
        <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-100 p-6 md:p-8 border-b border-neutral-200 dark:border-neutral-800">
          Outcome &amp; Verification
        </h2>
        {project.result && project.result.length > 0 ? (
          <ul className="divide-y divide-neutral-200 dark:divide-neutral-800 font-mono">
            {project.result.map((item, i) => (
              <li
                key={i}
                className="p-4 md:p-6 text-sm text-neutral-600 dark:text-neutral-400"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-6 md:p-8 border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-none">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
              [OUTCOME / VERIFICATION SCORECARD]
            </span>
          </div>
        )}
      </div>
    </section>
  );

  return (
    <section className="section">
      <div className="container">
        {/* Block 1: Header & Spec Strip */}
        <BlockHeader />

        {/* Block 2: Field Problem & Stakes */}
        <BlockProblem />

        {/* Block 3: Core Architecture / System Teardown */}
        <BlockArchitecture />

        {/* Block 4: Artifact Walkthrough & Verification */}
        <BlockArtifacts />

        {/* See Also: Related projects */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24 lg:mt-32">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 max-w-2xl mb-8">
              See Also
            </h2>
            <div className="grid gap-px bg-neutral-200 dark:bg-neutral-800 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {related.map((id, idx) => {
                const tone = ["bg-neutral-50", "bg-neutral-100", "bg-neutral-200"][
                  idx % 3
                ];
                const relatedProject = projectsById[id];
                return (
                  <Link
                    key={`${id}-${idx}`}
                    href={`/projects/${id}`}
                    onClick={() => {
                      setIsSwitching(true);
                      onProjectChange(id);
                    }}
                    className={`relative ${tone} dark:bg-neutral-800 aspect-[4/3] transition-all duration-300 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 flex items-end p-4 border border-neutral-200 dark:border-neutral-800`}
                    aria-label={`View ${relatedProject ? relatedProject.name : id}`}
                  >
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                      {relatedProject ? relatedProject.name : id}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Back & Autoplay controls */}
        <div className="mt-16 md:mt-24 flex justify-between items-center">
          <Button variant="secondary" onClick={onBack}>
            See all
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
