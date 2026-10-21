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
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="hidden md:block order-2 md:order-1">
            <Image
              src={avatarImage}
              alt="Reymar Mirante portrait"
              className="border border-stone-200 dark:border-stone-800 object-cover grayscale hover:grayscale-0 transition-all duration-500 w-full max-w-[220px] md:max-w-none"
            />
          </div>

          {/* Right Column */}
          <div className="order-1 md:order-2">
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-12 md:mt-0 mb-4">
              0 / About
            </p>
            <h2
              className="font-display text-2xl md:text-4xl leading-tight tracking-tight font-bold animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              It started with a curiosity about how things work.
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-stone-600 dark:text-stone-400 mt-4 max-w-xl animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              When I was a kid, I was fascinated by technology and how things
              worked. Since we didn&apos;t have a computer at home, I used to
              hang out at computer shops to explore technology and play Dota.
              Things changed when my father gave me a laptop, allowing me to
              explore and learn more on my own.
              <br />
              <br />
              I started exploring hacking, cracking, free internet access, how
              software and websites were built, open-source software, and free
              tools. My uncle also influenced my interest in technology through
              the way he talked about it, making me even more curious at a young
              age.
              <br />
              <br />
              Eventually, I{" "}
              <a
                href="#education"
                className="text-stone-900 dark:text-stone-100 underline underline-offset-4 decoration-stone-400 dark:decoration-stone-600 hover:decoration-stone-900 dark:hover:decoration-stone-100 transition-colors"
              >
                pursued a degree in Computer Science
              </a>
              , completed an internship at{" "}
              <a
                href="https://spmadrid.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 dark:text-stone-100 underline underline-offset-4 decoration-stone-400 dark:decoration-stone-600 hover:decoration-stone-900 dark:hover:decoration-stone-100 transition-colors"
              >
                S.P. Madrid
              </a>{" "}
              in Manila, Philippines, and gained{" "}
              <a
                href="#work"
                className="text-stone-900 dark:text-stone-100 underline underline-offset-4 decoration-stone-400 dark:decoration-stone-600 hover:decoration-stone-900 dark:hover:decoration-stone-100 transition-colors"
              >
                freelance experience
              </a>{" "}
              working with them.
              <br />
              <br />
              Outside of development, I{" "}
              <a
                href="https://reymarmiranteugc.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 dark:text-stone-100 underline underline-offset-4 decoration-stone-400 dark:decoration-stone-600 hover:decoration-stone-900 dark:hover:decoration-stone-100 transition-colors"
              >
                create content
              </a>{" "}
              documenting my journey as I learn, grow, and figure things out
              along the way.
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
