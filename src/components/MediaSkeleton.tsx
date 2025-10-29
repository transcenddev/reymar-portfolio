"use client";

import { motion } from "framer-motion";

interface MediaSkeletonProps {
  aspectRatio?: string;
}

export default function MediaSkeleton({
  aspectRatio = "16/9",
}: MediaSkeletonProps) {
  return (
    <div
      className="relative w-full overflow-hidden bg-stone-200 rounded-lg"
      style={{ paddingBottom: getAspectRatioPadding(aspectRatio) }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

// Helper function to convert aspect ratio to padding percentage
const getAspectRatioPadding = (aspectRatio: string): string => {
  const [width, height] = aspectRatio.split("/").map(Number);
  return `${(height / width) * 100}%`;
};
