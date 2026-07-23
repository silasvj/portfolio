"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { getImagePath } from "@/utils/get-image-path";

interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

export function Lightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
}: {
  images: LightboxImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoom(1);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      if (e.key === "ArrowRight")
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, images.length]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 p-3 text-white/70 hover:text-white transition-all z-10 bg-white/10 hover:bg-white/20 rounded-full"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex((prev) =>
            prev > 0 ? prev - 1 : images.length - 1
          );
        }}
        className="absolute left-4 z-10 p-3 text-white/70 hover:text-white transition-all bg-black/40 hover:bg-black/60 rounded-full"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex((prev) =>
            prev < images.length - 1 ? prev + 1 : 0
          );
        }}
        className="absolute right-4 z-10 p-3 text-white/70 hover:text-white transition-all bg-black/40 hover:bg-black/60 rounded-full"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>

      <div
        className="relative w-full h-full max-w-[90vw] max-h-[85vh] flex items-center justify-center overflow-hidden"
        onClick={(e) => {
          e.stopPropagation();
          setZoom((z) => (z === 1 ? 2.5 : 1));
        }}
        onMouseMove={(e) => {
          if (zoom <= 1) return;
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          });
        }}
      >
        <div
          className="relative transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
          }}
        >
          <Image
            src={getImagePath(currentImage.src)}
            alt={currentImage.alt}
            width={1200}
            height={800}
            className="max-w-[90vw] max-h-[75vh] w-auto h-auto object-contain pointer-events-none"
            priority
          />
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-3 py-2"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-white w-6"
                : "bg-white/20 w-2 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {currentImage.caption && (
        <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
          {currentImage.caption}
          <span className="text-white/40 ml-2">
            {currentIndex + 1}/{images.length}
          </span>
        </p>
      )}
    </div>,
    document.body
  );
}
