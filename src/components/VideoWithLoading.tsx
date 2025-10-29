"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MediaSkeleton from "./MediaSkeleton";

interface VideoWithLoadingProps {
  src: string;
  alt: string;
  aspectRatio: string;
  className?: string;
  onVideoClick?: () => void;
}

export default function VideoWithLoading({
  src,
  alt,
  aspectRatio,
  className = "",
  onVideoClick,
}: VideoWithLoadingProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <MediaSkeleton aspectRatio={aspectRatio} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.video
        src={src}
        muted
        loop
        playsInline
        className={className}
        style={{ opacity: isLoaded ? 1 : 0 }}
        onLoadedData={() => setIsLoaded(true)}
        onClick={onVideoClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}
