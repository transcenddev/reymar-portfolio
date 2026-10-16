"use client";

import { FC } from "react";

const faqs = [
  {
    question: "How long does it take to design and develop a website?",
    answer:
      "Timelines vary depending on complexity, but most projects range from 2 to 6 weeks. I focus on creating clean, functional, and responsive websites that align with your brand and goals.",
  },
  {
    question: "Do you also handle content creation and video editing?",
    answer:
      "Yes - I provide full content support including short-form videos, branded edits, and visuals optimized for social platforms, ensuring your website and marketing campaigns have engaging media.",
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
      "I integrate AI tools and workflow automations to save time, improve efficiency, and enhance creative output - from content generation to task automation.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients worldwide and can adapt to different time zones for smooth communication and collaboration.",
  },
];

const FAQs: FC = () => {
  return (
    <section className="section" id="faqs">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl animate-fade-up">
          FAQs
        </h2>
        <div className="mt-10 md:mt-16">
          {faqs.map(({ question, answer }) => {
            return (
              <details
                key={question}
                className="border-t border-dotted border-stone-400 dark:border-stone-600 group/faq last:border-b transition-colors duration-200"
              >
                <summary className="cursor-pointer list-none py-6 md:py-8 lg:py-10 flex items-center justify-between gap-4 transition-all duration-200 [&[open]:_svg]:rotate-45">
                  <span className="text-2xl md:text-3xl lg:text-4xl flex-1">
                    {question}
                  </span>
                  <span className="inline-flex items-center justify-center size-11 border border-stone-400 dark:border-stone-600 rounded-none shrink-0 bg-stone-200 dark:bg-stone-800 transition-colors duration-200 group-hover/faq:border-primary">
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
                  </span>
                </summary>
                <div className="overflow-hidden transition-all duration-200">
                  <p className="text-xl md:text-2xl text-stone-700 dark:text-stone-300 pb-6 md:pb-8 lg:pb-10">
                    {answer}
                  </p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;