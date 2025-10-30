"use client";

import { FC, useState, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

// Import actual project images from public assets
const projects = [
  {
    id: "sp-madrid-ai-multimedia",
    name: "Reviving Memories with AI",
    image: "/assets/images/sp-madrid-exhibition.jpg",
  },
  {
    id: "read-ai-website",
    name: "Read AI",
    image: "/assets/images/read-ai-webdesign1.png",
  },
  {
    id: "covid-health-declaration",
    name: "COVID-19 Health Declaration System",
    image: "/assets/images/covid-hero.png",
  },
];

const ProjectItem: FC<{
  id: string;
  name: string;
  image: string;
}> = ({ id, name, image }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    setMousePosition({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    setMousePosition({ x: e.clientX + 20, y: e.clientY + 20 });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href={`/projects/${id}`}
      className="text-left border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10 flex flex-col relative group/project w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-stone-300"></div>
      <div className="relative">
        <div className="aspect-video md:hidden rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={`${name} preview`}
            width={800}
            height={450}
            className="size-full object-cover"
          />
        </div>
        <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
          <div className="group-hover/project:pl-4 transition-all duration-700">
            <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
          </div>

          {/* Mouse-following preview image - Desktop only */}
          <div className="hidden md:block pointer-events-none">
            <div
              className="fixed w-80 aspect-video rounded-xl overflow-hidden shadow-2xl z-50"
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
                transform: "translate(-50%, -50%)",
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            >
              <Image
                src={image}
                alt={`${name} preview`}
                width={800}
                height={450}
                className="size-full object-cover"
              />
            </div>
          </div>

          <div className="lg:group-hover/project:pr-4 transition-all duration-700">
            <div className="size-6 overflow-hidden">
              <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Projects: FC = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Works</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map(({ id, name, image }) => (
            <ProjectItem key={id} id={id} name={name} image={image} />
          ))}
        </div>

        {/* More Work Button */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-stone-400 rounded-full hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <span className="text-base md:text-lg font-medium">
              View All Work
            </span>
            <div className="overflow-hidden size-5">
              <div className="h-5 w-10 flex group-hover:-translate-x-1/2 transition-transform duration-300">
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
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
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
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
