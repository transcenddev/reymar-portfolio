"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedSection } from "@/components/AnimatedSection";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import MediaSkeleton from "@/components/MediaSkeleton";

const HeroSection = () => (
  <AnimatedSection className="container mx-auto pt-16 pb-16">
    <div className="max-w-4xl mx-auto">
      {/* Portrait - smaller and more integrated */}
      {/* <figure className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-12 mt-12 overflow-hidden relative">
        <Image
          src={avatarImage}
          alt="Reymar Mirante portrait"
          fill
          className="object-cover"
          priority
        />
      </figure> */}

      {/* Main headline with similar typography treatment */}
      <h1 className="my-12 font-serif text-stone-900 dark:text-stone-50 text-left transition-colors duration-300">
        <span
          className="block text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-2"
          style={{ letterSpacing: "-0.02em" }}
        >
          {/* <em className="font-serif italic">I</em>'m passionate about */}I
          love building things
        </span>
        <span
          className="block text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-2"
          style={{ letterSpacing: "-0.02em" }}
        >
          and helping people.
        </span>
        {/* <span
          className="block text-4xl md:text-5xl lg:text-6xl leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          into <em className="font-serif italic">simple</em> solutions.
        </span> */}
      </h1>

      <div className="max-w-3xl text-base md:text-lg text-black/80 dark:text-stone-300 leading-relaxed text-left space-y-4 transition-colors duration-300">
        <p>
          I enjoy working across code, design, and multimedia to bring ideas to
          life. Whether I'm building a website, exploring an AI tool, or putting
          together a video, I like figuring things out and learning through the
          process.
        </p>

        <p>
          Outside of development, I create content around fitness, lifestyle,
          and self-improvement. I also enjoy photography, reading, and
          calisthenics. These interests give me ways to explore ideas and
          express myself beyond the screen.
        </p>

        <p>
          If you want to know what I'm currently into, check out my{" "}
          <a
            href="#favourites"
            className="underline underline-offset-4 text-primary"
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

const EducationExperience = () => (
  <AnimatedSection className="container mx-auto px-4 pb-16" delay={0.1}>
    <div className="max-w-4xl mx-auto">
      {/* Education */}
      <div className="mb-20">
        <h2 className="font-display font-bold text-stone-900 dark:text-stone-100 mb-12 uppercase tracking-wide transition-colors duration-300">
          EDUCATION
        </h2>
        <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-6">
          <div>
            <div className="text-2xl md:text-3xl font-serif italic text-stone-900 dark:text-stone-50 mb-3 transition-colors duration-300">
              Cavite State University
            </div>
            <div className="text-base md:text-lg text-black/70 dark:text-stone-400 mb-2 transition-colors duration-300">
              Bachelor of Science in Computer Science
            </div>
            {/* <div className="text-sm md:text-base text-black/50 dark:text-stone-500 mb-4 transition-colors duration-300">
              GWA: 1.51 / 4.0 scale
            </div> */}
            <div className="text-sm md:text-base text-black/60 dark:text-stone-400 leading-relaxed space-y-4 transition-colors duration-300">
              <p>
                <span className="font-semibold text-black/80 dark:text-stone-300">
                  Thesis:
                </span>{" "}
                A solar-powered IoT and machine-learning system that monitors
                water quality in real time and recommends suitable aquaculture
                species for fishpond operators in San Juan I, Ternate, Cavite.
              </p>
              <p>
                <span className="font-semibold text-black/80 dark:text-stone-300">
                  Relevant Coursework:
                </span>{" "}
                Web Development, Database Management Systems, Object-Oriented
                Programming, Data Structures and Algorithms, Software
                Engineering, Systems Analysis and Design, Machine Learning
              </p>
              {/* <p>
                I built a strong foundation in software development and
                problem-solving, with a strategic mindset for tackling complex
                challenges through hands-on projects and emerging technologies.
              </p> */}
            </div>
          </div>
          <div className="text-black/60 dark:text-stone-500 text-sm md:text-base transition-colors duration-300">
            Sept 2021 - 2026
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-0">
        <h2 className="font-display font-bold text-stone-900 dark:text-stone-100 mb-12 uppercase tracking-wide transition-colors duration-300">
          EXPERIENCE
        </h2>
        <div className="space-y-16">
          <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-6">
            <div>
              <div className="text-2xl md:text-3xl font-serif italic text-stone-900 dark:text-stone-50 mb-3 transition-colors duration-300">
                SP Madrid & Associates Law Firm
              </div>
              <div className="text-base md:text-lg text-black/70 dark:text-stone-400 mb-4 transition-colors duration-300">
                Artificial Intelligence Specialist
              </div>
              <div className="text-sm md:text-base text-black/60 dark:text-stone-400 leading-relaxed space-y-4 transition-colors duration-300">
                <p>
                  Lead an AI photo restoration pipeline across 4 structured
                  prompt engineering stages, coordinating 4 team members to
                  shorten stakeholder review cycles.
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
            <div className="text-black/60 dark:text-stone-500 text-sm md:text-base transition-colors duration-300">
              Jul 2024 - Sept 2024
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-6">
            <div>
              <div className="text-2xl md:text-3xl font-serif italic text-stone-900 dark:text-stone-50 mb-3 transition-colors duration-300">
                SP Madrid & Associates Law Firm
              </div>
              <div className="text-base md:text-lg text-black/70 dark:text-stone-400 mb-4 transition-colors duration-300">
                UI/UX Designer & Low-Code Developer Intern
              </div>
              <div className="text-sm md:text-base text-black/60 dark:text-stone-400 leading-relaxed space-y-4 transition-colors duration-300">
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
            <div className="text-black/60 dark:text-stone-500 text-sm md:text-base transition-colors duration-300">
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
      <h2 className="font-display font-bold text-stone-900 dark:text-stone-100 mb-12 uppercase tracking-wide transition-colors duration-300">
        COMMUNITY & LEADERSHIP
      </h2>
      <div className="grid md:grid-cols-[1fr,200px] gap-x-8 gap-y-6">
        <div>
          <div className="text-2xl md:text-3xl font-serif italic text-stone-900 dark:text-stone-50 mb-3 transition-colors duration-300">
            Arc Community
          </div>
          <div className="text-base md:text-lg text-black/70 dark:text-stone-400 mb-4 transition-colors duration-300">
            Staff Member
          </div>
          <div className="text-sm md:text-base text-black/60 dark:text-stone-400 leading-relaxed space-y-4 transition-colors duration-300">
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
        <div className="text-black/60 dark:text-stone-500 text-sm md:text-base transition-colors duration-300">
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
    <div className="max-w-4xl mx-auto mb-10">
      <h2
        className="font-display font-bold text-stone-900 dark:text-stone-100 mb-6 transition-colors duration-300"
        style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
      >
        My current <em className="font-serif italic">favourites</em>
      </h2>
      <p className="text-base md:text-lg text-stone-900 dark:text-stone-300 mb-8 transition-colors duration-300">
        When I&apos;m not coding or designing, you can catch me at a local
        coffee shop with my camera, reading, or perfecting my bodyweight
        exercises. Here&apos;s what&apos;s currently on rotation:
      </p>

      <div className="space-y-4 text-base md:text-lg leading-relaxed">
        <div>
          <span className="font-semibold text-stone-900 dark:text-stone-300 transition-colors duration-300">
            Book:
          </span>
          <span className="text-stone-900 dark:text-stone-300 transition-colors duration-300">
            {" "}
            Atomic Habits, Meditations, Think and Grow Rich, The Way of the
            Superior Man, How to Win Friends and Influence People
          </span>
        </div>

        <div>
          <span className="font-semibold text-stone-900 dark:text-stone-300 transition-colors duration-300">
            Manhwa:
          </span>
          <span className="text-stone-900 dark:text-stone-300 transition-colors duration-300">
            {" "}
            Solo Leveling, Tower of God, The God of High School
          </span>
        </div>

        <div>
          <span className="font-semibold text-stone-900 dark:text-stone-300 transition-colors duration-300">
            Movie:
          </span>
          <span className="text-stone-900 dark:text-stone-300 transition-colors duration-300">
            {" "}
            Blade Runner, The Matrix, Fight Club, Dune, The Batman, American
            Assassin
          </span>
        </div>

        <div>
          <span className="font-semibold text-stone-900 dark:text-stone-300 transition-colors duration-300">
            TV Shows:
          </span>
          <span className="text-stone-900 dark:text-stone-300 transition-colors duration-300">
            {" "}
            Dark, Black Mirror, Breaking Bad, You, The 100, Attack on Titan,
            Jujutsu Kaisen, Chainsaw Man, Lord of the Mysteries
          </span>
        </div>

        <div>
          <span className="font-semibold text-stone-900 dark:text-stone-300 transition-colors duration-300">
            Music:
          </span>
          <span className="text-stone-900 dark:text-stone-300 transition-colors duration-300">
            {" "}
            Currently vibing to lo-fi beats while working, it&apos;s the perfect
            background noise
          </span>
        </div>

        <div>
          <span className="font-semibold text-stone-900 dark:text-stone-300 transition-colors duration-300">
            Food:
          </span>
          <span className="text-stone-900 dark:text-stone-300 transition-colors duration-300">
            {" "}
            Can&apos;t live without Oatmeal, Adobong Manok, Kare-Kare, and
            Nilagang Baka
          </span>
        </div>

        <div>
          <span className="font-semibold text-stone-900 dark:text-stone-300 transition-colors duration-300">
            Clothing:
          </span>
          <span className="text-stone-900 dark:text-stone-300 transition-colors duration-300">
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
    src: "/assets/videos/snippet_life/clean_handstand_press_90_degree_hold_beach_sunset_reymar.mp4",
    alt: "Handstand press hold at beach sunset",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet_life/handstand_sunset_red_beach.mp4",
    alt: "Handstand practice at red beach sunset",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet_life/handstand_with_me_reymar.mp4",
    alt: "Handstand session at the beach",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/gymnnastic_rings_forest_reymar_1.jpg",
    alt: "Gymnastic rings training in the forest",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/gymnnastic_rings_forest_reymar_2.jpg",
    alt: "Gymnastic rings workout in nature",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/handstand_forest_reymar.jpg",
    alt: "Handstand practice in the forest",
    aspectRatio: "3/4",
    type: "image",
  },

  // Gym & Training
  {
    src: "/assets/videos/snippet_life/punching_bag_muaythai_gym.mp4",
    alt: "Muay Thai punching bag workout",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet_life/shadowboxing_night_rain_bluehour_reymar.mp4",
    alt: "Shadowboxing at night in the rain",
    aspectRatio: "9/16",
    type: "video",
  },

  // Running & Outdoor Activities
  {
    src: "/assets/videos/snippet_life/run_fishermen_reymar.mp4",
    alt: "Running past fishermen by the water",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/running_face_clear_skin_side_view_reymar.jpg",
    alt: "Running outdoors with clear sky",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/running_lying_down_grass_reymar.jpg",
    alt: "Resting on grass after a run",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/running_side_view_mullet_reymar.jpg",
    alt: "Running side view with mullet haircut",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/running_sit_guard_rail_grass_maragondon_reymar.jpg",
    alt: "Running session at Maragondon grass field",
    aspectRatio: "3/4",
    type: "image",
  },

  // Beach & Nature
  {
    src: "/assets/images/photo_highlights_reymar_mirante/beach_all_white_guitar_reymar.jpg",
    alt: "Beach moment in all white with guitar",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/beach_physique_calvin_klein_reymar.jpg",
    alt: "Beach physique in Calvin Klein",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/beach_physique_sunset_grown_blow_out_taper_reymar.jpg",
    alt: "Beach physique at sunset with blow out taper",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/beach_sunset_blow_out_taper_side_view_reymar.jpg",
    alt: "Beach sunset blow out taper side view",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/physique_beach_front_back_reymar_1.jpg",
    alt: "Beach physique front view",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/physique_beach_front_back_reymar_2.jpg",
    alt: "Beach physique back view",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/physique_forest_reymar.jpg",
    alt: "Physique shot in the forest",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/utod_river_falls_tree_sunkiss_reymar_2.jpg",
    alt: "River falls tree sun-kissed moment",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/utod_river_falls_stand_reymar_1.jpg",
    alt: "Standing at Utod river falls",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/utod_river_falls_physique_back_friends_swim_river_reymar_5.jpg",
    alt: "River falls swim with friends",
    aspectRatio: "3/4",
    type: "image",
  },

  // Fashion & Style
  {
    src: "/assets/images/photo_highlights_reymar_mirante/mall_mirror_shot_uniqlo_blow_out_taper_reymar_3.jpg",
    alt: "Fit check mirror shot at Uniqlo",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/mall_sit_blow_out_taper_reymar_2.jpg",
    alt: "Sit down blow out taper fit at mall",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/side_view_blow_out_taper_forest_reymar.jpg",
    alt: "Side view blow out taper in the forest",
    aspectRatio: "3/4",
    type: "image",
  },

  // Food & Cooking
  {
    src: "/assets/videos/snippet_life/milkfish_food.mp4",
    alt: "Milkfish food preparation",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet_life/shrimp_food.mp4",
    alt: "Shrimp food preparation",
    aspectRatio: "9/16",
    type: "video",
  },

  // Creative & Work
  {
    src: "/assets/videos/snippet_life/day_in_the_life_reymar.mp4",
    alt: "Day in the life at work",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/hold_camera_church_reymar.jpg",
    alt: "Holding camera at church",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/hold_camera_mirror_shot_reymar.jpg",
    alt: "Mirror shot with camera",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/macbook_type_starbucks_reymar.jpg",
    alt: "Typing on MacBook at Starbucks",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/painting_reymar.jpg",
    alt: "Painting artwork",
    aspectRatio: "3/4",
    type: "image",
  },

  // Internship & Work Life
  {
    src: "/assets/images/photo_highlights_reymar_mirante/formal_mirror_shot_cs_internship_event.jpg",
    alt: "Formal mirror shot at internship event",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/videos/snippet_life/intern_behind_the_scenes_videography_reymar.mp4",
    alt: "Behind the scenes videography at internship",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet_life/internship_behind_the_scene_videography.mp4",
    alt: "Internship behind the scenes videography",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet_life/internship_billiads.mp4",
    alt: "Billiards during internship break",
    aspectRatio: "9/16",
    type: "video",
  },

  // Museums & Culture
  {
    src: "/assets/videos/snippet_life/bgc_museum_reymar.mp4",
    alt: "BGC museum visit",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet_life/national_museum_painting.mp4",
    alt: "National Museum painting exploration",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/national_museum_architecture_design_2.jpg",
    alt: "National Museum architecture design",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/national_museum_architecture_design.jpg",
    alt: "National Museum architecture",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/national_museum_jose_rizal_painting_reymar.jpg",
    alt: "Jose Rizal painting at National Museum",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/national_museum_old_money_fit_check_stand_reymar.jpg",
    alt: "Old money fit check at National Museum",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/national_museum_painting_spolarium_reymar.jpg",
    alt: "Spolarium painting at National Museum",
    aspectRatio: "3/4",
    type: "image",
  },

  // Travel & Adventures
  {
    src: "/assets/images/photo_highlights_reymar_mirante/acienda_designer_outlet_reymar_1.jpg",
    alt: "Hacienda visit at designer outlet",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/acienda_designer_outlet_reymar_2.jpg",
    alt: "Hacienda exploration at designer outlet",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/acienda_designer_outlet_reymar_3.jpg",
    alt: "Hacienda adventure at designer outlet",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/pasig_river_esplanade_night_light_architecture_1.jpg",
    alt: "Pasig River Esplanade night architecture",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/pasig_river_esplanade_night_light_architecture_2.jpg",
    alt: "Pasig River Esplanade night view",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/pasig_river_esplanade_stand_reymar.jpg",
    alt: "Standing at Pasig River Esplanade",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/skyranch_night_light_reymar_2.jpg",
    alt: "Sky Ranch night light",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/skyranch_night_light_reymar.jpg",
    alt: "Sky Ranch night view",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/skyranch_night_light.jpg",
    alt: "Sky Ranch night scene",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/tagaytay_mountai_2.jpg",
    alt: "Tagaytay mountain trip",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/tagaytay_mountain_sign.jpg",
    alt: "Tagaytay mountain sign",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/tagaytay_mountain_stand_all_black_fit_reymar_1.jpg",
    alt: "Tagaytay mountain all black fit",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/tagaytay_mountain_sunset_pink_road_night_light.jpg",
    alt: "Tagaytay sunset pink road night light",
    aspectRatio: "3/4",
    type: "image",
  },

  // Events & Community
  {
    src: "/assets/videos/snippet_life/ccl_anniversary_reymar.mp4",
    alt: "CCL anniversary celebration",
    aspectRatio: "9/16",
    type: "video",
  },

  // Family & Personal
  {
    src: "/assets/images/photo_highlights_reymar_mirante/mall_hold_manga_reymar_1.jpg",
    alt: "Mall day holding manga",
    aspectRatio: "3/4",
    type: "image",
  },
  {
    src: "/assets/images/photo_highlights_reymar_mirante/mall_hold_shopping_reymar_4.jpg",
    alt: "Shopping at the mall",
    aspectRatio: "3/4",
    type: "image",
  },

  // Hobbies & Personal
  {
    src: "/assets/videos/snippet_life/guitar_frank_ocean_reymar.mp4",
    alt: "Playing guitar - Frank Ocean",
    aspectRatio: "9/16",
    type: "video",
  },
  {
    src: "/assets/videos/snippet_life/my_room_dark_cat.mp4",
    alt: "My room setup with cat",
    aspectRatio: "9/16",
    type: "video",
  },
];

