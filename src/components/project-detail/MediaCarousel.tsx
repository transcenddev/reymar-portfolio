"use client";

import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const isVideoSrc = (src: string) => /\.(mp4|mov|webm|m4v)$/i.test(src);

type MediaCarouselProps = {
  items: string[];
  bgTheme?: string;
  projectName: string;
  heroAlt?: string;
  effectiveAutoplay: boolean;
  prefersReducedMotion: boolean;
};

const bgClassFor = (bgTheme?: string) => {
  switch (bgTheme) {
    case "white":
      return "bg-white";
    case "dark":
      return "bg-[#050505]";
    case "transparent":
      return "bg-transparent";
    default:
      return "bg-white dark:bg-neutral-950";
  }
};

const MediaCarousel: FC<MediaCarouselProps> = ({
  items,
  bgTheme,
  projectName,
  heroAlt,
  effectiveAutoplay,
  prefersReducedMotion,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const count = items.length;

  useEffect(() => {
    setCurrentIndex(0);
  }, [items]);

  const goTo = useCallback(
    (i: number) => {
      if (count === 0) return;
      setCurrentIndex(((i % count) + count) % count);
    },
    [count],
  );

  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);
  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      )
        return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  useEffect(() => {
    const el = thumbRefs.current[currentIndex];
    if (el) {
      el.scrollIntoView({
        inline: "center",
        block: "nearest",
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  }, [currentIndex, prefersReducedMotion]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) {
      if (dx > 0) prev();
      else next();
    }
  };

  const bgClass = bgClassFor(bgTheme);
  const currentSrc = items[currentIndex];
  const isVideo = !!currentSrc && isVideoSrc(currentSrc);

  if (count === 0) return null;

  return (
    <div className="border border-stone-200 dark:border-stone-800 rounded-none overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
        <span className="size-2 rounded-full bg-stone-300 dark:bg-stone-700" />
        <span className="size-2 rounded-full bg-stone-300 dark:bg-stone-700" />
        <span className="size-2 rounded-full bg-stone-300 dark:bg-stone-700" />
        <span className="ml-3 font-mono text-xs text-stone-500 dark:text-stone-400">
          {currentIndex + 1} / {count}
        </span>
      </div>

      {/* Main canvas */}
      <div
        className={`relative aspect-[16/9] overflow-hidden p-4 sm:p-6 ${bgClass}`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {isVideo ? (
          <video
            key={currentSrc}
            src={currentSrc}
            muted
            loop
            playsInline
            preload="metadata"
            autoPlay={effectiveAutoplay}
            className="w-full h-full object-contain"
            aria-label={`${projectName} demo video`}
          />
        ) : (
          <Image
            key={currentSrc}
            src={currentSrc}
            alt={heroAlt ?? `${projectName} hero`}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        )}
      </div>

      {/* Thumbnail strip */}
      {count > 1 && (
        <div className="flex gap-2 overflow-x-auto p-2 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 scrollbar-thin">
          {items.map((src, i) => {
            const active = i === currentIndex;
            const thumbVideo = isVideoSrc(src);
            return (
              <button
                key={src + i}
                ref={(el) => {
                  thumbRefs.current[i] = el;
                }}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                aria-current={active}
                className={`relative flex-shrink-0 w-20 aspect-[16/9] overflow-hidden border-2 transition-all ${
                  active
                    ? "border-primary opacity-100 scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                {thumbVideo ? (
                  <video
                    src={src}
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                )}
                {thumbVideo && (
                  <span className="absolute inset-0 flex items-center justify-center text-white/80 text-xs pointer-events-none">
                    ▶
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MediaCarousel;
