import Image, { StaticImageData } from "next/image";
import { HTMLAttributes, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { usePresence, motion } from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Testimonial = (
  props: {
    quote: string;
    name: string;
    role: string;
    company: string;
    imagePositionY: number;
    image: string | StaticImageData;
    className?: string;
  } & HTMLAttributes<HTMLDivElement>
) => {
  const {
    quote,
    name,
    role,
    company,
    imagePositionY,
    image,
    className,
    ...rest
  } = props;

  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimation,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();
  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimation,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      // Handle entrance animations
      const animate = async () => {
        try {
          if (quoteEntranceAnimation) {
            await quoteEntranceAnimation();
            if (citeEntranceAnimation) {
              await citeEntranceAnimation();
            }
          }
        } catch (error) {
          console.error("Entrance animation error:", error);
        }
      };
      animate();
    } else {
      // Handle exit animations
      const animate = async () => {
        try {
          await Promise.all([
            quoteExitAnimation?.() || Promise.resolve(),
            citeExitAnimation?.() || Promise.resolve(),
          ]);
          safeToRemove?.();
        } catch (error) {
          console.error("Exit animation error:", error);
        }
      };
      animate();
    }
  }, [
    isPresent,
    quoteEntranceAnimation,
    citeEntranceAnimation,
    quoteExitAnimation,
    citeExitAnimation,
    safeToRemove,
  ]);

  return (
    <div
      className={twMerge(
        "md:grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center md:mb-5",
        className
      )}
      {...rest}
    >
      <div className="aspect-square md:aspect-[9/16] col-span-2 relative overflow-hidden">
        {/* Dark overlay animation */}
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-stone-900 z-10"
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        />

        {/* Animate the image container (optional) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="relative z-0 w-full h-full"
        >
          <Image
            src={image}
            alt={name}
            className="object-cover"
            fill
            style={{
              objectPosition: `50% ${imagePositionY * 100}%`,
            }}
          />
        </motion.div>
      </div>

      {/* <div className="aspect-square md:aspect-[9/16] col-span-2 relative">
        <motion.div
          className="absolute h-full bg-stone-900"
          initial={{
            width: "100%",
          }}
          animate={{
            width: 0,
          }}
          exit={{
            width: "100%",
          }}
          transition={{
            duration: 0.5,
          }}
        ></motion.div>

        <Image
          src={image}
          alt={`${name}`}
          className="size-full object-cover"
          style={{
            objectPosition: `50% ${imagePositionY * 100}%`,
          }}
        />
      </div> */}
      <blockquote className="col-span-3">
        <div
          className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0"
          ref={quoteScope}
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>
        <cite
          className="mt-4 md:mt-8 not-italic block md:text-lg lg:text-xl"
          ref={citeScope}
        >
          {name}, {role} at {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default Testimonial;
