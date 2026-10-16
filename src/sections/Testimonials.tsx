"use client";

import { FC, useEffect, useRef, useState } from "react";

type TestimonialData = {
  name: string;
  company: string;
  role: string;
  image: string;
  imagePositionY: number;
  linkedin: string;
  quote?: string;
  video?: string;
  videoPoster?: string;
};

const testimonials: TestimonialData[] = [
  {
    name: "Ian (Martin) Madrid",
    company: "S.P. Madrid | OkPo AI",
    role: "CEO & Founder",
    image: "/assets/images/avatar/avatar-ian-madrid.jpg",
    imagePositionY: 0.5,
    linkedin: "https://www.linkedin.com/in/ianmadridph/",
    video: "/assets/videos/testimonials/ian_madrid_testimonial.mp4",
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
  {
    name: "Arleah Grace Grencio",
    company: "S.P. Madrid",
    role: "Project Manager",
    quote:
      "Reymar consistently demonstrated dedication, professionalism, and a strong willingness to learn. He adapted quickly, communicated effectively, and delivered quality work reliably. His positive attitude and eagerness to grow made him easy to work with, and I highly recommend him for future opportunities.",
    image: "/assets/images/avatar/avatar-arleah_grace-grencio.jpg",
    imagePositionY: 0.5,
    linkedin: "https://www.linkedin.com/in/arleah-grace-grencio",
  },
];

// The single video testimonial in the data powers the 9:16 player.
const videoTestimonial =
  testimonials.find((entry) => entry.video) ?? testimonials[0];

// Written feedback list - the video testimonial is featured in the player.
const writtenTestimonials = testimonials.filter((entry) => entry.quote);

const Testimonials: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  // Use Intersection Observer for video play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const handleClickToggleMute = () => setMuted((curr) => !curr);

  return (
    <section className="section transition-colors duration-200" id="feedback">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Section header - first on mobile, top of the right column on desktop */}

          <div className="order-1 lg:col-span-7 lg:col-start-6 lg:row-start-1">
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 transition-colors duration-200">
              Feedback
            </p>
            {/* <h2
              className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mt-3"
              ref={scope}
            >
              Trusted by founders, builders, and teams.
            </h2> */}
          </div>

          {/* Left column - 9:16 vertical video testimonial */}
          <figure className="order-2 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <div className="sticky top-24">
              <div className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden border border-stone-200 bg-stone-900 transition-colors duration-200 md:max-w-[380px] dark:border-stone-800">
                <video
                  ref={videoRef}
                  src={videoTestimonial.video}
                  poster={videoTestimonial.videoPoster}
                  autoPlay
                  muted={muted}
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                  aria-label={`Video testimonial from ${videoTestimonial.name}, ${videoTestimonial.role} at ${videoTestimonial.company}`}
                />
                <button
                  type="button"
                  onClick={handleClickToggleMute}
                  aria-label={
                    muted
                      ? "Unmute video testimonial"
                      : "Mute video testimonial"
                  }
                  aria-pressed={!muted}
                   className="absolute bottom-3 right-3 inline-flex size-9 items-center justify-center rounded-none border border-stone-700/60 bg-stone-950/70 text-stone-300 backdrop-blur-sm transition-colors duration-200 hover:text-white"
                >
                  {muted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 5 6 9H2v6h4l5 4V5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m22 9-6 6"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16 9 6 6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 5 6 9H2v6h4l5 4V5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.54 8.46a5 5 0 0 1 0 7.07"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.07 4.93a10 10 0 0 1 0 14.14"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <figcaption className="mt-3 text-center font-mono text-xs leading-relaxed text-stone-500 dark:text-stone-400 transition-colors duration-200">
                {videoTestimonial.name} - {videoTestimonial.role},{" "}
                {videoTestimonial.company}
              </figcaption>
            </div>
          </figure>

          {/* Written feedback - below the video on mobile, right column on desktop */}
          <ul className="order-3 divide-y divide-stone-200 dark:divide-stone-800 lg:col-span-7 lg:col-start-6 lg:row-start-2 transition-colors duration-200">
            {writtenTestimonials.map((testimonial, index) => (
              <li key={testimonial.name} className="py-6 md:py-8">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs text-stone-400 dark:text-stone-500 transition-colors duration-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-right font-mono text-xs text-stone-500 dark:text-stone-400 transition-colors duration-200">
                    {testimonial.name}, {testimonial.role},{" "}
                    {testimonial.company}
                  </span>
                </div>

                <blockquote className="mt-4 text-base leading-relaxed md:text-lg">
                  <p>{testimonial.quote}</p>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
