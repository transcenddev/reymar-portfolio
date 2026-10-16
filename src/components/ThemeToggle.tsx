"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const pressStart = useRef<number | null>(null);
  const wasLongPress = useRef(false);

  // useEffect only runs on the client, so we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-3 text-neutral-800 dark:text-neutral-300 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        <div className="size-5" />
      </button>
    );
  }

  // resolvedTheme is always "light" | "dark" once mounted, even when
  // theme === "system". This lets a 2-state button reflect the actual
  // applied mode without guessing.
  const current = resolvedTheme || theme || "light";
  const isDark = current === "dark";

  // Click: flip to the opposite EXPLICIT mode (locks the choice)
  const toggle = () => setTheme(isDark ? "light" : "dark");

  // Long-press / secondary click: return to system preference
  const reset = () => setTheme("system");

  const HOLD_MS = 450;

  return (
    <button
      onClick={() => {
        // A long-press already handled the action via onPointerUp; do not
        // also fire the click toggle, or the reset would be undone instantly.
        if (wasLongPress.current) {
          wasLongPress.current = false;
          return;
        }
        toggle();
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        reset();
      }}
      onPointerDown={() => {
        pressStart.current = Date.now();
        wasLongPress.current = false;
      }}
      onPointerUp={() => {
        if (pressStart.current === null) return;
        const held = Date.now() - pressStart.current;
        pressStart.current = null;
        // A hold long enough to be a gesture (not a tap) resets to system.
        if (held >= HOLD_MS) {
          wasLongPress.current = true;
          reset();
        }
      }}
      onPointerCancel={() => {
        pressStart.current = null;
        wasLongPress.current = false;
      }}
      onPointerLeave={() => {
        pressStart.current = null;
        wasLongPress.current = false;
      }}
      className="p-3 text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950"
      aria-label={`Toggle theme: currently ${current}`}
      title={`Theme: ${current} (click to switch, hold to use system)`}
    >
      {/* Sun: visible in light mode, click switches to dark */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className={`size-5 transition-all duration-200 ${
          !isDark ? "block rotate-0" : "hidden"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>

      {/* Moon: visible in dark mode, click switches to light */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className={`size-5 transition-all duration-200 ${
          isDark ? "block rotate-0" : "hidden"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>
    </button>
  );
};
