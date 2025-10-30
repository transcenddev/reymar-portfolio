"use client";
import Button from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useAnimate } from "motion/react";
// import { a, div, nav } from "motion/react-client";

const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Play",
    href: "/play",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]);

      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ]);

      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
        }
      );
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);

      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);

      navAnimate(navScope.current, { height: 0 });
    }
  }, [
    isOpen,
    topLineAnimate,
    bottomLineAnimate,
    topLineScope,
    bottomLineScope,
    navAnimate,
    navScope,
  ]);

  const navigateToHashOrRoute = (href: string) => {
    if (!href) return;

    if (href.startsWith("#")) {
      // Check if we're on the home page
      const isHomePage = window.location.pathname === "/";

      if (isHomePage) {
        // If on home page, use smooth scroll
        const target = document.querySelector(href);
        if (target) {
          (target as HTMLElement).scrollIntoView({ behavior: "smooth" });
          return;
        }
      } else {
        // If on another page, navigate to home page with hash
        router.push(`/${href}`);
      }
    } else if (href.startsWith("/")) {
      router.push(href);
    }
  };

  const handleClickMobileNavItem = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    navigateToHashOrRoute(href);
  };

  return (
    <header className="">
      {/* Mobile Navigation Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-white dark:bg-stone-900 z-20 transition-colors duration-300"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col ">
          {navItems.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="text-stone-900 dark:text-stone-200 border-t border-stone-200 dark:border-stone-800 last:border-b py-8 group/nav-item relative isolate transition-colors duration-300"
              onClick={(e) => handleClickMobileNavItem(e, href)}
            >
              <div className="container !max-w-full flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
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
              <div className="absolute w-full h-0 bg-stone-100 dark:bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-20"></div>
            </a>
          ))}
        </nav>
      </div>

      {/* Main Header */}
      <div className="fixed top-0 left-0 w-full backdrop-blur-md z-20 bg-white/80 dark:bg-stone-950/80 transition-colors duration-300">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <motion.a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                }}
                className="cursor-pointer inline-block px-4 py-2 rounded-lg"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(89, 40, 229, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.span
                  className="text-xl font-bold uppercase text-stone-900 dark:text-white transition-colors duration-300"
                  whileHover={{
                    letterSpacing: "0.1em",
                    color: "#5928e5",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Reymar&nbsp;Mirante
                </motion.span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Menu button */}
      <div className="fixed top-0 left-0 w-full z-20">
        <div className="container !max-w-full">
          <div className="flex justify-end h-20 items-center">
            <div className="flex items-center gap-4">
              {/* Theme Toggle Button */}
              <ThemeToggle />
              
              {/* Menu button */}
              <div
                className="size-11 border border-stone-300 dark:border-stone-600 rounded-full inline-flex items-center justify-center bg-white dark:bg-stone-800 text-stone-900 dark:text-white hover:bg-stone-50 dark:hover:bg-stone-700 cursor-pointer transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "12px 8px",
                    }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "12px 16px",
                    }}
                  />
                </svg>
              </div>
              <Button
                variant="primary"
                className="hidden md:inline-flex"
                onClick={() => {
                  const isHomePage = window.location.pathname === "/";
                  if (isHomePage) {
                    const el = document.querySelector("#contact");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  } else {
                    router.push("/#contact");
                  }
                }}
              >
                Contact Me
              </Button>
              {/* <Button variant="primary" className="hidden md:inline-flex">
                Contact Me
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
