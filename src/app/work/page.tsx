"use client";

import { FC, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { motion, AnimatePresence } from "motion/react";
import {
  categories,
  categoryCounts,
  listedProjects,
  type Category,
} from "@/data/projects";

const WorkPage: FC = () => {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return listedProjects;
    }
    return listedProjects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <>
      <Header />
      <main className="section pt-32 md:pt-40">
        <div className="container">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="font-display text-statement font-bold mb-6">
              Creating next level <br /> digital products
            </h1>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 md:mb-16"
          >
            <div className="flex flex-wrap gap-3 md:gap-4 sticky top-20 z-10 bg-white/80 dark:bg-stone-950/80 backdrop-blur-md py-3 -mx-4 px-4">
              {categories.map((category) => (
                <button
                  key={category}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    px-4 md:px-6 py-2 md:py-3 rounded-none text-sm md:text-base font-medium
                    transition-colors duration-200 relative
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                    ${
                      activeCategory === category
                        ? "bg-primary text-white shadow-lg scale-105"
                        : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 hover:scale-105"
                    }
                  `}
                >
                  {category}

                    {/* Count */}
                    <span
                      className={`ml-2 font-mono text-xs tracking-wider ${
                        activeCategory === category
                          ? "text-primary"
                          : "text-stone-500 dark:text-stone-400"
                      }`}
                    >
                      {categoryCounts[category]}
                    </span>

                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-primary rounded-none -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Project count */}
            <motion.p
              key={activeCategory}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-sm md:text-base text-stone-600 dark:text-stone-400 transition-colors duration-300"
            >
              Showing {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.4,
                    layout: { duration: 0.3 },
                  }}
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-none transition-transform duration-300 hover:-translate-y-1"
                  >
                    {/* Project Image */}
                    <div className={`relative aspect-[4/3] rounded-none overflow-hidden mb-4 transition-colors duration-300 p-4 sm:p-6 ${
                      project.bgTheme === "white"
                        ? "bg-white"
                        : project.bgTheme === "dark"
                          ? "bg-[#050505]"
                          : project.bgTheme === "transparent"
                            ? "bg-transparent"
                            : "bg-stone-100 dark:bg-stone-900"
                    }`}>
                      {project.image && !failedImages.has(project.id) ? (
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                          onError={() =>
                            setFailedImages((prev) => new Set(prev).add(project.id))
                          }
                        />
                      ) : (
                        <div className="size-full flex items-center justify-center">
                          <span className="font-display text-lg font-bold text-stone-400 dark:text-stone-600 text-center line-clamp-2">
                            {project.name}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="space-y-2">
                      <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="hidden sm:block text-sm md:text-base text-stone-600 dark:text-stone-400 line-clamp-2 transition-colors duration-300">
                        {project.tagline}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WorkPage;
