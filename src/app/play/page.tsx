"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedSection } from "@/components/AnimatedSection";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import MediaSkeleton from "@/components/MediaSkeleton";

// Video component with loading state
const VideoWithLoading = ({ src, index }: { src: string; index: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      key={index}
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.1 },
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="relative overflow-hidden rounded-none shadow-sm bg-stone-100 dark:bg-stone-800 aspect-[9/16] transition-colors duration-300">
        {!isLoaded && (
          <div className="absolute inset-0">
            <MediaSkeleton aspectRatio="9/16" />
          </div>
        )}
        <motion.video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: isLoaded ? 1 : 0 }}
          onLoadedData={() => setIsLoaded(true)}
          onError={(e) => {
            console.error(`Error loading video: ${src}`, e);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

// Image component with loading state
const ImageWithLoading = ({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      key={index}
      className="relative overflow-hidden rounded-none shadow-sm bg-stone-100 dark:bg-stone-800 transition-colors duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { delay: index * 0.05 },
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        transition: { duration: 0.2 },
      }}
    >
      {!isLoaded && (
        <div className="absolute inset-0">
          <MediaSkeleton aspectRatio="1/1" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        className="w-full h-full object-cover"
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.4s" }}
        loading={index < 3 ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  );
};

export default function PlayPage() {
  return (
    <main className="bg-white dark:bg-stone-950 min-h-screen flex flex-col transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <AnimatedSection className="container mx-auto pt-24 md:pt-32 lg:pt-40 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="font-display text-black dark:text-white font-normal mb-8 transition-colors duration-300"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            My creative <em className="not-italic font-bold">playground</em>
          </h1>
          <p className="text-base md:text-lg text-black/80 dark:text-stone-300 mb-12 transition-colors duration-300">
            Beyond code and design, I explore storytelling through motion, lens,
            and editing-capturing moments, crafting narratives, and
            experimenting with visual media.
          </p>

          <div className="space-y-12">
            {/* Content Creation */}
            <div>
              <h2
                className="font-normal text-black dark:text-white mb-6 uppercase tracking-wide transition-colors duration-300"
                style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
              >
                Content Creation
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {[
                  "snippet_life/intern_behind_the_scenes_videography_reymar.mp4",
                  "snippet_life/day_in_the_life_reymar.mp4",
                  "snippet_life/cs_tips_reymar.mp4",
                  "snippet_life/get_back_track_reymar.mp4",
                  "snippet_life/handstand_with_me_reymar.mp4",
                  "snippet_life/how_to_get_lean_reymar.mp4",
                  "snippet_life/run_fishermen_reymar.mp4",
                  "snippet_life/multiple_interest_reymar.mp4",
                  "snippet_life/shadowboxing_night_rain_bluehour_reymar.mp4",
                  "snippet_life/ccl_anniversary_reymar.mp4",
                  "snippet_life/closure_reymar.mp4",
                  "snippet_life/bgc_museum_reymar.mp4",
                ].map((videoFile, index) => (
                  <VideoWithLoading
                    key={index}
                    src={`/assets/videos/${videoFile}`}
                    index={index}
                  />
                ))}
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.instagram.com/2049rae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm md:text-base"
                >
                  View More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Photography */}
            <div>
              <h2
                className="font-normal text-black dark:text-white mb-6 uppercase tracking-wide transition-colors duration-300"
                style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
              >
                Photography
              </h2>
              <div className="columns-1 sm:columns-2 md:columns-3 gap-6 mb-8">
                {[
                  "/assets/images/play/photography/eyes_combined_kids.jpeg",
                  "/assets/images/play/photography/beach_girl.jpg",
                  "/assets/images/play/photography/forest.jpg",
                  "/assets/images/play/photography/baptism_koa_hold_mom_father_water.jpg",
                  "/assets/images/play/photography/billiard_portrait_lorens.jpg",
                  "/assets/images/play/photography/beach_monochrome_kenjie.jpg",
                  "/assets/images/play/photography/beach_couple_pics.jpg",
                  "/assets/images/play/photography/gym_portrait_reymar_1.jpg",
                ].map((src, index) => (
                  <div key={index} className="break-inside-avoid mb-6">
                    <ImageWithLoading
                      src={src}
                      alt={`Photography ${index + 1}`}
                      index={index}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.instagram.com/2049.rae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm md:text-base"
                >
                  View More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Video Edit - Motion Graphics */}
            <div>
              <h2
                className="font-normal text-black dark:text-white mb-6 uppercase tracking-wide transition-colors duration-300"
                style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
              >
                Video Edit - Motion Graphics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    id: "DKqeyOe7rK4",
                    title: "Motion Graphics Project 1",
                  },
                  {
                    id: "9Dxdr7TG7Cc",
                    title: "Motion Graphics Project 2",
                  },
                  {
                    id: "HKC-_s8uySs",
                    title: "Anime Horimiya",
                  },
                  {
                    id: "uLXnvEShkOY",
                    title: "Anime Howl's Moving Castle",
                  },
                  {
                    id: "umzmjEKNft0",
                    title: "Tamako Love Story",
                  },
                  {
                    id: "UztaNptJkMo",
                    title: "Demon Slayer",
                  },
                ].map((video, index) => (
                  <motion.div
                    key={video.id}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 },
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                      <div className="relative overflow-hidden rounded-none shadow-sm bg-stone-100 dark:bg-stone-800 aspect-video transition-colors duration-300">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <a
                  href="https://www.youtube.com/@2049rae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm md:text-base"
                >
                  View More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Cinematography */}
            <div>
              <h2
                className="font-normal text-black dark:text-white mb-6 uppercase tracking-wide transition-colors duration-300"
                style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
              >
                Cinematography
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    id: "RrilkyhAse8",
                    title: "Baptism",
                  },
                  {
                    id: "g0ZNLAo2wgo",
                    title: "Rainy Day Planting",
                  },
                  {
                    id: "8GCgMlxq1xM",
                    title: "Intramuros",
                  },
                  {
                    id: "7w8STwNeRdE",
                    title: "Dopple Ganger",
                  },
                  {
                    id: "hhZyIM4IXMs",
                    title: "Beach Resort",
                  },
                ].map((video, index) => (
                  <motion.div
                    key={video.id}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 },
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                      <div className="relative overflow-hidden rounded-none shadow-sm bg-stone-100 dark:bg-stone-800 aspect-video transition-colors duration-300">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <a
                  href="https://www.youtube.com/@2049rae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm md:text-base"
                >
                  View More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Painting */}
            <div>
              <h2
                className="font-normal text-black dark:text-white mb-6 uppercase tracking-wide transition-colors duration-300"
                style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
              >
                Painting
              </h2>
              <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
                {[
                  "/assets/images/play/painting/painting_reymar__1",
                  "/assets/images/play/painting/painting_reymar__2",
                  "/assets/images/play/painting/painting_reymar__3",
                  "/assets/images/play/painting/painting_reymar__4",
                  "/assets/images/play/painting/painting_reymar__5",
                  "/assets/images/play/painting/painting_reymar__6",
                  "/assets/images/play/painting/painting_reymar__7",
                  "/assets/images/play/painting/painting_reymar__8",
                  "/assets/images/play/painting/painting_reymar__9",
                ].map((src, index) => (
                  <div key={index} className="break-inside-avoid mb-6">
                    <ImageWithLoading
                      src={src}
                      alt={`Painting ${index + 1}`}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
