"use client";

import React from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import { motion } from "framer-motion";

// Placeholder images/videos
const photos = [
  "/assets/images/project-1.jpg",
  "/assets/images/project-2.jpg",
  "/assets/images/project-3.jpg",
  "/assets/images/project-4.jpg",
  "/assets/images/project-5.jpg",
];
const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
];
const paintings = [
  "/assets/images/testimonial-1.jpg",
  "/assets/images/testimonial-2.jpg",
  "/assets/images/testimonial-3.jpg",
];
const edits = ["/assets/images/project-1.jpg", "/assets/images/project-2.jpg"];

const MasonryGrid = ({ items }: { items: string[] }) => (
  <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 w-full">
    {items.map((src, i) => (
      <motion.img
        key={i}
        src={src}
        alt="Photo"
        className="mb-4 w-full rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      />
    ))}
  </div>
);

const VideoGrid = ({ items }: { items: string[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((src, i) => (
      <motion.div
        key={i}
        className="aspect-video overflow-hidden rounded-lg shadow-lg bg-black"
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <iframe
          src={src}
          title={`Video ${i}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </motion.div>
    ))}
  </div>
);

const CardGrid = ({ items, label }: { items: string[]; label: string }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((src, i) => (
      <motion.div
        key={i}
        className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-4 flex flex-col items-center"
        whileHover={{ scale: 1.04 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={src}
          alt={label}
          className="w-full h-40 object-cover rounded mb-2"
        />
        <span className="text-sm text-neutral-600 dark:text-neutral-300">
          {label} #{i + 1}
        </span>
      </motion.div>
    ))}
  </div>
);

export default function PlayPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      {/* Hero Section */}
      <AnimatedSection className="container mx-auto pt-16 pb-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1
            className="font-serif text-black text-4xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{ lineHeight: 1.2 }}
          >
            Play – A space where I share stories through videography and
            visuals.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            A collection of creative explorations—from photography and
            videography to painting and digital art.
          </p>
        </div>
      </AnimatedSection>

      {/* Divider */}
      <div className="border-t border-stone-200 mx-auto w-2/3 my-12" />

      {/* Photography Section */}
      <AnimatedSection className="container mx-auto px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Photography
          </h2>
          <MasonryGrid items={photos} />
        </div>
      </AnimatedSection>

      {/* Videography & Content Creation Section */}
      <AnimatedSection className="container mx-auto px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Videography & Content Creation
          </h2>
          <VideoGrid items={videos} />
        </div>
      </AnimatedSection>

      {/* Painting & Video Editing Section */}
      <AnimatedSection className="container mx-auto px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Painting & Video Editing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black/80">
                Paintings
              </h3>
              <CardGrid items={paintings} label="Painting" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black/80">
                Edits
              </h3>
              <CardGrid items={edits} label="Edit" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Closing Section */}
      <AnimatedSection className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Creativity as Play
          </h3>
          <p className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-300">
            For me, creativity is a space to experiment, express, and grow.
            Every photo, video, and painting is a reflection of joy and
            curiosity.
          </p>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
