import Image, { StaticImageData } from "next/image";
import { HTMLAttributes, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { usePresence, motion } from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

type TestimonialProps = {
  quote?: string;
  name: string;
  role: string;
  company: string;
  imagePositionY: number;
  image: string | StaticImageData;
  linkedin?: string;
  video?: string;
  videoPoster?: string;
  className?: string;
  onPrev?: () => void;
  onNext?: () => void;
} & HTMLAttributes<HTMLDivElement>;

const Testimonial = (props: TestimonialProps) => {
  const {
    quote,
    name,
    role,
    company,
    imagePositionY,
    image,
    linkedin,
    video,
    videoPoster,
    className,
    onPrev,
    onNext,
    ...rest
  } = props;

  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimation,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      const animate = async () => {
        try {
          if (quoteEntranceAnimation) await quoteEntranceAnimation();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error("Entrance animation error:", error);
        }
      };
      animate();
    } else {
      const animate = async () => {
        try {
          await quoteExitAnimation?.();
          safeToRemove?.();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error("Exit animation error:", error);
        }
      };
      animate();
    }
  }, [isPresent, quoteEntranceAnimation, quoteExitAnimation, safeToRemove]);

  return (
    <div className={twMerge("flex flex-col gap-6 md:gap-8", className)} {...rest}>
      {video && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full rounded-xl overflow-hidden">
          <div className="mx-auto md:mx-0">
            <div className="mx-auto w-48 sm:w-64 md:w-80 aspect-[9/16] rounded-xl overflow-hidden">
              <video
                src={video}
                poster={videoPoster}
                controls
                playsInline
                className="w-full h-full object-contain bg-black"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </motion.div>
      )}

      <div className="flex items-center gap-4 order-1 md:order-2">
        <motion.div key={`avatar-${name}`} className="relative shrink-0" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>
          <div className="size-16 md:size-20 lg:size-24 rounded-full overflow-hidden border-2 border-stone-200 dark:border-stone-700 shadow-lg transition-colors duration-300">
            <Image src={image} alt={name} width={96} height={96} className="object-cover w-full h-full" style={{ objectPosition: `50% ${imagePositionY * 100}%` }} priority />
          </div>
        </motion.div>

        <motion.div key={`info-${name}`} className="flex flex-col gap-1 flex-1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-base md:text-lg lg:text-xl text-stone-900 dark:text-stone-100 transition-colors duration-300">{name}</span>
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-primary transition-colors" aria-label={`${name}'s LinkedIn profile`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 md:size-5">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
            )}
          </div>
          <span className="text-xs md:text-sm lg:text-base text-stone-600 dark:text-stone-400 transition-colors duration-300">{role}</span>
          <span className="text-xs md:text-sm lg:text-base text-stone-500 dark:text-stone-500 transition-colors duration-300">{company}</span>
        </motion.div>

        {(onPrev || onNext) && (
          <motion.div key={`nav-${name}`} className="flex gap-3 shrink-0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {onPrev && (
              <button className="border border-stone-400 dark:border-stone-600 size-10 md:size-11 inline-flex items-center justify-center rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" onClick={onPrev} aria-label="Previous testimonial">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 md:size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </button>
            )}
            {onNext && (
              <button className="border border-stone-400 dark:border-stone-600 size-10 md:size-11 inline-flex items-center justify-center rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" onClick={onNext} aria-label="Next testimonial">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 md:size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            )}
          </motion.div>
        )}
      </div>

      {quote && (
        <blockquote className="order-2 md:order-1">
          <div className="text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-stone-700 dark:text-stone-300 transition-colors duration-300" ref={quoteScope}>
            <span className="text-primary text-4xl md:text-5xl lg:text-6xl leading-none">&ldquo;</span>
            {quote}
            <span className="text-primary text-4xl md:text-5xl lg:text-6xl leading-none">&rdquo;</span>
          </div>
        </blockquote>
      )}
    </div>
  );
};

export default Testimonial;
