import React from "react";

interface ChevronDoubleDownProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export const ChevronDoubleDown: React.FC<ChevronDoubleDownProps> = ({
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
        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
      />
    </svg>
  );
};
