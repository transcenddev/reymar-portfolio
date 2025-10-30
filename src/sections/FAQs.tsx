"use client";

import { AnimatePresence, motion } from "motion/react";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "How long does it take to design and develop a website?",
    answer:
      "Timelines vary depending on complexity, but most projects range from 2 to 6 weeks. I focus on creating clean, functional, and responsive websites that align with your brand and goals.",
  },
  {
    question: "Do you also handle content creation and video editing?",
    answer:
      "Yes — I provide full content support including short-form videos, branded edits, and visuals optimized for social platforms, ensuring your website and marketing campaigns have engaging media.",
  },
  {
    question: "Can you help with brand design and graphics?",
    answer:
      "Absolutely. I create cohesive brand identities including logos, style guides, and marketing assets so your online presence looks professional and consistent.",
  },
  {
    question: "Do you offer digital marketing and personal branding?",
    answer:
      "Yes. I help individuals and businesses build their online presence through strategy, storytelling, and optimized content distribution to grow their audience and authority.",
  },
  {
    question: "How do you use AI and automation in your work?",
    answer:
      "I integrate AI tools and workflow automations to save time, improve efficiency, and enhance creative output — from content generation to task automation.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients worldwide and can adapt to different time zones for smooth communication and collaboration.",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectIndex] = useState<number | null>(null);
  return (
    <section className="section" id="faqs">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16">
          {faqs.map(({ question, answer }, faqIndex) => (
            <div
              key={question}
              className="border-t border-stone-400 dark:border-stone-600 border-dotted py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq transition-colors duration-300"
              onClick={() => {
                if (faqIndex === selectedIndex) {
                  setSelectIndex(null);
                } else {
                  setSelectIndex(faqIndex);
                }
              }}
            >
              <div
                className={twMerge(
                  "absolute h-0 w-full bottom-0 left-0 bg-stone-300 dark:bg-stone-700 -z-10 group-hover/faq:h-full transition-all duration-700",
                  faqIndex === selectedIndex && "h-full"
                )}
              ></div>
              <div
                className={twMerge(
                  "flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8",
                  faqIndex === selectedIndex && "lg:px-8"
                )}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div
                  className={twMerge(
                    "inline-flex items-center justify-center size-11 border border-stone-400 dark:border-stone-600 rounded-full shrink-0 transition-all duration-300 bg-stone-200 dark:bg-stone-800",
                    faqIndex === selectedIndex && "rotate-45"
                  )}
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
                {faqIndex === selectedIndex && (
                  <motion.div
                    className="overflow-hidden lg:px-8 text-stone-700 dark:text-stone-300 transition-colors duration-300"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <p className="text-xl mt-4 ">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* <div className="mt-2 text-gray-600">{answer}</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
