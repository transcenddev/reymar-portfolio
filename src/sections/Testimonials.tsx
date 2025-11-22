"use client";

import { FC, useRef, useState } from "react";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import Testimonial from "@/components/Testimonial";

const testimonials = [
  {
    name: "Ian (Martin) Madrid",
    company: "S.P. Madrid | OkPo AI",
    role: "CEO & Founder",
    image: "/assets/images/avatar/avatar-ian-madrid.jpg",
    imagePositionY: 0.5,
    linkedin: "https://www.linkedin.com/in/ianmadridph/",
    video: "/assets/videos/ianmadrid-testimonial.mp4",
    videoPoster: "/assets/images/avatar/avatar-ian-madrid.jpg",
  },
  {
    name: "Ryan Buan",
    company: "OkPo AI",
    role: "Tech Lead & AI Product Builder",
    quote:
      "He excelled at integrating AI tools into his design process, consistently producing innovative and user-friendly solutions. His dedication was truly impressive; for example, he once stayed with the team until 2 a.m. to ensure a project was completed flawlessly.",
    image: "/assets/images/avatar/avatar-ryan-buan.jpg",
    imagePositionY: 0.5,
    linkedin: "https://www.linkedin.com/in/ryan-buan-bbb605185/",
  },
  {
    name: "Jonathan Alvarez",
    company: "S.P. Madrid",
    role: "Head of Product",
    quote:
      "Reymar is one of those rare young professionals who pair remarkable discipline with an insatiable curiosity to learn. I've never once heard him complain about any project assigned to him. He simply dives in, determined to understand every detail so he can deliver quality work on time. Whether it's mastering a new skill, collaborating with the team, or producing both creative and technical outputs, his commitment is unwavering.",
    image: "/assets/images/avatar/avatar-jonathan-alvarez.jpg",
    imagePositionY: 0.5,
    linkedin: "https://www.linkedin.com/in/jonathan-alvarez-b2bba8175/",
  },
  {
    name: "Julius Tuliao",
    company: "Texxen",
    role: "Technical Lead",
    quote:
      "Consistently demonstrated dedication by willingly working overtime to meet project deadlines. He remains focused even in challenging situations.",
    image: "/assets/images/avatar/avatar-julius-tuliao.jpg",
    imagePositionY: 0.5,
    linkedin: "https://www.linkedin.com/in/juliustuliao/",
  },
];

const Testimonials: FC = () => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleClickPrev = () => {
    setTestimonialIndex((curr) => {
      if (curr === 0) {
        return testimonials.length - 1;
      }
      return curr - 1;
    });
  };

  const handleClickNext = () => {
    setTestimonialIndex((curr) => {
      if (curr === testimonials.length - 1) return 0;
      return curr + 1;
    });
  };

  return (
    <section
      className="section bg-stone-50 dark:bg-stone-900 transition-colors duration-300"
      id="testimonials"
    >
      <h2
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden tracking-tighter"
        ref={titleRef}
      >
        <motion.span
          className="whitespace-nowrap"
          style={{
            x: transformTop,
          }}
        >
          Some nice words from my past clients
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-primary"
          style={{
            x: transformBottom,
          }}
        >
          Some nice words from my past clients
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-12 md:mt-20 max-w-4xl mx-auto">
          <AnimatePresence mode="wait" initial={false}>
            <Testimonial
              key={testimonials[testimonialIndex].name}
              {...testimonials[testimonialIndex]}
              onPrev={handleClickPrev}
              onNext={handleClickNext}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
