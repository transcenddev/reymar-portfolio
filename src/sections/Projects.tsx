"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { additionalWork, projectsById } from "@/data/projects";
import Button from "@/components/Button";

const FEATURED_PROJECT_ID = "agwasuri";

const featuredHighlights = [
  "Real-time monitoring: Solar-backed ESP32 nodes track pH, dissolved oxygen, salinity, and temperature. Detects salinity spikes and hypoxia early, preventing mass fish mortality and reducing financial losses.",
  "Web dashboard: Laravel dashboard with Python service shows live pond data, historical logs, and critical alerts. Helps operators and MAO officers act fast, improve fish survival, and make informed decisions.",
  "Predictive analytics: Decision Tree classifier (93.5% accuracy, 0.001s inference) matches live conditions with SEAFDEC benchmarks. Recommends optimal species, eliminating guesswork and preventing mismatched stocking.",
];

const Projects: FC = () => {
  const featuredProject = projectsById[FEATURED_PROJECT_ID];

  const description = featuredProject.intro
    ? featuredProject.intro.charAt(0).toUpperCase() +
      featuredProject.intro.slice(1)
    : featuredProject.tagline;

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const effectiveAutoplay = !prefersReducedMotion;

  return (
    <section className="pt-0 pb-12 md:pb-16 lg:pb-20" id="work">
      <div className="container">
        <h2 className="my-12 md:mb-16 font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 transition-colors duration-200">
          featured work
        </h2>

        {/* Featured Project */}
        <Link
          href={`/projects/${featuredProject.id}`}
          className="group block mt-5 md:mt-16 lg:mt-10"
        >
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="md:col-span-7">
              {/* <p className="text-sm md:text-base uppercase tracking-wider text-primary font-medium">
                Featured Project
              </p> */}
              <h3 className="font-display text-display uppercase mt-3 font-bold text-balance">
                {featuredProject.name}
              </h3>
              <p className="text-sm md:text-base text-stone-500 dark:text-stone-400 mt-2 transition-colors duration-200">
                {featuredProject.client}
              </p>
              <p className="text-stone-600 dark:text-stone-400 mt-4 leading-relaxed transition-colors duration-200">
                {description}
              </p>

              <ul className="mt-6 space-y-3">
                {featuredHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm md:text-base text-stone-700 dark:text-stone-300 transition-colors duration-200 font-mono telemetry"
                  >
                    <span className="text-stone-900 dark:text-white text-xl mt-1 flex-shrink-0">
                      &#8226;
                    </span>
                    <span className="leading-relaxed font-sans">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed transition-colors duration-200">
                By preventing fish mortality and optimizing species selection,
                Agwasuri boosts productivity, supports sustainable aquaculture,
                and strengthens local livelihoods.
              </p>

              <span className="mt-8 inline-flex items-center gap-2 text-stone-700 dark:text-stone-300 group-hover:text-primary transition-colors duration-200">
                <span>View case study</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-4 md:size-5 shrink-0 group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 7h10v10"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17 17 7"
                  />
                </svg>
              </span>
            </div>

            <div className="md:col-span-5">
              {/* Asymmetric Triptych: Result Hero + Hardware Teardown + Full Dashboard */}
              <div className="space-y-4 md:space-y-6">
                {/* 1. PRIMARY — Dashboard Demo Video (Hero, 16:9) */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-none bg-[#080808] transition-colors duration-200">
                  {effectiveAutoplay ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                      className="w-full h-full object-cover"
                      preload="metadata"
                    >
                      <source
                        src="/assets/videos/works/agwasuri/agwasuri_dashboard_prediction_test_video.mp4"
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                      className="w-full h-full object-cover"
                      preload="metadata"
                    >
                      <source
                        src="/assets/videos/works/agwasuri/agwasuri_dashboard_prediction_test_video.mp4"
                        type="video/mp4"
                      />
                    </video>
                  )}
                </div>

                {/* 2. SPLIT ROW — Hardware Teardown (left) + Full Dashboard (right) */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Hardware Teardown — Tangible Engineering */}
                  <div className="relative aspect-square overflow-hidden transition-colors duration-200">
                    {effectiveAutoplay ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        disablePictureInPicture
                        className="w-full h-full object-cover"
                        poster="/assets/images/works/thesis_agwasuri/agwasuri_prototype_design_colored.png"
                        preload="metadata"
                      >
                        <source
                          src="/assets/videos/works/agwasuri/agwasuri_3d_prototype_blender_edit.mp4"
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        disablePictureInPicture
                        className="w-full h-full object-cover"
                        preload="metadata"
                      >
                        <source
                          src="/assets/videos/works/agwasuri/agwasuri_3d_prototype_blender_edit.mp4"
                          type="video/mp4"
                        />
                      </video>
                    )}
                  </div>

                  {/* Full Dashboard — Software Intelligence */}
                  <div className="relative aspect-square overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 transition-colors duration-200">
                    <Image
                      src="/assets/images/works/agwasuri/agwasuri_prototype_fishpond.jpg"
                      alt="AgwaSuri Laravel dashboard: real-time pH, dissolved oxygen, salinity, temperature charts with decision-tree species recommendation (Bangus, Lapu-lapu, Tilapia, Sugpo, Mudcrab)"
                      fill
                      sizes="(max-width: 768px) 50vw, 210px"
                      className="object-cover transition-opacity duration-300"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Additional Work */}
        <div className="mt-16 border-t border-stone-200 pt-8 transition-colors duration-200 md:mt-20 md:pt-10 lg:mt-24 dark:border-stone-800">
          <h3 className="mb-6 md:mb-8 font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 transition-colors duration-200">
            Additional Work
          </h3>

          <div>
            {additionalWork.map((item) => {
              const rowClassName =
                "group grid grid-cols-1 items-baseline gap-4 border-b border-stone-200 dark:border-stone-800 px-2 py-4 md:py-5 transition-colors duration-200 hover:bg-stone-900/20 md:grid-cols-12 dark:hover:bg-stone-100/10";

              const rowContent = (
                <>
                  <div className="flex items-center justify-between gap-3 md:col-span-4">
                    <span className="text-base font-medium transition-colors duration-200 group-hover:text-primary">
                      {item.title}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="size-3.5 flex-shrink-0 text-stone-400 group-hover:text-primary group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 7h10v10"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17 17 7"
                      />
                    </svg>
                  </div>

                  <div className="md:col-span-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 transition-colors duration-200">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400 transition-colors duration-200 md:col-span-5">
                    {item.summary}
                  </p>
                </>
              );

              return item.external ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={rowClassName}
                >
                  {rowContent}
                </a>
              ) : (
                <Link key={item.id} href={item.href} className={rowClassName}>
                  {rowContent}
                </Link>
              );
            })}
          </div>
        </div>

        {/* More Work Button */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <Link href="/work" className="inline-block">
            <Button variant="secondary">View All Work</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
