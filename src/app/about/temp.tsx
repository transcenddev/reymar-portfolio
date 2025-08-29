"use client";

import React from "react";
import { motion } from "motion/react";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import AnimatedSection from "@/components/AnimatedSection";

// Animated section wrapper
const AnimatedSection: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}> = ({ children, delay = 0, ...props }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    {...props}
  >
    {children}
  </motion.section>
);

// Hero Section
const HeroSection = () => (
  <AnimatedSection className="container mx-auto pt-16 pb-10 flex flex-col items-center">
    <figure
      className="w-full max-w-3xl h-56 md:h-72 bg-stone-300 rounded-xl mb-10"
      aria-label="Portrait placeholder"
    />
    <h1
      className="text-center max-w-2xl mx-auto mb-6 font-serif text-black"
      style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", lineHeight: 1.15 }}
    >
      <span className="italic font-light">
        I&apos;m passionate about transforming complex problems into{" "}
        <span className="font-serif italic font-semibold">simple</span>{" "}
        solutions.
      </span>
    </h1>
    <div className="max-w-xl mx-auto text-base md:text-lg text-black/80 leading-relaxed text-center">
      <p>
        I&apos;m Reymar, a multidisciplinary Computer Science student at Cavite
        State University, blending design, code, and storytelling to craft
        digital experiences.
        <br />
        <br />
        I&apos;ve worked as a UI/UX & Low-Code Developer Intern at SP Madrid &
        Associates, designed and developed the Read AI website using Figma &
        Bubble.io, and collaborated with brands and entrepreneurs. I&apos;m
        actively building my portfolio in web development, AI, and content
        creation, and I&apos;m looking for opportunities to collaborate,
        freelance, and grow as a hybrid creative-developer.
        <br />
        <br />
        Outside work, I stay active, travel, and capture life through photos and
        videos while enjoying my{" "}
        <a href="#favourites" className="underline text-primary font-semibold">
          current favourites
        </a>
        .
      </p>
    </div>
  </AnimatedSection>
);

// Education & Experience Section
const EducationExperience = () => (
  <AnimatedSection className="container mx-auto pb-10" delay={0.1}>
    <div className="max-w-4xl mx-auto">
      {/* Education */}
      <div className="mb-10">
        <h2
          className="font-semibold text-black mb-6"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
        >
          EDUCATION
        </h2>
        <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-2">
          <div>
            <div className="font-bold text-base md:text-lg">
              Cavite State University
            </div>
            <div className="text-base md:text-lg">
              Bachelor of Science in Computer Science
            </div>
            <ul className="list-disc ml-5 mt-2 text-black/80 text-sm md:text-base">
              <li>
                I built a strong foundation in software development and
                problem-solving, with a strategic mindset for tackling complex
                challenges.
              </li>
              <li>
                My coursework has given me a focus on exploring and implementing
                emerging technologies in my projects.
              </li>
            </ul>
          </div>
          <div className="mt-2 md:mt-0 text-black/60 text-sm">
            Sept 2021 - Present
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-10">
        <h2
          className="font-semibold text-black mb-6"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
        >
          EXPERIENCE
        </h2>
        <div className="space-y-8">
          <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-2">
            <div>
              <div className="font-bold text-base md:text-lg">
                Artificial Intelligence Specialist
              </div>
              <div className="text-base md:text-lg">
                SP Madrid & Associates Law Firm
              </div>
              <ul className="list-disc ml-5 mt-2 text-black/80 text-sm md:text-base">
                <li>
                  Led an AI-driven multimedia project that successfully
                  revitalized brand content and helped secure new partnerships.
                </li>
                <li>
                  Leveraged AI tools to enhance and animate images, creating a
                  dynamic visual presentation that demonstrated AI&apos;s
                  potential in storytelling and digital restoration.
                </li>
                <li>
                  Collaborated directly with the CEO and a cross-functional team
                  to deliver the project&apos;s vision.
                </li>
              </ul>
            </div>
            <div className="mt-2 md:mt-0 text-black/60 text-sm">
              Jul 2024 - Sept 2024
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-2">
            <div>
              <div className="font-bold text-base md:text-lg">
                UI/UX Designer & Low-Code Developer Intern
              </div>
              <div className="text-base md:text-lg">
                SP Madrid & Associates Law Firm
              </div>
              <ul className="list-disc ml-5 mt-2 text-black/80 text-sm md:text-base">
                <li>
                  Designed and developed the Read AI website using Figma and
                  Bubble.io, focusing on a user-centered interface.
                </li>
                <li>
                  Conducted user research and collaborated on key features to
                  ensure an intuitive user experience.
                </li>
              </ul>
            </div>
            <div className="mt-2 md:mt-0 text-black/60 text-sm">
              Jul 2024 - Aug 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

// Community & Leadership Section
const CommunityLeadership = () => (
  <AnimatedSection className="container mx-auto pb-10" delay={0.15}>
    <div className="max-w-4xl mx-auto">
      <h2
        className="font-semibold text-black mb-6"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
      >
        COMMUNITY & LEADERSHIP
      </h2>
      <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-2">
        <div>
          <div className="font-bold text-base md:text-lg">Staff Member</div>
          <div className="text-base md:text-lg">Arc Community</div>
          <ul className="list-disc ml-5 mt-2 text-black/80 text-sm md:text-base">
            <li>
              Drove community engagement by facilitating meetups and fostering
              connections among like-minded individuals.{" "}
              <a
                href="https://arc-community.example.com/meetup"
                className="underline"
                target="_blank"
                rel="noopener"
              >
                See a video of our latest meetup here.
              </a>
            </li>
            <li>
              Managed and resolved community issues, ensuring a safe and
              productive environment for all participants.
            </li>
            <li>
              Developed and enforced community guidelines, demonstrating a
              proactive approach to governance and safety.
            </li>
          </ul>
        </div>
        <div className="mt-2 md:mt-0 text-black/60 text-sm">
          Dec 2024 - Present
        </div>
      </div>
    </div>
  </AnimatedSection>
);

// Skills Section
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Framer Motion",
  "Figma",
  "Bubble.io",
  "Python",
  "AI Automation",
  "Video Editing",
  "Content Creation",
];

