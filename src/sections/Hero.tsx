"use client";

import { FC } from "react";
import heroImage from "@/assets/images/macbook_type_starbucks_reymar-mirante.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import type { MouseEvent } from "react";

const Hero: FC = () => {
  const handleClickNavItem = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("data-hash");
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 md:pt-0"
      id="hero"
    >
      <div className="grid md:grid-cols-12 md:h-screen items-stretch">
        {/* Left Column */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <p
              className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4 animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              Software Development × AI Automation × Product Thinking
            </p>
            <h1
              className="font-display text-statement mb-4 font-bold animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              I build useful software that makes complex workflows simpler.
            </h1>
            <p
              className="text-lg text-stone-600 dark:text-stone-400 max-w-xl animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              I&apos;m a software developer with a Computer Science background,
              focused on web applications, thoughtful user experiences, and
              AI-powered automation.
            </p>

            <div
              className="flex flex-row items-center mt-10 gap-6 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <Button
                variant="primary"
                data-hash="work"
                onClick={handleClickNavItem}
                  iconAfter={
                    <div className="size-5 overflow-hidden">
                      <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
              >
                View My Work
              </Button>

              <a
                href="https://cal.com/reymarmirante/freelance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="secondary">Let&apos;s Talk</Button>
              </a>
            </div>

            {/* Social Icons & Resume */}
            <div
              className="hidden flex-wrap items-center gap-x-6 gap-y-4 mt-16 md:mt-20 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/transcenddev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="GitHub"
                >
                   <div className="size-10 rounded-none border border-stone-300 dark:border-stone-600 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200">
                    <svg
                      className="size-5 text-stone-600 dark:text-stone-400 group-hover:text-primary transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/reymar-mirante"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="LinkedIn"
                >
                   <div className="size-10 rounded-none border border-stone-300 dark:border-stone-600 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200">
                    <svg
                      className="size-5 text-stone-600 dark:text-stone-400 group-hover:text-primary transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-8 w-px bg-stone-300 dark:bg-stone-700" />

              {/* Resume Link */}
              <a
                href="/assets/resume.pdf?v=20261003"
                download
                aria-label="Download resume (PDF)"
                className="group/resume inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-stone-600 dark:text-stone-400 transition-colors duration-200 hover:text-primary"
              >
                <span>Resume</span>
                <div className="relative size-4 overflow-hidden">
                  <div className="flex h-4 w-8 transition-transform duration-200 group-hover/resume:translate-x-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4 shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4 shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

          {/* Right Column — Portrait */}
          <div className="md:col-span-5 relative">
            <div className="md:absolute md:top-0 md:right-0 md:max-w-[80%] lg:max-w-[85%]">
              <div className="border border-stone-200 dark:border-stone-800 overflow-hidden">
                <Image
                  src={heroImage}
                  alt="Reymar Mirante portrait"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
