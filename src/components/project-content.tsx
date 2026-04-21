"use client";

import { useState, useEffect, type ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { projects, ContentBlock } from "@/data/projects";

function Lightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
}: {
  images: { src: string; alt: string; caption?: string }[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoom(1);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, images.length]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Fechar"
      >
        <X size={28} />
      </button>

      <button
        onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
        className="absolute left-4 p-3 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full hover:bg-black/50"
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={() => setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
        className="absolute right-4 p-3 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full hover:bg-black/50"
        aria-label="Próxima imagem"
      >
        <ChevronRight size={32} />
      </button>

      <div
        className="relative w-full h-full max-w-[90vw] max-h-[85vh] flex items-center justify-center overflow-hidden"
        onClick={() => setZoom((z) => Math.min(z + 0.5, 3))}
      >
        <div
          className="relative transition-transform duration-200"
          style={{ transform: `scale(${zoom})` }}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={1200}
            height={800}
            className="max-w-[90vw] max-h-[75vh] w-auto h-auto object-contain"
            priority
          />
        </div>

        {zoom > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.max(z - 0.5, 1)); }}
            className="absolute bottom-4 right-4 p-2 text-white/70 hover:text-white transition-colors bg-black/50 rounded-full"
            aria-label="Diminuir zoom"
          >
            <ZoomOut size={24} />
          </button>
        )}

        {zoom < 3 && (
          <button
            onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.min(z + 0.5, 3)); }}
            className="absolute bottom-4 right-16 p-2 text-white/70 hover:text-white transition-colors bg-black/50 rounded-full"
            aria-label="Aumentar zoom"
          >
            <ZoomIn size={24} />
          </button>
        )}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {currentImage.caption && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center">
          <p className="text-white/80 text-sm">{currentImage.caption}</p>
          <p className="text-white/50 text-xs mt-1">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </div>
  );
}

function ContentRenderer({
  content,
  onImageClick,
}: {
  content: typeof projects[0]["content"];
  onImageClick: (src: string) => void;
}) {
  const blocks = content || [];
  const elements: ReactElement[] = [];
  
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    
    if (block.type === "text") {
      elements.push(
        <p key={i} className="text-[#7878a0] leading-relaxed whitespace-pre-line">{block.content}</p>
      );
    } else if (block.type === "image") {
      const imageGroup: typeof block[] = [block];
      let j = i + 1;
      while (j < blocks.length && blocks[j].type === "image") {
        imageGroup.push(blocks[j]);
        j++;
      }
      
      if (imageGroup.length === 1) {
        elements.push(
          <figure
            key={i}
            className="my-6 cursor-zoom-in"
            onClick={() => onImageClick(block.content)}
          >
            <div className="relative aspect-video bg-[#10101a] rounded-lg overflow-hidden">
              <Image
                src={block.content}
                alt={block.caption || ""}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            {block.caption && (
              <figcaption className="text-sm text-[#7878a0] mt-2 text-center">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      } else {
        const gridCols = imageGroup.length <= 4 ? 2 : 3;
        elements.push(
          <div 
            key={i} 
            className="grid gap-3 my-6" 
            style={{ 
              gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`
            }}
          >
            {imageGroup.map((imgBlock, idx) => (
              <figure
                key={`${i}-${idx}`}
                className="cursor-zoom-in relative overflow-hidden rounded-lg"
                onClick={() => onImageClick(imgBlock.content)}
              >
                <div className="relative aspect-video bg-[#10101a] rounded-lg overflow-hidden">
                  <Image
                    src={imgBlock.content}
                    alt={imgBlock.caption || ""}
                    fill
                    sizes={`(max-width: 768px) ${100/gridCols}vw, ${672/gridCols}px`}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </figure>
            ))}
          </div>
        );
      }
      
      i = j - 1;
    }
  }
  
  return <div className="space-y-4">{elements}</div>;
}

export function ProjectContent({ project }: { project: typeof projects[0] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleContentImageClick = (src: string) => {
    const idx = project.images.findIndex((img) => img === src);
    if (idx >= 0) {
      setLightboxIndex(idx);
      setLightboxOpen(true);
    }
  };

  const handleGalleryClick = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const lightboxImages = project.images.map((src, idx) => ({
    src,
    alt: `${project.title} - ${idx + 1}`,
  }));

  return (
    <>
      <article className="py-20 bg-[#08080f]">
        <div className="container mx-auto px-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#7878a0] hover:text-[#7c6fff] transition-colors mb-8"
          >
            ← Voltar para projetos
          </Link>

          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-3 py-1 rounded bg-[#10101a] text-[#00e5ff]">{project.year}</span>
              <span className="text-xs px-3 py-1 rounded border border-[rgba(124,111,255,0.18)] text-[#7878a0]">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl fw-bold text-[#e8e8f4] mb-3">{project.title}</h1>
            <p className="text-lg text-[#7878a0]">{project.company}</p>
          </header>

          <div
            className="relative aspect-[16/9] bg-[#10101a] rounded-xl mb-10 cursor-pointer overflow-hidden"
            onClick={() => handleGalleryClick(0)}
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-contain hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <section>
              <h2 className="section-label mb-3">Overview</h2>
              <p className="text-base text-[#e8e8f4] leading-relaxed">{project.description}</p>
            </section>

            <section>
              <h2 className="section-label mb-3">Desafio</h2>
              <div className="text-[#7878a0] whitespace-pre-line leading-relaxed">{project.challenge}</div>
            </section>

            <section>
              <h2 className="section-label mb-3">Solução</h2>
              <div className="text-[#7878a0] whitespace-pre-line leading-relaxed">{project.solution}</div>
            </section>

            <section>
              <h2 className="section-label mb-3">Processo</h2>
              <p className="text-[#7878a0]">{project.process}</p>
            </section>

            <section className="card p-6">
              <h2 className="section-label mb-4">Resultados</h2>
              <p className="text-xl fw-semibold text-gradient mb-4">{project.results}</p>
              <div className="flex gap-2 flex-wrap">
                {project.metrics.map((metric) => (
                  <span key={metric} className="chip">{metric}</span>
                ))}
              </div>
            </section>

            {project.content && project.content.length > 0 && (
              <section className="border-t border-[rgba(124,111,255,0.18)] pt-8">
                <ContentRenderer
                  content={project.content}
                  onImageClick={handleContentImageClick}
                />
              </section>
            )}

            {project.images.length > 1 && (
              <section className="border-t border-[rgba(124,111,255,0.18)] pt-8">
                <h2 className="section-label mb-4">Galeria</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square bg-[#10101a] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => handleGalleryClick(idx)}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            <nav className="flex justify-between gap-4 pt-8 border-t border-[rgba(124,111,255,0.18)]">
              <Link href="/projects" className="text-sm text-[#7878a0] hover:text-[#7c6fff] transition-colors">
                Voltar à lista →
              </Link>
            </nav>
          </div>
        </div>

        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      </article>
    </>
  );
}