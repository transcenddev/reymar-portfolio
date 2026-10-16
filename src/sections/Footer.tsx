"use client";

import Button from "@/components/Button";
import { FC } from "react";

const navItems = [
  {
    href: "#hero",
    label: "Home",
  },
  {
    href: "#work",
    label: "Projects",
  },
  {
    href: "#feedback",
    label: "Testimonials",
  },
  {
    href: "#faqs",
    label: "FAQs",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

// Shared arrow icon component for consistent button icon animation
const ArrowIcon = () => (
  <div className="size-5 overflow-hidden">
    <div className="h-5 w-10 flex group-hover/button:translate-x-1/2 transition-transform duration-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5"
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
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </div>
  </div>
);

const Footer: FC = () => {
  const handleClickNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const isHomePage = window.location.pathname === "/";

    if (isHomePage) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/${hash}`;
    }
  };

  return (
    <footer
      className="bg-stone-950 text-white transition-colors duration-200"
      id="contact"
    >
      <div className="container">
        <div className="section py-20 md:py-28">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-none bg-green-400 animate-pulse"></div>
            <span className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
              One spot available for next month
            </span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="font-display text-statement mt-8 font-bold tracking-tight animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                <span
                  className="block text-neutral-400 font-medium animate-fade-up"
                  style={{ animationDelay: "100ms" }}
                >
                  Enough talk.
                </span>
                <span
                  className="block text-white animate-fade-up"
                  style={{ animationDelay: "200ms" }}
                >
                  Let&apos;s make something <br />
                  great together.
                </span>
              </h2>
              <div className="flex flex-col lg:flex-row gap-4 mt-8">
                <a
                  href="mailto:2049rare@gmail.com"
                  className="w-full lg:w-auto"
                >
                  <Button
                    variant="secondary"
                    className="w-full"
                    iconAfter={<ArrowIcon />}
                  >
                    2049rare@gmail.com
                  </Button>
                </a>
                <Button
                  variant="primary"
                  className="w-full lg:w-auto"
                  onClick={() =>
                    window.open(
                      "https://cal.com/reymarmirante/freelance",
                      "_blank",
                    )
                  }
                  iconAfter={<ArrowIcon />}
                >
                  Book a call
                </Button>
              </div>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-3 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label} onClick={handleClickNavItem}>
                    <Button variant="secondary" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        {/* <div className="py-16 text-white/30 text-sm flex flex-col gap-2 ">
          <p>Reymar Mirante &copy; {new Date().getFullYear()}</p>
          <p>made with crashing out, too much coffee and curiosity</p>
          <p>
            no, wait actually Next.js, React, TypeScript, Tailwind CSS and
            Framer Motion
          </p>
        </div> */}
        <div className="py-6 md:py-8 font-mono text-xs flex flex-col gap-2 uppercase tracking-widest text-stone-500 dark:text-stone-400">
          <p>Reymar Mirante &copy; {new Date().getFullYear()}</p>
          <p>made with crashing out too much coffee and curiosity</p>
          <p>
            no, wait actually Next.js, React, TypeScript, Tailwind CSS and
            Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
