"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ScrollAnimate } from "@/components/scroll-animate";

export default function Home() {
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
                Disponível para novos projetos
              </span>
            </ScrollAnimate>

            <ScrollAnimate delay={100}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl fw-bold leading-tight mb-6 text-[#e8e8f4]">
                <span className="text-gradient">AI Designer Engineer</span>
                <br />& Product Designer
              </h1>
            </ScrollAnimate>

            <ScrollAnimate delay={200}>
              <p className="text-base md:text-lg text-[#7878a0] max-w-lg mx-auto leading-relaxed mb-10">
                Projeto experiências, valido com usuários e <strong className="text-[#e8e8f4]">entrego no código.</strong>
                <br />5 anos de experiência em Fintech · HealthTech · SaaS
              </p>
            </ScrollAnimate>

            <ScrollAnimate delay={300}>
              <div className="flex gap-4 justify-center flex-wrap mb-16">
                <Link href="/projects" className="btn btn-primary">
                  Ver projetos →
                </Link>
                <a 
                  href="https://linkedin.com/in/silasvasques" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                >
                  LinkedIn ↗
                </a>
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={400}>
              <div className="flex gap-8 justify-center flex-wrap">
                <div className="text-center">
                  <div className="text-3xl fw-bold text-gradient">8+ anos</div>
                  <div className="text-xs text-[#7878a0] uppercase tracking-wider mt-1">experiência em design</div>
                </div>
                <div className="w-px bg-[rgba(124,111,255,0.18)]" />
                <div className="text-center">
                  <div className="text-3xl fw-bold text-gradient">75% Redução</div>
                  <div className="text-xs text-[#7878a0] uppercase tracking-wider mt-1">Tempo processo de produto</div>
                </div>
                <div className="w-px bg-[rgba(124,111,255,0.18)]" />
                <div className="text-center">
                  <div className="text-3xl fw-bold text-gradient">15k /mês</div>
                  <div className="text-xs text-[#7878a0] uppercase tracking-wider mt-1">Agendamentos impactados</div>
                </div>
                <div className="w-px bg-[rgba(124,111,255,0.18)]" />
                <div className="text-center">
                  <div className="text-3xl fw-bold text-gradient">28k Empresas</div>
                  <div className="text-xs text-[#7878a0] uppercase tracking-wider mt-1">Impactadas</div>
                </div>
              </div>
            </ScrollAnimate>

          </div>
        </div>
      </section>

      {/* Case em Destaque - Yampa */}
      <section id="projetos" className="py-24 bg-[#10101a] border-t border-[rgba(124,111,255,0.18)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-8">
            <Link href="/projects" className="btn btn-outline">
              Ver todos os projetos →
            </Link>
          </div>

          <ScrollAnimate>
            <p className="section-label mb-2">Case em destaque</p>
            <h2 className="section-title text-[#e8e8f4]">yampa 2.0 — Fintech SaaS</h2>
            <div className="section-line mb-8" />
          </ScrollAnimate>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <ScrollAnimate delay={100}>
              <div className="proj-text">
                <p className="text-xs uppercase tracking-wider text-[#00e5ff] mb-3">Product Design · Design Engineer · 2023–2026</p>
                <h3 className="text-xl md:text-2xl fw-bold text-[#e8e8f4] mb-4 leading-tight">
                  De controle financeiro a plataforma de transformação
                </h3>
                <p className="text-[#7878a0] leading-relaxed mb-4">
                  O yampa é uma plataforma de gestão financeira para PMEs brasileiras. Liderei o redesign completo — da arquitetura de navegação ao código em produção — transformando um ERP tradicional em uma plataforma orientada por inteligência artificial.
                </p>
                <p className="text-[#7878a0] leading-relaxed mb-6">
                  Criei dois agentes de IA com personalidades distintas (Yago e Yana) e implementei um sistema de diagnóstico financeiro (ISF 2.0) que contextualiza a saúde do negócio para cada usuário.
                </p>
                <a 
                  href="https://silasvj.notion.site/Portf-lio-Silas-Vasques-e3513e4b53964d17a461813f30896c5a" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                >
                  Ver case completo ↗
                </a>
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={200}>
              <div className="card overflow-hidden aspect-video flex items-center justify-center bg-gradient-to-br from-[#0f0a2e] via-[#1a0a60] to-[#0a1a40]">
                <div className="text-center">
                  <div className="text-5xl mb-4">💵</div>
                  <div className="text-lg fw-bold text-white">yampa app</div>
                  <div className="text-sm text-white/50 mt-2">Gestão financeira para PMEs · Mobile First · IA integrada</div>
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
                <div className="text-sm text-[#7878a0]">Redução no tempo de entrega de front-end (5 dias → 1-2 dias)</div>
              </div>
            </ScrollAnimate>
            <ScrollAnimate delay={350}>
              <div className="card p-5 text-center">
                <div className="text-2xl fw-bold text-gradient mb-2">3k+</div>
                <div className="text-sm text-[#7878a0]">Empresas clientes ativas em todo o Brasil</div>
              </div>
            </ScrollAnimate>
            <ScrollAnimate delay={400}>
              <div className="card p-5 text-center">
                <div className="text-2xl fw-bold text-gradient mb-2">28k+</div>
                <div className="text-sm text-[#7878a0]">Empresários impactados pela plataforma</div>
              </div>
            </ScrollAnimate>
          </div>

          {/* Phases */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { n: "Fase 1", t: "Discovery", d: "Entrevistas, análise de sentimentos com IA, clusterização de insights" },
              { n: "Fase 2", t: "Síntese & PRD", d: "JTBD, Jobs Stories, RICE/MoSCoW — PRD com critérios de aceitação" },
              { n: "Fase 3", t: "Ideação", d: "Arquitetura de navegação por \"Áreas de Atuação\" — jornada mental" },
              { n: "Fase 4", t: "Validação", d: "Testes de usabilidade com protótipo Figma" },
              { n: "Fase 5", t: "Vibe Coding", d: "Entrega direta em TypeScript, React e Tailwind" },
              { n: "Fase 6", t: "Lançamento", d: "Monitoramento de métricas e próximo ciclo de Discovery" },
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
            <p className="section-label mb-2">Ferramentas & Skills</p>
            <h2 className="section-title text-[#e8e8f4]">O que uso no dia a dia</h2>
            <div className="section-line mt-6" />
          </ScrollAnimate>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Figma", pct: "Expert", level: 97, cat: "Design Systems · Prototipação" },
              { name: "TypeScript · React", pct: "Avançado", level: 80, cat: "Implementação de UI em código" },
              { name: "Tailwind CSS", pct: "Expert", level: 92, cat: "Design Systems com conformidade" },
              { name: "AI Orchestration", pct: "Avançado", level: 85, cat: "Claude Code · LLMs" },
              { name: "UX Research", pct: "Expert", level: 93, cat: "JTBD · Entrevistas" },
              { name: "AI Design de Agentes", pct: "Avançado", level: 82, cat: "UX para produtos de IA" },
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
      <section id="contato" className="py-24 bg-[#10101a] border-t border-[rgba(124,111,255,0.18)] text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollAnimate>
            <p className="section-label mb-2">Contato</p>
            <h2 className="section-title text-[#e8e8f4] mb-6">
              Vamos criar algo <span className="text-gradient">incrível?</span>
            </h2>
            <p className="text-[#7878a0] leading-relaxed mb-8">
              Aberto a projetos freelance, oportunidades de tempo integral e colaborações interessantes em Fintech, HealthTech e SaaS.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Entrar em contato →
            </Link>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  );
}