const SkillsSection = () => (
  <AnimatedSection className="container mx-auto pb-10" delay={0.2}>
    <h2
      className="text-black font-semibold mb-6 text-center"
      style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
    >
      Skills & Tech Stack
    </h2>
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          className="bg-stone-200 rounded-xl p-4 text-center text-black font-medium shadow transition-all duration-300 cursor-pointer"
        >
          {skill}
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

// Favourites Section
const Favourites = () => (
  <AnimatedSection
    className="container mx-auto pb-10"
    id="favourites"
    delay={0.25}
  >
    <div className="max-w-2xl mx-auto mb-10">
      <h2
        className="text-black font-normal mb-4"
        style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
      >
        My current favourites
      </h2>
      <p className="text-base md:text-lg text-black/80 mb-4">
        When I&apos;m not working, you&apos;ll usually find me capturing moments
        through photography and videography. I stay active with running,
        calisthenics, and martial arts, but I also enjoy unwinding with a good
        book, sunset, manhwa, anime, or movies. I love exploring new places
        through travel. Here are some of my favorites:
      </p>
      <div className="font-bold text-base text-black mb-4 leading-relaxed">
        <div>
          <span className="font-bold">Books:</span> Atomic Habits, Meditations,
          Think and Grow Rich, The Way of the Superior Man, How to Win Friends
          and Influence People
        </div>
        <div>
          <span className="font-bold">Manhwa:</span> Solo Leveling, Lord of the
          Mysteries, Tower of God, The God of High School
        </div>
        <div>
          <span className="font-bold">Movies:</span> Blade Runner, The Matrix,
          Fight Club, Dune, The Batman, American Assassin
        </div>
        <div>
          <span className="font-bold">Shows:</span> Dark, Black Mirror, Breaking
          Bad, Attack on Titan, Jujutsu Kaisen, Chainsaw Man
        </div>
        <div>
          <span className="font-bold">Food:</span> Can&apos;t live without
          Oatmeal, Adobong Manok, Kare-Kare, and Nilagang Baka
        </div>
      </div>
    </div>
  </AnimatedSection>
);

// Snippets Grid Section
const snippets = [
  // First cluster (top right)
  { src: "", alt: "Group Photo 1", width: 180, height: 120, x: 75, y: 0 },
  { src: "", alt: "Event Photo 1", width: 160, height: 120, x: 85, y: 5 },
  { src: "", alt: "Group Photo 2", width: 140, height: 100, x: 65, y: 12 },

  // Second cluster (middle right)
  { src: "", alt: "Activity 1", width: 160, height: 120, x: 70, y: 25 },
  { src: "", alt: "Group Photo 3", width: 180, height: 140, x: 80, y: 28 },
  { src: "", alt: "Event Photo 2", width: 140, height: 100, x: 75, y: 35 },

  // Center cluster
  { src: "", alt: "Landscape 1", width: 200, height: 150, x: 45, y: 20 },
  { src: "", alt: "Activity 2", width: 160, height: 120, x: 50, y: 35 },
  { src: "", alt: "Group Photo 4", width: 180, height: 130, x: 55, y: 45 },

  // Left cluster
  { src: "", alt: "Scenery 1", width: 160, height: 120, x: 15, y: 30 },
  { src: "", alt: "Activity 3", width: 140, height: 100, x: 20, y: 40 },
  { src: "", alt: "Event Photo 3", width: 180, height: 140, x: 25, y: 50 },

  // Bottom scattered
  { src: "", alt: "Landscape 2", width: 200, height: 150, x: 35, y: 60 },
  { src: "", alt: "Group Photo 5", width: 160, height: 120, x: 60, y: 65 },
  { src: "", alt: "Activity 4", width: 180, height: 130, x: 45, y: 70 },
];

const SnippetsGrid = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);

  // Update scale based on viewport width
  React.useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const viewportWidth = window.innerWidth;
      if (viewportWidth <= 640) {
        // mobile
        setScale(0.5);
      } else if (viewportWidth <= 1024) {
        // tablet
        setScale(0.75);
      } else {
        // desktop
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <AnimatedSection className="overflow-hidden" delay={0.3}>
      <div className="max-w-2xl mx-auto mb-16 px-4">
        <h2
          className="text-black font-normal mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          Snippets of my life outside work.
        </h2>
      </div>

      <div
        className="relative w-full"
        ref={containerRef}
        style={{ height: "140vh" }}
      >
        <motion.div
          className="relative w-full h-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {snippets.map((item, i) => (
            <motion.figure
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="absolute"
              style={{
                left: `${item.x * scale}%`,
                top: `${item.y * scale}%`,
                width: `${item.width * scale}px`,
                height: `${item.height * scale}px`,
                transform: `rotate(${Math.random() * 2 - 1}deg)`,
                zIndex: Math.floor(Math.random() * 10),
              }}
            >
              <motion.div
                className="w-full h-full bg-stone-300 overflow-hidden shadow-lg cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  zIndex: 50,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Replace with real images */}
                <div className="w-full h-full flex items-center justify-center text-black/30 text-sm">
                  {item.alt}
                </div>
              </motion.div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <EducationExperience />
      <CommunityLeadership />
      <SkillsSection />
      <Favourites />
      <SnippetsGrid />
      <Footer />
    </main>
  );
}
