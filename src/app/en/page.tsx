"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ScrollAnimate } from "@/components/scroll-animate";
import { useDictionary } from "@/i18n/use-dictionary";
import { AnimatedCounter } from "@/components/animated-counter";

export default function HomeEn() {
  const d = useDictionary();
  const yampaProject = projects.find((p) => p.slug === "yampa-2");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="hero" className="min-h-[70vh] flex items-center justify-center relative">
        <div className="w-full max-w-5xl mx-auto px-8">
          <div className="text-center">
            <ScrollAnimate className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] text-xs text-[var(--secondary)] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[var(--secondary)] badge-pulse" />
                {d.hero.available}
              </span>
            </ScrollAnimate>

            <ScrollAnimate delay={100}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl fw-bold leading-tight mb-6">
                <span className="text-gradient">{d.hero.title}</span>
                <br />{d.hero.subtitle}
              </h1>
            </ScrollAnimate>

            <ScrollAnimate delay={200}>
              <p className="text-base md:text-lg text-[var(--muted-foreground)] max-w-lg mx-auto leading-relaxed mb-10">
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
                <AnimatedCounter value="8+" label={d.stats.years} />
                <div className="w-px bg-[var(--border)]" />
                <AnimatedCounter value="75%" label={d.stats.reduction} />
                <div className="w-px bg-[var(--border)]" />
                <AnimatedCounter value="15k" label={d.stats.monthly} />
                <div className="w-px bg-[var(--border)]" />
                <AnimatedCounter value="28k+" label={d.stats.impacted} />
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Featured Case - Yampa */}
      <section id="projects" className="py-24 bg-[var(--muted)] border-t border-[var(--border)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
            <ScrollAnimate>
              <p className="section-label mb-2">{d.featured.title}</p>
              <h2 className="section-title mb-0">{d.featured.yampa}</h2>
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
                <p className="text-xs uppercase tracking-wider text-[var(--secondary)] mb-3">{d.featured.role}</p>
                <h3 className="text-xl md:text-2xl fw-bold mb-4 leading-tight">
                  {d.featured.headline}
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
                  {d.featured.description}
                </p>
                <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
                  {d.featured.description2}
                </p>
                <Link href="/en/projects/yampa-2" className="btn btn-outline">
                  {d.featured.viewCase}
                </Link>
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={200}>
              <div className="card overflow-hidden aspect-video flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/20 via-[var(--primary)]/10 to-[var(--secondary)]/10">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">💵</div>
                  <div className="text-lg fw-bold">yampa app</div>
                  <div className="text-sm mt-2 text-[var(--muted-foreground)]">Financial management for SMBs · Mobile First · AI integrated</div>
                  <div className="flex gap-2 justify-center flex-wrap mt-4">
                    <span className="chip">TypeScript</span>
                    <span className="chip">React</span>
                    <span className="chip">Tailwind</span>
                    <span className="chip">Figma</span>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 items-stretch">
            <ScrollAnimate delay={300} className="h-full">
              <div className="card result-card h-full p-5 text-center">
                <div className="text-2xl fw-bold text-gradient mb-2">75%</div>
                <div className="text-sm result-label">{d.featured.results.frontend}</div>
              </div>
            </ScrollAnimate>
            <ScrollAnimate delay={350} className="h-full">
              <div className="card result-card h-full p-5 text-center">
                <div className="text-2xl fw-bold text-gradient mb-2">3k+</div>
                <div className="text-sm result-label">{d.featured.results.companies}</div>
              </div>
            </ScrollAnimate>
            <ScrollAnimate delay={400} className="h-full">
              <div className="card result-card h-full p-5 text-center">
                <div className="text-2xl fw-bold text-gradient mb-2">28k+</div>
                <div className="text-sm result-label">{d.featured.results.impacted}</div>
              </div>
            </ScrollAnimate>
          </div>

          {/* Phases */}
          <div className="grid md:grid-cols-3 gap-4 items-stretch">
            {[
              { n: "Phase 1", t: d.phases.phase1, d: d.phases.phase1Desc },
              { n: "Phase 2", t: d.phases.phase2, d: d.phases.phase2Desc },
              { n: "Phase 3", t: d.phases.phase3, d: d.phases.phase3Desc },
              { n: "Phase 4", t: d.phases.phase4, d: d.phases.phase4Desc },
              { n: "Phase 5", t: d.phases.phase5, d: d.phases.phase5Desc },
              { n: "Phase 6", t: d.phases.phase6, d: d.phases.phase6Desc },
            ].map((phase, idx) => (
              <ScrollAnimate key={phase.n} delay={450 + idx * 50} className="h-full">
                <div className="card h-full p-4">
                  <p className="text-xs uppercase tracking-wider text-[var(--secondary)] mb-2">{phase.n}</p>
                  <p className="font-semibold mb-2">{phase.t}</p>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{phase.d}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollAnimate className="mb-12">
            <p className="section-label mb-2">{d.skills.title}</p>
            <h2 className="section-title">{d.skills.subtitle}</h2>
            <div className="section-line mt-6" />
          </ScrollAnimate>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Figma", pct: "Expert", level: 97, cat: "Design Systems · Prototyping" },
              { name: "TypeScript · React", pct: "Advanced", level: 80, cat: "UI implementation in code" },
              { name: "Tailwind CSS", pct: "Expert", level: 92, cat: "Design Systems with compliance" },
              { name: "AI Orchestration", pct: "Advanced", level: 85, cat: "Claude Code · LLMs" },
              { name: "UX Research", pct: "Expert", level: 93, cat: "JTBD · Interviews" },
              { name: "AI Agents Design", pct: "Advanced", level: 82, cat: "UX for AI products" },
              { name: "UX Writing", pct: "Advanced", level: 78, cat: "User-focused content" },
              { name: "Discovery & JTBD", pct: "Expert", level: 90, cat: "Qualitative research" },
            ].map((skill, idx) => (
              <ScrollAnimate key={skill.name} delay={idx * 50}>
                <div className="card p-5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-sm text-[var(--secondary)]">{skill.pct}</span>
                  </div>
                  <div className="skill-bar mb-3">
                    <div className="skill-fill" style={{ width: skill.level + "%" }} />
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)]">{skill.cat}</div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollAnimate className="mb-12">
            <p className="section-label mb-2">{d.articles.title}</p>
            <h2 className="section-title">{d.articles.subtitle}</h2>
            <div className="section-line mt-6" />
          </ScrollAnimate>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Você está sendo manipulado! pt. 1/2",
                tagline: "How cognitive biases like anchoring and loss aversion are used to influence your purchase decisions. (PT-BR)",
                url: "https://silasvj.notion.site/Voc-est-sendo-manipulado-pt-1-2-148fadcdf06a4180af64192c89cb12d0",
              },
              {
                title: "Você está sendo manipulado! pt. 2/2",
                tagline: "Part two of the series on cognitive biases applied to products and purchase experiences. (PT-BR)",
                url: "https://silasvj.notion.site/Voc-est-sendo-manipulado-pt-2-2-951e4fa153d940e8bb6ae5e27dfc286f",
              },
              {
                title: "UX, Psicologia e Ética na Gestão de Produtos!",
                tagline: "How UX, psychology, and ethics intersect in product management — and where persuasion turns into manipulation. (PT-BR)",
                url: "https://silasvj.notion.site/UX-Psicologia-e-tica-na-Gest-o-de-Produtos-3887a51616934e01b43c8235af550e17",
              },
              {
                title: "UX Research — Parte 01 — Quais perguntas eu devo fazer em uma entrevista?",
                tagline: "How to use \"The Mom Test\" method to ask questions that reveal real behavior, not opinions. (PT-BR)",
                url: "https://silasvj.medium.com/ux-research-parte-01-quais-perguntas-eu-devo-fazer-em-uma-entrevista-6c8f492f815b",
              },
              {
                title: "UX Research — Parte 02 — Como perceber e corrigir problemas em conversas de pesquisa",
                tagline: "How to spot and fix the most common mistakes during a user research interview. (PT-BR)",
                url: "https://silasvj.medium.com/ux-research-parte-02-como-perceber-e-corrigir-problemas-em-conversas-de-pesquisa-38b6b37a1c45",
              },
              {
                title: "Roadmap: como criar e manter o roadmap de produto",
                tagline: "Why a roadmap should focus on product goals, not tasks — and how to structure yours. (PT-BR)",
                url: "https://silasvj.medium.com/roadmap-como-criar-e-manter-o-roadmap-de-produto-9af99e7500e3",
              },
              {
                title: "Estudo de caso: Apoiando profissionais de saúde",
                tagline: "A case study on designing products that support healthcare professionals' daily routine. (PT-BR)",
                url: "https://silasvj.medium.com/crise-004-apoiando-os-m%C3%A9dicos-2bbe1de2ddd2",
              },
              {
                title: "O que fazer se entrar um Product Designer na minha empresa — tutorial 2022 atualizado",
                tagline: "A (lighthearted) guide to onboarding a newly hired Product Designer into your team. (PT-BR)",
                url: "https://silasvj.medium.com/o-que-fazer-se-entrar-um-product-designer-na-minha-empresa-tutorial-2022-atualizado-14ce8c81155a",
              },
              {
                title: "Como escolher meu wifi? 🤔",
                tagline: "A casual internal talk on how to pick the right wifi for your home. (PT-BR)",
                url: "https://silasvj.medium.com/como-escolher-meu-wifi-de014c7f16e8",
              },
            ].map((article, idx) => (
              <ScrollAnimate key={article.url} delay={idx * 50}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-5 h-full flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)]">{article.tagline}</p>
                  </div>
                  <span className="text-xs text-[var(--secondary)] mt-4 inline-block">Read article ↗</span>
                </a>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--muted)] border-t border-[var(--border)] text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollAnimate>
            <p className="section-label mb-2">{d.contact.title.split(" ")[0]}</p>
            <h2 className="section-title mb-6">
              {d.cta.title}
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
              {d.cta.description}
            </p>
            <a href="mailto:silasvj@gmail.com" className="btn btn-primary">
              {d.cta.action}
            </a>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
}
