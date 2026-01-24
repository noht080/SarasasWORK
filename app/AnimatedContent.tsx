"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "vertical" | "horizontal";

interface AnimatedContentProps {
  children: React.ReactNode;
  distance?: number;
  direction?: Direction;
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  className?: string;
}

const easeMap: Record<string, string> = {
  "power3.out": "cubic-bezier(0.22, 1, 0.36, 1)",
  "power2.out": "cubic-bezier(0.22, 0.61, 0.36, 1)",
  "power1.out": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
};

function resolveEase(ease?: string) {
  if (!ease) return "cubic-bezier(0.22, 1, 0.36, 1)";
  return easeMap[ease] ?? ease;
}

export default function AnimatedContent({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  className,
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const offset = reverse ? -distance : distance;
  const translate =
    direction === "vertical"
      ? `translateY(${offset}px)`
      : `translateX(${offset}px)`;
  const transitionEase = resolveEase(ease);
  const transition = `transform ${duration}s ${transitionEase} ${delay}s, opacity ${duration}s ${transitionEase} ${delay}s`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: isVisible ? "translate(0, 0) scale(1)" : `${translate} scale(${scale})`,
        opacity: animateOpacity ? (isVisible ? 1 : initialOpacity) : 1,
        transition,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
