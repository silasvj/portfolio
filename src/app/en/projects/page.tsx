"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ScrollAnimate } from "@/components/scroll-animate";
import { useDictionary } from "@/i18n/use-dictionary";
import { getImagePath } from "@/utils/get-image-path";

const categoryTags: Record<string, string[]> = {
  "Web Design": ["SAAS", "WEBSITE"],
  "Mobile Design": ["MOBILE", "APP"],
};

export default function ProjectsEn() {
  const d = useDictionary();

  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-5xl">

        <ScrollAnimate className="mb-12">
          <p className="section-label mb-2">{d.projects.title}</p>
          <h1 className="section-title mb-4">{d.projects.title}</h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-xl">
            {d.projects.subtitle}
          </p>
          <div className="section-line mt-6" />
        </ScrollAnimate>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ScrollAnimate key={project.id} delay={idx * 100}>
              <Link href={`/en/projects/${project.slug}`}>
                <article className="card overflow-hidden group h-full">
                  <div className="relative aspect-[16/9] bg-[var(--muted)] overflow-hidden">
                    <Image
                      src={getImagePath(project.thumbnail)}
                      alt={project.titleEn || project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs px-3 py-1 rounded bg-[var(--card)]/90 text-[var(--secondary)]">
                        {project.company}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-xl fw-semibold group-hover:text-[var(--primary)] transition-colors">
                        {project.titleEn || project.title}
                      </h2>
                      <span className="text-xs px-3 py-1 rounded border border-[var(--border)] text-[var(--muted-foreground)]">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 mb-4">
                      {project.descriptionEn || project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {(categoryTags[project.category] || ["WEBSITE"]).map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </div>
  );
}
