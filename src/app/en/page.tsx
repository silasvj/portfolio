"use client";

"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ScrollAnimate } from "@/components/scroll-animate";
import { useDictionary } from "@/i18n/use-dictionary";

export default function Home() {
  const d = useDictionary();
  const yampaProject = projects.find((p) => p.slug === "yampa-2");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="hero" className="min-h-[70vh] flex items-center justify-center relative">
        <div className="w-full max-w-5xl mx-auto px-8">
          <div className="text-center">
            <ScrollAnimate className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,229,255,0.3)] text-xs text-[#00e5ff] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#00e5ff] badge-pulse" />
                {d.hero.available}
              </span>
            </ScrollAnimate>

            <ScrollAnimate delay={100}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl fw-bold leading-tight mb-6 text-[#e8e8f4]">
                <span className="text-gradient">{d.hero.title}</span>
                <br />{d.hero.subtitle}
              </h1>
            </ScrollAnimate>

            <ScrollAnimate delay={200}>
              <p className="text-base md:text-lg text-[#7878a0] max-w-lg mx-auto leading-relaxed mb-10">
                {d.hero.description}
                <br />{d.hero.experience}
              </p>
            </ScrollAnimate>

            <ScrollAnimate delay={300}>
              <div className="flex gap-4 justify-center flex-wrap mb-16">
                <Link href="/en/projects" className="btn btn-primary">
                  {d.hero.viewProjects}
                </Link>
                <a 
                  href="https://linkedin.com/in/silasvasques" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                >
                  {d.hero.linkedin}
                </a>
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={400}>
              <div className="flex gap-8 justify-center flex-wrap">
                <div className="text-center">
                  <div className="text-3xl fw-bold text-gradient">8+ {d.hero.yearsExp.split(" ")[0]}</div>
                  <div className="text-xs text-[#7878a0] uppercase tracking-wider mt-1">{d.hero.yearsExp}</div>
                </div>
                <div className="w-px bg-[rgba(124,111,255,0.18)]" />
                <div className="text-center">
                  <div className="text-3xl fw-bold text-gradient">75% {d.hero.reduction}</div>
                  <div className="text-xs text-[#7878a0] uppercase tracking-wider mt-1">{d.hero.productTime}</div>
                </div>
                <div className="w-px bg-[rgba(124,111,255,0.18)]" />
                <div className="text-center">
                  <div className="text-3xl fw-bold text-gradient">15k /month</div>
                  <div className="text-xs text-[#7878a0] uppercase tracking-wider mt-1">{d.hero.monthly}</div>
                </div>
                <div className="w-px bg-[rgba(124,111,255,0.18)]" />
                <div className="text-center">
                  <div className="text-3xl fw-bold text-gradient">28k {d.hero.companies}</div>
                  <div className="text-xs text-[#7878a0] uppercase tracking-wider mt-1">{d.hero.impacted}</div>
                </div>
              </div>
            </ScrollAnimate>

          </div>
        </div>
      </section>

      {/* Featured Case - Yampa */}
      <section id="projects" className="py-24 bg-[#10101a] border-t border-[rgba(124,111,255,0.18)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
            <ScrollAnimate>
              <p className="section-label mb-2">{d.featured.title}</p>
              <h2 className="section-title text-[#e8e8f4] mb-0">{d.featured.yampa}</h2>
            </ScrollAnimate>
            <ScrollAnimate delay={100}>
              <Link href="/en/projects" className="btn btn-outline">
                {d.featured.viewAll}
              </Link>
            </ScrollAnimate>
          </div>
          <ScrollAnimate>
            <div className="section-line mb-8" />
          </ScrollAnimate>


          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <ScrollAnimate delay={100}>
              <div className="proj-text">
                <p className="text-xs uppercase tracking-wider text-[#00e5ff] mb-3">{d.featured.role}</p>
                <h3 className="text-xl md:text-2xl fw-bold text-[#e8e8f4] mb-4 leading-tight">
                  {d.featured.headline}
                </h3>
                <p className="text-[#7878a0] leading-relaxed mb-4">
                  {d.featured.description}
                </p>
                <p className="text-[#7878a0] leading-relaxed mb-6">
                  {d.featured.description2}
                </p>
                <a 
                  href="https://www.notion.so/silasvj/Silas-Vasques-Meu-Portf-lio-como-Designer-e3513e4b53964d17a461813f30896c5a" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                >
                  {d.featured.viewCase}
                </a>
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={200}>
              <div className="card overflow-hidden aspect-video flex items-center justify-center bg-gradient-to-br from-[#0f0a2e] via-[#1a0a60] to-[#0a1a40]">
                <div className="text-center">
                  <div className="text-5xl mb-4">💵</div>
                  <div className="text-lg fw-bold text-white">yampa app</div>
                  <div className="text-sm text-white/50 mt-2">Financial management for SMBs · Mobile First · AI integrated</div>
                  <div className="flex gap-2 justify-center flex-wrap mt-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-[rgba(124,111,255,0.2)] text-[#a78bfa]">TypeScript</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-[rgba(0,229,255,0.15)] text-[#00e5ff]">React</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-[rgba(124,111,255,0.2)] text-[#a78bfa]">Tailwind</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-[rgba(0,229,255,0.15)] text-[#00e5ff]">Figma</span>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <ScrollAnimate delay={300}>
              <div className="card p-5 text-center">
                <div className="text-2xl fw-bold text-gradient mb-2">75%</div>
                <div className="text-sm text-[#7878a0]">{d.featured.results.frontend}</div>
              </div>
            </ScrollAnimate>
            <ScrollAnimate delay={350}>
              <div className="card p-5 text-center">
                <div className="text-2xl fw-bold text-gradient mb-2">3k+</div>
                <div className="text-sm text-[#7878a0]">{d.featured.results.companies}</div>
              </div>
            </ScrollAnimate>
            <ScrollAnimate delay={400}>
              <div className="card p-5 text-center">
                <div className="text-2xl fw-bold text-gradient mb-2">28k+</div>
                <div className="text-sm text-[#7878a0]">{d.featured.results.impacted}</div>
              </div>
            </ScrollAnimate>
          </div>

          {/* Phases */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { n: "Phase 1", t: d.phases.phase1, d: d.phases.phase1Desc },
              { n: "Phase 2", t: d.phases.phase2, d: d.phases.phase2Desc },
              { n: "Phase 3", t: d.phases.phase3, d: d.phases.phase3Desc },
              { n: "Phase 4", t: d.phases.phase4, d: d.phases.phase4Desc },
              { n: "Phase 5", t: d.phases.phase5, d: d.phases.phase5Desc },
              { n: "Phase 6", t: d.phases.phase6, d: d.phases.phase6Desc },
            ].map((phase, idx) => (

              <ScrollAnimate key={phase.n} delay={450 + idx * 50}>
                <div className="card p-4">
                  <p className="text-xs uppercase tracking-wider text-[#00e5ff] mb-2">{phase.n}</p>
                  <p className="font-semibold text-[#e8e8f4] mb-2">{phase.t}</p>
                  <p className="text-xs text-[#7878a0] leading-relaxed">{phase.d}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimate className="mb-12">
            <p className="section-label mb-2">{d.skills.title}</p>
            <h2 className="section-title text-[#e8e8f4]">{d.skills.subtitle}</h2>
            <div className="section-line mt-6" />
          </ScrollAnimate>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Figma", pct: "Expert", level: 97, cat: "Design Systems · Prototyping" },
              { name: "TypeScript · React", pct: "Advanced", level: 80, cat: "UI implementation in code" },
              { name: "Tailwind CSS", pct: "Expert", level: 92, ps: "Design Systems with compliance" },
              { name: "AI Orchestration", pct: "Advanced", level: 85, cat: "Claude Code · LLMs" },
              { name: "UX Research", pct: "Expert", level: 93, cat: "JTBD · Interviews" },
              { name: "AI Agent Design", pct: "Advanced", level: 82, cat: "UX for AI products" },
            ].map((skill, idx) => (
              <ScrollAnimate key={skill.name} delay={idx * 50}>
                <div className="card p-5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-[#e8e8f4]">{skill.name}</span>
                    <span className="text-sm text-[#00e5ff]">{skill.pct}</span>
                  </div>
                  <div className="skill-bar mb-3">
                    <div className="skill-fill" style={{ width: skill.level + "%" }} />
                  </div>
                  <div className="text-xs text-[#7878a0]">{skill.cat}</div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 bg-[#10101a] border-t border-[rgba(124,111,255,0.18)] text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollAnimate>
            <p className="section-label mb-2">{d.contact.title.split(" ")[0]}</p>
            <h2 className="section-title text-[#e8e8f4] mb-6">
              {d.cta.title}
            </h2>
            <p className="text-[#7878a0] leading-relaxed mb-8">
              {d.cta.description}
            </p>
            <Link href="/en/contact" className="btn btn-primary">
              {d.cta.action}
            </Link>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
}