"use client";

import { useEffect, useState } from "react";

export function ContactHighlight() {
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#contato") {
      setTimeout(() => {
        setShowGlow(true);
        setTimeout(() => setShowGlow(false), 2000);
      }, 500);
    }
  }, []);

  if (!showGlow) return null;

  return (
    <style jsx global>{`
      @keyframes glow-pulse {
        0%, 100% { box-shadow: 0 0 0 rgba(124, 111, 255, 0); }
        25%, 75% { box-shadow: 0 0 30px rgba(124, 111, 255, 0.5), 0 0 60px rgba(0, 229, 255, 0.3); }
        50% { box-shadow: 0 0 40px rgba(124, 111, 255, 0.7), 0 0 80px rgba(0, 229, 255, 0.5); }
      }
      @keyframes glow-border {
        0%, 100% { border-color: rgba(124, 111, 255, 0.18); }
        50% { border-color: rgba(124, 111, 255, 0.8); }
      }
      #contato .contact-glow {
        animation: glow-pulse 2s ease-in-out, glow-border 2s ease-in-out;
        border-radius: 1rem;
      }
    `}</style>
  );
}