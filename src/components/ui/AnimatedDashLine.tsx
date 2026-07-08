"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedDashLine() {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] overflow-visible lg:block"
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        stroke="#D97A3D"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeDasharray="8 8"
        strokeDashoffset={drawn ? 0 : 1000}
        pathLength={1000}
        style={{ transition: "stroke-dashoffset 1400ms ease-out" }}
      />
    </svg>
  );
}