// Media Item Component with loading states
const MediaItem = ({ item }: { item: (typeof lifeSnippets)[0] }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative"
      style={{
        paddingBottom: getAspectRatioPadding(item.aspectRatio),
      }}
    >
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0">
          <MediaSkeleton aspectRatio={item.aspectRatio} />
        </div>
      )}

      {/* Actual media */}
      {item.type === "video" ? (
        <motion.video
          src={item.src}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: isLoaded ? 1 : 0 }}
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }}
          aria-label={item.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
          style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.4s" }}
          priority={false}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

const LifeGallery = () => {
  return (
    <AnimatedSection className="container mx-auto pt-16 pb-10" delay={0.3}>
      <div className="max-w-4xl mx-auto mb-16">
        <h2
          className="font-display font-bold text-stone-900 dark:text-stone-100 mb-8 text-center sm:text-left transition-colors duration-300"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          Snippets of my <em className="font-serif italic">life</em> outside of
          work
        </h2>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {lifeSnippets.map((item, index) => (
          <motion.div key={index} className="break-inside-avoid mb-4">
            <motion.div
              className="relative overflow-hidden rounded-none shadow-sm bg-stone-100 dark:bg-stone-800 transition-colors duration-300"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                transition: { duration: 0.2 },
              }}
            >
              <MediaItem item={item} />
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
    <main className="bg-white dark:bg-stone-950 min-h-screen flex flex-col transition-colors duration-300">
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
