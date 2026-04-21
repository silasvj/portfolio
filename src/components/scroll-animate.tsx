"use client";

import { useEffect, useRef } from "react";

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollAnimate({ children, className = "", delay = 0 }: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = delay + "ms";
            el.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} data-animate className={className}>
      {children}
    </div>
  );
}