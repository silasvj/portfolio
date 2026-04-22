"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ScrollAnimate } from "@/components/scroll-animate";
import { useDictionary } from "@/i18n/use-dictionary";

export default function Projects() {
  const d = useDictionary();

  return (
    <div className="py-24 bg-[#08080f]">
      <div className="container mx-auto px-4">
        <ScrollAnimate className="mb-12">
          <p className="section-label mb-2">Work</p>
          <h1 className="section-title text-[#e8e8f4] mb-4">{d.projects.title}</h1>
          <p className="text-lg text-[#7878a0] max-w-xl">
            {d.projects.subtitle}
          </p>
          <div className="section-line mt-6" />
        </ScrollAnimate>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ScrollAnimate key={project.id} delay={idx * 100}>
              <Link href={`/en/projects/${project.slug}`}>
                <article className="card overflow-hidden group h-full">
                  <div className="relative aspect-[16/9] bg-[#18182a] overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs px-3 py-1 rounded bg-[#10101a]/90 text-[#00e5ff]">
                        {project.company}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-xl fw-semibold text-[#e8e8f4] group-hover:text-[#7c6fff] transition-colors">
                        {project.title}
                      </h2>
                      <span className="text-xs px-3 py-1 rounded border border-[rgba(124,111,255,0.18)] text-[#7878a0]">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-[#7878a0] line-clamp-2 mb-4">
                      {project.descriptionEn || project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.role.map((r) => (
                        <span key={r} className="text-xs px-3 py-1 rounded-full bg-[rgba(124,111,255,0.1)] text-[#a78bfa]">
                          {r}
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