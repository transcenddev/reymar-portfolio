"use client";

import { FC } from "react";

const services: { title: string; description: string }[] = [
  {
    title: "Web Design & Development",
    description:
      "Websites, web applications, landing pages, and business tools built around real needs.",
  },
  {
    title: "AI & Automation",
    description:
      "AI integrations, APIs, and automated workflows that reduce repetitive work.",
  },
  {
    title: "UI/UX Design",
    description:
      "User flows, wireframes, and interfaces designed for clarity and usability.",
  },
  {
    title: "Video Editing",
    description:
      "Short-form content with purposeful pacing, captions, and storytelling.",
  },
  {
    title: "Content Creation & Strategy",
    description:
      "Social content and content planning for creators, personal brands, and businesses.",
  },
];

const Services: FC = () => {
  return (
    <section className="section py-20 md:py-28" id="services">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[2fr_3fr] md:gap-10 lg:gap-12">
          {/* Left column */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 transition-colors duration-200 mb-4">
              02 / Services
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight font-medium animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              From digital problems to practical solutions.
            </h2>
          </div>

          {/* Right column — service index */}
          <ul className="divide-y divide-stone-200 dark:divide-stone-800">
            {services.map((service, index) => (
              <li
                key={service.title}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-4 md:py-6 transition-colors duration-200 hover:bg-stone-900/20 dark:hover:bg-stone-100/10"
              >
                <span className="font-mono text-xs text-stone-400 dark:text-stone-500 group-hover:text-primary transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-lg md:text-xl font-medium text-stone-900 dark:text-stone-100 group-hover:text-primary transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm md:text-base leading-relaxed text-stone-600 dark:text-stone-400">
                    {service.description}
                  </p>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="size-4 md:size-5 shrink-0 text-stone-400 group-hover:text-primary group-hover:translate-x-1 transition-transform duration-200"
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;