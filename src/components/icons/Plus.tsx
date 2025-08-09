import React from "react";

interface PlusProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export const Plus: React.FC<PlusProps> = ({
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
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};
