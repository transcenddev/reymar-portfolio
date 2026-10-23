"use client";

import React, { FC, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import TelemetryHero from "@/components/TelemetryHero";
import FlowDiagram from "@/components/project-detail/FlowDiagram";
import MediaCarousel from "@/components/project-detail/MediaCarousel";
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
  const [activeChapter, setActiveChapter] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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
    const base = arr.filter(Boolean) as string[];
    if (project.cover?.video) return [project.cover.video, ...base];
    if (project.cover?.image) return [project.cover.image, ...base];
    return base;
  }, [project.images, project.cover]);

  const hasAutoplayVideos = !project.longFormVideo && items.some(isVideoSrc);

  // Deduplicated related projects (must exist in projectsById)
  const related = useMemo(() => {
    const base = project.relatedProjects ?? [];
    return Array.from(new Set(base)).filter((id) => projectsById[id]);
  }, [project.relatedProjects]);

  // ----------------------------------------------------------------
  // A. Header (sticky meta rail)
  // ----------------------------------------------------------------
  const renderHeader = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
          {project.name}
        </h1>
        <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
          {project.intro ?? project.tagline}
        </p>
      </div>

      {/* Category / tech pills */}
      <div className="flex flex-wrap gap-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-800 px-2.5 py-1">
          {project.category}
        </span>
        {project.tech?.slice(0, 3).map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-800 px-2.5 py-1"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action links */}
      <div className="flex flex-col gap-2">
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
            Live demo ↗
          </a>
        )}
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
            Source ↗
          </a>
        )}
      </div>
    </div>
  );

  // ----------------------------------------------------------------
  // B. Chapter strip (annotated, interactive)
  // ----------------------------------------------------------------
  const renderChapters = () => {
    const chapters = project.chapters;
    if (!chapters || chapters.length === 0) return null;

    return (
      <div className="flex border-b border-stone-200 dark:border-stone-800">
        {chapters.map((chapter, index) => (
          <button
            key={chapter.id}
            onClick={() => setActiveChapter(index)}
            className={`
              flex-1 px-4 py-3 font-mono text-xs uppercase tracking-wider
              border-b-2 transition-colors
              ${activeChapter === index
                ? "border-primary text-stone-900 dark:text-stone-100"
                : "border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }
            `}
          >
            {chapter.label}
          </button>
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
      <section className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          {project.builtTitle ?? "What I Built"}
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
  // D. Solution (with feature subsections)
  // ----------------------------------------------------------------
  const renderSolution = () => {
    if (!project.solution && !project.features) return null;

    return (
      <section className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          The Solution
        </h2>
        {project.solution && (
          <p className="font-sans text-stone-700 dark:text-stone-300 leading-relaxed max-w-none mb-8">
            {project.solution}
          </p>
        )}
        {project.features &&
          project.features.map((feature, index) => (
            <div
              key={index}
              className="mt-12 md:mt-16 first:mt-0 border-t border-stone-200 dark:border-stone-800 pt-8 md:pt-12"
            >
              <h3 className="font-display text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                {feature.title}
              </h3>
              {feature.lead && (
                <p className="font-sans text-stone-700 dark:text-stone-300 leading-relaxed max-w-none">
                  {feature.lead}
                </p>
              )}
              {feature.media && (
                <div
                  className={`${
                    Array.isArray(feature.media) && feature.media.length === 2
                      ? "my-6 grid grid-cols-1 md:grid-cols-3 gap-6"
                      : "my-6"
                  }`}
                >
                  {(() => {
                    const mediaItems = Array.isArray(feature.media)
                      ? feature.media
                      : [feature.media];
                    const altItems = Array.isArray(feature.mediaAlt)
                      ? feature.mediaAlt
                      : Array(mediaItems.length).fill(feature.mediaAlt ?? "");
                    return mediaItems.map((src, mediaIdx) =>
                      isVideoSrc(src) ? (
                        <video
                          key={mediaIdx}
                          src={src}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          autoPlay={effectiveAutoplay}
                          className="w-full aspect-[16/9] object-contain"
                          aria-label={`${project.name} - ${feature.title}`}
                        />
                      ) : Array.isArray(feature.media) &&
                        feature.media.length === 2 ? (
                        <div
                          key={mediaIdx}
                          className={`relative overflow-hidden ${
                            mediaIdx === 0
                              ? "md:col-span-2 h-auto"
                              : "h-full flex items-center justify-center bg-white dark:bg-white"
                          }`}
                        >
                          <Image
                            src={src}
                            alt={
                              altItems[mediaIdx] ||
                              `${project.name} - ${feature.title}`
                            }
                            width={1200}
                            height={800}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className={
                              mediaIdx === 0
                                ? "w-full h-auto object-cover"
                                : "h-full w-auto object-contain"
                            }
                          />
                        </div>
                      ) : (
                        <div
                          key={mediaIdx}
                          className="relative aspect-[16/9] overflow-hidden bg-white dark:bg-neutral-950"
                        >
                          <Image
                            src={src}
                            alt={
                              altItems[mediaIdx] ||
                              `${project.name} - ${feature.title}`
                            }
                            fill
                            sizes="100vw"
className="object-contain"
                          />
                        </div>
                      ),
                    );
                  })()}
                </div>
              )}
              {feature.diagram && (
                <figure className="my-6">
                  <a
                    href={feature.diagram.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    aria-label={`${feature.diagram.alt} - open full size`}
                  >
                    <div className="overflow-x-auto border border-stone-200 dark:border-stone-800 bg-white">
                      <Image
                        src={feature.diagram.src}
                        alt={feature.diagram.alt}
                        width={feature.diagram.width}
                        height={feature.diagram.height}
                        sizes="(max-width: 768px) 760px, 100vw"
                        className="block h-auto w-full min-w-[760px] md:min-w-0"
                      />
                    </div>
                    <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 transition-colors duration-200 group-hover:text-primary">
                      {feature.diagram.caption ?? "Diagram"}
                      <span aria-hidden="true">↗</span>
                      <span>Open full size</span>
                    </span>
                  </a>
                </figure>
              )}
              {feature.flow && feature.flow.stages.length > 0 && (
                <div className="my-6">
                  <FlowDiagram
                    stages={feature.flow.stages}
                    edgeLabels={feature.flow.edgeLabels}
                  />
                </div>
              )}
              {feature.description && (
                <p className="font-sans text-stone-700 dark:text-stone-300 leading-relaxed max-w-none">
                  {feature.description}
                </p>
              )}
              {feature.table && (
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    {feature.table.headers && (
                      <thead>
                        <tr>
                          {feature.table.headers.map((h, i) => (
                            <th
                              key={i}
                              className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 px-4 py-3 border-b border-stone-200 dark:border-stone-800"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                    )}
                    <tbody>
                      {feature.table.rows.map((row, rowIdx) => (
                        <tr
                          key={rowIdx}
                          className={
                            rowIdx % 2 === 0
                              ? "bg-stone-50 dark:bg-neutral-900"
                              : ""
                          }
                        >
                          {row.map((cell, cellIdx) => (
                            <td
                              key={cellIdx}
                              className={
                                cellIdx === 0
                                  ? "font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 px-4 py-3"
                                  : "font-sans text-stone-700 dark:text-stone-300 px-4 py-3"
                              }
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {feature.note && (
                <p className="mt-6 font-sans text-stone-700 dark:text-stone-300 leading-relaxed max-w-none">
                  {feature.note}
                </p>
              )}
            </div>
          ))}
      </section>
    );
  };

  // ----------------------------------------------------------------
  // E. Results (with metrics table)
  // ----------------------------------------------------------------
  const renderResults = () => {
    if (!project.results && (!project.result || project.result.length === 0))
      return null;

    const hasMetrics =
      project.results?.metrics && project.results.metrics.length > 0;

    return (
      <section className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          Results
        </h2>
        {project.results?.summary && (
          <p className="font-sans text-stone-700 dark:text-stone-300 leading-relaxed max-w-none mb-6">
            {project.results.summary}
          </p>
        )}
        {project.result && project.result.length > 0 && (
          <ul className="space-y-2 mb-6">
            {project.result.map((r, i) => (
              <li key={i} className="font-sans text-stone-700 dark:text-stone-300 leading-relaxed">
                {r}
              </li>
            ))}
          </ul>
        )}
        {hasMetrics && (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 px-4 py-3 border-b border-stone-200 dark:border-stone-800">
                    Metric
                  </th>
                  <th className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 px-4 py-3 border-b border-stone-200 dark:border-stone-800">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {project.results?.metrics.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className={
                      rowIdx % 2 === 0 ? "bg-stone-50 dark:bg-neutral-900" : ""
                    }
                  >
                    <td className="font-mono text-xs text-stone-500 dark:text-stone-400 px-4 py-3">
                      {row[0]}
                    </td>
                    <td className="font-sans text-stone-700 dark:text-stone-300 px-4 py-3">
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    );
  };

  // ----------------------------------------------------------------
  // F. Team & Credits (optional)
  // ----------------------------------------------------------------
  const renderTeam = () => {
    if (!project.team) return null;
    const { researchers, adviser, technicalCritic, institution, role } =
      project.team;

    return (
      <section className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          Team & Credits
        </h2>
        <div className="space-y-4 font-sans text-stone-700 dark:text-stone-300">
          {researchers && researchers.length > 0 && (
            <p>
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Researchers:
              </span>{" "}
              {researchers.join(" · ")}
            </p>
          )}
          {adviser && (
            <p>
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Adviser:
              </span>{" "}
              {adviser}
            </p>
          )}
          {technicalCritic && (
            <p>
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Technical Critic:
              </span>{" "}
              {technicalCritic}
            </p>
          )}
          {institution && (
            <p>
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Institution:
              </span>{" "}
              {institution}
            </p>
          )}
          {role && (
            <p>
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
                My Role:
              </span>{" "}
              {role}
            </p>
          )}
        </div>
      </section>
    );
  };

  // ----------------------------------------------------------------
  // G. Technical Details
  // ----------------------------------------------------------------
  const renderTech = () => {
    if (!project.tech || project.tech.length === 0) return null;

    const groups =
      project.techGroups && project.techGroups.length > 0
        ? project.techGroups
        : [{ title: "Stack", items: project.tech }];

    return (
      <section className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          Technologies used
        </h2>
        <dl className="border-t border-stone-200 dark:border-stone-800 divide-y divide-stone-200 dark:divide-stone-800">
          {groups.map((group) => (
            <div
              key={group.title}
              className="grid grid-cols-[130px_1fr] gap-4 py-5 md:grid-cols-[170px_1fr] md:gap-6 md:py-6"
            >
              <dt className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 md:pt-0.5">
                {group.title}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 bg-neutral-50/60 dark:bg-neutral-800/40 px-3 py-1 rounded-none select-none transition-colors duration-200 hover:border-neutral-900 dark:hover:border-neutral-400 hover:bg-neutral-100/70 dark:hover:bg-neutral-700/50"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    );
  };

  // ----------------------------------------------------------------
  // Optional: Problem
  // ----------------------------------------------------------------
  const renderProblem = () => {
    if (!project.problem) return null;

    return (
      <section className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          The Problem
        </h2>
        <p className="font-sans text-stone-700 dark:text-stone-300 leading-relaxed max-w-none">
          {project.problem}
        </p>
        {project.problemDetail && (
          <p className="mt-4 font-sans text-stone-700 dark:text-stone-300 leading-relaxed max-w-none">
            {project.problemDetail}
          </p>
        )}
        {project.problemQuotes && project.problemQuotes.length > 0 && (
          <div className="mt-10 max-w-none space-y-8">
            {project.problemQuotes.map((quote, index) => (
              <figure
                key={index}
                className="border-l-2 border-primary/40 pl-5 md:pl-6"
              >
                <blockquote className="font-sans text-stone-700 dark:text-stone-300 leading-relaxed">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                {quote.translation && (
                  <p className="mt-2 font-sans italic text-stone-500 dark:text-stone-400 leading-relaxed">
                    &ldquo;{quote.translation}&rdquo;
                  </p>
                )}
                <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  {quote.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>
    );
  };

  // ----------------------------------------------------------------
  // Optional: Architecture
  // ----------------------------------------------------------------
  const renderArchitecture = () => {
    const flow = project.architectureFlow;
    const hasFlow = !!flow && flow.stages.length > 0;
    if (!project.architecture && !hasFlow) return null;

    return (
      <section className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          Architecture
        </h2>

        {hasFlow && flow && (
          <figure className="mb-10 md:mb-14">
            <FlowDiagram
              stages={flow.stages}
              edgeLabels={flow.edgeLabels}
              branches={flow.branches}
            />

            {flow.note && (
              <figcaption className="mt-5 max-w-none font-sans text-sm md:text-base leading-relaxed text-stone-600 dark:text-stone-400">
                {flow.note}
              </figcaption>
            )}
          </figure>
        )}

        {project.architecture && (
          <div className="grid gap-px bg-white dark:bg-neutral-950 md:grid-cols-2">
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
        )}
      </section>
    );
  };

  // ----------------------------------------------------------------
  // H. Navigation & related projects
  // ----------------------------------------------------------------
  const renderNavigation = () => (
    <section className="mt-12 md:mt-16 lg:mt-20 border-t border-stone-200 dark:border-stone-800 pt-8">
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
                      <div className="relative w-20 h-15 flex-shrink-0 overflow-hidden bg-white dark:bg-neutral-950">
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
        {hasAutoplayVideos && !prefersReducedMotion && (
          <Button
            variant="primary"
            onClick={() => setAutoplayEnabled((v) => !v)}
            aria-pressed={autoplayEnabled}
            suppressHydrationWarning
          >
            {autoplayEnabled ? "Disable autoplay" : "Enable autoplay"}
          </Button>
        )}
      </div>
    </section>
  );

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* A. Left — Sticky Meta Rail */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 self-start space-y-8">
              {renderHeader()}
            </div>
          </aside>

          {/* B. Right — Media & Deep Dive */}
          <main className="lg:col-span-8 space-y-12">
            {/* B1. Media Showcase */}
            {project.hasLiveTelemetry && (
              <TelemetryHero
                prefersReducedMotion={prefersReducedMotion}
                className="my-6"
              />
            )}
            {items.length > 0 && (
              <MediaCarousel
                items={items}
                bgTheme={project.bgTheme}
                projectName={project.name}
                heroAlt={project.heroAlt}
                effectiveAutoplay={effectiveAutoplay}
                prefersReducedMotion={prefersReducedMotion}
              />
            )}
            {renderChapters()}

            {/* B2. Content Sections */}
            {renderBuilt()}
            {renderProblem()}
            {renderSolution()}
            {renderArchitecture()}
            {renderResults()}
            {renderTeam()}
            {renderTech()}
            {renderNavigation()}
          </main>
        </div>

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
