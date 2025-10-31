"use client";

import { FC, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { motion, AnimatePresence } from "motion/react";

// Project categories
const categories = [
  "All",
  "Web Design",
  "Web Development",
  "Branding",
  "Content Creation",
  "Automation",
] as const;

type Category = (typeof categories)[number];

// All projects data - you can add more projects here
const allProjects = [
  {
    id: "sp-madrid-ai-multimedia",
    name: "Reviving Memories with AI",
    description: "AI-driven multimedia presentation for SP Madrid's heritage",
    image: "/assets/images/sp-madrid-exhibition.jpg",
    category: "Automation" as Category,
  },
  {
    id: "read-ai-website",
    name: "Read AI",
    description:
      "UI/UX design and no-code development for meeting intelligence platform",
    image: "/assets/images/read-ai-webdesign1.png",
    category: "Web Design" as Category,
  },
  {
    id: "covid-health-declaration",
    name: "COVID-19 Health Declaration System",
    description:
      "Full-stack health screening platform with real-time analytics",
    image: "/assets/images/covid-hero.png",
    category: "Web Development" as Category,
  },
  {
    id: "cvsufind",
    name: "CVSUfind",
    description:
      "Lost-and-found platform for CvSU campus with user and admin dashboards",
    image: "/assets/images/cvsufind/cvsufind-hero.png",
    category: "Web Design" as Category,
  },
  {
    id: "friskay-website",
    name: "Friskay Website",
    description:
      "Web design recreated from YouTube tutorial about the world's best-tasting cat food",
    image: "/assets/images/ui-ux-design-crash-course/ui-ux-design-crashcourse-desktop.jpg",
    category: "Web Design" as Category,
  },
  {
    id: "mobile-attendance-system",
    name: "Mobile Attendance System",
    description:
      "UI/UX design from Gordon College webinar - Figma design project",
    image: "/assets/images/mobile-attendance-system/mobile-attendance-system-clockin.png",
    category: "Web Design" as Category,
  },
  // Add more projects here as needed
];

const WorkPage: FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return allProjects;
    }
    return allProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  // Compute project counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<Category, number> = {
      All: allProjects.length,
      "Web Design": 0,
      "Web Development": 0,
      Branding: 0,
      "Content Creation": 0,
      Automation: 0,
    };

    allProjects.forEach((project) => {
      counts[project.category]++;
    });

    return counts;
  }, []);

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
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
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
            <div className="flex flex-wrap gap-3 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium
                    transition-all duration-300 relative
                    ${
                      activeCategory === category
                        ? "bg-primary text-white shadow-lg scale-105"
                        : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 hover:scale-105"
                    }
                  `}
                >
                  {category}

                  {/* Count Badge */}
                  <span
                    className={`
                      absolute -top-1 -right-1 text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center
                      ${
                        activeCategory === category
                          ? "bg-white text-primary"
                          : "bg-stone-300 dark:bg-stone-600 text-white"
                      }
                    `}
                  >
                    {categoryCounts[category]}
                  </span>

                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 min-h-[400px]">
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
                    className="group block h-full"
                  >
                    {/* Project Image */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-800 mb-4 transition-colors duration-300">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                    </div>

                    {/* Project Info */}
                    <div className="space-y-2">
                      <div className="text-xs md:text-sm text-primary font-medium uppercase tracking-wider">
                        {project.category}
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 line-clamp-2 transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>

                    {/* View Project Arrow */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-primary transition-colors">
                      <span>View Project</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-4 group-hover:translate-x-1 transition-transform"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WorkPage;
