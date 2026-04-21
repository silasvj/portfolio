"use client";

import { useEffect, useRef } from "react";

export function CursorProvider() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let mx = 0, my = 0, cx = 0, cy = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };

    const animate = () => {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      ring.style.left = cx + "px";
      ring.style.top = cy + "px";
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    const expandableSelectors = "a, button, [data-cursor-expand]";
    
    const handleExpand = () => ring.classList.add("expanded");
    const handleUnexpand = () => ring.classList.remove("expanded");

    document.querySelectorAll(expandableSelectors).forEach((el) => {
      el.addEventListener("mouseenter", handleExpand);
      el.addEventListener("mouseleave", handleUnexpand);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={ringRef!} className="cursor-ring hidden md:block" />
      <div ref={dotRef!} className="cursor-dot hidden md:block" />
    </>
  );
}