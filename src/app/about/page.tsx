"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import avatarImage from "@/assets/images/avatar.jpg";

// Hero Section
// const HeroSection = () => (
//   <AnimatedSection className="container mx-auto pt-16 pb-10 flex flex-col items-left">
//     <figure
//       className="w-full max-w-3xl h-56 md:h-72 bg-stone-300 rounded-xl mb-10 mt-20"
//       aria-label="Portrait placeholder"
//     />
//     <h1
//       className="text-left max-w-2xl mx-auto mb-6 font-serif text-black"
//       style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", lineHeight: 1.15 }}
//     >
//       <span className="italic font-light">
//         I&apos;m passionate about transforming complex problems into{" "}
//         <span className="font-serif italic font-semibold">simple</span>{" "}
//         solutions.
//       </span>
//     </h1>
//     <div className="max-w-xl mx-auto text-base md:text-lg text-black/80 leading-relaxed text-left">
//       <p>
//         I&apos;m Reymar, a multidisciplinary Computer Science student at Cavite
//         State University, blending design, code, and storytelling to craft
//         digital experiences.
//         <br />
//         <br />
//         I&apos;ve worked as a UI/UX & Low-Code Developer Intern at SP Madrid &
//         Associates, designed and developed the Read AI website using Figma &
//         Bubble.io, and collaborated with brands and entrepreneurs. I&apos;m
//         actively building my portfolio in web development, AI, and content
//         creation, and I&apos;m looking for opportunities to collaborate,
//         freelance, and grow as a hybrid creative-developer.
//         <br />
//         <br />
//         Outside work, I stay active, travel, and capture life through photos and
//         videos while enjoying my{" "}
//         <a href="#favourites" className="underline text-primary font-semibold">
//           current favourites
//         </a>
//         .
//       </p>
//     </div>
//   </AnimatedSection>
// );
const HeroSection = () => (
  <AnimatedSection className="container mx-auto pt-16 pb-16">
    <div className="max-w-4xl mx-auto">
      {/* Portrait - smaller and more integrated */}
      <figure className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-12 mt-12 overflow-hidden relative">
        <Image
          src={avatarImage}
          alt="Reymar Mirante portrait"
          fill
          className="object-cover"
          priority
        />
      </figure>

      {/* Main headline with similar typography treatment */}
      <h1 className="mb-12 font-serif text-black text-left">
        <span
          className="block text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-2"
          style={{ letterSpacing: "-0.02em" }}
        >
          {/* <em className="font-serif italic">I</em>'m passionate about */}
          I&apos;m passionate about
        </span>
        <span
          className="block text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-2"
          style={{ letterSpacing: "-0.02em" }}
        >
          transforming complex problems
        </span>
        <span
          className="block text-4xl md:text-5xl lg:text-6xl leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          into <em className="font-serif italic">simple</em> solutions.
        </span>
      </h1>

      <div className="max-w-3xl text-base md:text-lg text-black/80 leading-relaxed text-left space-y-4">
        <p>
          I&apos;m Reymar, a multidisciplinary Computer Science student at
          Cavite State University, blending design, code, and storytelling to
          craft digital experiences.
        </p>

        <p>
          Currently building my portfolio in web design & development, AI,
          automation and content creation while seeking opportunities to
          collaborate and grow as a creative-developer. Outside work, I capture
          life through photos and videos while enjoying my{" "}
          <a
            href="#favourites"
            className="underline text-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("favourites")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            current favourites
          </a>
          .
        </p>
      </div>
    </div>
  </AnimatedSection>
);

