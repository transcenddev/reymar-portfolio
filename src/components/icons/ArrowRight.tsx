import React from "react";

interface ArrowRightProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export const ArrowRight: React.FC<ArrowRightProps> = ({
  className = "size-6",
  size = 24,
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
      width={size}
      height={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
};
