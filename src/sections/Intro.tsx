"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import avatarImage from "@/assets/images/avatar.jpg";

const Intro: FC = () => {
  return (
    <section
      className="min-h-[50vh] md:min-h-[60vh] pt-24 md:pt-32 py-20 md:py-28 flex items-center relative"
      id="intro"
    >
      <div className="container w-full">
        <div className="grid grid-cols-[1fr_1.4fr] md:grid-cols-[1fr_1.85fr] gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div>
            <Image
              src={avatarImage}
              alt="Reymar Mirante portrait"
              className="border border-stone-200 dark:border-stone-800 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Right Column */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-12 md:mt-0 mb-4">
              0 / About
            </p>
            <h2
              className="font-display text-2xl md:text-4xl leading-tight tracking-tight font-bold animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Product thinking, architecture, and execution in one practice.
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-stone-600 dark:text-stone-400 mt-4 max-w-xl animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              I&apos;ve been building since 2019, working across SaaS, internal
              tools, commerce, automation, and business websites. The common
              thread is practical software that makes complicated work easier to
              understand and operate.
            </p>

            <Link href="/about" className="inline-block mt-10 md:mt-12">
              <Button variant="secondary">learn more</Button>
            </Link>
            <Link
              href="/assets/resume.pdf?v=20261003"
              className="inline-block mt-10 md:mt-12"
            >
              <Button variant="secondary">Resume</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
