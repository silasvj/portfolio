"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Briefcase,
  Building2,
  Code2,
} from "lucide-react";
import { projects } from "@/data/projects";
import { getImagePath } from "@/utils/get-image-path";
import { AnimateIn } from "@/hooks/use-scroll-reveal";
import { Lightbox } from "./lightbox";
import { ContentRenderer } from "./content-renderer";


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

  // Some content blocks reference images that aren't in project.images (the
  // gallery list) — union both so every image on the page can open in the lightbox.
  const contentImageSrcs = (content || [])
    .filter((block) => block.type === "image")
    .map((block) => block.content);
  const allImages = Array.from(new Set([...project.images, ...contentImageSrcs]));

  const handleImageClick = (src: string) => {
    const idx = allImages.findIndex((img) => img === src);
    if (idx >= 0) {
      setLightboxIndex(idx);
      setLightboxOpen(true);
    }
  };

  const lightboxImages = allImages.map((src, idx) => ({
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
              className="relative aspect-[16/9] bg-[var(--muted)] rounded-2xl mb-8 cursor-pointer overflow-hidden group shadow-xl ring-1 ring-[var(--border)] image-skeleton"
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
                        className="relative aspect-square bg-[var(--muted)] rounded-xl overflow-hidden cursor-pointer group shadow-sm ring-1 ring-[var(--border)] image-skeleton"
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
