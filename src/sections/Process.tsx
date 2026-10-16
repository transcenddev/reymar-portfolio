"use client";

import { FC } from "react";

type ProcessStep = {
  title: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    title: "Understand the workflow",
    description:
      "Map how the work happens today, including manual steps, edge cases, and the decisions that slow people down.",
  },
  {
    title: "Design the system",
    description:
      "Turn the real process into clear flows, permissions, interfaces, and a technical shape that can grow.",
  },
  {
    title: "Build and ship",
    description:
      "Deliver in reviewable stages, test the important journeys, deploy the system, and support the handoff.",
  },
];

const Process: FC = () => {
  return (
    <section className="section" id="process">
      <div className="container">
        {/* Section header */}
        <div className="mb-10 md:mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
            03 / Process
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight font-medium animate-fade-up">
            Understand deeply.
            <br />
            Build only what helps.
          </h2>
        </div>

        {/* Process cards — sharp square grid with hairline borders */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative border border-stone-200 dark:border-stone-800 p-6 md:p-8 transition-colors duration-200"
            >
              {/* Monospace step number in corner */}
              <span
                className="absolute top-4 right-4 font-mono text-xs text-stone-400 dark:text-stone-500"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg md:text-xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-3 transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-stone-600 dark:text-stone-400 transition-colors duration-200">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;