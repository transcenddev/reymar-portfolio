"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for images and videos to load
    const handleLoad = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900"
        >
          <div className="text-center">
            {/* Spinner */}
            <motion.div
              className="relative w-16 h-16 mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="absolute inset-0 border-4 border-stone-700 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full"></div>
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="text-stone-400 text-sm font-normal"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
