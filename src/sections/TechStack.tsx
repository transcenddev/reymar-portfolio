"use client";

import { FC, useState } from "react";
import {
  broaderToolkit,
  DEFAULT_TOOLKIT_VISIBLE,
  type StackCategory,
  type ToolkitCategory,
  workingStack,
} from "@/data/techStackData";

const slug = (value: string): string =>
  value.toLowerCase().replace(/\s+/g, "-");

/* Tier A (working stack) tags use interactive hover; Tier B (broader toolkit)
   tags are static monochrome badges. Both use sharp 0px corners. */
const TechTag: FC<{ name: string; interactive?: boolean }> = ({
  name,
  interactive = false,
}) => (
  <span
    className={
      interactive
        ? "inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-stone-700 dark:text-stone-300 motion-safe:hover:bg-stone-900/20 dark:motion-safe:hover:bg-stone-100/10 transition-colors duration-200"
        : "group font-mono text-xs uppercase tracking-wider text-neutral-800 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 bg-neutral-50/60 dark:bg-neutral-800/40 px-3 py-1 rounded-none select-none transition-colors duration-200 group-hover:border-neutral-900 dark:group-hover:border-neutral-400 group-hover:bg-neutral-100/70 dark:group-hover:bg-neutral-700/50"
    }
  >
    {name}
  </span>
);

const TechRow: FC<{ category: StackCategory }> = ({ category }) => (
  <div className="grid grid-cols-[130px_1fr] gap-4 py-5 md:grid-cols-[170px_1fr] md:gap-6 md:py-6">
    <dt className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 md:pt-0.5">
      {category.title}
    </dt>
    <dd className="flex flex-wrap gap-1.5">
      {category.items.map((item) => (
        <TechTag
          key={item.name}
          name={item.name}
          interactive
        />
      ))}
    </dd>
  </div>
);

const ToolkitCategoryCard: FC<{ category: ToolkitCategory }> = ({
  category,
}) => {
  const visibleCount = category.visibleCount ?? DEFAULT_TOOLKIT_VISIBLE;
  const [open, setOpen] = useState(false);
  const remaining = category.items.length - visibleCount;
  const hasOverflow = remaining > 0;
  const visibleItems =
    hasOverflow && !open
      ? category.items.slice(0, visibleCount)
      : category.items;
  const id = `toolkit-${slug(category.title)}`;

  return (
    <div className="mb-8">
      <h3 className="font-mono text-[11px] uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3 block">
        {category.title}
      </h3>

      <div
        id={id}
        className="flex flex-wrap gap-2"
      >
        {visibleItems.map((item) => (
          <TechTag key={item.name} name={item.name} />
        ))}
      </div>

      {hasOverflow && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="mt-2.5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors duration-200"
        >
          {open ? "Show less" : `+${remaining} more`}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
            className="size-4"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

const TechStack: FC = () => {
  return (
    <section className="section py-20 md:py-28" id="stack">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_3fr] md:gap-8 lg:gap-12">
          {/* Left column */}
          <div className="sticky top-24">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
              Working Stack
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight font-medium mt-3 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              The tools I use to build useful products.
            </h2>
          </div>

          {/* Right column */}
          <div>
            <dl className="mt-2 border-t border-stone-200 dark:border-stone-800 divide-y divide-stone-200 dark:divide-stone-800">
              {workingStack.map((category) => (
                <TechRow key={category.title} category={category} />
              ))}
            </dl>

            <hr className="my-12 border-stone-200 dark:border-stone-800" />

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 transition-colors duration-200">
                Broader Toolkit
              </p>

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
                {broaderToolkit.map((category) => (
                  <ToolkitCategoryCard
                    key={category.title}
                    category={category}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
