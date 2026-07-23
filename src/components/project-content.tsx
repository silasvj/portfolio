"use client";

import { useState, useEffect, useRef, type ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Briefcase,
  Building2,
  Code2,
} from "lucide-react";
import { projects } from "@/data/projects";
import { getImagePath } from "@/utils/get-image-path";

// ─── Lightbox ───────────────────────────────────────────────────────────────

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

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 p-3 text-white/70 hover:text-white transition-all z-10 bg-white/10 hover:bg-white/20 rounded-full"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1)); }}
        className="absolute left-4 z-10 p-3 text-white/70 hover:text-white transition-all bg-black/40 hover:bg-black/60 rounded-full"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0)); }}
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
            onClick={() => { setCurrentIndex(idx); }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white w-6" : "bg-white/20 w-2 hover:bg-white/40"
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
    </div>
  );
}

// ─── Scroll Reveal Hook ──────────────────────────────────────────────────────

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function AnimateIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} data-animate className={className}>
      {children}
    </div>
  );
}

// ─── Content Block Renderer ─────────────────────────────────────────────────

function parseInlineMarkdown(text: string): ReactElement {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </span>
  );
}

interface ContentSection {
  type: "heading" | "text" | "bullet" | "numbered" | "image" | "empty";
  content: string;
  caption?: string;
}

