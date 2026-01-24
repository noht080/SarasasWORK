"use client";

import type { ReactNode } from "react";

interface GradientTextProps {
  colors: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  className?: string;
  children: ReactNode;
}

export default function GradientText({
  colors,
  animationSpeed = 8,
  showBorder = false,
  className = "",
  children,
}: GradientTextProps) {
  const doubledColors = [...colors, ...colors];
  const gradient = `linear-gradient(90deg, ${doubledColors.join(", ")})`;

  return (
    <span
      className={`gradient-text ${showBorder ? "gradient-text--border" : ""} ${className}`}
      style={{ backgroundImage: gradient, animationDuration: `${animationSpeed}s` }}
    >
      {children}
      <style jsx>{`
        .gradient-text {
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: gradientShift linear infinite;
        }

        .gradient-text--border {
          padding: 0.1em 0.35em;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(82, 39, 255, 0.25);
        }

        @keyframes gradientShift {
          0% {
            background-position: 200% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </span>
  );
}