// // Education & Experience Section
// const EducationExperience = () => (
//   <AnimatedSection className="container mx-auto pb-10" delay={0.1}>
//     <div className="max-w-4xl mx-auto">
//       {/* Education */}
//       <div className="mb-10">
//         <h2
//           className="font-semibold text-black mb-6"
//           style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
//         >
//           EDUCATION
//         </h2>
//         <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-2">
//           <div>
//             <div className="font-bold text-base md:text-lg">
//               Cavite State University
//             </div>
//             <div className="text-base md:text-lg">
//               Bachelor of Science in Computer Science
//             </div>
//             <ul className="list-disc ml-5 mt-2 text-black/80 text-sm md:text-base">
//               <li>
//                 I built a strong foundation in software development and
//                 problem-solving, with a strategic mindset for tackling complex
//                 challenges.
//               </li>
//               <li>
//                 My coursework has given me a focus on exploring and implementing
//                 emerging technologies in my projects.
//               </li>
//             </ul>
//           </div>
//           <div className="mt-2 md:mt-0 text-black/60 text-sm">
//             Sept 2021 - Present
//           </div>
//         </div>
//       </div>

//       {/* Experience */}
//       <div className="mb-10">
//         <h2
//           className="font-semibold text-black mb-6"
//           style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
//         >
//           EXPERIENCE
//         </h2>
//         <div className="space-y-8">
//           <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-2">
//             <div>
//               <div className="font-bold text-base md:text-lg">
//                 Artificial Intelligence Specialist
//               </div>
//               <div className="text-base md:text-lg">
//                 SP Madrid & Associates Law Firm
//               </div>
//               <ul className="list-disc ml-5 mt-2 text-black/80 text-sm md:text-base">
//                 <li>
//                   Led an AI-driven multimedia project that successfully
//                   revitalized brand content and helped secure new partnerships.
//                 </li>
//                 <li>
//                   Leveraged AI tools to enhance and animate images, creating a
//                   dynamic visual presentation that demonstrated AI&apos;s
//                   potential in storytelling and digital restoration.
//                 </li>
//                 <li>
//                   Collaborated directly with the CEO and a cross-functional team
//                   to deliver the project&apos;s vision.
//                 </li>
//               </ul>
//             </div>
//             <div className="mt-2 md:mt-0 text-black/60 text-sm">
//               Jul 2024 - Sept 2024
//             </div>
//           </div>

//           <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-2">
//             <div>
//               <div className="font-bold text-base md:text-lg">
//                 UI/UX Designer & Low-Code Developer Intern
//               </div>
//               <div className="text-base md:text-lg">
//                 SP Madrid & Associates Law Firm
//               </div>
//               <ul className="list-disc ml-5 mt-2 text-black/80 text-sm md:text-base">
//                 <li>
//                   Designed and developed the Read AI website using Figma and
//                   Bubble.io, focusing on a user-centered interface.
//                 </li>
//                 <li>
//                   Conducted user research and collaborated on key features to
//                   ensure an intuitive user experience.
//                 </li>
//               </ul>
//             </div>
//             <div className="mt-2 md:mt-0 text-black/60 text-sm">
//               Jul 2024 - Aug 2024
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </AnimatedSection>
// );

// // Community & Leadership Section
// const CommunityLeadership = () => (
//   <AnimatedSection className="container mx-auto pb-10" delay={0.15}>
//     <div className="max-w-4xl mx-auto">
//       <h2
//         className="font-semibold text-black mb-6"
//         style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
//       >
//         COMMUNITY & LEADERSHIP
//       </h2>
//       <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-2">
//         <div>
//           <div className="font-bold text-base md:text-lg">Staff Member</div>
//           <div className="text-base md:text-lg">Arc Community</div>
//           <ul className="list-disc ml-5 mt-2 text-black/80 text-sm md:text-base">
//             <li>
//               Drove community engagement by facilitating meetups and fostering
//               connections among like-minded individuals.{" "}
//               <a
//                 href="https://www.instagram.com/2049rae/reel/DMcbSU7zbby/?hl=en"
//                 className="underline text-primary"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 See a video of our latest meetup here.
//               </a>
//             </li>
//             <li>
//               Managed and resolved community issues, ensuring a safe and
//               productive environment for all participants.
//             </li>
//             <li>
//               Developed and enforced community guidelines, demonstrating a
//               proactive approach to governance and safety.
//             </li>
//           </ul>
//         </div>
//         <div className="mt-2 md:mt-0 text-black/60 text-sm">
//           Dec 2024 - Present
//         </div>
//       </div>
//     </div>
//   </AnimatedSection>
// );

