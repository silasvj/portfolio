# Session Context — Portfolio Silas Vasques

> Este arquivo resume o estado atual do projeto e pode ser usado para continuar em outra sessão.

## Estado do Projeto

**Phase:** Planejamento completo — pronto para implementação

## Decisões Tomadas

- Stack: Next.js + TypeScript + Tailwind CSS
- Hospedagem: Vercel + GitHub
- Seções: Home, Projetos, Sobre, Skills, Contato
- Nome do projeto: Pendente (sugestão necessária)
- Conteúdo: Extraído e organizado

## Conteúdo Coletado

### Currículo/LinkedIn
- Status: ✅ Preenchido (via currículo.md)
- Experiências: Yampa (Design Engineer), Meetz (Product Designer), SiMCo (Product/UX Designer)
- Formação: Design — UFC, Certificações Google/UX

### Projetos (4 casos)
1. **Saúde Mental** — SiMCo (Mobile App) — 2022
2. **Plataforma Call Center** — SiMCo (Web) — 2022
3. **Plataforma Prospecção** — Meetz (Web) — 2023
4. **Yampa 2.0** — Yampa (Fintech) — 2023-2026

### Imagens
- Status: ✅ Presentes em `.conteudo/`
- Total: ~50+ imagens organizadas por projeto

## Estrutura de Arquivos

```
portfolio/
├── .gitignore                    # Ignora .design/
├── .design/                      # Documentação (NÃO vai para GitHub)
│   ├── SPEC.md                  # Especificação completa do site
│   ├── LINKEDIN-DATA.md         # Template para dados do LinkedIn
│   ├── NOTION-DATA.md           # Checklist de projetos do Notion
│   └── SESSION.md               # Este arquivo de contexto
└── (futuro: código React...)
```

## Pendências

- [x] Definir nome do projeto: "portfolio silas vasques"
- [ ] Definir referências visuais
- [x] Criar .gitignore com `.design/`
- [x] Setup Next.js + Tailwind
- [x] Implementar páginas

## Stack Técnica

- Next.js 16.2.4 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Vercel (deploy)

## Implementação Concluída

- [] Layout base (Header, Footer) ✅
- [] Home (/): Hero, projetos em destaque, CTA ✅
- [] /projects: Galeria de projetos ✅
- [] /projects/[slug]: Case study individual ✅
- [] /about: Sobre, experiência ✅
- [] /skills: Habilidades ✅
- [] /contact: Formulário + links ✅
- [] API de contato (/api/contact) ✅
- [] SEO metadata ✅
- [] Build successful ✅

## Git

- **Repo**: https://github.com/silasvj/portfolio
- **Branch**: master

## Deploy

- **Preview**: https://portfolio-bhtwmedh4-silas-projects-da63668c.vercel.app
- **Vercel**: conecta via git (push trigga deploy)

## Próximo Passo

1. Conectar repo GitHub no Vercel para deploys automáticos

## Design System Atual

- **File**: DESIGN.md (atualizado com estilo dark completo)
- **Palette**: #08080f (bg), #7c6fff (purple), #00e5ff (cyan), #e8e8f4 (text)
- **Effects**: Custom cursor lerp, Grid pattern, Glassmorphism nav, Scroll animations
- **Components**: Cards (12px), Chips pill, Skill bars gradient, Exp accent border-left cyan

---

## Histórico da Sessão

**Data:** 2026-04-17
**Usuário:** Silas Vasques (Product/UX/UI Designer)
**Stack pretendida:** Next.js, TypeScript, Tailwind

**Perguntas feitas:**
- Nome do projeto → Precisa de sugestão
- Seções → Projetos + Sobre + Skills + Contato
- Branding → Tem referências (pendentes)
- Conteúdo → LinkedIn + Notion (pendentes acesso)

**Resultado:** Arquivos organizados em `.design/`, esperando preenchimento de dados.