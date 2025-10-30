"use client";

import { FC, useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const services: { title: string; subtitle: string }[] = [
  {
    title: "Web Design & Development",
    subtitle:
      "Modern, fast, responsive websites built with clean code and a focus on conversions.",
  },
  {
    title: "Content Creation & Video Editing",
    subtitle:
      "Short-form and long-form content that engages your audience across platforms.",
  },
  {
    title: "Graphic & Brand Design",
    subtitle:
      "Visual identity systems, brand guidelines, and assets that look sharp everywhere.",
  },
  {
    title: "Digital Marketing & Personal Branding",
    subtitle:
      "Positioning, messaging, and campaigns that build trust and grow your audience.",
  },
  {
    title: "AI & Automation",
    subtitle:
      "Workflows and tools that save time, reduce costs, and scale your operations.",
  },
];

const Services: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { scope, entranceAnimation } = useTextRevealAnimation();

  useEffect(() => {
    if (inView) entranceAnimation();
  }, [inView, entranceAnimation]);

  return (
    <section className="section" id="services" ref={sectionRef}>
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl" ref={scope}>
          I can help you with...
        </h2>

        <div className="mt-8 md:mt-12 lg:mt-16">
          <div className="text-2xl md:text-3xl lg:text-4xl text-stone-900 dark:text-stone-100 transition-colors duration-300">
            {services.map(({ title, subtitle }, idx) => (
              <div
                key={title}
                className="border-t last:border-b border-stone-400 dark:border-stone-600 border-dotted py-6 md:py-8 lg:py-10 relative isolate group/service transition-colors duration-300"
                onClick={() =>
                  setSelectedIndex((prev) => (prev === idx ? null : idx))
                }
              >
                {/* hover background like FAQs */}
                <div
                  className={`absolute w-full bottom-0 left-0 bg-stone-300 dark:bg-stone-700 -z-10 transition-all duration-700 ${
                    selectedIndex === idx
                      ? "h-full"
                      : "h-0 group-hover/service:h-full"
                  }`}
                ></div>
                <div
                  className={`flex items-center justify-between gap-4 transition-all duration-700 group-hover/service:lg:px-8 ${
                    selectedIndex === idx ? "lg:px-8" : ""
                  }`}
                >
                  <div className="group-hover/service:pl-4 transition-all duration-700">
                    {title}
                  </div>
                  <div
                    className={`inline-flex items-center justify-center size-11 border border-stone-400 dark:border-stone-600 rounded-full shrink-0 transition-all duration-300 bg-stone-200 dark:bg-stone-800 ${
                      selectedIndex === idx
                        ? "rotate-45"
                        : "group-hover/service:rotate-45"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                </div>
                <AnimatePresence>
                  {selectedIndex === idx && (
                    <motion.div
                      className="overflow-hidden lg:px-8 text-stone-700 dark:text-stone-300 transition-colors duration-300"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      <p className="text-xl mt-4">{subtitle}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
