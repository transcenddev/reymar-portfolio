"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageWithBlurProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
}

export default function ImageWithBlur({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  className = "",
  priority = false,
}: ImageWithBlurProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0.5 }}
      transition={{ duration: 0.4 }}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        sizes={sizes}
        className={className}
        priority={priority}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+uJpPQAIgQMzVT8Y7AAAAABJRU5ErkJggg=="
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  );
}
