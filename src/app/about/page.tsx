"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";

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
                href="https://www.instagram.com/2049rae/reel/DMcbSU7zbby/?hl=en"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
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
      <div className="font-bold text-base text-black mb-4 leading-relaxed space-y-2">
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
          <span className="font-bold">Clothing:</span> Gustavo, Wisdom Kaye,
          Daniel Simmons, Giafratte, Jevon Henley
        </div>
        <div>
          <span className="font-bold">Food:</span> Can&apos;t live without
          Oatmeal, Adobong Manok, Kare-Kare, and Nilagang Baka
        </div>
      </div>
    </div>
  </AnimatedSection>
);

// Life Gallery Section
const lifeImages = [
  // Fitness & Training (8 images)
  {
    src: "/assets/images/project-1.jpg",
    alt: "Morning calisthenics routine - handstand practice",
    aspectRatio: "4/3",
  },
  {
    src: "/assets/images/project-2.jpg",
    alt: "Martial arts training - high kick form",
    aspectRatio: "3/4",
  },
  {
    src: "/assets/images/project-3.jpg",
    alt: "Group workout session at the park",
    aspectRatio: "16/9",
  },
  {
    src: "/assets/images/project-4.jpg",
    alt: "Post-training stretching routine",
    aspectRatio: "1/1",
  },
  {
    src: "/assets/images/project-5.jpg",
    alt: "Morning run through city trails",
    aspectRatio: "4/3",
  },
  {
    src: "/assets/images/testimonial-1.jpg",
    alt: "Boxing practice with training partner",
    aspectRatio: "1/1",
  },
  {
    src: "/assets/images/testimonial-2.jpg",
    alt: "Outdoor yoga session at sunset",
    aspectRatio: "16/9",
  },
  {
    src: "/assets/images/testimonial-3.jpg",
    alt: "Resistance training setup",
    aspectRatio: "3/4",
  },

  // Photography & Creative Work (7 images)
  {
    src: "/assets/images/project-1.jpg",
    alt: "Street photography in urban setting",
    aspectRatio: "3/4",
  },
  {
    src: "/assets/images/project-2.jpg",
    alt: "Nature macro photography",
    aspectRatio: "1/1",
  },
  {
    src: "/assets/images/project-3.jpg",
    alt: "City landscape at golden hour",
    aspectRatio: "16/9",
  },
  {
    src: "/assets/images/project-4.jpg",
    alt: "Behind the scenes - photo editing",
    aspectRatio: "4/3",
  },
  {
    src: "/assets/images/project-5.jpg",
    alt: "Camera gear setup for shoot",
    aspectRatio: "1/1",
  },
  {
    src: "/assets/images/testimonial-1.jpg",
    alt: "Portrait photography session",
    aspectRatio: "3/4",
  },
  {
    src: "/assets/images/testimonial-2.jpg",
    alt: "Time-lapse setup at viewpoint",
    aspectRatio: "16/9",
  },

  // Reading & Learning (5 images)
  {
    src: "/assets/images/project-1.jpg",
    alt: "Cozy reading corner setup",
    aspectRatio: "1/1",
  },
  {
    src: "/assets/images/project-2.jpg",
    alt: "Book collection and notes",
    aspectRatio: "4/3",
  },
  {
    src: "/assets/images/project-3.jpg",
    alt: "Study session at library",
    aspectRatio: "3/4",
  },
  {
    src: "/assets/images/project-4.jpg",
    alt: "Morning reading routine",
    aspectRatio: "16/9",
  },
  {
    src: "/assets/images/project-5.jpg",
    alt: "Favorite books collection",
    aspectRatio: "1/1",
  },

  // Travel & Adventure (5 images)
  {
    src: "/assets/images/testimonial-1.jpg",
    alt: "Mountain hiking expedition",
    aspectRatio: "16/9",
  },
  {
    src: "/assets/images/testimonial-2.jpg",
    alt: "Beach sunset meditation",
    aspectRatio: "4/3",
  },
  {
    src: "/assets/images/testimonial-3.jpg",
    alt: "Local market exploration",
    aspectRatio: "1/1",
  },
  {
    src: "/assets/images/project-1.jpg",
    alt: "Camping under stars",
    aspectRatio: "16/9",
  },
  {
    src: "/assets/images/project-2.jpg",
    alt: "Historical site visit",
    aspectRatio: "3/4",
  },

  // Community & Events (5 images)
  {
    src: "/assets/images/project-3.jpg",
    alt: "Arc Community meetup",
    aspectRatio: "16/9",
  },
  {
    src: "/assets/images/project-4.jpg",
    alt: "Group workshop session",
    aspectRatio: "4/3",
  },
  {
    src: "/assets/images/project-5.jpg",
    alt: "Community outreach event",
    aspectRatio: "1/1",
  },
  {
    src: "/assets/images/testimonial-1.jpg",
    alt: "Tech conference networking",
    aspectRatio: "16/9",
  },
  {
    src: "/assets/images/testimonial-2.jpg",
    alt: "Team building activities",
    aspectRatio: "3/4",
  },
];

const LifeGallery = () => {
  return (
    <AnimatedSection className="container mx-auto px-4 pb-20" delay={0.3}>
      <div className="max-w-2xl mx-auto mb-16">
        <h2
          className="text-black font-normal mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          Life Outside Work
        </h2>
        <p className="text-base md:text-lg text-black/80">
          A visual journey through my interests, hobbies, and adventures. From
          martial arts and fitness to exploring new places and capturing moments
          through photography.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {lifeImages.map((image, index) => (
          <motion.div
            key={index}
            className="break-inside-avoid mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.1 },
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-sm bg-stone-100"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                transition: { duration: 0.2 },
              }}
            >
              <div
                className="relative"
                style={{
                  paddingBottom: getAspectRatioPadding(image.aspectRatio),
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                  priority={index < 4}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

// Helper function to convert aspect ratio to padding percentage
const getAspectRatioPadding = (aspectRatio: string): string => {
  const [width, height] = aspectRatio.split("/").map(Number);
  return `${(height / width) * 100}%`;
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <EducationExperience />
      <CommunityLeadership />
      <Favourites />
      <LifeGallery />
      <Footer />
    </main>
  );
}
