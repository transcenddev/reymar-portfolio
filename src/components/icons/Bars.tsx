import React from "react";

interface BarsProps {
  className?: string;
  size?: number;
}

export const Bars: React.FC<BarsProps> = ({ className = "", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="3" y="15" width="18" height="2" fill="currentColor" />
      <rect x="3" y="7" width="18" height="2" fill="currentColor" />
    </svg>
  );
};
