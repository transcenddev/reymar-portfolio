"use client";

import React, { FC } from "react";

export type FlowStage = { title: string; detail?: string };
export type FlowBranch = {
  at: number;
  title: string;
  detail?: string;
  dashed?: boolean;
};

export const FlowDiagram: FC<{
  stages: FlowStage[];
  edgeLabels?: Array<string | null>;
  branches?: FlowBranch[];
}> = ({ stages, edgeLabels, branches }) => (
  <ol
    aria-label="Flow diagram"
    className="flex flex-col gap-3 md:flex-row md:items-start md:gap-0"
  >
    {stages.map((stage, index) => {
      const branch = branches?.find((b) => b.at === index);
      const edgeLabel = edgeLabels?.[index];
      const isLast = index === stages.length - 1;

      return (
        <li
          key={index}
          className="flex flex-col md:min-w-0 md:flex-1 md:flex-row md:items-start"
        >
          <div className="flex flex-col md:min-w-0 md:flex-1">
            <div
              className={`border bg-stone-50 dark:bg-neutral-900 px-3 py-2 ${
                isLast
                  ? "border-primary"
                  : "border-stone-300 dark:border-stone-700"
              }`}
            >
              <span className="block font-mono text-[11px] uppercase tracking-widest text-stone-900 dark:text-stone-100">
                {stage.title}
              </span>
              {stage.detail && (
                <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  {stage.detail}
                </span>
              )}
            </div>

            {branch && (
              <div className="mt-2 flex items-start gap-1.5 pl-2">
                <span
                  aria-hidden="true"
                  className={`h-4 border-l border-stone-300 dark:border-stone-700 ${
                    branch.dashed ? "border-dashed" : ""
                  }`}
                />
                <span
                  className={`border px-2 py-1 font-mono text-[10px] uppercase tracking-wider ${
                    branch.dashed
                      ? "border-dashed border-stone-400 dark:border-stone-600 text-stone-500 dark:text-stone-400"
                      : "border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-300"
                  }`}
                >
                  {branch.detail
                    ? `${branch.title} · ${branch.detail}`
                    : branch.title}
                </span>
              </div>
            )}
          </div>

          {!isLast && (
            <div className="flex items-center justify-center py-1 md:flex-col md:justify-start md:px-1.5 md:pt-2.5">
              {edgeLabel && (
                <span className="mr-2 font-mono text-[9px] uppercase tracking-wider text-stone-400 dark:text-stone-500 md:mr-0 md:mb-0.5">
                  {edgeLabel}
                </span>
              )}
              <span
                aria-hidden="true"
                className="text-sm leading-none text-stone-400 dark:text-stone-600"
              >
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </span>
            </div>
          )}
        </li>
      );
    })}
  </ol>
);

export default FlowDiagram;
