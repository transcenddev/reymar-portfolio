"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";

export default function PlayPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <AnimatedSection className="container mx-auto pt-24 md:pt-32 lg:pt-40 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-black font-normal mb-8"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            My creative <em className="font-serif italic">playground</em>
          </h1>
          <p className="text-base md:text-lg text-black/80 mb-12">
            Beyond code and design, I explore storytelling through motion, lens,
            and editing—capturing moments, crafting narratives, and
            experimenting with visual media.
          </p>

          <div className="space-y-12">
            {/* Content Creation */}
            <div>
              <h2
                className="font-normal text-black mb-6 uppercase tracking-wide"
                style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
              >
                Content Creation
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {[
                  "intern.mp4",
                  "dayinthelife.mp4",
                  "cstips.mp4",
                  "getbacktrack.mp4",
                  "handstandwithme.mp4",
                  "howtogetlean.mp4",
                  "runfishermen.mp4",
                  "multipleinterest.mp4",
                  "shadowboxbluehour.mp4",
                  "cclmeet.mp4",
                  "closure.mp4",
                  "bgcmuseum.mp4",
                ].map((videoFile, index) => (
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
                    <div className="relative overflow-hidden rounded-lg shadow-sm bg-stone-100 aspect-[9/16]">
                      <video
                        src={`/assets/videos/${videoFile}`}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          console.error(`Error loading video: ${videoFile}`, e);
                        }}
                      />
                    </div>
                  </motion.div>
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
                className="font-normal text-black mb-6 uppercase tracking-wide"
                style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
              >
                Photography
              </h2>
              <div className="columns-1 sm:columns-2 md:columns-3 gap-4 mb-8">
                {[
                  "/assets/images/photography/photography/eyes.JPEG",
                  "/assets/images/photography/photography/beach-girl.JPG",
                  "/assets/images/photography/photography/forest1.JPG",
                  "/assets/images/photography/photography/baptism.jpg",
                  "/assets/images/photography/photography/billiard-portraits (3).JPG",
                  "/assets/images/photography/photography/monochrome.JPG",
                  "/assets/images/photography/photography/beach-couple-pics.JPG",
                  "/assets/images/photography/photography/me-gym1.JPG",
                ].map((src, index) => (
                  <motion.div
                    key={index}
                    className="break-inside-avoid mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.05 },
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <motion.div
                      className="relative overflow-hidden rounded-lg shadow-sm bg-stone-100"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Image
                        src={src}
                        alt={`Photography ${index + 1}`}
                        width={800}
                        height={800}
                        className="w-full h-auto object-cover"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    </motion.div>
                  </motion.div>
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
                className="font-normal text-black mb-6 uppercase tracking-wide"
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
                    <div className="relative overflow-hidden rounded-lg shadow-sm bg-stone-100 aspect-video">
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
                className="font-normal text-black mb-6 uppercase tracking-wide"
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
                    <div className="relative overflow-hidden rounded-lg shadow-sm bg-stone-100 aspect-video">
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
                className="font-normal text-black mb-6 uppercase tracking-wide"
                style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
              >
                Painting
              </h2>
              <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
                {[
                  "/assets/images/painting1.jpg",
                  "/assets/images/painting2.jpg",
                  "/assets/images/painting3.jpg",
                  "/assets/images/painting4.jpg",
                  "/assets/images/painting5.jpg",
                  "/assets/images/painting6.jpg",
                  "/assets/images/painting7.jpg",
                  "/assets/images/painting8.jpg",
                  "/assets/images/painting9.jpg",
                ].map((src, index) => (
                  <motion.div
                    key={index}
                    className="break-inside-avoid mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.05 },
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <motion.div
                      className="relative overflow-hidden rounded-lg shadow-sm bg-stone-100"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Image
                        src={src}
                        alt={`Painting ${index + 1}`}
                        width={800}
                        height={800}
                        className="w-full h-auto object-cover"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    </motion.div>
                  </motion.div>
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