function classifyBlock(text: string): { type: ContentSection["type"]; content: string } {
  const trimmed = text.trim();
  if (!trimmed) return { type: "empty", content: "" };
  if (/^\*\*.+\*\*$/.test(trimmed)) {
    return { type: "heading", content: trimmed.replace(/^\*\*|\*\*$/g, "") };
  }
  if (trimmed.startsWith("•") || trimmed.startsWith("- ")) {
    return { type: "bullet", content: trimmed.replace(/^[•\-]\s*/, "") };
  }
  if (/^\d+\.\s/.test(trimmed)) {
    return { type: "numbered", content: trimmed.replace(/^\d+\.\s/, "") };
  }
  return { type: "text", content: trimmed };
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

    if (block.type === "image") {
      const imageGroup: typeof block[] = [block];
      let j = i + 1;
      while (j < blocks.length && blocks[j].type === "image") {
        imageGroup.push(blocks[j]);
        j++;
      }

      if (imageGroup.length === 1) {
        elements.push(
          <AnimateIn key={i}>
            <figure
              className="my-10 md:my-12 cursor-zoom-in group"
              onClick={() => onImageClick(block.content)}
            >
              <div className="relative aspect-video bg-[var(--muted)] rounded-xl overflow-hidden shadow-lg ring-1 ring-[var(--border)]">
                <Image
                  src={getImagePath(block.content)}
                  alt={block.caption || ""}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              {block.caption && (
                <figcaption className="text-sm text-[var(--muted-foreground)] mt-3 text-center font-medium">
                  {parseInlineMarkdown(block.caption)}
                </figcaption>
              )}
            </figure>
          </AnimateIn>
        );
      } else {
        const gridCols = imageGroup.length <= 3 ? imageGroup.length : 3;
        elements.push(
          <AnimateIn key={i}>
            <div
              className="grid gap-3 my-10"
              style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }}
            >
              {imageGroup.map((imgBlock, idx) => (
                <figure
                  key={`${i}-${idx}`}
                  className="cursor-zoom-in group relative overflow-hidden rounded-xl bg-[var(--muted)]"
                  onClick={() => onImageClick(imgBlock.content)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={getImagePath(imgBlock.content)}
                      alt={imgBlock.caption || ""}
                      fill
                      sizes={`(max-width: 768px) 100vw, ${768 / gridCols}px`}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {imgBlock.caption && (
                    <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <span className="text-white text-xs">{imgBlock.caption}</span>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </AnimateIn>
        );
      }

      i = j - 1;
      continue;
    }

    const { type, content: cleanText } = classifyBlock(block.content);
    if (type === "empty") continue;

    const contentEl = parseInlineMarkdown(cleanText);

    let el: ReactElement;
    switch (type) {
      case "heading":
        el = (
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] mt-2 mb-1">
            {contentEl}
          </h3>
        );
        break;
      case "bullet":
        el = (
          <li className="flex items-start gap-3 text-[var(--muted-foreground)] leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--primary)] flex-shrink-0" />
            {contentEl}
          </li>
        );
        break;
      case "numbered":
        el = (
          <li className="flex items-start gap-3 text-[var(--muted-foreground)] leading-relaxed">
            <span className="mt-2 text-[var(--primary)] font-bold flex-shrink-0">→</span>
            {contentEl}
          </li>
        );
        break;
      default:
        el = (
          <p className="text-[var(--muted-foreground)] leading-[1.75] text-[1.05rem]">
            {contentEl}
          </p>
        );
    }

    elements.push(<AnimateIn key={i}>{el}</AnimateIn>);
  }

  return <div className="space-y-5">{elements}</div>;
}

// ─── Section Nav ────────────────────────────────────────────────────────────

const SECTION_MAP = {
  pt: [
    { id: "overview", label: "Visão Geral" },
    { id: "challenge", label: "O Problema" },
    { id: "content", label: "Processo" },
    { id: "solution", label: "A Solução" },
    { id: "results", label: "Resultados" },
  ],
  en: [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "content", label: "Process" },
    { id: "solution", label: "Solution" },
    { id: "results", label: "Results" },
  ],
};

// ─── Main Component ─────────────────────────────────────────────────────────

export function ProjectContent({
  project,
  lang = "pt",
}: {
  project: typeof projects[0];
  lang?: "pt" | "en";
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLDivElement>(null);

  const isEn = lang === "en";

  const t = (key: string): string => {
    const labels: Record<string, Record<string, string>> = {
      pt: {
        back: "← Voltar para projetos",
        overview: "Visão Geral",
        challenge: "O Problema",
        solution: "A Solução",
        process: "Processo",
        results: "Resultados",
        gallery: "Galeria",
        backToList: "Voltar à lista →",
        period: "Período",
        role: "Função",
        company: "Empresa",
        tools: "Ferramentas",
      },
      en: {
        back: "← Back to projects",
        overview: "Overview",
        challenge: "Challenge",
        solution: "Solution",
        process: "Process",
        results: "Results",
        gallery: "Gallery",
        backToList: "Back to list →",
        period: "Period",
        role: "Role",
        company: "Company",
        tools: "Tools",
      },
    };
    return labels[lang]?.[key] ?? labels.pt[key];
  };

  const title = isEn && project.titleEn ? project.titleEn : project.title;
  const description = isEn && project.descriptionEn ? project.descriptionEn : project.description;
  const challenge = isEn && project.challengeEn ? project.challengeEn : project.challenge;
  const solution = isEn && project.solutionEn ? project.solutionEn : project.solution;
  const process = isEn && project.processEn ? project.processEn : project.process;
  const results = isEn && project.resultsEn ? project.resultsEn : project.results;
  const content = isEn && project.contentEn ? project.contentEn : project.content;
  const metrics = isEn && project.metricsEn ? project.metricsEn : project.metrics;

  const sections = SECTION_MAP[lang];

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest intersection ratio (most visible)
        let bestEntry: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting && (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio)) {
            bestEntry = entry;
          }
        }
        if (bestEntry) {
          setActiveSection(bestEntry.target.id);
        }
      },
      { threshold: [0.1, 0.2, 0.3, 0.4, 0.5], rootMargin: "-80px 0px -40px 0px" }
    );

    // IDs in the same order as they appear on the page
    const ids = ["overview", "challenge", "content", "solution", "results"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  const handleImageClick = (src: string) => {
    const idx = project.images.findIndex((img) => img === src);
    if (idx >= 0) {
      setLightboxIndex(idx);
      setLightboxOpen(true);
    }
  };

  const lightboxImages = project.images.map((src, idx) => ({
    src,
    alt: `${title} — ${idx + 1}`,
  }));

  const projectsLink = isEn ? "/en/projects" : "/projects";
  const yearRange = project.year || "—";
  const roleLabel = project.role?.join(", ") || "—";
  const companyLabel = project.company || "—";

  // Numbered list content blocks (in content array) that contain the IA process
  const toolsList = ["React 19", "TypeScript", "Tailwind CSS", "Mixpanel"];

  return (
    <>
      <article className="py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Back */}
          <AnimateIn>
            <Link
              href={projectsLink}
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors mb-8"
            >
              <span>←</span> {t("back")}
            </Link>
          </AnimateIn>

          {/* ── Header ── */}
          <AnimateIn>
            <header className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-medium border border-[var(--primary)]/20">
                  {project.year}
                </span>
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--muted-foreground)]">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-[var(--muted-foreground)]">{companyLabel}</p>
            </header>
          </AnimateIn>

          {/* ── Hero Image ── */}
          <AnimateIn>
            <div
              className="relative aspect-[16/9] bg-[var(--muted)] rounded-2xl mb-8 cursor-pointer overflow-hidden group shadow-xl ring-1 ring-[var(--border)]"
              onClick={() => handleImageClick(project.images[0])}
            >
              <Image
                src={getImagePath(project.images[0])}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          </AnimateIn>

          {/* ── Metadata Bar ── */}
          <AnimateIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] rounded-xl overflow-hidden mb-10 shadow-sm">
              {[
                { icon: Calendar, label: t("period"), value: yearRange },
                { icon: Briefcase, label: t("role"), value: roleLabel },
                { icon: Building2, label: t("company"), value: companyLabel },
                { icon: Code2, label: t("tools"), value: toolsList.join(" · ") },
              ].map((item, idx) => (
                <div key={idx} className="bg-[var(--card)] p-4 md:p-5 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex-shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* ── Section Nav (Mobile: bar, Desktop: sidebar) ── */}

          {/* Mobile nav bar */}
          <AnimateIn className="block lg:hidden">
            <nav
              ref={navRef}
              className="flex gap-1.5 mb-8 p-1.5 bg-[var(--card)]/90 backdrop-blur-xl border border-[var(--border)] rounded-xl shadow-sm sticky top-24 z-30 overflow-x-auto scrollbar-none"
            >
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeSection === sec.id
                      ? "bg-[var(--primary)] text-white shadow-md"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  {sec.label}
                </button>
              ))}
            </nav>
          </AnimateIn>

          {/* ── Content with Sidebar Layout ── */}
          <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-6 xl:gap-10">

            {/* Desktop sidebar */}
            <div className="hidden lg:block">
              <nav
                ref={navRef}
                className="sticky top-32 z-30 space-y-0.5 pl-0 border-l-2 border-[var(--border)]"
              >
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className={`group relative w-full text-left px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      activeSection === sec.id
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {/* Active indicator line */}
                    <span
                      className={`absolute left-[-2px] top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-full transition-all duration-300 ${
                        activeSection === sec.id
                          ? "bg-[var(--primary)] opacity-100"
                          : "bg-transparent opacity-0 group-hover:bg-[var(--muted-foreground)] group-hover:opacity-40"
                      }`}
                    />
                    <span
                      className={`transition-all duration-300 ${
                        activeSection === sec.id
                          ? "translate-x-0 opacity-100"
                          : "translate-x-0 opacity-70 group-hover:translate-x-1 group-hover:opacity-100"
                      }`}
                    >
                      {sec.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Main content column */}
            <div className="max-w-3xl space-y-16">

            {/* Overview */}
            <AnimateIn>
              <section id="overview" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-5">
                  <span className="section-label">{t("overview")}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[var(--primary)]/30 to-transparent" />
                </div>
                <p className="text-lg leading-[1.8] text-[var(--foreground)] font-medium">
                  {description.split("\n\n").map((para, i) => (
                    <span key={i}>
                      {i > 0 && <><br /><br /></>}
                      {para}
                    </span>
                  ))}
                </p>
              </section>
            </AnimateIn>

            {/* Challenge */}
            <AnimateIn>
              <section id="challenge" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-5">
                  <span className="section-label">{t("challenge")}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[var(--primary)]/30 to-transparent" />
                </div>
                <div className="space-y-5">
                  {challenge.split("---").map((chunk, ci) => {
                    const lines = chunk.trim().split("\n");
                    const titleLine = lines[0]?.replace(/^\d+\.\s*/, "").trim() || "";
                    const bodyLines = lines.slice(1).join("\n").trim();
                    return (
                      <div key={ci} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-sm font-bold">
                            {ci + 1}
                          </span>
                          <div>
                            <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{titleLine}</h3>
                            {bodyLines && (
                              <p className="text-[var(--muted-foreground)] leading-relaxed">{bodyLines}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </AnimateIn>

            {/* Process + Content */}
            <AnimateIn>
              <section id="content" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-5">
                  <span className="section-label">{t("process")}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[var(--primary)]/30 to-transparent" />
                </div>

                {/* Process steps */}
                <div className="space-y-3 mb-10">
                  {process.split("\n\n").map((step, si) => {
                    const match = step.match(/^(\d+)\.\s*(.+)/);
                    if (match) {
                      const [, num, rest] = match;
                      return (
                        <div key={si} className="flex gap-4 items-start bg-[var(--card)] border border-[var(--border)] rounded-lg p-4 shadow-sm">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-sm font-bold">
                            {num}
                          </div>
                          <p className="text-[var(--muted-foreground)] leading-relaxed pt-1 text-sm">
                            {rest}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Narrative content blocks */}
                <ContentRenderer content={content} onImageClick={handleImageClick} />
              </section>
            </AnimateIn>

            {/* Solution */}
            <AnimateIn>
              <section id="solution" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-5">
                  <span className="section-label">{t("solution")}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[var(--primary)]/30 to-transparent" />
                </div>
                <div className="grid gap-3">
                  {solution.split("\n\n").map((item, si) => {
                    const match = item.match(/^\d+\.\s*(.+)/);
                    const text = match ? match[1] : item;
                    const num = item.match(/^(\d+)\./)?.[1];
                    return (
                      <div key={si} className="flex gap-4 items-start bg-[var(--card)] border border-[var(--border)] rounded-lg p-4 shadow-sm">
                        {num && (
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] flex items-center justify-center text-xs font-bold">
                            {num}
                          </div>
                        )}
                        <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                          {text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            </AnimateIn>

            {/* Results */}
            <AnimateIn>
              <section id="results" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-5">
                  <span className="section-label">{t("results")}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[var(--primary)]/30 to-transparent" />
                </div>

                <div className="bg-gradient-to-br from-[var(--card)] to-[var(--muted)] border border-[var(--border)] rounded-2xl p-6 md:p-8 shadow-sm">
                  <p className="text-xl md:text-2xl font-bold text-gradient mb-5 leading-snug">
                    {results}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {metrics.map((metric, mi) => (
                      <span key={mi} className="chip">{metric}</span>
                    ))}
                  </div>

                  <div className="h-px bg-gradient-to-r from-[var(--border)] to-transparent mb-6" />

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { value: "3.000+", label: isEn ? "Active companies" : "Empresas ativas" },
                      { value: "28.000+", label: isEn ? "Entrepreneurs" : "Empresários" },
                      { value: "75%", label: isEn ? "Delivery reduction" : "Redução entrega" },
                      { value: "+20pp", label: isEn ? "Activation rate" : "Taxa de ativação" },
                    ].map((stat, si) => (
                      <div key={si} className="text-center p-3 rounded-xl bg-[var(--muted)]/50">
                        <p className="stat-value text-2xl">{stat.value}</p>
                        <p className="stat-label text-[0.6rem] mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </AnimateIn>

            {/* Gallery */}
            {project.images.length > 1 && (
              <AnimateIn>
                <section className="border-t border-[var(--border)] pt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="section-label">{t("gallery")}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-[var(--primary)]/30 to-transparent" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square bg-[var(--muted)] rounded-xl overflow-hidden cursor-pointer group shadow-sm ring-1 ring-[var(--border)]"
                        onClick={() => {
                          setLightboxIndex(idx);
                          setLightboxOpen(true);
                        }}
                      >
                        <Image
                          src={getImagePath(img)}
                          alt={`${project.title} — ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          loading="lazy"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </AnimateIn>
            )}

            {/* Footer */}
            <AnimateIn>
              <nav className="flex justify-between gap-4 pt-8 border-t border-[var(--border)]">
                <Link
                  href={projectsLink}
                  className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors font-medium"
                >
                  <span>←</span> {t("backToList")}
                </Link>
              </nav>
            </AnimateIn>
          </div>{/* /max-w-3xl content */}
          </div>{/* /grid sidebar+content */}
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
