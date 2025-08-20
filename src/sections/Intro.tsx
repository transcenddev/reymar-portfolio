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
      className="section mt-12 md:mt-16 lg:mt-20"
      id="intro"
      ref={sectionRef} // track visibility
    >
      <div className="container">
        <h2
          // className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]"
          // ref={scope} 
          className="text-2xl md:text-5xl lg:text-7xl lg:w-[80%] leading-tight max-w-4xl"
    ref={scope}
        >
          {/* Building beautiful websites with clean code and thoughtful design to
          help your business grow and stand out online */}

          I help people through strategic digital solutions — building websites that convert, content that engages, brands that resonate, and AI automation that optimizes processes, saves time & reduces costs.
        </h2>
      </div>
    </section>
  );
};

export default Intro;
