"use client";

import { useState, useEffect, type ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { projects, ContentBlock } from "@/data/projects";
import { useDictionary } from "@/i18n/use-dictionary";
import { getImagePath } from "@/utils/get-image-path";


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
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoom(1);
    setMousePos({ x: 50, y: 50 });
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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center cursor-zoom-out"
      onClick={onClose}
    >

      {/* Botão de Fechar mais visível */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-24 right-6 p-3 text-white/70 hover:text-white transition-all z-10 bg-white/10 hover:bg-white/20 rounded-full border border-white/10"
        aria-label="Close"
      >

        <X size={32} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1)); }}
        className="absolute left-6 p-4 text-white/70 hover:text-white transition-all bg-black/40 rounded-full hover:bg-black/60 border border-white/5 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={36} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0)); }}
        className="absolute right-6 p-4 text-white/70 hover:text-white transition-all bg-black/40 rounded-full hover:bg-black/60 border border-white/5 z-10"
        aria-label="Next image"
      >
        <ChevronRight size={36} />
      </button>

      <div
        className={`relative w-full h-full max-w-[90vw] max-h-[85vh] flex items-center justify-center overflow-hidden transition-cursor ${zoom > 1 ? "cursor-move" : "cursor-zoom-in"}`}
        onClick={(e) => {
          e.stopPropagation();
          setZoom((z) => (z === 1 ? 2.5 : 1));
        }}
        onMouseMove={handleMouseMove}
      >
        <div
          className="relative transition-transform duration-200 ease-out"
          style={{ 
            transform: `scale(${zoom})`,
            transformOrigin: `${mousePos.x}% ${mousePos.y}%`
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

        {zoom > 1 && (
          <div className="absolute bottom-10 right-10 flex gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); setZoom(1); }}
              className="p-2 text-white/70 hover:text-white transition-colors bg-black/50 rounded-full border border-white/10"
              aria-label="Reset zoom"
            >
              <ZoomOut size={24} />
            </button>
          </div>
        )}
      </div>

      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 p-2 bg-black/20 backdrop-blur-md rounded-full border border-white/5"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white w-8" : "bg-white/20 w-2 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {currentImage.caption && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <p className="text-white/90 text-base font-medium">{currentImage.caption}</p>
          <p className="text-white/40 text-xs mt-1 uppercase tracking-widest">
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
                src={getImagePath(block.content)}
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
                    src={getImagePath(imgBlock.content)}
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

export function ProjectContent({ project, lang = "pt" }: { project: typeof projects[0]; lang?: "pt" | "en" }) {
  const d = useDictionary();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const isEn = lang === "en";
  
  const description = isEn && project.descriptionEn ? project.descriptionEn : project.description;
  const challenge = isEn && project.challengeEn ? project.challengeEn : project.challenge;
  const solution = isEn && project.solutionEn ? project.solutionEn : project.solution;
  const process = isEn && project.processEn ? project.processEn : project.process;
  const results = isEn && project.resultsEn ? project.resultsEn : project.results;
  const metrics = isEn && project.metricsEn ? project.metricsEn : project.metrics;
  const content = isEn && project.contentEn ? project.contentEn : project.content;

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

  const projectsLink = lang === "en" ? "/en/projects" : "/projects";
  const projectLink = lang === "en" ? `/en/projects/${project.slug}` : `/projects/${project.slug}`;

  return (
    <>
      <article className="py-20 bg-[#08080f]">
        <div className="container mx-auto px-4 max-w-5xl">

          <Link
            href={projectsLink}
            className="inline-flex items-center gap-2 text-[#7878a0] hover:text-[#7c6fff] transition-colors mb-8"
          >
            ← {d.projectDetail.back}
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
              src={getImagePath(project.images[0])}
              alt={project.title}

              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-contain hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-8">

            <section>
              <h2 className="section-label mb-3">{d.projectDetail.overview}</h2>
              <p className="text-base text-[#e8e8f4] leading-relaxed">{description}</p>
            </section>

            <section>
              <h2 className="section-label mb-3">{d.projectDetail.challenge}</h2>
              <div className="text-[#7878a0] whitespace-pre-line leading-relaxed">{challenge}</div>
            </section>

            <section>
              <h2 className="section-label mb-3">{d.projectDetail.solution}</h2>
              <div className="text-[#7878a0] whitespace-pre-line leading-relaxed">{solution}</div>
            </section>

            <section>
              <h2 className="section-label mb-3">{d.projectDetail.process}</h2>
              <p className="text-[#7878a0]">{process}</p>
            </section>

            <section className="card p-6">
              <h2 className="section-label mb-4">{d.projectDetail.results}</h2>
              <p className="text-xl fw-semibold text-gradient mb-4">{results}</p>
              <div className="flex gap-2 flex-wrap">
                {metrics.map((metric) => (
                  <span key={metric} className="chip">{metric}</span>
                ))}
              </div>
            </section>

            {content && content.length > 0 && (
              <section className="border-t border-[rgba(124,111,255,0.18)] pt-8">
                <ContentRenderer
                  content={content}
                  onImageClick={handleContentImageClick}
                />
              </section>
            )}

            {project.images.length > 1 && (
              <section className="border-t border-[rgba(124,111,255,0.18)] pt-8">
                <h2 className="section-label mb-4">{d.projectDetail.gallery}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square bg-[#10101a] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => handleGalleryClick(idx)}
                    >
                      <Image
                        src={getImagePath(img)}
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
              <Link href={projectsLink} className="text-sm text-[#7878a0] hover:text-[#7c6fff] transition-colors">
                {d.projectDetail.backToList}
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