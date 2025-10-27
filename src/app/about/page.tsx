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
            <div className="text-base md:text-lg text-black/70">
              Bachelor of Science in Computer Science
            </div>
            <div className="text-sm md:text-base text-black/60 leading-relaxed space-y-4">
              <p>
                I built a strong foundation in software development and
                problem-solving, with a strategic mindset for tackling complex
                challenges.
              </p>
              <p>
                My coursework has given me a focus on exploring and implementing
                emerging technologies in my projects.
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

const PlaySection = () => (
  <AnimatedSection className="container mx-auto px-4 pb-16" delay={0.2}>
    <div className="max-w-4xl mx-auto">
      <h2
        className="text-black font-normal mb-12"
        style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
      >
        My creative <em className="font-serif italic">playground</em>
      </h2>
      <p className="text-base md:text-lg text-black/80 mb-12">
        Beyond code and design, I explore storytelling through motion, lens, and
        editing—capturing moments, crafting narratives, and experimenting with
        visual media.
      </p>

      <div className="space-y-12">
        {/* Content Creation */}
        <div>
          <h3
            className="font-normal text-black mb-6 uppercase tracking-wide"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
          >
            Content Creation
          </h3>
          <div className="space-y-3 text-base md:text-lg">
            <div>
              <a
                href="https://www.instagram.com/reel/DMcbSU7zbby/?hl=en"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Network is Your Network
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/reel/DPmoOviE7Hm/?hl=en"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Day in the Life
              </a>
            </div>
            <div>
              <a
                href="https://www.tiktok.com/@2049rae/video/7464261158665538823"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tech Internship
              </a>
            </div>
          </div>
        </div>

        {/* Motion Graphics & Video Edit */}
        <div>
          <h3
            className="font-normal text-black mb-6 uppercase tracking-wide"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
          >
            Motion Graphics &amp; Video Edit
          </h3>
          <div className="space-y-3 text-base md:text-lg">
            <div>
              <a
                href="https://www.youtube.com/watch?v=DKqeyOe7rK4"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Motion Graphics Project 1
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=9Dxdr7TG7Cc"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Motion Graphics Project 2
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=HKC-_s8uySs"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anime Horimiya
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=uLXnvEShkOY"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anime Howl&apos;s Moving Castle
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=umzmjEKNft0"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tamako Love Story
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=UztaNptJkMo"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demon Slayer
              </a>
            </div>
          </div>
        </div>

        {/* Client Photography & Videography */}
        <div>
          <h3
            className="font-normal text-black mb-6 uppercase tracking-wide"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
          >
            Client Photography &amp; Videography
          </h3>
          <div className="space-y-3 text-base md:text-lg">
            <div>
              <a
                href="https://www.youtube.com/watch?v=RrilkyhAse8&t=139s"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baptism
              </a>
            </div>
          </div>
        </div>

        {/* Cinematography */}
        <div>
          <h3
            className="font-normal text-black mb-6 uppercase tracking-wide"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
          >
            Cinematography
          </h3>
          <div className="space-y-3 text-base md:text-lg">
            <div>
              <a
                href="https://www.youtube.com/watch?v=g0ZNLAo2wgo"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rainy Day Planting
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=8GCgMlxq1xM"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Intramuros
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=7w8STwNeRdE"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dopple Ganger
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=hhZyIM4IXMs"
                className="underline text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Beach Resort
              </a>
            </div>
          </div>
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
    <AnimatedSection className="container mx-auto pt-16 pb-10" delay={0.3}>
      <div className="max-w-4xl mx-auto mb-16">
        {/* <AnimatedSection className="container mx-auto px-4 pb-20" delay={0.3}>
        <div className="max-w-2xl mx-auto mb-16"> */}
        <h2
          className="text-black font-normal mb-8 text-center sm:text-left"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          Snippets of my <em className="font-serif italic">life</em> outside of
          work
        </h2>
        {/* <p className="text-base md:text-lg text-black/80">
            A visual journey through my interests, hobbies, and adventures. From
            martial arts and fitness to exploring new places and capturing moments
            through photography.
          </p> */}
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
      <PlaySection />
      <Favourites />
      <LifeGallery />
      <Footer />
    </main>
  );
}
