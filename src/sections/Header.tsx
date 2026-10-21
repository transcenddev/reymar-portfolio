"use client";

import { FC, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useAnimate, useScroll, useSpring } from "motion/react";
import { ThemeToggle } from "@/components/ThemeToggle";
import Button from "@/components/Button";

// Feature flags
const SHOW_PLAY_LINK = false;
const SHOW_THEME_TOGGLE = true;

interface NavItem {
  label: string;
  href: string;
  routeOnly?: boolean;
}

const navItems: NavItem[] = [
  ...(SHOW_PLAY_LINK ? [{ label: "Play", href: "/play" }] : []),
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "About",
    href: "#intro",
  },
  { label: "Contact", href: "#contact" },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();
  const router = useRouter();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [topLineScope.current, { translateY: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ]);

      bottomLineAnimate([
        [bottomLineScope.current, { translateY: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ]);

      navAnimate(navScope.current, { opacity: 1 }, { duration: 0.2 });
    } else {
      topLineAnimate([
        [topLineScope.current, { rotate: 0 }],
        [topLineScope.current, { translateY: 0 }],
      ]);

      bottomLineAnimate([
        [bottomLineScope.current, { rotate: 0 }],
        [bottomLineScope.current, { translateY: 0 }],
      ]);

      navAnimate(navScope.current, { opacity: 0 });
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

  // Close the menu with Escape and return focus to the trigger
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Move focus into the menu when it opens
  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
    }
  }, [isOpen]);

  const navigateToHashOrRoute = (href: string, routeOnly = false) => {
    if (!href) return;

    if (routeOnly || href.startsWith("/")) {
      router.push(href);
      return;
    }

    if (href.startsWith("#")) {
      const isHomePage = window.location.pathname === "/";

      if (isHomePage) {
        const target = document.querySelector(href);
        if (target) {
          (target as HTMLElement).scrollIntoView({ behavior: "smooth" });
          return;
        }
      } else {
        router.push(`/${href}`);
      }
    }
  };

  const handleClickMobileNavItem = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    routeOnly = false
  ) => {
    e.preventDefault();
    setIsOpen(false);
    navigateToHashOrRoute(href, routeOnly);
  };

  return (
    <>
      {/* Mobile Navigation Overlay */}
      <div
        id="mobile-nav"
        className={`fixed top-0 left-0 w-full overflow-hidden bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 z-20 transition-all duration-500 ease-in-out ${isOpen ? "h-screen" : "h-0"}`}
        ref={navScope}
        aria-hidden={!isOpen}
        style={{ opacity: isOpen ? 1 : 0 }}
      >
        <div className="absolute inset-0 overflow-y-auto">
            <nav
              className="flex flex-col pt-20 pb-24 min-h-full"
              aria-label="Mobile navigation"
            >
            {navItems.map(({ label, href, routeOnly }, index) => (
              <a
                href={href}
                key={label}
                ref={index === 0 ? firstLinkRef : undefined}
                tabIndex={isOpen ? undefined : -1}
                className="flex items-center justify-between px-6 min-h-[56px] py-4 group/nav-item relative transition-colors duration-200"
                onClick={(e) => handleClickMobileNavItem(e, href, routeOnly)}
              >
                <div className="container !max-w-full flex items-center justify-between">
                  <span className="font-display text-xl font-bold tracking-tight text-stone-900 dark:text-stone-200 opacity-80 group-hover/nav-item:opacity-100 transition-opacity duration-200">
                    {label}
                  </span>
                  <span className="text-2xl text-stone-400 dark:text-stone-600 group-hover/nav-item:text-stone-900 dark:group-hover/nav-item:text-stone-50 opacity-0 group-hover/nav-item:opacity-100 transition-opacity duration-200">›</span>
                </div>
                </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-md z-20 bg-stone-50/90 dark:bg-stone-950/80 border-b border-stone-200 dark:border-stone-800">
        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-primary origin-left"
          style={{ scaleX }}
        />

        <div className="container !max-w-full">
          <div className={`flex items-center h-20 ${isOpen ? "justify-end" : "justify-between"}`}>
            {/* Logo */}
            <div className={isOpen ? "hidden" : ""}>
              <a
                href="/"
                onClick={(e) => {
                  const isHomePage = window.location.pathname === "/";
                  if (isHomePage) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="cursor-pointer inline-block px-4 py-2"
              >
                <span className="font-display text-xl font-bold uppercase text-stone-900 dark:text-stone-200 hover:text-primary transition-colors">
                  Reymar&nbsp;Mirante
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navItems.slice(0, -1).map(({ label, href, routeOnly }) => (
                <a
                  key={label}
                  href={href}
                  className="font-mono text-xs uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                  onClick={(e) => {
                    if (href.startsWith("#") && !routeOnly) {
                      e.preventDefault();
                      navigateToHashOrRoute(href);
                    } else {
                      e.preventDefault();
                      navigateToHashOrRoute(href, routeOnly);
                    }
                  }}
                >
                  {label}
                </a>
              ))}

              {/* Primary CTA */}
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                navigateToHashOrRoute("#contact");
              }}>
                <Button variant="primary" className="text-xs sm:text-sm">
                  Contact Me
                </Button>
              </a>

              {SHOW_THEME_TOGGLE && <ThemeToggle />}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              ref={triggerRef}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
               className="pointer-events-auto md:hidden relative size-11 rounded-none inline-flex items-center justify-center text-stone-900 dark:text-stone-50 cursor-pointer transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0, -4, 0] }}
              transition={{
                duration: 0.8,
                times: [0, 0.2, 0.4, 0.6, 1],
                ease: "easeOut",
                delay: 1.5,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.rect
                  x="3"
                  y="7"
                  width="18"
                  height="2"
                  fill="currentColor"
                  ref={topLineScope}
                  style={{ transformOrigin: "12px 8px" }}
                />
                <motion.rect
                  x="3"
                  y="15"
                  width="18"
                  height="2"
                  fill="currentColor"
                  ref={bottomLineScope}
                  style={{ transformOrigin: "12px 16px" }}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;