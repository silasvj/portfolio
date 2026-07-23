"use client";

import { useEffect, useRef, useCallback } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
  /** Se true, aplica stagger nos children diretos */
  stagger?: boolean;
  /** Delay entre cada item do stagger (ms) */
  staggerDelay?: number;
  /** Efeito parallax sutil (fração 0-1) */
  parallax?: number;
}

const directionMap: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

export function ScrollAnimate({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 550,
  stagger = false,
  staggerDelay = 80,
  parallax,
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const handleIntersect = useCallback(
    (entry: IntersectionObserverEntry) => {
      if (hasAnimated.current) return;

      const el = entry.target as HTMLElement;

      if (stagger) {
        const items = Array.from(el.children) as HTMLElement[];
        items.forEach((item, i) => {
          const d = directionMap[direction];
          item.style.opacity = "0";
          item.style.transform = `translate(${d.x}px, ${d.y}px)`;
          item.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
          item.style.transitionDelay = `${delay + i * staggerDelay}ms`;
          requestAnimationFrame(() => {
            item.style.opacity = "1";
            item.style.transform = "translate(0, 0)";
          });
        });
      } else {
        el.style.transitionDelay = delay + "ms";
        el.classList.add("visible");
      }

      // Parallax sutil
      if (parallax && parallax > 0) {
        const handleScroll = () => {
          const rect = el.getBoundingClientRect();
          const scrolled = window.innerHeight - rect.top;
          const offset = scrolled * parallax * 0.05;
          el.style.transform = `translateY(${Math.min(offset, 30)}px)`;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
      }

      hasAnimated.current = true;
    },
    [delay, direction, duration, stagger, staggerDelay, parallax]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleIntersect(entry);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    // Se for stagger, prepara os children
    if (stagger) {
      const items = Array.from(el.children) as HTMLElement[];
      items.forEach((item) => {
        const d = directionMap[direction];
        item.style.opacity = "0";
        item.style.transform = `translate(${d.x}px, ${d.y}px)`;
        item.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
      });
    }

    observer.observe(el);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (stagger) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const dirStyle = direction !== "up" ? directionMap[direction] : null;

  return (
    <div
      ref={ref}
      data-animate
      className={className}
      style={
        dirStyle
          ? ({
              "--animate-x": `${dirStyle.x}px`,
              "--animate-y": `${dirStyle.y}px`,
            } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}