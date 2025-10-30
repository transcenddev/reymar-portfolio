"use client";

import { useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import Link from "next/link";

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
      className="min-h-[50vh] md:min-h-[60vh] flex items-center relative"
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

          {/* Right Column - Description */}
          <div className="flex flex-col max-w-[200px] md:max-w-[240px]">
            <p className="text-xs md:text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              The combination of my passion for design, code & interaction
              positions me in a unique place in the web design world.
            </p>
          </div>
        </div>
      </div>

      {/* About Me Button - Bridge between intro and projects, aligned with Recent Work */}
      <Link
        href="/about"
        className="group absolute 
          right-[18%] md:right-[20%] lg:right-[22%]         // Horizontal: increase = move left, decrease = move right
          -bottom-6 md:-bottom-8 lg:-bottom-10              // Vertical: increase = move up, decrease = move down
          size-32 md:size-36 lg:size-40                     // Size: 32=128px, 36=144px, 40=160px
          rounded-full bg-stone-900 dark:bg-stone-100 
          flex items-center justify-center 
          transition-all duration-700 ease-out
          hover:scale-[1.15] hover:-rotate-6 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]
          hover:bg-primary hover:ring-4 hover:ring-primary/20
          active:scale-95
          z-10"
        onClick={(e) => {
          e.preventDefault();
          const aboutSection = document.querySelector("#about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <span
          className="text-white dark:text-stone-900 font-medium text-sm md:text-base 
          transition-all duration-500 
          group-hover:scale-110 group-hover:tracking-wider
          group-active:scale-90"
        >
          About me
        </span>
      </Link>
    </section>
  );
};

export default Intro;