const EducationExperience = () => (
  <AnimatedSection className="container mx-auto px-4 pb-16" delay={0.1}>
    <div className="max-w-4xl mx-auto">
      {/* Education */}
      <div className="mb-20">
        <h2
          className="font-normal text-black mb-12 uppercase tracking-wide"
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
        >
          EDUCATION
        </h2>
        <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-6">
          <div>
            <div className="text-2xl md:text-3xl font-serif italic text-black mb-3">
              Cavite State University
            </div>
            <div className="text-base md:text-lg text-black/70 mb-2">
              Bachelor of Science in Computer Science
            </div>
            <div className="text-sm md:text-base text-black/50 mb-4">
              GWA: 1.51 / 4.0 scale
            </div>
            <div className="text-sm md:text-base text-black/60 leading-relaxed space-y-4">
              <p>
                <span className="font-semibold text-black/80">Thesis:</span>{" "}
                Developed IoT platform for real-time water quality monitoring
                using predictive analytics with decision tree algorithms (90%+
                accuracy).
              </p>
              <p>
                <span className="font-semibold text-black/80">
                  Focused coursework:
                </span>{" "}
                Software Engineering, IoT, Machine Learning, Artificial
                Intelligence, Web Systems
              </p>
              <p>
                I built a strong foundation in software development and
                problem-solving, with a strategic mindset for tackling complex
                challenges through hands-on projects and emerging technologies.
              </p>
            </div>
          </div>
          <div className="text-black/60 text-sm md:text-base">
            Sept 2021 - Present
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-0">
        <h2
          className="font-normal text-black mb-12 uppercase tracking-wide"
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
        >
          EXPERIENCE
        </h2>
        <div className="space-y-16">
          <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-6">
            <div>
              <div className="text-2xl md:text-3xl font-serif italic text-black mb-3">
                SP Madrid & Associates Law Firm
              </div>
              <div className="text-base md:text-lg text-black/70 mb-4">
                Artificial Intelligence Specialist
              </div>
              <div className="text-sm md:text-base text-black/60 leading-relaxed space-y-4">
                <p>
                  Led an AI-driven multimedia project that successfully
                  revitalized brand content and helped secure new partnerships.
                </p>
                <p>
                  Leveraged AI tools to enhance and animate images, creating a
                  dynamic visual presentation that demonstrated AI&apos;s
                  potential in storytelling and digital restoration.
                </p>
                <p>
                  Collaborated directly with the CEO and a cross-functional team
                  to deliver the project&apos;s vision.
                </p>
              </div>
            </div>
            <div className="text-black/60 text-sm md:text-base">
              Jul 2024 - Sept 2024
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-6">
            <div>
              <div className="text-2xl md:text-3xl font-serif italic text-black mb-3">
                SP Madrid & Associates Law Firm
              </div>
              <div className="text-base md:text-lg text-black/70 mb-4">
                UI/UX Designer & Low-Code Developer Intern
              </div>
              <div className="text-sm md:text-base text-black/60 leading-relaxed space-y-4">
                <p>
                  Designed and developed the Read AI website using Figma and
                  Bubble.io, focusing on a user-centered interface.
                </p>
                <p>
                  Conducted user research and collaborated on key features to
                  ensure an intuitive user experience.
                </p>
              </div>
            </div>
            <div className="text-black/60 text-sm md:text-base">
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
  <AnimatedSection className="container mx-auto px-4 pb-16" delay={0.15}>
    <div className="max-w-4xl mx-auto">
      <h2
        className="font-normal text-black mb-12 uppercase tracking-wide"
        style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
      >
        COMMUNITY & LEADERSHIP
      </h2>
      <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-6">
        <div>
          <div className="text-2xl md:text-3xl font-serif italic text-black mb-3">
            Arc Community
          </div>
          <div className="text-base md:text-lg text-black/70 mb-4">
            Staff Member
          </div>
          <div className="text-sm md:text-base text-black/60 leading-relaxed space-y-4">
            <p>
              Drove community engagement by facilitating meetups and fostering
              connections among like-minded individuals.{" "}
              <a
                href="https://www.instagram.com/2049rae/reel/DMcbSU7zbby/?hl=en"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                See a video of our latest meetup here.
              </a>
            </p>
            <p>
              Managed and resolved community issues, ensuring a safe and
              productive environment for all participants.
            </p>
            <p>
              Developed and enforced community guidelines, demonstrating a
              proactive approach to governance and safety.
            </p>
          </div>
        </div>
        <div className="text-black/60 text-sm md:text-base">
          Dec 2024 - Present
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const Favourites = () => (
  <AnimatedSection
    className="container mx-auto pb-10"
    id="favourites"
    delay={0.25}
  >
    <div className="max-w-2xl mx-auto mb-10">
      <h2
        className="text-black font-normal mb-6"
        style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
      >
        My current <em className="font-serif italic">favourites</em>
      </h2>
      <p className="text-base md:text-lg text-black/80 mb-8">
        When I&apos;m not coding or designing, you can catch me at a local
        coffee shop with my camera, binge-watching anime until 3am, or
        perfecting my handstand form. Here&apos;s what&apos;s currently on
        rotation:
      </p>

      <div className="space-y-4 text-base md:text-lg leading-relaxed">
        <div>
          <span className="font-semibold text-black">Book:</span>
          <span className="text-black/80">
            {" "}
            Atomic Habits, Meditations, Think and Grow Rich, The Way of the
            Superior Man, How to Win Friends and Influence People
          </span>
        </div>

        <div>
          <span className="font-semibold text-black">Manhwa:</span>
          <span className="text-black/80">
            {" "}
            Solo Leveling, Tower of God, The God of High School
          </span>
        </div>

        <div>
          <span className="font-semibold text-black">Movie:</span>
          <span className="text-black/80">
            {" "}
            Blade Runner, The Matrix, Fight Club, Dune, The Batman, American
            Assassin
          </span>
        </div>

        <div>
          <span className="font-semibold text-black">TV Shows:</span>
          <span className="text-black/80">
            {" "}
            Dark, Black Mirror, Breaking Bad, You, The 100, Attack on Titan,
            Jujutsu Kaisen, Chainsaw Man, Lord of the Mysteries
          </span>
        </div>

        <div>
          <span className="font-semibold text-black">Music:</span>
          <span className="text-black/80">
            {" "}
            Currently vibing to lo-fi beats while working, it&apos;s the perfect
            background noise
          </span>
        </div>

        <div>
          <span className="font-semibold text-black">Food:</span>
          <span className="text-black/80">
            {" "}
            Can&apos;t live without Oatmeal, Adobong Manok, Kare-Kare, and
            Nilagang Baka
          </span>
        </div>

        <div>
          <span className="font-semibold text-black">Clothing:</span>
          <span className="text-black/80">
            {" "}
            Gustavo, Wisdom Kaye, Daniel Simmons, Giafratte, Jevon Henley
          </span>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

// Life Gallery Section - Mixed Video Snippets & Photos
const lifeSnippets = [
  // Fitness & Calisthenics
  {
    src: "/assets/videos/snippet-life/handstand-sunset-beach.mov",
    alt: "Handstand practice at sunset beach",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/me-photo-highlights/calisthenics.jpg",
    alt: "Calisthenics training",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/videos/snippet-life/handstandpress-beach-sunset-calisthenics.mp4",
    alt: "Handstand press at beach during sunset",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/me-photo-highlights/calisthenics2.jpg",
    alt: "Calisthenics workout moment",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/videos/snippet-life/handstand-kids-calisthenics-sunset.mov",
    alt: "Calisthenics with kids at sunset",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/me-photo-highlights/calisthenics3.jpg",
    alt: "Outdoor calisthenics session",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/videos/snippet-life/calisthenics hpsu qc.mp4",
    alt: "Calisthenics HPSU workout in QC",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet-life/calisthenics nature morning workout.mov",
    alt: "Morning calisthenics workout in nature",
    aspectRatio: "9/16",
    type: "video",
  },

  // Gym & Training
  {
    src: "/assets/videos/snippet-life/gym bicep black compression mullet.mov",
    alt: "Bicep training at gym",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet-life/gym boxing.mov",
    alt: "Boxing training session",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet-life/punching bag muaythai gym.mov",
    alt: "Muay Thai punching bag workout",
    aspectRatio: "9/16",
    type: "video",
  },

  // Running & Outdoor Activities
  {
    src: "/assets/videos/snippet-life/run-swim-abs.mov",
    alt: "Running, swimming and abs workout",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/me-photo-highlights/running.jpg",
    alt: "Running outdoors",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/videos/snippet-life/running-beach-salabay.mov",
    alt: "Beach running at Salabay",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/me-photo-highlights/running-beach-me-face.jpg",
    alt: "Running at the beach",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/videos/snippet-life/running-beach forest-plaza-church- beach.mov",
    alt: "Running through beach, forest, and church",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/me-photo-highlights/running-beach-me-physique.jpg",
    alt: "Beach running physique",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/videos/snippet-life/running-church-scene.MOV",
    alt: "Running past church scenic route",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/me-photo-highlights/running2.jpg",
    alt: "Running session outdoors",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/videos/snippet-life/running-luya.mp4",
    alt: "Running session",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/me-photo-highlights/running3.jpg",
    alt: "Running workout",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/videos/snippet-life/running with justin night.mov",
    alt: "Night running with Justin",
    aspectRatio: "9/16",
    type: "video",
  },

  // Beach & Nature
  {
    src: "/assets/videos/snippet-life/sunset-beach-swim-me.mov",
    alt: "Swimming at beach during sunset",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/me-photo-highlights/beach-me.JPG",
    alt: "Beach moment",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/videos/snippet-life/sunset-pink-beach-sea.MOV",
    alt: "Pink sunset at the beach",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/me-photo-highlights/beach1.jpg",
    alt: "Beach vibes",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/beach2.jpg",
    alt: "Beach day",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/beach-allwhitefit-guitar3.jpg",
    alt: "Beach with guitar in all white",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/forest.jpg",
    alt: "Forest exploration",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/forest2.jpg",
    alt: "Nature forest scene",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/forest3.jpg",
    alt: "Forest adventure",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/ilog1.jpg",
    alt: "River adventure",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/ilog2.jpg",
    alt: "River exploration",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/ilog3.jpg",
    alt: "River moment",
    aspectRatio: "3/4",
    type: "image",
  },

  // Fashion & Style
  {
    src: "/assets/videos/snippet-life/fit check mall all black mullet.mov",
    alt: "All black fit check at the mall",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet-life/fitcheck bgc grey hoodie.mov",
    alt: "Grey hoodie fit check at BGC",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet-life/grey hoodie baggy pants.mov",
    alt: "Grey hoodie and baggy pants outfit",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet-life/white compression shirt baggy pants.mov",
    alt: "White compression shirt outfit",
    aspectRatio: "9/16",
    type: "video",
  },

  // Food & Cooking
  {
    src: "/assets/videos/snippet-life/food kimchi.MOV",
    alt: "Kimchi food prep",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet-life/food (4).MOV",
    alt: "Food preparation",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet-life/cooking kila cess 1.MOV",
    alt: "Cooking session",
    aspectRatio: "9/16",
    type: "video",
  },

  // Creative & Work
  {
    src: "/assets/images/me-photo-highlights/me-pc-coffee.jpg",
    alt: "Working at PC with coffee",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/painting.jpg",
    alt: "Painting artwork",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/photographer.jpg",
    alt: "Photography work",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/photographer2.jpg",
    alt: "Behind the camera",
    aspectRatio: "3/4",
    type: "image",
  },

  // Internship & Work Life
  {
    src: "/assets/images/me-photo-highlights/intern-event-me.jpg",
    alt: "Internship event",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/videos/snippet-life/internship behind the scene videography.MOV",
    alt: "Behind the scenes videography at internship",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet-life/internship billiards qc (2).MOV",
    alt: "Billiards during internship break",
    aspectRatio: "9/16",
    type: "video",
  },

  // Museums & Culture
  {
    src: "/assets/videos/snippet-life/museum of manila (25).MOV",
    alt: "Museum of Manila visit",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/me-photo-highlights/museum-me.jpg",
    alt: "Museum exploration",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/videos/snippet-life/national museum (1).MOV",
    alt: "National Museum exploration",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/me-photo-highlights/museum2.jpg",
    alt: "Museum visit moment",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/museum3.jpg",
    alt: "Museum art viewing",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/museum4.jpg",
    alt: "Museum cultural experience",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/museum5.jpg",
    alt: "Museum exploration day",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/videos/snippet-life/venice grand canal manila edited.mp4",
    alt: "Venice Grand Canal Manila",
    aspectRatio: "9/16",
    type: "video",
  },

  // Travel & Adventures
  {
    src: "/assets/images/me-photo-highlights/tagaytay-me.jpg",
    alt: "Tagaytay trip",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/tagaytay-scene1.jpg",
    alt: "Tagaytay scenic view",
    aspectRatio: "16/9",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/tagayta2.jpg",
    alt: "Tagaytay adventure",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/tagaytay3.jpg",
    alt: "Tagaytay moment",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/tagaytay-scene3.jpg",
    alt: "Tagaytay landscape",
    aspectRatio: "16/9",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/tagaytay4.jpg",
    alt: "Tagaytay exploration",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/acienda1.jpg",
    alt: "Hacienda visit",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/acienda2.jpg",
    alt: "Hacienda exploration",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/acienda3.jpg",
    alt: "Hacienda adventure",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/pasig-river-esplanade-me.jpg",
    alt: "Pasig River Esplanade",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/pasig-river-esplanade-scene.jpg",
    alt: "Pasig River Esplanade view",
    aspectRatio: "16/9",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/pasig-river-esplanade-scene2.jpg",
    alt: "Pasig River scenic spot",
    aspectRatio: "16/9",
    type: "image",
  },

  // Events & Community
  {
    src: "/assets/videos/snippet-life/ccl anniversary.mp4",
    alt: "CCL anniversary celebration",
    aspectRatio: "9/16",
    type: "video",
  },

  // Family & Personal
  {
    src: "/assets/images/me-photo-highlights/mall-mom1.jpg",
    alt: "Mall day with mom",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/mall-mom2.jpg",
    alt: "Shopping with mom",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/mall-mom3.jpg",
    alt: "Quality time with mom",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/me-photo-highlights/mall-mom4.jpg",
    alt: "Mom and me at the mall",
    aspectRatio: "3/4",
    type: "image",
  },

  // Hobbies & Personal
  {
    src: "/assets/videos/snippet-life/guitar frank ocean.mov",
    alt: "Playing guitar - Frank Ocean",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet-life/cats-play-white-black.MOV",
    alt: "Playing with cats",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet-life/fish-food.mov",
    alt: "Feeding fish",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet-life/my-room-dark.mov",
    alt: "My room setup",
    aspectRatio: "9/16",
    type: "video",
  },
];

const LifeGallery = () => {
  return (
    <AnimatedSection className="container mx-auto pt-16 pb-10" delay={0.3}>
      <div className="max-w-4xl mx-auto mb-16">
        <h2
          className="text-black font-normal mb-8 text-center sm:text-left"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          Snippets of my <em className="font-serif italic">life</em> outside of
          work
        </h2>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {lifeSnippets.map((item, index) => (
          <motion.div
            key={index}
            className="break-inside-avoid mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.02 },
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
                  paddingBottom: getAspectRatioPadding(item.aspectRatio),
                }}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                    aria-label={item.alt}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                    priority={index < 8}
                  />
                )}
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
