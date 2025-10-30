"use client";

import { useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Intro: FC = () => {
  const sectionRef = useRef<HTMLElement>(null); // this tracks section
  const { scope, entranceAnimation } = useTextRevealAnimation();

  // Use sectionRef for scroll tracking
  const inView = useInView(sectionRef, {
    once: true,
    margin: "-20% 0px", // Optional: triggers a bit earlier
  });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
    <section
      className="min-h-screen flex items-center"
      id="intro"
      ref={sectionRef}
    >
      <div className="container w-full">
        <div className="grid md:grid-cols-[65%_35%] gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left Column - Main Heading */}
          <div>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight"
              ref={scope}
            >
              Helping brands to stand out in the digital era. Together we will
              set the new status quo. No nonsense, always on the cutting edge.
            </h2>
          </div>

          {/* Right Column - Description & Button */}
          <div className="flex flex-col max-w-[200px] md:max-w-[240px]">
            <p className="text-xs md:text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              The combination of my passion for design, code & interaction
              positions me in a unique place in the web design world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
