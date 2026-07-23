export interface ContentBlock {
  type: "text" | "image";
  content: string;
  caption?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  company: string;

  year: string;
  role: string[];
  category: string;
  description: string;
  descriptionEn?: string;
  challenge: string;
  challengeEn?: string;
  solution: string;
  solutionEn?: string;
  process: string;
  processEn?: string;
  results: string;
  resultsEn?: string;
  metrics: string[];
  metricsEn?: string[];
  thumbnail: string;
  images: string[];
  content?: ContentBlock[];
  contentEn?: ContentBlock[];
}

export const projects: Project[] = [
  {
    id: "4",
    slug: "yampa-2",
    title: "Yampa",
    titleEn: "Yampa",

    company: "Yampa (Fintech)",
    year: "2023-2026",
    role: ["Product Designer"],
    category: "Web Design",
description:
      "Yampa é uma plataforma SaaS de gestão financeira para PMEs brasileiras. Durante 2,5 anos, atuei como o único Product Designer da empresa, reportando ao CPO (ex-designer) e colaborando com 1 PM e 4 devs full stack.\n\nEntreguei o redesign completo da plataforma — da descoberta do problema à entrega em código — incluindo a concepção de dois agentes de IA (Yago e Yana), a migração mobile-first do sistema legado, a reformulação do Design System com governança rigorosa, e a instrumentação de análises de produto com Mixpanel para orientar decisões de design.\n\nA combinação de design estratégico, orientação a dados e entrega via IA resultou em 3.000+ empresas ativas, 28.000+ empresários impactados e uma evolução do meu papel de Product Designer para Design Engineer.",
    descriptionEn:
      "Yampa is a financial management SaaS platform for Brazilian SMBs. For 2.5 years, I acted as the sole Product Designer, reporting to a CPO (former designer) and working alongside 1 PM and 4 full-stack developers.\n\nI led the complete redesign — from problem discovery to code delivery — including the conception of two AI agents (Yago and Yana), a mobile-first migration from the legacy system, a Design System overhaul with strict governance, and product analytics instrumentation with Mixpanel to drive design decisions.\n\nThe combination of strategic design, data-driven decisions, and AI-powered delivery resulted in 3,000+ active companies, 28,000+ entrepreneurs impacted, and my role evolving from Product Designer to Design Engineer.",
    challenge:
      "1. Produto financeiro complexo para usuários não técnicos\n\nDonos de PME não são contadores nem analistas financeiros. A plataforma exigia conhecimento prévio para navegar e extrair valor — cada decisão de design precisava ser validada com usuários reais, não assumida. O resultado era uma barreira de entrada alta e evasão precoce.\n\n---\n\n2. Onboarding com perda massiva de usuários\n\nMais de 90% dos usuários abandonavam o onboarding antes de completá-lo. O fluxo educacional, que explicava cada conceito financeiro passo a passo, na prática afastava quem mais precisava do produto. Sem instrumentação adequada, o problema era sentido mas não dimensionado.\n\n---\n\n3. Design System legado e desatualizado\n\nA plataforma original tinha tokens inconsistentes, componentes sem estados (loading, erro, vazio, sucesso) e zero alinhamento com o ecossistema de desenvolvimento (Tailwind). Cada nova tela exigia decisões de estilo do zero, gerando ruído e retrabalho entre design e engenharia.",
    challengeEn:
      "1. Complex financial product for non-technical users\n\nSMB owners are not accountants or financial analysts. The platform required prior knowledge to navigate and extract value — every design decision needed real user validation, not assumptions. This created a high barrier to entry and early churn.\n\n---\n\n2. Onboarding with massive user loss\n\nOver 90% of users abandoned onboarding before completing it. The educational flow, which explained every financial concept step by step, was actually pushing away the very users who needed the product most. Without proper instrumentation, the problem was felt but not measured.\n\n---\n\n3. Legacy Design System\n\nThe original platform had inconsistent tokens, components without states (loading, error, empty, success), and zero alignment with the development ecosystem (Tailwind). Every new screen required style decisions from scratch, creating friction and rework between design and engineering.",
    solution:
      "1. Dois agentes de IA generativa integrados à plataforma — Yago (Assistente de Operações Financeiras, automatizando conciliação, classificação de gastos e lembretes) e Yana (Consultora Financeira Analítica, com diagnóstico de margem de contribuição, análise de custos e simulação de cenários)\n\n2. Migração mobile-first completa: React 19 + TypeScript + Vite 7 + Tailwind CSS v4 + shadcn/ui + Framer Motion 12\n\n3. Redesenho do onboarding com Progressive Disclosure baseado em dados do Mixpanel — drop-off caiu de >90% para ~70%\n\n4. Design System reformulado com token system semântico, regra de ESLint customizada (no-raw-colors), e alinhamento estrito entre Figma e Tailwind\n\n5. Instrumentação de analytics com Mixpanel: funis de conversão, activation metrics (DAU/WAU/MAU), cohort analysis segmentada por perfil de empresa",
    solutionEn:
      "1. Two generative AI agents integrated into the platform — Yago (Financial Operations Assistant, automating reconciliation, expense classification and reminders) and Yana (Analytical Financial Consultant, providing margin analysis, cost diagnostics, and scenario simulation)\n\n2. Complete mobile-first migration: React 19 + TypeScript + Vite 7 + Tailwind CSS v4 + shadcn/ui + Framer Motion 12\n\n3. Onboarding redesign with Progressive Disclosure driven by Mixpanel data — drop-off decreased from >90% to ~70%\n\n4. Revamped Design System with semantic token system, custom ESLint rule (no-raw-colors), and strict alignment between Figma and Tailwind\n\n5. Analytics instrumentation with Mixpanel: conversion funnels, activation metrics (DAU/WAU/MAU), cohort analysis segmented by company profile",
    process:
      "O processo combinou design orientado a dados, IA integrada ao workflow e governança de Design System:\n\n1. Instrumentação da plataforma com Mixpanel — eventos de tracking em onboarding, activation, retention e feature adoption\n\n2. Discovery contínuo com entrevistas, análise assistida por IA e ciclos trimestrais de pesquisa\n\n3. Redesenho do onboarding baseado em dados reais — enxugamento do fluxo educacional e adoção de Progressive Disclosure\n\n4. Concepção e prototipação in-code dos agentes Yago e Yana — protótipos funcionais em staging, não mockups isolados\n\n5. Reformulação do Design System com token system semântico, alinhamento Tailwind e regra de ESLint customizada\n\n6. Migração mobile-first da plataforma legado para React 19 + Vite 7 + Tailwind v4",
    processEn:
      "The process combined data-driven design, AI-integrated workflow, and Design System governance:\n\n1. Platform instrumentation with Mixpanel — tracking events across onboarding, activation, retention and feature adoption\n\n2. Continuous discovery with interviews, AI-assisted analysis, and quarterly research cycles\n\n3. Onboarding redesign based on real data — streamlined educational flow and Progressive Disclosure\n\n4. In-code prototyping of Yago and Yana agents — functional prototypes in staging, not isolated mockups\n\n5. Design System overhaul with semantic token system, Tailwind alignment, and custom ESLint rule\n\n6. Mobile-first migration from legacy platform to React 19 + Vite 7 + Tailwind v4",
    results: "3.000+ empresas ativas · 28.000+ empresários impactados · 75% redução no tempo de entrega de front-end · +20pp na taxa de ativação",
    resultsEn: "3,000+ active companies · 28,000+ entrepreneurs impacted · 75% front-end delivery time reduction · +20pp activation rate increase",
    metrics: [
      "3.000+ empresas ativas",
      "28.000+ empresários impactados",
      "75% redução no tempo de entrega de front-end",
      "+20pp na taxa de ativação",
      "Drop-off de onboarding: >90% → ~70%",
    ],
    metricsEn: [
      "3,000+ active companies",
      "28,000+ entrepreneurs impacted",
      "75% front-end delivery time reduction",
      "+20pp activation rate increase",
      "Onboarding drop-off: >90% → ~70%",
    ],
    thumbnail: "/images/yampa/yampa-hero.png",
    images: [
      "/images/yampa/yampa-hero.png",
      "/images/yampa/Captura_de_tela_2026-04-16_161552-horz.png",
      "/images/yampa/TELA_RESUMO_FINANCEIRO.png",
      "/images/yampa/TELA_INTEGRACAO.png",
      "/images/yampa/TELA_LOGIN.png",
      "/images/yampa/TELA_ANALISE.png",
      "/images/yampa/yampa-financial-team-lobby.png",
      "/images/yampa/yampa-yago-chat.png",
      "/images/yampa/yampa-yana-insights.png",
    ],
    content: [
      { type: "image", content: "/images/yampa/yampa-hero.png", caption: "Mockup da plataforma Yampa moderna — dashboard financeiro com cards de resumo e navegação por áreas de atuação" },

      { type: "text", content: "**Contexto**" },
      { type: "text", content: "Entrei no Yampa em meados de 2023 como o único Product Designer da empresa, reportando diretamente ao CPO — um ex-designer que se tornou meu principal sparring em decisões de produto. O time era enxuto: 1 PM, 4 devs full stack e eu, responsável por traduzir a complexidade financeira em uma experiência acessível para PMEs brasileiras." },
      { type: "text", content: "A plataforma legada era web, construída sem um Design System consistente, sem estados de interface definidos, e com uma taxa de abandono no onboarding que ultrapassava 90% — um número que só descobrimos quando começamos a instrumentar o produto." },

      { type: "text", content: "**O Problema**" },
      { type: "text", content: "Três desafios estruturais precisavam ser enfrentados simultaneamente:" },
      { type: "text", content: "1. **Complexidade financeira para usuários não técnicos** — Donos de PME não são contadores. A plataforma exigia conhecimento financeiro prévio para navegar e extrair valor. Cada decisão de design precisava eliminar atrito sem simplificar demais a ponto de perder utilidade." },
      { type: "text", content: "2. **Onboarding com perda massiva** — O fluxo educacional extenso, que explicava cada conceito passo a passo, na prática expulsava quem mais precisava do produto. Dados do Mixpanel mostraram >90% de drop-off." },
      { type: "text", content: "3. **Design System inexistente na prática** — Tokens inconsistentes, componentes sem estados (loading, erro, vazio, sucesso) e zero alinhamento com o ecossistema de desenvolvimento. Cada tela era uma decisão de estilo do zero." },

      { type: "image", content: "/images/yampa/Captura_de_tela_2026-04-16_161552-horz.png", caption: "Sequência de telas do novo onboarding — versão enxuta com Progressive Disclosure. O usuário fornece o mínimo de informações, vê uma simulação imediata, e a plataforma se preenche com o uso." },

      { type: "text", content: "**O Processo — Instrumentação e Descoberta**" },
      { type: "text", content: "O primeiro passo foi tornar o produto mensurável. Instrumentalizei a plataforma com eventos de tracking no Mixpanel em todos os fluxos críticos: onboarding (cada etapa), activation (primeiro lançamento, primeira conciliação), retention (DAU/WAU/MAU com cohort analysis por perfil de empresa) e feature adoption." },
      { type: "text", content: "A análise dos dados revelou padrões que mudaram nossa estratégia. A segmentação por coorte mostrou que muitos usuários que completavam o onboarding nunca mais voltavam — eram curiosos, não leads qualificados. Isso refinou nossa compreensão do público e evitou que otimizássemos para o usuário errado." },
      { type: "text", content: "O time de produto (eu, PM, CPO) definia os pontos de análise, e a engenharia implementava os eventos — até que passamos a fazer isso diretamente via vibe coding, integrando o event tracker como parte do processo de design." },

      { type: "text", content: "**IA no Processo de Design**" },
      { type: "text", content: "Com a maturação das LLMs a partir de 2024, passei a integrar IA em todas as etapas do fluxo de design — não como ferramenta isolada, mas como parte do pipeline de produto:" },
      { type: "text", content: "• **Discovery** → Definição de perguntas para entrevistas, análise e agrupamento de falas, priorização com base no contexto de negócio" },
      { type: "text", content: "• **Ideação** → Brainstorming assistido, crítica de ideias, identificação de edge cases" },
      { type: "text", content: "• **Definição** → Requisitos de desenvolvimento, identificação de frentes não mapeadas manualmente" },
      { type: "text", content: "• **Design System** → Manutenção de código do DS via vibe coding" },
      { type: "text", content: "• **Prototipação** → Funcionalidades criadas diretamente no código em ambiente de staging — protótipos reais, não mockups isolados" },
      { type: "text", content: "• **Testes** → Definição de critérios de teste e validação automatizada de resultados no produto real" },
      { type: "text", content: "• **Entrega** → Implementação de front-end pronta para produção via PR" },
      { type: "text", content: "O ganho mais significativo veio da prototipação in-code: ao criar funcionalidades no código existente em staging, os testes de usabilidade aconteciam no ambiente real. Se o usuário saísse do fluxo proposto, ele caía na plataforma real — não em uma tela em branco de Figma. Isso revelava problemas de integração e navegação que protótipos tradicionais nunca capturam." },

      { type: "image", content: "/images/yampa/TELA_RESUMO_FINANCEIRO.png", caption: "Dashboard financeiro do Yampa — versão moderna com cards consolidados, gráficos de fluxo de caixa e indicadores de saúde financeira" },

      { type: "text", content: "**A Solução — Yago & Yana**" },
      { type: "image", content: "/images/yampa/yampa-financial-team-lobby.png", caption: "Lobby do Time Financeiro — Yago (Assistente), Yana (Consultora) e especialistas humanos disponíveis por chat" },
      { type: "text", content: "O maior salto de produto veio com a concepção de dois **agentes de IA generativa** como membros do time financeiro do usuário, acessíveis por chat e por componentes interativos na interface:" },
      { type: "text", content: "**Yago — Assistente de Operações Financeiras** — Automatizava a parte operacional: registro de lançamentos, conciliação bancária, classificação inteligente de gastos, lembretes de vencimento. O usuário interagia via chat ou diretamente em componentes na interface (ex: arrastar extrato para conciliar). Yago eliminava o trabalho braçal de organização financeira." },
      { type: "image", content: "/images/yampa/yampa-yago-chat.png", caption: "Interface de chat com Yago — assistente de operações financeiras automatizando conciliação e lembretes" },
      { type: "text", content: "**Yana — Consultora Financeira Analítica** — Gerava insights estratégicos baseados nos dados do usuário: diagnóstico de margem de contribuição, identificação de custos que comprometem o lucro, simulação de impacto de novas contratações ou investimentos. A interação acontecia tanto via chat conversacional quanto em componentes embedados nos dashboards." },
      { type: "image", content: "/images/yampa/yampa-yana-insights.png", caption: "Dashboard de insights da Yana — consultora analítica com diagnóstico de margem e simulação de cenários" },
      { type: "text", content: "Yana era um produto upgrade (tier plus_lucro), enquanto Yago funcionava como porta de entrada (tier plus_controle) — uma estratégia de monetização que usava o agente operacional para demonstrar valor e o analítico para gerar receita." },

      { type: "text", content: "**Arquitetura Mobile-First**" },
      { type: "text", content: "Liderei a migração completa da plataforma web legada para uma arquitetura mobile-first com a stack moderna: React 19 + TypeScript + Vite 7 + Tailwind CSS v4 + shadcn/ui + TanStack Router + Framer Motion 12. A arquitetura seguiu Feature-Based Clean Architecture, com features isoladas por domínio de negócio (dashboard, journal, cash-flow, reconciliation, financial-team, goals, etc.) e TanStack Query para estado de servidor." },

      { type: "text", content: "**Design System com Governança Rigorosa**" },
      { type: "text", content: "Reformulei completamente o Design System legado ao longo de 2,5 anos:" },
      { type: "text", content: "• **Token system semântico**: cores, espaçamentos e tipografia mapeados como CSS custom properties — proibição absoluta de valores raw" },
      { type: "text", content: "• **Alinhamento Figma → Tailwind**: tokens do Figma espelhavam exatamente as classes utilitárias, eliminando o gap design-implementação" },
      { type: "text", content: "• **Regra de ESLint customizada** (no-raw-colors) para bloquear hex values e classes Tailwind raw no código" },
      { type: "text", content: "• **Estados de interface**: todo componente com estados de erro, sucesso, loading e vazio" },
      { type: "text", content: "• **Mobile-first**: touch targets ≥44px, breakpoints progressivos (1 → 2 → 4+ colunas)" },
      { type: "text", content: "• **Micro-interações**: todo elemento interativo com hover, active scale e focus-visible ring" },
      { type: "text", content: "A governança era facilitada pelo vibe coding: quando eu mesmo mantinha os arquivos de definição de tokens no código, o ciclo 'Figma → código → PR' passava de dias para horas." },

      { type: "image", content: "/images/yampa/TELA_INTEGRACAO.png", caption: "Tela de integração bancária — conexão simplificada com contas correntes para importação automática de extratos" },

      { type: "text", content: "**O Resultado**" },
      { type: "text", content: "• **3.000+ empresas** ativas em todo o Brasil" },
      { type: "text", content: "• **28.000+ empresários** impactados pela plataforma em todo o período" },
      { type: "text", content: "• **75% de redução no tempo de entrega de front-end** (~5 dias → 1-2 dias por funcionalidade)" },
      { type: "text", content: "• **+20pp na taxa de ativação** com o redesenho do onboarding baseado em dados" },
      { type: "text", content: "• **Drop-off de onboarding**: de >90% para ~70%" },
      { type: "text", content: "• **Migração bem-sucedida**: clientes veteranos adotaram a nova plataforma sem perda de retenção" },
      { type: "text", content: "• **Evolução profissional**: a combinação de design estratégico, orientação a dados e entrega via IA me levou a evoluir para Design Engineer (jan-abr 2026), unificando design de produto, engenharia de front-end e orquestração de agentes de IA" },
    ],
    contentEn: [
      { type: "image", content: "/images/yampa/yampa-hero.png", caption: "Yampa modern platform mockup — financial dashboard with summary cards and navigation by areas of action" },

      { type: "text", content: "**Context**" },
      { type: "text", content: "I joined Yampa in mid-2023 as the sole Product Designer, reporting directly to the CPO — a former designer who became my main product sparring partner. The team was lean: 1 PM, 4 full-stack developers, and myself, responsible for translating financial complexity into an accessible experience for Brazilian SMBs." },
      { type: "text", content: "The legacy platform was web-based, built without a consistent Design System, without defined interface states, and with an onboarding abandonment rate exceeding 90% — a number we only discovered when we started instrumenting the product." },

      { type: "text", content: "**The Problem**" },
      { type: "text", content: "Three structural challenges needed to be tackled simultaneously:" },
      { type: "text", content: "1. **Financial complexity for non-technical users** — SMB owners aren't accountants. The platform required prior financial knowledge to navigate and extract value. Every design decision needed to eliminate friction without oversimplifying to the point of losing usefulness." },
      { type: "text", content: "2. **Massive onboarding drop-off** — The extensive educational flow, explaining every concept step by step, was actually pushing away the very users who needed the product most. Mixpanel data showed >90% drop-off." },
      { type: "text", content: "3. **Practically non-existent Design System** — Inconsistent tokens, components without states (loading, error, empty, success), and zero alignment with the development ecosystem. Every screen was a style decision from scratch." },

      { type: "image", content: "/images/yampa/Captura_de_tela_2026-04-16_161552-horz.png", caption: "New onboarding screen sequence — streamlined version with Progressive Disclosure. The user provides minimal information, sees an immediate simulation, and the platform fills in with usage." },

      { type: "text", content: "**The Process — Instrumentation & Discovery**" },
      { type: "text", content: "The first step was making the product measurable. I instrumented the platform with Mixpanel tracking events across all critical flows: onboarding (each step), activation (first journal entry, first reconciliation), retention (DAU/WAU/MAU with cohort analysis by company profile), and feature adoption." },
      { type: "text", content: "Data analysis revealed patterns that changed our strategy. Cohort segmentation showed that many users who completed onboarding never returned — they were curious, not qualified leads. This refined our audience understanding and prevented optimizing for the wrong user." },
      { type: "text", content: "The product team (myself, PM, CPO) defined analysis points, and engineering implemented the events — until we started doing this directly via vibe coding, integrating the event tracker as part of the design process." },

      { type: "text", content: "**AI in the Design Process**" },
      { type: "text", content: "As LLMs matured from 2024 onward, I integrated AI across every stage of the design workflow — not as an isolated tool, but as part of the product pipeline:" },
      { type: "text", content: "• **Discovery** → Interview question definition, speech analysis and clustering, business-context prioritization" },
      { type: "text", content: "• **Ideation** → AI-assisted brainstorming, idea critique, edge case identification" },
      { type: "text", content: "• **Definition** → Development requirements, surfacing unconsidered fronts" },
      { type: "text", content: "• **Design System** → DS code maintenance via vibe coding" },
      { type: "text", content: "• **Prototyping** → Features created directly in staging code — real prototypes, not isolated mockups" },
      { type: "text", content: "• **Testing** → Test criteria definition and automated result validation in the real product" },
      { type: "text", content: "• **Delivery** → Production-ready front-end implementation via PR" },
      { type: "text", content: "The most significant gain came from in-code prototyping: by creating features in existing staging code, usability tests happened in the real environment. If the user left the proposed flow, they fell into the real platform — not a blank Figma screen. This revealed integration and navigation issues that traditional prototypes never capture." },

      { type: "image", content: "/images/yampa/TELA_RESUMO_FINANCEIRO.png", caption: "Yampa financial dashboard — modern version with consolidated cards, cash flow charts, and financial health indicators" },

      { type: "text", content: "**The Solution — Yago & Yana**" },
      { type: "image", content: "/images/yampa/yampa-financial-team-lobby.png", caption: "Financial Team Lobby — Yago (Assistant), Yana (Consultant), and human specialists available via chat" },
      { type: "text", content: "The biggest product leap came with the conception of two **generative AI agents** as members of the user's financial team, accessible via chat and interactive UI components:" },
      { type: "text", content: "**Yago — Financial Operations Assistant** — Automated the operational side: journal entries, bank reconciliation, intelligent expense classification, payment reminders. Users interacted via chat or directly through interface components (e.g., drag a statement to reconcile). Yago eliminated the busywork of financial organization." },
      { type: "image", content: "/images/yampa/yampa-yago-chat.png", caption: "Chat interface with Yago — financial operations assistant automating reconciliation and reminders" },
      { type: "text", content: "**Yana — Analytical Financial Consultant** — Generated strategic insights based on user data: margin contribution diagnosis, cost analysis eating into profits, simulation of new hires or investments impact. Interaction happened both through conversational chat and embedded dashboard components." },
      { type: "image", content: "/images/yampa/yampa-yana-insights.png", caption: "Yana's insights dashboard — analytical consultant with margin diagnosis and scenario simulation" },
      { type: "text", content: "Yana was an upgrade product (plus_lucro tier), while Yago served as the entry point (plus_controle tier) — a monetization strategy using the operational agent to demonstrate value and the analytical one to generate revenue." },

      { type: "text", content: "**Mobile-First Architecture**" },
      { type: "text", content: "I led the complete migration from the legacy web platform to a mobile-first architecture with a modern stack: React 19 + TypeScript + Vite 7 + Tailwind CSS v4 + shadcn/ui + TanStack Router + Framer Motion 12. The architecture followed Feature-Based Clean Architecture, with features isolated by business domain (dashboard, journal, cash-flow, reconciliation, financial-team, goals, etc.) and TanStack Query for server state." },

      { type: "text", content: "**Design System with Strict Governance**" },
      { type: "text", content: "I completely overhauled the legacy Design System over 2.5 years:" },
      { type: "text", content: "• **Semantic token system**: colors, spacing, and typography mapped as CSS custom properties — absolute ban on raw values" },
      { type: "text", content: "• **Figma → Tailwind alignment**: Figma tokens exactly mirrored Tailwind utility classes, eliminating the design-implementation gap" },
      { type: "text", content: "• **Custom ESLint rule** (no-raw-colors) to block hex values and raw Tailwind classes in code" },
      { type: "text", content: "• **Interface states**: every component with error, success, loading, and empty states" },
      { type: "text", content: "• **Mobile-first**: touch targets ≥44px, progressive breakpoints (1 → 2 → 4+ columns)" },
      { type: "text", content: "• **Micro-interactions**: every interactive element with hover states, active scale, and focus-visible ring" },
      { type: "text", content: "Governance was facilitated by vibe coding: when I maintained the token definition files directly in code, the 'Figma → code → PR' cycle went from days to hours." },

      { type: "image", content: "/images/yampa/TELA_INTEGRACAO.png", caption: "Bank integration screen — simplified connection to bank accounts for automatic statement import" },

      { type: "text", content: "**The Results**" },
      { type: "text", content: "• **3,000+ active companies** across Brazil" },
      { type: "text", content: "• **28,000+ entrepreneurs impacted** throughout the period" },
      { type: "text", content: "• **75% reduction in front-end delivery time** (~5 days → 1-2 days per feature)" },
      { type: "text", content: "• **+20pp activation rate increase** with data-driven onboarding redesign" },
      { type: "text", content: "• **Onboarding drop-off**: from >90% to ~70%" },
      { type: "text", content: "• **Successful migration**: veteran clients adopted the new platform without retention loss" },
      { type: "text", content: "• **Role evolution**: combining strategic design, data orientation, and AI-driven delivery led to evolving into a Design Engineer role (Jan-Apr 2026), unifying product design, front-end engineering, and AI agent orchestration" },
    ],

  },
{
    id: "2",
    slug: "plataforma-call-center",
    title: "Plataforma de Atendimento para Call Center",
    titleEn: "Call Center Service Platform",

    company: "SiMCo — Healthcare",
    year: "2022",
    role: ["UI Design", "UX Design"],
    category: "Web Design",
    description:
      "Recebemos o desafio de entender a rotina de atendimento do call center de uma clínica de saúde e buscar soluções para melhorar o atendimento e o trabalho dos seus colaboradores.",
    descriptionEn:
      "We received the challenge of understanding the call center routine of a health clinic and sought solutions to improve customer service and the work of its employees.",
    challenge:
      "Conduzir o usuário no fluxo de trabalho desejado, em meio a uma quantidade grande de informações e funcionalidades.\n\nCall center sempre foi considerado um local complicado, por diversos fatores. A melhor estratégia foi reformular o software utilizado no dia a dia.",
    challengeEn:
      "Guiding the user through the desired workflow, amid a large amount of information and features.\n\nCall center has always been considered a complicated place, for various factors. The best strategy was to redesign the software used daily.",
    solution:
      "1) Carrinho de compras para orçamentos - atendimento similar a e-commerce, facilitando a familiaridade do usuário.\n\n2) Tela do paciente consolidada - todas as informações em um só lugar: agendamentos, orçamentos, pacotes, link de pagamento adiantado.\n\n3) Dashboard do operador - substituindo planilhas e sistemas legados.\n\n4) Localização das clínicas - para auxiliares operadores a informar locais para pacientes de outros estados.",
    solutionEn:
      "1) Shopping cart for quotes - e-commerce-like service, making the user's life easier.\n\n2) Consolidated patient screen - all information in one place: appointments, quotes, packages, advance payment link.\n\n3) Operator dashboard - replacing spreadsheets and legacy systems.\n\n4) Clinic location - to help operators inform locations to patients from other states.",
    process:
      "Inception, entrevistas com operadores, levantamento de dados no Miro, Product Backlog, criação de fluxos de geração de orçamento.",
    processEn:
      "Inception, operator interviews, data gathering in Miro, Product Backlog, creation of quote generation flows.",
    results:
      "-50% tempo médio de atendimento, +22% número de orçamentos gerados, 15 mil agendamentos/mês",
    resultsEn:
      "-50% average handling time, +22% number of quotes generated, 15k appointments/month",
    metrics: [
      "Atendimento de orçamentos",
      "Agendamentos",
      "Pagamento adiantado",
      "No-show",
      "Tempo médio",
    ],
    metricsEn: [
      "Quote handling",
      "Appointments",
      "Advance payment",
      "No-show",
      "Average time",
    ],
    thumbnail: "/images/sim/Untitled 1.png",
    images: [
      "/images/sim/Untitled 10.png",
      "/images/sim/Untitled.png",
      "/images/sim/Untitled 1.png",
      "/images/sim/Untitled 2.png",
      "/images/sim/Untitled 3.png",
      "/images/sim/Untitled 4.png",
      "/images/sim/Untitled 5.png",
      "/images/sim/Untitled 6.png",
      "/images/sim/Untitled 7.png",
      "/images/sim/Untitled 8.png",
      "/images/sim/Untitled 9.png",
      "/images/sim/Untitled 11.png",
      "/images/sim/Untitled 12.png",
      "/images/sim/Untitled 13.png",
      "/images/sim/Untitled 14.png",
      "/images/sim/Untitled 15.png",
      "/images/sim/Untitled 16.png",
      "/images/sim/Untitled 17.png",
      "/images/sim/Untitled 18.png",
      "/images/sim/Untitled 19.png",
      "/images/sim/Untitled 20.png",
      "/images/sim/Untitled 21.png",
      "/images/sim/Untitled 22.png",
      "/images/sim/IMG_20211125_103624.png",
      "/images/sim/IMG_20211125_104747.png",
    ],
    content: [
      { type: "image", content: "/images/sim/Untitled.png", caption: "Tela de agendamento do sistema legado — informação densa e sem hierarquia visual clara" },
      { type: "text", content: "**Contexto**" },
      { type: "text", content: "Uma das maiores clínicas de saúde do país tinha um call center que processava milhares de atendimentos por dia — agendamentos, orçamentos, pacotes de exames, confirmações de consulta. A operação era o coração do relacionamento com o paciente, mas o software usado no dia a dia era um labirinto." },
      { type: "text", content: "A Squad foi formada com um objetivo claro: entender a rotina dos operadores de call center e redesenhar a experiência de atendimento — do primeiro contato ao agendamento concluído. Eu atuei como UX e UI designer, participando de todas as cerimônias ágeis ao lado de um time excepcional." },

      { type: "text", content: "**O Problema**" },
      { type: "text", content: "Call center sempre foi considerado um lugar complicado. E por bons motivos:" },
      { type: "text", content: "• **Sobrecarga de informações** — O operador precisava navegar por múltiplas telas, abas e sistemas para completar um único atendimento. Agendamento num lugar, orçamento em outro, dados do paciente num terceiro." },
      { type: "text", content: "• **Fluxo fragmentado** — Cada atendimento exigia alternar entre sistemas diferentes, copiando e colando informações manualmente. O risco de erro era alto." },
      { type: "text", content: "• **Interface datada** — O software legado tinha uma densidade visual alta, sem hierarquia clara. Encontrar a informação certa exigia tempo e experiência." },
      { type: "text", content: "• **Processos inconsistentes** — Sem centralização, cada operador desenvolvia seu próprio jeito de fazer. A informação ficava na cabeça das pessoas, não no sistema." },
      { type: "text", content: "O resultado? Atendimentos lentos, operadores estressados, pacientes insatisfeitos. Meu principal desafio aqui foi conduzir o usuário no fluxo de trabalho desejado em meio a essa quantidade grande de informações e funcionalidades." },
      { type: "image", content: "/images/sim/Untitled 1.png", caption: "Tela de filtros do sistema legado — múltiplos campos e opções sem priorização visual" },
      { type: "image", content: "/images/sim/Untitled 2.png", caption: "Outra vista do sistema de agendamento — a densidade de informação dificultava a localização rápida de dados" },
      { type: "image", content: "/images/sim/Untitled 3.png", caption: "PDF de orçamento do sistema legado — layout pouco aproveitado e hierarquia confusa" },

      { type: "text", content: "**O Processo — Descoberta e Pesquisa**" },
      { type: "text", content: "Começamos com uma inception intensa: reuniões diárias, entrevistas com operadores, registro de tudo num quadro no Miro. O objetivo era mergulhar na realidade do call center antes de pensar em qualquer solução." },
      { type: "image", content: "/images/sim/Untitled 4.png", caption: "Notas das entrevistas com operadores — dores, desejos e insights registrados durante a fase de discovery" },
      { type: "text", content: "As entrevistas revelaram padrões que nenhum dado quantitativo nos traria. Os operadores não reclamavam só do software — reclamavam de ter que pensar em 3 lugares diferentes ao mesmo tempo. Reclamavam de não conseguir ver o panorama completo do paciente numa única tela. Reclamavam de passar mais tempo navegando do que atendendo." },
      { type: "image", content: "/images/sim/Untitled 5.png", caption: "Visualização de oportunidades identificadas — cada dor dos operadores virava uma direção de solução" },
      { type: "image", content: "/images/sim/Untitled 6.png", caption: "Mapa de dificuldades encontradas — priorização dos problemas mais críticos para o fluxo de atendimento" },
      { type: "image", content: "/images/sim/Untitled 7.png", caption: "Product backlog organizado por impacto — 31% dos atendimentos eram pesquisa de preço, nosso primeiro alvo" },

      { type: "text", content: "**Dados que guiaram a estratégia**" },
      { type: "text", content: "Nosso backlog revelou um dado que mudou tudo: **31% dos atendimentos** eram sobre pesquisa de preço. Os pacientes ligavam para saber quanto custava determinado procedimento, e o operador precisava consultar tabelas, calcular descontos, verificar convênios — tudo manualmente, em telas diferentes." },
      { type: "text", content: "Fazia total sentido atacar isso primeiro. Se conseguíssemos tornar a geração de orçamentos rápida e intuitiva, o impacto seria imediato em quase um terço de todos os atendimentos." },

      { type: "image", content: "/images/sim/Untitled 8.png", caption: "Fluxo de geração de orçamento mapeado — da ligação do paciente à entrega do PDF" },
      { type: "text", content: "**A Solução — Carrinho de Compras**" },
      { type: "text", content: "Desenhei o fluxo desejado para a geração de orçamentos, validei com nosso PO Pablo, e fui para as telas. A ideia central veio de duas heurísticas de usabilidade de Nielsen: **\"Correspondência entre o sistema e o mundo real\"** e **\"Consistência e padrões\"**." },
      { type: "text", content: "Quando alguém quer um orçamento, o processo natural é: busca item por item, junta tudo num mesmo local, confere o valor de cada um, e só então fecha a conta. Isso é essencialmente um **carrinho de compras**. E todo mundo já sabe usar um carrinho de compras." },
      { type: "text", content: "Aproveitamos a familiaridade com e-commerce para eliminar a curva de aprendizado. O operador adicionava procedimentos como se estivesse fazendo compras online, via o resumo com valores, e gerava o PDF com um clique." },
      { type: "image", content: "/images/sim/Untitled 9.png", caption: "Primeiras telas de seleção de procedimentos — busca e adição de itens ao orçamento no formato carrinho" },
      { type: "image", content: "/images/sim/Untitled 10.png", caption: "Resumo do orçamento com valores detalhados — transparência total antes da geração do PDF" },

      { type: "text", content: "**PDF de Orçamento — Antes e Depois**" },
      { type: "text", content: "O primeiro resultado prático foi o PDF de orçamento. A transformação visual foi drástica: hierarquia de informações redesenhada, tipografia funcional, dados do paciente e valores organizados de forma limpa. O antes parecia uma planilha exportada; o depois parecia um documento profissional que o paciente podia ler e entender sem ajuda." },
      { type: "image", content: "/images/sim/Untitled 11.png", caption: "PDF de orçamento antes — layout denso, hierarquia confusa, informações mal distribuídas" },
      { type: "image", content: "/images/sim/Untitled 12.png", caption: "PDF de orçamento depois — informação organizada, hierarquia visual clara, identidade da clínica" },

      { type: "text", content: "**Tela do Paciente — O Centro do Universo**" },
      { type: "text", content: "Enquanto o carrinho resolvia o problema mais frequente, a tela do paciente resolvia o problema mais estrutural. Em vez de espalhar informações por múltiplas telas, consolidamos tudo num único lugar:" },
      { type: "text", content: "• **Agendamentos** — urgências de agenda bloqueada, confirmações, link de pagamento adiantado e histórico completo" },
      { type: "text", content: "• **Orçamentos** — todos os orçamentos gerados para aquele paciente, com status e valores" },
      { type: "text", content: "• **Pacotes** — pacotes de exames comprados e retornos disponíveis" },
      { type: "text", content: "Tudo com badges e indicadores visuais, destacando os itens mais importantes. O operador tinha, numa única tela, o mapa completo do relacionamento com aquele paciente." },
      { type: "image", content: "/images/sim/Untitled 13.png", caption: "Tela do paciente consolidada — agendamentos, orçamentos, pacotes e retornos num único lugar" },
      { type: "image", content: "/images/sim/Untitled 14.png", caption: "Detalhamento dos agendamentos com indicadores visuais — badges de urgência e status" },

      { type: "text", content: "**Dashboard do Operador**" },
      { type: "text", content: "Outro destaque foi o dashboard do operador, que veio para substituir o uso de planilhas e um sistema legado que estava sendo descontinuado. Mais uma vez, o desafio era mostrar uma quantidade grande de informações numéricas de forma visualmente agradável e acionável." },
      { type: "text", content: "O operador passou a ter visibilidade do próprio desempenho: número de atendimentos, orçamentos gerados, tempo médio, indicadores de qualidade. Dados que antes estavam dispersos em planilhas agora estavam disponíveis em tempo real, na própria plataforma." },
      { type: "image", content: "/images/sim/Untitled 15.png", caption: "Dashboard do operador antes — dados soltos, sem visualização ou métricas claras" },
      { type: "image", content: "/images/sim/Untitled 16.png", caption: "Dashboard do operador depois — métricas organizadas, indicadores visuais e visão de desempenho" },

      { type: "text", content: "**Resumo do Agendamento**" },
      { type: "text", content: "Uma tela que não pode ficar de fora: o resumo do agendamento consolidava todas as informações num formato pronto para ser enviado ao paciente — dados da consulta, local, horário, instruções prévias. Menos perguntas, menos retrabalho." },
      { type: "image", content: "/images/sim/Untitled 17.png", caption: "Resumo do agendamento — informações consolidadas prontas para compartilhamento com o paciente" },

      { type: "text", content: "**Localização das Clínicas**" },
      { type: "text", content: "Um problema que parecia simples, mas fazia diferença no dia a dia: operadores precisavam informar o endereço das clínicas para pacientes de outros estados ou que não conheciam a região. Criamos uma funcionalidade que mostrava a clínica mais próxima, distância e pontos de referência — ajudando o operador a dar instruções precisas sem precisar consultar o Google Maps." },
      { type: "image", content: "/images/sim/Untitled 18.png", caption: "Funcionalidade de localização — informações da clínica mais próxima com distância e referências" },
      { type: "image", content: "/images/sim/Untitled 19.png", caption: "Detalhamento da localização com pontos de referência para orientar o paciente" },
      { type: "image", content: "/images/sim/Untitled 20.png", caption: "Mapa visual com as clínicas disponíveis — suporte rápido para operadores" },

      { type: "text", content: "**UX Research — Pesquisa de Satisfação**" },
      { type: "text", content: "Nos meus últimos dias na empresa, o PO me pediu para planejar uma pesquisa de satisfação com os usuários da plataforma. Nesse questionário, apliquei parte do conhecimento do livro **\"O Teste da Mãe\"** do Rob Fitzpatrick — especialmente a ideia de fazer perguntas sobre comportamentos passados em vez de opiniões futuras." },
      { type: "text", content: "Infelizmente não deu tempo de colher as respostas, mas o planejamento foi entregue e o questionário construído com perguntas que evitavam viés de confirmação — focando em fatos, não em promessas." },
      { type: "image", content: "/images/sim/Untitled 21.png", caption: "Planejamento da pesquisa de satisfação — perguntas baseadas em comportamentos reais, não opiniões" },

      { type: "text", content: "**Os Resultados**" },
      { type: "text", content: "Em quase 6 meses, entregamos uma nova forma de trabalhar para o call center:" },
      { type: "text", content: "• **-50% no tempo médio de atendimento** — operadores encontravam a informação em segundos, não em minutos" },
      { type: "text", content: "• **+22% no número de orçamentos gerados** — o carrinho de compras reduziu o atrito de ponta a ponta" },
      { type: "text", content: "• **15 mil agendamentos por mês** — volume sustentável com a nova plataforma" },
      { type: "text", content: "• **Pagamento adiantado** — link de pagamento integrado para reduzir no-show" },
      { type: "text", content: "Os elogios por parte dos operadores eram constantes. A empolgação com as novas funcionalidades era visível — e isso, para mim, valia tanto quanto as métricas." },

      { type: "text", content: "**Reflexão**" },
      { type: "text", content: "Call center sempre foi visto como um lugar complicado. Algumas dores estão fora do escopo de atuação de uma squad — são mais relacionadas a negócios, a estrutura, a cultura. Mas nosso time focou no que estava ao nosso alcance: a ferramenta de trabalho." },
      { type: "text", content: "Uma pessoa que consegue fazer um atendimento satisfatório rapidamente tem menos estresse, gera mais satisfação nos clientes, ganha mais comissão, sente-se mais feliz no trabalho. São coisas intangíveis, mas que a gente via no olho de cada operador durante as apresentações." },
      { type: "image", content: "/images/sim/IMG_20211125_103624.png", caption: "Apresentação da plataforma para a equipe — o momento em que o trabalho vira realidade" },
      { type: "image", content: "/images/sim/IMG_20211125_104747.png", caption: "Demonstração das novas funcionalidades — a reação dos operadores validava cada decisão de design" },
      { type: "image", content: "/images/sim/Untitled 22.png", caption: "Reação genuína de uma colaboradora durante a apresentação — a felicidade de quem ganhou uma ferramenta que respeita seu trabalho" },

      { type: "text", content: "**Time**" },
      { type: "text", content: "O que mais levo dessa experiência é como um time bem alinhado é fundamental para entregas de qualidade em velocidade. Meus agradecimentos:" },
      { type: "text", content: "• Ao Pablo, nosso PO, que conduziu a squad de forma impecável" },
      { type: "text", content: "• Ao Werbesson, nosso SM, que deixou tudo ágil e organizado" },
      { type: "text", content: "• À Vivi e ao Douglas, nossos analistas, que nunca deixaram uma informação fora do nosso alcance" },
      { type: "text", content: "• Ao Rafa e ao Franklin, nosso time de front — nunca vi front ser feito tão rápido" },
      { type: "text", content: "• Ao Nilberto, nosso BI, cheio de métricas e insights" },
      { type: "text", content: "• E ao Gabriel, nosso back-end — o monstro, o Gabigod, youtuber, gamer, palestrante, presente no metaverso e tudo mais" },
      { type: "text", content: "Nem tudo que foi feito está aqui. Teve muito mais coisa envolvida. Mas que fique registrado o companheirismo que tivemos em tão pouco tempo." },
    ],
    contentEn: [
      { type: "image", content: "/images/sim/Untitled.png", caption: "Legacy scheduling system screen — dense information with no clear visual hierarchy" },

      { type: "text", content: "**Context**" },
      { type: "text", content: "One of the largest healthcare clinics in the country had a call center processing thousands of calls per day — appointments, quotes, exam packages, consultation confirmations. The operation was the heart of the patient relationship, but the daily software was a maze." },
      { type: "text", content: "The Squad was formed with a clear goal: understand the call center operators' routine and redesign the service experience — from first contact to completed scheduling. I acted as a UX and UI designer, participating in all agile ceremonies alongside an exceptional team." },

      { type: "text", content: "**The Problem**" },
      { type: "text", content: "Call centers have always been considered complicated places. For good reasons:" },
      { type: "text", content: "• **Information overload** — Operators had to navigate multiple screens, tabs, and systems to complete a single call. Scheduling in one place, quotes in another, patient data in a third." },
      { type: "text", content: "• **Fragmented workflow** — Each call required switching between different systems, manually copying and pasting information. The risk of error was high." },
      { type: "text", content: "• **Outdated interface** — The legacy software had high visual density with no clear hierarchy. Finding the right information took time and experience." },
      { type: "text", content: "• **Inconsistent processes** — Without centralization, each operator developed their own way of working. Information lived in people's heads, not in the system." },
      { type: "text", content: "The result? Slow calls, stressed operators, dissatisfied patients. My main challenge here was guiding the user through the desired workflow amidst this large amount of information and features." },

      { type: "image", content: "/images/sim/Untitled 1.png", caption: "Legacy filter screen — multiple fields and options with no visual prioritization" },
      { type: "image", content: "/images/sim/Untitled 2.png", caption: "Another view of the legacy scheduling system — information density made quick data retrieval difficult" },
      { type: "image", content: "/images/sim/Untitled 3.png", caption: "Legacy quote PDF — poor layout utilization and confusing hierarchy" },

      { type: "text", content: "**The Process — Discovery & Research**" },
      { type: "text", content: "We started with an intensive inception: daily meetings, operator interviews, everything recorded on a Miro board. The goal was to dive into the call center reality before thinking about any solution." },
      { type: "image", content: "/images/sim/Untitled 4.png", caption: "Operator interview notes — pain points, desires, and insights captured during the discovery phase" },
      { type: "text", content: "The interviews revealed patterns that no quantitative data could bring us. Operators weren't just complaining about the software — they complained about having to think in 3 different places at once. They complained about not being able to see the complete patient picture on a single screen. They complained about spending more time navigating than serving." },
      { type: "image", content: "/images/sim/Untitled 5.png", caption: "Opportunity visualization — each operator pain point turned into a solution direction" },
      { type: "image", content: "/images/sim/Untitled 6.png", caption: "Challenges map — prioritizing the most critical problems for the service flow" },
      { type: "image", content: "/images/sim/Untitled 7.png", caption: "Product backlog organized by impact — 31% of calls were price inquiries, our first target" },

      { type: "text", content: "**Data-Driven Strategy**" },
      { type: "text", content: "Our backlog revealed a game-changing number: **31% of all calls** were about price inquiries. Patients called to find out how much a specific procedure cost, and the operator had to consult tables, calculate discounts, check insurance plans — all manually, across different screens." },
      { type: "text", content: "It made total sense to attack this first. If we could make quote generation fast and intuitive, the impact would be immediate on nearly a third of all calls." },

      { type: "image", content: "/images/sim/Untitled 8.png", caption: "Quote generation flow mapped — from patient call to PDF delivery" },
      { type: "text", content: "**The Solution — Shopping Cart**" },
      { type: "text", content: "I designed the desired flow for quote generation, validated it with our PO Pablo, and went straight to screens. The core idea came from two of Nielsen's usability heuristics: **\"Match between system and the real world\"** and **\"Consistency and standards\"**." },
      { type: "text", content: "When someone wants a quote, the natural process is: search item by item, gather them all in one place, check the value of each, and only then close the deal. This is essentially a **shopping cart**. And everyone already knows how to use a shopping cart." },
      { type: "text", content: "We leveraged e-commerce familiarity to eliminate the learning curve. Operators added procedures like they were shopping online, saw the summary with values, and generated the PDF with one click." },
      { type: "image", content: "/images/sim/Untitled 9.png", caption: "Initial procedure selection screens — search and add items to the quote in shopping cart format" },
      { type: "image", content: "/images/sim/Untitled 10.png", caption: "Quote summary with detailed values — full transparency before PDF generation" },

      { type: "text", content: "**Quote PDF — Before & After**" },
      { type: "text", content: "The first practical result was the quote PDF. The visual transformation was drastic: redesigned information hierarchy, functional typography, patient data and values organized cleanly. Before, it looked like an exported spreadsheet; after, it looked like a professional document the patient could read and understand without help." },
      { type: "image", content: "/images/sim/Untitled 11.png", caption: "Quote PDF before — dense layout, confusing hierarchy, poorly distributed information" },
      { type: "image", content: "/images/sim/Untitled 12.png", caption: "Quote PDF after — organized information, clear visual hierarchy, clinic identity" },

      { type: "text", content: "**Patient Screen — The Center of the Universe**" },
      { type: "text", content: "While the shopping cart solved the most frequent problem, the patient screen solved the most structural one. Instead of spreading information across multiple screens, we consolidated everything in one place:" },
      { type: "text", content: "• **Appointments** — blocked schedule emergencies, confirmations, advance payment link, and full history" },
      { type: "text", content: "• **Quotes** — all quotes generated for that patient, with status and values" },
      { type: "text", content: "• **Packages** — purchased exam packages and available follow-ups" },
      { type: "text", content: "All with badges and visual indicators, highlighting the most important items. The operator had, on a single screen, the complete map of the relationship with that patient." },
      { type: "image", content: "/images/sim/Untitled 13.png", caption: "Consolidated patient screen — appointments, quotes, packages, and follow-ups in one place" },
      { type: "image", content: "/images/sim/Untitled 14.png", caption: "Appointment details with visual indicators — urgency badges and status markers" },

      { type: "text", content: "**Operator Dashboard**" },
      { type: "text", content: "Another highlight was the operator dashboard, which came to replace spreadsheets and a legacy system being phased out. Once again, the challenge was showing a large amount of numerical information in a visually pleasing and actionable way." },
      { type: "text", content: "Operators gained visibility into their own performance: number of calls handled, quotes generated, average time, quality indicators. Data that was previously scattered across spreadsheets was now available in real-time, within the platform itself." },
      { type: "image", content: "/images/sim/Untitled 15.png", caption: "Operator dashboard before — scattered data, no visualization or clear metrics" },
      { type: "image", content: "/images/sim/Untitled 16.png", caption: "Operator dashboard after — organized metrics, visual indicators, performance overview" },

      { type: "text", content: "**Appointment Summary**" },
      { type: "text", content: "One screen that can't be left out: the appointment summary consolidated all information into a format ready to be sent to the patient — appointment details, location, time, pre- instructions. Fewer questions, less rework." },
      { type: "image", content: "/images/sim/Untitled 17.png", caption: "Appointment summary — consolidated information ready for patient sharing" },

      { type: "text", content: "**Clinic Locations**" },
      { type: "text", content: "A seemingly simple problem that made a big difference: operators needed to provide clinic addresses for patients from other states or unfamiliar with the area. We built a feature showing the nearest clinic, distance, and landmarks — helping operators give precise instructions without having to consult Google Maps." },
      { type: "image", content: "/images/sim/Untitled 18.png", caption: "Location feature — nearest clinic information with distance and references" },
      { type: "image", content: "/images/sim/Untitled 19.png", caption: "Location details with landmarks to guide the patient" },
      { type: "image", content: "/images/sim/Untitled 20.png", caption: "Visual map with available clinics — quick support for operators" },

      { type: "text", content: "**UX Research — Satisfaction Survey**" },
      { type: "text", content: "In my last days at the company, the PO asked me to plan a satisfaction survey with the platform's users. In this questionnaire, I applied knowledge from **\"The Mom Test\"** by Rob Fitzpatrick — especially the idea of asking about past behaviors instead of future opinions." },
      { type: "text", content: "Unfortunately, there wasn't time to collect the responses, but the planning was delivered and the questionnaire was built with questions that avoided confirmation bias — focusing on facts, not promises." },
      { type: "image", content: "/images/sim/Untitled 21.png", caption: "Satisfaction survey planning — questions based on real behaviors, not opinions" },

      { type: "text", content: "**The Results**" },
      { type: "text", content: "In nearly 6 months, we delivered a new way of working for the call center:" },
      { type: "text", content: "• **-50% average handling time** — operators found information in seconds, not minutes" },
      { type: "text", content: "• **+22% increase in quotes generated** — the shopping cart reduced end-to-end friction" },
      { type: "text", content: "• **15,000 appointments per month** — sustainable volume with the new platform" },
      { type: "text", content: "• **Advance payment** — integrated payment link to reduce no-shows" },
      { type: "text", content: "Operator praise was constant. Excitement about the new features was visible — and that, to me, was worth as much as the metrics." },

      { type: "text", content: "**Reflection**" },
      { type: "text", content: "Call centers have always been seen as complicated places. Some pain points are outside a squad's scope — they're about business, structure, culture. But our team focused on what was within our reach: the work tool." },
      { type: "text", content: "Someone who can provide satisfactory service quickly has less stress, generates more customer satisfaction, earns more commission, and feels happier at work. These are intangible things, but we could see them in every operator's eyes during the presentations." },
      { type: "image", content: "/images/sim/IMG_20211125_103624.png", caption: "Platform presentation to the team — the moment work becomes reality" },
      { type: "image", content: "/images/sim/IMG_20211125_104747.png", caption: "New feature demonstration — operators' reactions validated every design decision" },
      { type: "image", content: "/images/sim/Untitled 22.png", caption: "A genuine reaction from a team member during the presentation — the joy of receiving a tool that respects their work" },

      { type: "text", content: "**Team**" },
      { type: "text", content: "What I take most from this experience is how a well-aligned team is fundamental for quality deliveries at speed. My acknowledgments:" },
      { type: "text", content: "• To Pablo, our PO, who led the squad impeccably" },
      { type: "text", content: "• To Werbesson, our SM, who kept everything agile and organized" },
      { type: "text", content: "• To Vivi and Douglas, our analysts, who never let information be out of reach" },
      { type: "text", content: "• To Rafa and Franklin, our front-end team — I've never seen front-end done so fast" },
      { type: "text", content: "• To Nilberto, our BI, full of metrics and insights" },
      { type: "text", content: "• And to Gabriel, our back-end — the monster, Gabigod, YouTuber, gamer, speaker, present in the metaverse and all that" },
      { type: "text", content: "Not everything that was done is here. There was much more involved. But let it be recorded: the companionship we had in such a short time." },
    ],

  },
  {
    id: "1",
    slug: "saude-mental",
    title: "Saúde Mental",
    titleEn: "Mental Health",

    company: "SiMCo — Healthcare",
    year: "2022",
    role: ["UI Design", "UX Design"],
    category: "Mobile Design",
    description:
      "A Squad foi formada com o objetivo de buscar novos produtos para a empresa. Um dos grandes desafios seria incentivar o uso diário do aplicativo. Aqui explico como e porque adicionamos uma funcionalidade de cuidado em saúde mental.",
    descriptionEn:
      "The Squad was formed with the goal of finding new products for the company. One of the biggest challenges would be encouraging daily app usage. Here I explain how and why we added a mental health care feature.",
    challenge:
      "Construir um diário de humor, onde o usuário pudesse registrar o dia a dia da sua saúde mental. \n\nO terreno de saúde mental é arriscado - as pessoas ainda estão se acostumando a tudo ser online, muitas sentem falta do presencial.",
    challengeEn:
      "Building a mood diary, where the user could record their daily mental health.\n\nThe mental health field is risky - people are still getting used to everything being online, many miss in-person.",
    solution:
      "1) Diário de humor - para acompanhamento da saúde mental ao longo do tempo.\n\n2) Agendamento para consultas presenciais e online.\n\n3) Pacotes de desconto em consultas.\n\nTudo seguindo o design system da época e com benchmarks extensivos.",
    solutionEn:
      "1) Mood diary - for tracking mental health over time.\n\n2) Scheduling for in-person and online consultations.\n\n3) Discount packages for consultations.\n\nAll following the design system at the time and with extensive benchmarks.",
    process:
      "Benchmark extenso de apps de diário de humor, quadro de requisitos, protótipos de baixa fidelidade, esboço de fluxo, validação com estagiárias.",
    processEn:
      "Extensive benchmark of mood diary apps, requirements board, low-fidelity prototypes, flow sketching, validation with interns.",
    results:
      "Funcionalidade em versão beta, visual e fluxo approved. Fui desligado antes do lançamento oficial.",
    resultsEn:
      "Feature in beta version, visual and flow approved. I was laid off before the official launch.",
    metrics: ["Usuários ativos", "Taxa de utilização", "Tempo de utilização", "Conversão em agendamentos"],
    metricsEn: ["Active users", "Usage rate", "Usage time", "Appointment conversion"],
    thumbnail: "/images/simapp/Untitled.png",
    images: [
      "/images/simapp/Untitled.png",
      "/images/simapp/Untitled 1.png",
      "/images/simapp/Untitled 2.png",
      "/images/simapp/Untitled 3.png",
      "/images/simapp/Untitled 4.png",
      "/images/simapp/Untitled 5.png",
      "/images/simapp/Untitled 6.png",
      "/images/simapp/Untitled 7.png",
      "/images/simapp/Untitled 8.png",
      "/images/simapp/Untitled 9.png",
      "/images/simapp/Untitled 10.png",
    ],
    content: [
      { type: "image", content: "/images/simapp/Untitled.png", caption: "Tela inicial do aplicativo — o ponto de partida para repensar o engajamento diário dos usuários" },

      { type: "text", content: "**Contexto**" },
      { type: "text", content: "A SiMCo já tinha um ecossistema digital consolidado: aplicativo, site, agendamento online. Mas um desafio persistia — o aplicativo era aberto apenas quando necessário, usado como ferramenta pontual em vez de um canal de relacionamento contínuo." },
      { type: "text", content: "A Squad foi formada com o objetivo de buscar novos produtos para a empresa. Queríamos entender o que faltava na vida digital dos pacientes e como poderíamos agregar valor real ao dia a dia deles." },

      { type: "text", content: "**O Problema**" },
      { type: "text", content: "O grande desafio era incentivar o uso diário do aplicativo. As pessoas abriam o app para agendar ou reagendar consultas, e depois fechavam. Não havia motivo para voltar. A saúde mental surgiu como uma oportunidade natural — cuidar da mente é um hábito diário, não um evento pontual." },
      { type: "text", content: "Mas o terreno era arriscado. Saúde mental é um tema sensível: as pessoas ainda estão se acostumando a tratar desses assuntos online, muitas sentem falta do presencial, e existem justificativas válidas para isso. Meu principal desafio foi construir um diário de humor que respeitasse essa complexidade — onde o usuário pudesse registrar o dia a dia da sua saúde mental sem sentir que estava substituindo o cuidado presencial." },

      { type: "text", content: "**O Processo — Benchmark e Descoberta**" },
      { type: "text", content: "Comecei com um benchmark extenso de aplicativos de diário de humor no mercado. Queria entender o que já existia, quais funcionalidades faziam sentido e o que poderíamos adaptar para a realidade de um aplicativo de saúde." },
      { type: "image", content: "/images/simapp/Untitled 1.png", caption: "Benchmark de apps de diário de humor — funcionalidades selecionadas e análise comparativa" },
      { type: "image", content: "/images/simapp/Untitled 2.png", caption: "Funcionalidades desejadas e quadro de requisitos — organização das prioridades do projeto" },
      { type: "image", content: "/images/simapp/Untitled 3.png", caption: "Referências visuais e funcionais coletadas durante o benchmark" },
      { type: "text", content: "Selecionei funcionalidades interessantes e diferenciadas — mesmo que algumas não fossem aplicáveis ao nosso caso. Depois, construí um quadro de requisitos para organizar o que seria priorizado. Foi nessa fase que recebi a ajuda de duas estagiárias incríveis: a Luciana e a Isabela." },
      { type: "image", content: "/images/simapp/Untitled 4.png", caption: "Esboço de fluxo do diário de humor — navegação e telas principais mapeadas antes da prototipação" },
      { type: "text", content: "Com os requisitos levantados, parti para um protótipo de baixa fidelidade — simples o suficiente para validar o fluxo rapidamente, mas visual o bastante para comunicar a ideia. A equipe aprovou, e comecei a desenhar as telas finais." },

      { type: "text", content: "**UX Research — O Terreno da Saúde Mental**" },
      { type: "text", content: "Paralelamente ao design, realizei estudos de caso para entender como as pessoas realmente se sentiam em relação à saúde mental digital. A conclusão foi clara: esse é um terreno arriscado, que exige cuidado redobrado." },
      { type: "image", content: "/images/simapp/Untitled 6.png", caption: "Pesquisa qualitativa — conclusões sobre a percepção dos usuários em relação à saúde mental digital" },
      { type: "text", content: "Muitos usuários ainda preferem o presencial para questões de saúde mental — e com razão. Há um valor inegável no contato humano, na troca olho no olho. Nossa missão não era substituir isso, mas oferecer um complemento: uma ferramenta de autocuidado que ajudasse as pessoas a se conhecerem melhor entre uma consulta e outra." },

      { type: "text", content: "**A Solução — Três Frentes de Cuidado**" },
      { type: "text", content: "Na saúde mental, definimos três grandes entregas:" },
      { type: "text", content: "• **Agendamento** de consultas presenciais e online — essa parte recebi parcialmente pronta, com ajustes de UI para manter consistência com o design system" },
      { type: "text", content: "• **Diário de humor** — o coração da funcionalidade, onde o usuário registra seu estado emocional diário e acompanha sua evolução ao longo do tempo" },
      { type: "text", content: "• **Pacotes de desconto** em consultas — uma forma de incentivar o cuidado contínuo, com copywriting pensado para engajar sem atrapalhar o fluxo natural" },
      { type: "image", content: "/images/simapp/Untitled 5.png", caption: "Telas do diário de humor e pacotes de consultas — interface seguindo o design system da época" },

      { type: "text", content: "**Pacotes de Consultas — Design com Copy**" },
      { type: "text", content: "Para os pacotes de desconto, desenhei um fluxo que se integrasse naturalmente à jornada do usuário. Criei cards de chamada para atrair atenção, cards menores para pacotes específicos e cards maiores com informações completas. O grande desafio aqui foi o copy: o texto precisava capturar a curiosidade sem atrapalhar o fluxo normal do aplicativo." },
      { type: "image", content: "/images/simapp/Untitled 7.png", caption: "Fluxo de pacotes de consultas — definindo onde e como cada oferta se encaixa na jornada do usuário" },
      { type: "text", content: "Cada palavra foi pensada para equilibrar informação e persuasão — parecia pouca coisa, mas envolvia copywriting, UX writing e UI trabalhando juntos." },
      { type: "image", content: "/images/simapp/Untitled 8.png", caption: "Cards de pacotes — versões para diferentes contextos com copy direcionado" },

      { type: "text", content: "**Os Resultados**" },
      { type: "text", content: "Esse filho, infelizmente, não nasceu para mim ver. Nas semanas anteriores à publicação da nova versão do app com a funcionalidade de saúde mental, fui desligado por motivos de reorganização corporativa." },
      { type: "text", content: "Mas o que tive de resultado foi significativo: vi as funcionalidades sendo colocadas em uma versão beta do aplicativo. O pessoal que testou gostou do visual e do fluxo. O design e a experiência estavam aprovados — o que aconteceu depois, infelizmente, não pude acompanhar." },
      { type: "text", content: "As métricas definidas para acompanhamento eram: **usuários ativos**, **taxa de utilização** do diário, **tempo de uso** e **conversão em agendamentos** — indicadores que mediriam tanto o engajamento quanto o impacto no negócio." },

      { type: "text", content: "**Reflexão**" },
      { type: "text", content: "Saúde mental é um terreno que exige mais do que design — exige sensibilidade. Cada decisão de produto precisava considerar não apenas a usabilidade, mas o impacto emocional de cada tela, cada palavra, cada notificação." },
      { type: "text", content: "Não ver o lançamento foi frustrante, mas o aprendizado ficou. Aprendi que às vezes o trabalho do designer vai além do que é lançado — está no cuidado com que cada detalhe foi pensado, na pesquisa que orientou as decisões, na parceria com estagiárias que se tornaram parte fundamental do processo." },
      { type: "image", content: "/images/simapp/Untitled 10.png", caption: "O processo importa tanto quanto o resultado — cada etapa contribuiu para o amadurecimento do projeto" },

      { type: "text", content: "**O Que Vem Depois**" },
      { type: "text", content: "Antes de encerrar, vale registrar que não paramos no saúde mental. Fizemos uma inception para descobrir qual seria o próximo produto, e a nutrição surgiu como forte candidata. Cheguei a começar pesquisas e um novo benchmark." },
      { type: "image", content: "/images/simapp/Untitled 9.png", caption: "Novas ideias exploradas durante a inception — nutrição como próximo produto potencial" },
      { type: "text", content: "Mas o trabalho findou com meu desligamento. Quem sabe esses planos continuam em outra oportunidade…" },

      { type: "text", content: "**Time**" },
      { type: "text", content: "O que mais levo dessa experiência é a parceria construída ao longo do caminho. Meus agradecimentos:" },
      { type: "text", content: "• À Luciana e à Isabela, estagiárias que abraçaram o projeto com uma energia que contagiou todo o time" },
      { type: "text", content: "• Ao PO e SM, que mantiveram o barco estável mesmo em águas turbulentas" },
      { type: "text", content: "• Aos devs, que transformaram rabiscos em telas funcionais" },
      { type: "text", content: "• E a todos que testaram e deram feedback — vocês validaram que o caminho estava certo" },
    ],
    contentEn: [
      { type: "image", content: "/images/simapp/Untitled.png", caption: "App home screen — the starting point for rethinking daily user engagement" },

      { type: "text", content: "**Context**" },
      { type: "text", content: "SiMCo already had a consolidated digital ecosystem: an app, a website, online scheduling. But one challenge persisted — the app was only opened when necessary, used as a point tool rather than a continuous relationship channel." },
      { type: "text", content: "The Squad was formed with the goal of finding new products for the company. We wanted to understand what was missing in patients' digital lives and how we could add real value to their daily routines." },

      { type: "text", content: "**The Problem**" },
      { type: "text", content: "The big challenge was encouraging daily app usage. People opened the app to schedule or reschedule appointments, then closed it. There was no reason to come back. Mental health emerged as a natural opportunity — caring for your mind is a daily habit, not a one-time event." },
      { type: "text", content: "But the ground was risky. Mental health is a sensitive topic: people are still getting used to dealing with these issues online, many miss in-person interaction, and there are valid justifications for that. My main challenge was building a mood diary that respected this complexity — where users could record their daily mental health without feeling like they were replacing in-person care." },

      { type: "text", content: "**The Process — Benchmark & Discovery**" },
      { type: "text", content: "I started with an extensive benchmark of mood diary apps on the market. I wanted to understand what already existed, which features made sense, and what we could adapt to a healthcare app reality." },
      { type: "image", content: "/images/simapp/Untitled 1.png", caption: "Mood diary app benchmark — selected features and comparative analysis" },
      { type: "image", content: "/images/simapp/Untitled 2.png", caption: "Desired features and requirements board — project priority organization" },
      { type: "image", content: "/images/simapp/Untitled 3.png", caption: "Visual and functional references collected during the benchmark" },
      { type: "text", content: "I selected interesting and differentiated features — even if some weren't applicable to our case. Then I built a requirements board to organize priorities. It was at this stage that I had the help of two incredible interns: Luciana and Isabela." },
      { type: "image", content: "/images/simapp/Untitled 4.png", caption: "Mood diary flow sketch — main navigation and screens mapped before prototyping" },
      { type: "text", content: "With requirements gathered, I moved to a low-fidelity prototype — simple enough to validate the flow quickly, but visual enough to communicate the idea. The team approved it, and I started designing the final screens." },

      { type: "text", content: "**UX Research — The Mental Health Terrain**" },
      { type: "text", content: "In parallel to the design work, I conducted case studies to understand how people really felt about digital mental health. The conclusion was clear: this is risky ground that demands extra care." },
      { type: "image", content: "/images/simapp/Untitled 6.png", caption: "Qualitative research — findings on user perceptions of digital mental health" },
      { type: "text", content: "Many users still prefer in-person for mental health issues — and for good reason. There's undeniable value in human contact, in face-to-face interaction. Our mission wasn't to replace that, but to offer a complement: a self-care tool that helped people understand themselves better between appointments." },

      { type: "text", content: "**The Solution — Three Areas of Care**" },
      { type: "text", content: "For mental health, we defined three major deliverables:" },
      { type: "text", content: "• **Scheduling** for in-person and online consultations — I received this partially ready, with UI adjustments to maintain design system consistency" },
      { type: "text", content: "• **Mood diary** — the heart of the feature, where users record their daily emotional state and track their progress over time" },
      { type: "text", content: "• **Discount packages** for consultations — a way to encourage continuous care, with copywriting designed to engage without disrupting the natural flow" },
      { type: "image", content: "/images/simapp/Untitled 5.png", caption: "Mood diary and consultation package screens — interface following the design system of the time" },

      { type: "text", content: "**Consultation Packages — Design with Copy**" },
      { type: "text", content: "For the discount packages, I designed a flow that integrated naturally into the user journey. I created call-to-action cards to attract attention, smaller cards for specific packages, and larger cards with full information. The big challenge here was the copy: the text needed to spark curiosity without disrupting the app's normal flow." },
      { type: "image", content: "/images/simapp/Untitled 7.png", caption: "Consultation package flow — defining where and how each offer fits in the user journey" },
      { type: "text", content: "Every word was crafted to balance information and persuasion — it seemed small, but involved copywriting, UX writing, and UI working together." },
      { type: "image", content: "/images/simapp/Untitled 8.png", caption: "Package cards — versions for different contexts with targeted copy" },

      { type: "text", content: "**The Results**" },
      { type: "text", content: "This 'child', unfortunately, was not born for me to see. In the weeks prior to the release of the new app version with the mental health feature, I was laid off due to corporate reorganization." },
      { type: "text", content: "But what I did get to see was significant: I watched the features being placed into a beta version of the app. The people who tested it liked the look and flow. The design and experience were approved — what happened next, unfortunately, I couldn't follow." },
      { type: "text", content: "The metrics defined for tracking were: **active users**, **diary usage rate**, **time spent**, and **appointment conversion** — indicators that would measure both engagement and business impact." },

      { type: "text", content: "**Reflection**" },
      { type: "text", content: "Mental health is a terrain that demands more than design — it demands sensitivity. Every product decision had to consider not just usability, but the emotional impact of each screen, each word, each notification." },
      { type: "text", content: "Not seeing the launch was frustrating, but the learning stayed. I learned that sometimes a designer's work goes beyond what gets shipped — it's in the care with which every detail was thought through, the research that guided decisions, the partnership with interns who became a fundamental part of the process." },
      { type: "image", content: "/images/simapp/Untitled 10.png", caption: "The process matters as much as the outcome — every stage contributed to the project's maturity" },

      { type: "text", content: "**What Came Next**" },
      { type: "text", content: "Before wrapping up, it's worth noting we didn't stop at mental health. We ran an inception to discover the next product, and nutrition emerged as a strong candidate. I even started research and a new benchmark." },
      { type: "image", content: "/images/simapp/Untitled 9.png", caption: "New ideas explored during inception — nutrition as a potential next product" },
      { type: "text", content: "But the work ended with my departure. Who knows, maybe these plans continue in another opportunity..." },

      { type: "text", content: "**Team**" },
      { type: "text", content: "What I take most from this experience is the partnership built along the way. My acknowledgments:" },
      { type: "text", content: "• To Luciana and Isabela, interns who embraced the project with an energy that energized the whole team" },
      { type: "text", content: "• To the PO and SM, who kept the ship steady even in turbulent waters" },
      { type: "text", content: "• To the devs, who turned sketches into functional screens" },
      { type: "text", content: "• And to everyone who tested and gave feedback — you validated that the path was right" },
    ],

  },
  {
    id: "3",
    slug: "plataforma-prospeccao",
    title: "Plataforma de Operações de Prospecção",
    titleEn: "Prospecting Operations Platform",

    company: "Meetz (MarTech)",
    year: "2023",
    role: ["UI Design", "UX Design"],
    category: "Web Design",
    description:
      "Plataforma unificadora de prospecção ativa e qualificação de leads B2B. Substituiu Pipefy, Woodpecker, Apollo, Gmail e Pipedrive em um só lugar.",
    descriptionEn:
      "Unified B2B prospecting and lead qualification platform. Replaced Pipefy, Woodpecker, Apollo, Gmail and Pipedrive in one place.",
    challenge:
      "1) Por conta do uso de múltiplas plataformas, a informação ficava perdida por falta de integração.\n\n2) Falta de centralização dos processos - cada colaborador fazia à sua maneira.\n\n3) Criar interface mais atrativa que as soluções existentes.",
    challengeEn:
      "1) Due to the use of multiple platforms, information was lost due to lack of integration.\n\n2) Lack of process centralization - each employee did things their own way.\n\n3) Create a more attractive interface than existing solutions.",
    solution:
      "1) Metodologia Design Thinking com dual tracking - discovery seguia na frente do desenvolvimento.\n\n2) Unificação de todos os processos em um só local.\n\n3) Criação de componentes usando Minimal UI Kit (baseado em MUI).\n\n4) Pesquisa qualitativa com stakeholders, lideranças e operacionais.",
    solutionEn:
      "1) Design Thinking methodology with dual tracking - discovery led ahead of development.\n\n2) Unification of all processes in one place.\n\n3) Component creation using Minimal UI Kit (based on MUI).\n\n4) Qualitative research with stakeholders, leadership, and operations.",
    process:
      "Pesquisa qualitativa, definição de MVP, criação de componentes, protótipo em alta fidelidade, validação com stakeholders e usuários.",
    processEn:
      "Qualitative research, MVP definition, component creation, high-fidelity prototype, validation with stakeholders and users.",
    results: "Entrega do MVP, redução de custos operacionais.",
    resultsEn: "MVP delivery, operational cost reduction.",
    metrics: [
      "No show/assertividade",
      "Índice de qualidade",
      "Número de agendamentos",
      "Upsell/renovação",
      "Clientes por BDR",
      "Tempo gasto em tarefas",
    ],
    metricsEn: [
      "No show/assertiveness",
      "Quality index",
      "Number of appointments",
      "Upsell/renewal",
      "Clients per BDR",
      "Time spent on tasks",
    ],
    thumbnail: "/images/meetz/Produto_-_2022.png",
    images: [
      "/images/meetz/Contratos_-_Tela_base 1.png",
      "/images/meetz/Captura_de_Tela_2023-04-20_as_12.50.29.png",
      "/images/meetz/Captura_de_Tela_2023-04-20_as_12.59.52.png",
      "/images/meetz/Captura_de_Tela_2023-04-20_as_13.03.00.png",
      "/images/meetz/Captura_de_Tela_2023-04-20_as_13.04.35.png",
      "/images/meetz/Captura_de_Tela_2023-04-20_as_13.12.31.png",
      "/images/meetz/Captura_de_Tela_2023-04-20_as_13.38.40.png",
      "/images/meetz/Captura_de_Tela_2023-04-20_as_13.39.00.png",
      "/images/meetz/Captura_de_Tela_2023-04-20_as_13.39.51.png",
      "/images/meetz/Captura_de_Tela_2023-04-20_as_14.15.21.png",
      "/images/meetz/Captura_de_Tela_2023-04-20_as_14.16.46.png",
      "/images/meetz/Captura_de_Tela_2023-04-20_as_14.17.11.png",
      "/images/meetz/Captura_de_Tela_2023-04-20_as_14.32.19.png",
    ],
    content: [
      { type: "image", content: "/images/meetz/Produto_-_2022.png", caption: "Plataforma de prospecção Meetz — unificando 5 ferramentas em uma única interface" },

      { type: "text", content: "**Contexto**" },
      { type: "text", content: "A Meetz era uma empresa de marketing B2B que gerava leads e agendava reuniões para clientes. A operação funcionava, mas com um custo oculto alto: o time usava **5 ferramentas diferentes** no dia a dia — Pipefy, Woodpecker, Apollo, Gmail e Pipedrive — e a informação se perdia nesse vai e vem." },
      { type: "text", content: "O projeto nasceu com uma missão clara: criar uma plataforma única que substituísse todas essas ferramentas, centralizando a operação de prospecção em um só lugar. E, de quebra, estruturar os dados para que no futuro pudessem alimentar inteligência de operação com machine learning." },

      { type: "text", content: "**O Problema**" },
      { type: "text", content: "O caos de múltiplas plataformas criava três grandes dores:" },
      { type: "text", content: "• **Informação perdida** — sem integração entre as ferramentas, os dados ficavam espalhados. Coletar informações exigia trabalho manual, que consumia tempo e gerava erros nas trocas entre ferramentas." },
      { type: "text", content: "• **Processos descentralizados** — cada colaborador desenvolvia seu próprio jeito de fazer as coisas. Quando alguém saía da empresa, o conhecimento que estava na cabeça da pessoa saía junto — sem registro, sem padronização." },
      { type: "text", content: "• **Interface datada** — as ferramentas existentes tinham visuais pouco atraentes e curvas de aprendizado íngremes. Precisávamos de algo que as pessoas realmente quisessem usar." },
      { type: "text", content: "Meu desafio foi duplo: documentar todo o fluxo de operação para entender o que precisava ser unificado e, ao mesmo tempo, criar uma interface que fosse mais fácil de aprender e mais atraente do que as soluções que o time já conhecia." },

      { type: "text", content: "**O Processo — Design Thinking com Dual Tracking**" },
      { type: "text", content: "Adotamos a metodologia de **Design Thinking** com uma estrutura de **dual tracking**: a descoberta (discovery) corria à frente do desenvolvimento, e uma vez que uma funcionalidade era definida, passava para o desenvolvimento enquanto a descoberta da próxima funcionalidade já começava." },
      { type: "text", content: "Isso garantia que o time de design nunca estivesse bloqueando o time de desenvolvimento — sempre tínhamos algo pronto para ser construído." },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_12.50.29.png", caption: "Visão geral do processo de Design Thinking — as etapas que guiaram o projeto do início ao MVP" },

      { type: "text", content: "**Discovery — Pesquisa Qualitativa**" },
      { type: "text", content: "Na fase de descoberta, fizemos pesquisa qualitativa em três camadas:" },
      { type: "text", content: "1. **Stakeholders** — para entender a visão estratégica e as expectativas de negócio" },
      { type: "text", content: "2. **Lideranças** — para mapear os processos e identificar gargalos na gestão" },
      { type: "text", content: "3. **Operação** — para sentir na pele as dores de quem usava as ferramentas todo dia" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_13.03.00.png", caption: "Pesquisa qualitativa — perguntas definidas a partir da apresentação inicial do problema" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_12.59.52.png", caption: "Estrutura da pesquisa — roteiro de entrevistas organizado por camadas (stakeholders, lideranças, operação)" },
      { type: "text", content: "As entrevistas geraram um material rico: citações de problemas, oportunidades de inovação, ideias de padronização, funcionalidades desejadas, dúvidas, necessidades e oportunidades de automação. Separamos tudo e geramos um relatório de pesquisa com os principais pontos para apresentar aos stakeholders." },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_13.04.35.png", caption: "Registro de entrevistas — citações e insights organizados para análise" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_13.12.31.png", caption: "Relatório de pesquisa consolidado — oportunidades de inovação e padronização identificadas" },
      { type: "image", content: "/images/meetz/Research_Report_-_Meetz.png", caption: "Relatório de pesquisa completo — apresentação dos principais achados para stakeholders" },
      { type: "image", content: "/images/meetz/Research_Report_-_Meetz_(3).png", caption: "Detalhamento do relatório — problemas, oportunidades e recomendações priorizadas" },

      { type: "text", content: "**Definição e Ideação — O MVP**" },
      { type: "text", content: "Com o entendimento do problema consolidado, discutimos os próximos passos: quais funcionalidades seriam desenvolvidas primeiro, o que precisávamos construir de base e para quando. Definimos nosso MVP com foco no que traria mais valor imediato para a operação." },
      { type: "image", content: "/images/meetz/Frame_7.png", caption: "Quadro de ideação — funcionalidades prioritárias mapeadas para o MVP" },

      { type: "text", content: "**Design — Dos Rabiscos ao Protótipo Final**" },
      { type: "text", content: "A fase de design seguiu um fluxo bem definido, com validação em cada etapa:" },
      { type: "text", content: "**1. Rascunhos no Miro** — Comecei esboçando a estrutura das páginas em baixa fidelidade, validando a arquitetura da informação com stakeholders e usuários antes de investir tempo em refinamento visual." },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_13.38.40.png", caption: "Rascunhos iniciais no Miro — estrutura das páginas validada antes da prototipação" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_13.39.00.png", caption: "Fluxo de navegação esboçado — organização das seções principais da plataforma" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_13.39.51.png", caption: "Wireframes de baixa fidelidade — validação de layout e hierarquia com o time" },

      { type: "text", content: "**2. Criação de Componentes** — Depois da validação estrutural, comecei a construir os componentes base. Aqui entrou o **Minimal UI Kit** (baseado em MUI), que acelerou significativamente o processo — ao invés de criar cada elemento do zero, adaptamos componentes existentes para o visual da empresa." },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_14.15.21.png", caption: "Componentes base — construção do design system com Minimal UI Kit" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_14.16.46.png", caption: "Montagem dos componentes na tela — consistência visual garantida pelo kit" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_14.17.11.png", caption: "Biblioteca de componentes — botões, cards, tabelas e inputs padronizados" },

      { type: "text", content: "**3. Protótipo em Alta Fidelidade** — Com os componentes prontos, montei as páginas com o layout final. O uso do template acelerou o front-end — apenas pequenas modificações foram necessárias para adaptar o visual à identidade da Meetz." },
      { type: "text", content: "**4. Validação Final** — Cada tela finalizada passava por validação com stakeholders e time de desenvolvimento antes de entrar no backlog. Nada ia para desenvolvimento sem ter sido aprovado por todos os envolvidos." },

      { type: "text", content: "**UI em Detalhe — Contratos**" },
      { type: "text", content: "Dois exemplos de UI que ilustram bem o resultado final:" },
      { type: "image", content: "/images/meetz/Contratos_-_Tela_base 1.png", caption: "Tela de listagem de contratos — busca, filtros e indicadores de status" },
      { type: "image", content: "/images/meetz/Contrato.png", caption: "Tela do contrato — informações organizadas com hierarquia visual clara" },
      { type: "image", content: "/images/meetz/Contratos_-_Tela_base.png", caption: "Visão geral dos contratos — dashboard com métricas e cards de resumo" },

      { type: "text", content: "**Os Resultados**" },
      { type: "text", content: "O MVP foi entregue, substituindo as 5 ferramentas que o time usava por uma plataforma unificada. A centralização das informações reduziu custos operacionais e eliminou o retrabalho de coleta manual de dados." },
      { type: "text", content: "As métricas definidas para acompanhamento pós-lançamento incluíam: **assertividade (no-show)**, **índice de qualidade**, **número de agendamentos**, **taxa de upsell/renovação**, **clientes por BDR**, **tempo gasto em tarefas** e **taxa de erros** — um conjunto completo para medir tanto a eficiência operacional quanto a efetividade das prospecções." },

      { type: "text", content: "**Reflexão**" },
      { type: "text", content: "Esse projeto foi um mergulho intenso em Design Thinking aplicado na prática. Aprendi na marra que pesquisar é tão importante quanto desenhar — as entrevistas com stakeholders, lideranças e operação revelaram dores que nenhum briefing teria capturado." },
      { type: "text", content: "O dual tracking foi um dos maiores aprendizados: ter a descoberta sempre um passo à frente do desenvolvimento evitou que o design fosse um gargalo. Conseguimos manter um ritmo sustentável de entregas sem sacrificar a qualidade." },
      { type: "text", content: "Outro ponto importante foi o uso inteligente de um template (Minimal UI). Nem sempre vale a pena reinventar a roda — saber quando acelerar com ferramentas existentes é uma habilidade que levo para qualquer projeto." },

      { type: "text", content: "**Time**" },
      { type: "text", content: "Esse projeto foi uma prova de que metodologia não substitui pessoas. Meus agradecimentos:" },
      { type: "text", content: "• À liderança da Meetz, que confiou no processo de design mesmo com prazos apertados" },
      { type: "text", content: "• Aos stakeholders, que participaram ativamente das validações" },
      { type: "text", content: "• Ao time de operação, que abriu espaço na rotina para as entrevistas e deu voz às dores reais" },
      { type: "text", content: "• Aos devs, que transformaram protótipos em produto funcional" },
    ],
    contentEn: [
      { type: "image", content: "/images/meetz/Produto_-_2022.png", caption: "Meetz prospecting platform — unifying 5 tools into a single interface" },

      { type: "text", content: "**Context**" },
      { type: "text", content: "Meetz was a B2B marketing company that generated leads and scheduled meetings for clients. The operation worked, but at a hidden cost: the team used **5 different tools** daily — Pipefy, Woodpecker, Apollo, Gmail, and Pipedrive — and information got lost in the shuffle." },
      { type: "text", content: "The project was born with a clear mission: create a single platform that replaced all these tools, centralizing the prospecting operation in one place. And, as a bonus, structure the data so it could later feed operational intelligence with machine learning." },

      { type: "text", content: "**The Problem**" },
      { type: "text", content: "The chaos of multiple platforms created three major pain points:" },
      { type: "text", content: "• **Lost information** — without integration between tools, data was scattered. Collecting information required manual work, consuming time and generating errors during handoffs." },
      { type: "text", content: "• **Decentralized processes** — each employee developed their own way of doing things. When someone left the company, the knowledge in their head left with them — no records, no standardization." },
      { type: "text", content: "• **Outdated interfaces** — existing tools had unappealing visuals and steep learning curves. We needed something people would actually want to use." },
      { type: "text", content: "My challenge was twofold: document the entire operation flow to understand what needed to be unified, while creating an interface that was easier to learn and more attractive than the solutions the team already knew." },

      { type: "text", content: "**The Process — Design Thinking with Dual Tracking**" },
      { type: "text", content: "We adopted **Design Thinking** methodology with a **dual tracking** structure: discovery ran ahead of development, and once a feature was defined, it moved to development while discovery for the next feature began." },
      { type: "text", content: "This ensured the design team was never blocking the development team — we always had something ready to be built." },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_12.50.29.png", caption: "Design Thinking process overview — the stages that guided the project from start to MVP" },

      { type: "text", content: "**Discovery — Qualitative Research**" },
      { type: "text", content: "In the discovery phase, we conducted qualitative research in three layers:" },
      { type: "text", content: "1. **Stakeholders** — to understand the strategic vision and business expectations" },
      { type: "text", content: "2. **Leadership** — to map processes and identify management bottlenecks" },
      { type: "text", content: "3. **Operations** — to feel the daily pain of those who used the tools every day" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_13.03.00.png", caption: "Qualitative research — questions defined from the initial problem presentation" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_12.59.52.png", caption: "Research structure — interview script organized by layers (stakeholders, leadership, operations)" },
      { type: "text", content: "The interviews generated rich material: problem quotes, innovation opportunities, standardization ideas, desired features, doubts, needs, and automation opportunities. We organized everything and generated a research report with key points to present to stakeholders." },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_13.04.35.png", caption: "Interview records — quotes and insights organized for analysis" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_13.12.31.png", caption: "Consolidated research report — innovation and standardization opportunities identified" },
      { type: "image", content: "/images/meetz/Research_Report_-_Meetz.png", caption: "Complete research report — key findings presented to stakeholders" },
      { type: "image", content: "/images/meetz/Research_Report_-_Meetz_(3).png", caption: "Report details — prioritized problems, opportunities, and recommendations" },

      { type: "text", content: "**Definition and Ideation — The MVP**" },
      { type: "text", content: "With a consolidated understanding of the problem, we discussed next steps: which features would be developed first, what foundation we needed, and by when. We defined our MVP focused on what would bring the most immediate value to the operation." },
      { type: "image", content: "/images/meetz/Frame_7.png", caption: "Ideation board — priority features mapped for the MVP" },

      { type: "text", content: "**Design — From Sketches to Final Prototype**" },
      { type: "text", content: "The design phase followed a well-defined flow, with validation at each stage:" },
      { type: "text", content: "**1. Sketches in Miro** — I started by sketching page structures in low fidelity, validating information architecture with stakeholders and users before investing time in visual refinement." },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_13.38.40.png", caption: "Initial sketches in Miro — page structure validated before prototyping" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_13.39.00.png", caption: "Navigation flow sketched — main platform sections organized" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_13.39.51.png", caption: "Low-fidelity wireframes — layout and hierarchy validated with the team" },

      { type: "text", content: "**2. Component Creation** — After structural validation, I started building base components. This is where the **Minimal UI Kit** (based on MUI) came in, significantly accelerating the process — instead of creating every element from scratch, we adapted existing components to the company's look." },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_14.15.21.png", caption: "Base components — building the design system with Minimal UI Kit" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_14.16.46.png", caption: "Component assembly on screen — visual consistency ensured by the kit" },
      { type: "image", content: "/images/meetz/Captura_de_Tela_2023-04-20_as_14.17.11.png", caption: "Component library — standardized buttons, cards, tables, and inputs" },

      { type: "text", content: "**3. High-Fidelity Prototype** — With components ready, I assembled the pages with the final layout. Using the template accelerated front-end development — only minor modifications were needed to adapt the look to Meetz's identity." },
      { type: "text", content: "**4. Final Validation** — Each finished screen went through validation with stakeholders and the development team before entering the backlog. Nothing went to development without approval from all involved parties." },

      { type: "text", content: "**UI in Detail — Contracts**" },
      { type: "text", content: "Two UI examples that illustrate the final result:" },
      { type: "image", content: "/images/meetz/Contratos_-_Tela_base 1.png", caption: "Contract listing screen — search, filters, and status indicators" },
      { type: "image", content: "/images/meetz/Contrato.png", caption: "Contract screen — information organized with clear visual hierarchy" },
      { type: "image", content: "/images/meetz/Contratos_-_Tela_base.png", caption: "Contract overview — dashboard with metrics and summary cards" },

      { type: "text", content: "**The Results**" },
      { type: "text", content: "The MVP was delivered, replacing the 5 tools the team used with a unified platform. Centralizing information reduced operational costs and eliminated the rework of manual data collection." },
      { type: "text", content: "The metrics defined for post-launch tracking included: **assertiveness (no-show)**, **quality index**, **number of appointments**, **upsell/renewal rate**, **clients per BDR**, **time spent on tasks**, and **error rate** — a complete set to measure both operational efficiency and prospecting effectiveness." },

      { type: "text", content: "**Reflection**" },
      { type: "text", content: "This project was an intense deep dive into applied Design Thinking. I learned the hard way that researching is as important as designing — the interviews with stakeholders, leadership, and operations revealed pain points that no briefing could have captured." },
      { type: "text", content: "Dual tracking was one of the biggest takeaways: having discovery always one step ahead of development prevented design from becoming a bottleneck. We managed to maintain a sustainable delivery pace without sacrificing quality." },
      { type: "text", content: "Another important point was the smart use of a template (Minimal UI). Reinventing the wheel isn't always worth it — knowing when to accelerate with existing tools is a skill I carry to every project." },

      { type: "text", content: "**Team**" },
      { type: "text", content: "This project was proof that methodology doesn't replace people. My acknowledgments:" },
      { type: "text", content: "• To Meetz's leadership, who trusted the design process even with tight deadlines" },
      { type: "text", content: "• To the stakeholders, who actively participated in validations" },
      { type: "text", content: "• To the operations team, who made room in their routines for interviews and gave voice to real pain points" },
      { type: "text", content: "• To the devs, who turned prototypes into a functional product" },
    ],

  },
];

