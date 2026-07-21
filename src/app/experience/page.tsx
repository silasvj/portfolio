"use client";

import { ScrollAnimate } from "@/components/scroll-animate";
import { useDictionary } from "@/i18n/use-dictionary";

const experienceData = [
  {
    role: "Design Engineer",
    company: "YampaFin",
    period: "01/2026 - 04/2026",
    description: "Atuei como Design Engineer em um Software Financeiro SaaS (Fintech) focado em gestão empresarial, fluxo de caixa e conciliação bancária para pequenas e médias empresas.",
    bullets: [
      "Implementei interfaces diretamente no código (TypeScript, React, Tailwind), eliminando etapas de revisão visual e reduzindo o atrito no handoff entre design e engenharia.",
      "Orquestrei agentes de IA (Claude Code, Lovable) para entrega de código pronto para produção.",
      "Automatizei o processo de Discovery Contínuo: coleta automática de comentários do app e feedback in-app, separação por temas, e priorização baseada em recorrência — gerando resumos periódicos com insumos diretos para o roadmap de funcionalidades.",
    ],
    results: "Redução de 75% no tempo de entrega de front-end de ~5 dias para 1-2 dias por funcionalidade média.",
  },
  {
    role: "Product Designer",
    company: "Yampa",
    period: "06/2023 - 12/2025",
    description: "Concebi e projetei Agentes de IA integrados à plataforma: assistente operacional para suporte técnico e consultor financeiro analítico para tomada de decisão de empresários.",
    bullets: [
      "Criei dois agentes de IA integrados à plataforma (Yago e Yana) com personalidades distintas: assistente operacional e consultora estratégica.",
      "Implementei sistema de diagnóstico financeiro (ISF 2.0) contextualizado para cada usuário.",
      "Liderei a migração completa do sistema legado para arquitetura Mobile First, com foco em escalabilidade e responsividade.",
      "Geri e evoluí o Design System no Figma com conformidade estrita aos padrões Tailwind e acessibilidade.",
      "Transformei fluxos financeiros complexos em experiências intuitivas para usuários não técnicos.",
      "Instrumentalizei tracking events via Mixpanel em fluxos críticos: onboarding, integração bancária e configuração de conta.",
      "Construí funis de conversão para identificar pontos de abandono e extraí métricas de Activation e Retention (DAU/WAU/MAU).",
    ],
    results: "Migração bem-sucedida do sistema legado com aumento na adoção por clientes veteranos e retenção de novos clientes.",
  },
  {
    role: "Product Designer",
    company: "Meetz",
    period: "06/2022 - 04/2023",
    description: "MarTech / Software SaaS focado em prospecção ativa e qualificação de leads B2B.",
    bullets: [
      "Condução do processo de Continuous Discovery e levantamento de requisitos para a criação de uma plataforma unificada.",
      "Elaboração e condução de entrevistas qualitativas com usuários, coleta/organização de dados e geração de relatórios.",
      "Definição do MVP, mapeamento de User Flows e estruturação da Arquitetura de Informação.",
      "Prototipação de alta fidelidade e moderação de testes de usabilidade no Figma.",
    ],
    results: "Entrega do MVP da plataforma unificada, resultando na redução dos custos da operação.",
  },
  {
    role: "Product Designer",
    company: "SiMCo - Healthcare",
    period: "09/2021 - 02/2022",
    description: "HealthTech / Rede de clínicas médicas com foco em democratização do acesso à saúde e serviços de saúde digital.",
    bullets: [
      "Atuei em duas squads simultâneas: desenvolvimento de novos produtos de saúde digital (aplicativo mobile) e melhoria do sistema de atendimento e call center (módulo de agendamento de consultas).",
      "Conduzi Discovery, entrevistas com stakeholders e operadores de atendimento, definindo requisitos técnicos e de negócio.",
      "Realizei UI Design, prototipação em Adobe XD e moderação de testes de usabilidade com usuários finais.",
      "Monitorei feedbacks de usabilidade utilizando Hotjar e Google Analytics, realizando análise heurística para remodelagem contínua.",
      "Redesenhei o fluxo de orçamento interno: catálogo simplificado de procedimentos, geração automática de 'Orçamento Consolidado' com comparação de preço comum vs. preço com cartão de benefícios.",
      "Implementei argumento de venda estratégico — 'desconto equivalente a X meses de mensalidade' — transformando custo em valor percebido.",
    ],
    results: "+22% em atendimentos de orçamentos | 15 mil agendamentos mensais | Aumento significativo em assinaturas de cartão de benefícios | Lançamento de produto digital de saúde mental.",
  },
  {
    role: "Assistente de Design e UX",
    company: "SiMCo - Healthcare",
    period: "03/2021 - 08/2021",
    description: "HealthTech / Rede de clínicas médicas com foco em democratização do acesso à saúde.",
    bullets: [
      "Executei campanhas de marketing online e offline, produzindo conteúdo visual e audiovisual.",
      "Participei de tomadas de decisão estratégicas e de campanhas, colaborando com equipes multidisciplinares.",
      "Monitorei feedbacks de usabilidade utilizando Hotjar e Google Analytics.",
      "Realizei análise heurística de interfaces e checkout para identificação de oportunidades de melhoria.",
    ],
    results: "",
  },
];

export default function Experience() {
  const d = useDictionary();

  return (
    <div id="exp" className="py-24 bg-[#08080f]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          <ScrollAnimate className="mb-12">
            <p className="section-label mb-2">{d.about.experience}</p>
            <h1 className="section-title text-[#e8e8f4] mb-6">Experience</h1>
            <div className="section-line mb-12" />
          </ScrollAnimate>

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <ScrollAnimate key={index} delay={index * 100}>
                <div className="card p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-lg fw-semibold text-[#e8e8f4]">{exp.role}</h3>
                      <p className="text-[#00e5ff]">{exp.company}</p>
                    </div>
                    <span className="text-sm text-[#7878a0] text-right">{exp.period}</span>
                  </div>
                  <p className="text-[#7878a0] mb-4 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-[#7878a0] leading-relaxed flex gap-2">
                        <span className="text-[#00e5ff]">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.results && (
                    <div className="exp-accent">
                      ⚡ <span className="text-[#e8e8f4]">{exp.results}</span>
                    </div>
                  )}
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}