export const skills = {
  hard: [
    "Product Design",
    "UX/UI Design",
    "Design Systems",
    "Front-end Development (TypeScript, React, Tailwind)",
    "AI-Driven Design",
    "AI Agents Design",
    "Figma",
    "Figma Make",
    "Prototyping",
    "UX Writing",
    "Usability Testing",
    "Qualitative Research",
    "Discovery & JTBD",
  ],
  soft: [
    "Creativity",
    "Critical Thinking",
    "Problem Solving",
    "Teamwork",
    "Emotional Intelligence",
    "Leadership",
    "Collaboration",
  ],
  softPt: [
    "Criatividade",
    "Pensamento Crítico",
    "Resolução de Problemas",
    "Trabalho em Equipe",
    "Inteligência Emocional",
    "Liderança",
    "Colaboração",
  ],
  languages: ["English (Professional Working)"],
};

export const experience = [
  {
    company: "Yampa",
    role: "Design Engineer",
    period: "01/2026 - 04/2026",
    description:
      "Design Engineer in SaaS Financial Software focused on business management, cash flow, and bank reconciliation for SMBs.",
    results: "75% reduction in front-end delivery time.",
  },
  {
    company: "Yampa",
    role: "Product Designer",
    period: "06/2023 - 12/2025",
    description:
      "Conception of AI Agents (Yago & Yana) integrated into the platform, mobile first migration, Design System, Product Analytics.",
    results: "Successful legacy system migration with increased adoption.",
  },
  {
    company: "SiMCo",
    role: "Design Assistant",
    period: "03/2021 - 08/2021",
    description:
      "HealthTech / Marketing campaigns, usability monitoring, heuristic analysis.",
    results: "",
  },
  {
    company: "SiMCo",
    role: "Product Designer",
    period: "09/2021 - 02/2022",
    description:
      "HealthTech / Customer service platform and mobile app.",
    results: "+22% increase in handling, 15k monthly appointments.",
  },
  {
    company: "Meetz",
    role: "Product Designer",
    period: "06/2022 - 04/2023",
    description:
      "MarTech / SaaS Software focused on active prospecting and B2B lead qualification.",
    results: "MVP delivery of the unified platform, operational cost reduction.",
  },
];