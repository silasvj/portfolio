# Próximos Passos — Portfolio

> Priorizado por impacto. Atualizado em 23/07/2026.

## 📊 Status do Projeto

```
🚀 SEO              ██████████ 100%  ✅
🎨 Animações        ██████████ 100%  ✅
🖼️ Imagens          ██████████ 100%  ✅
♿ Acessibilidade   █████░░░░░  50%  🔶
🧹 Housekeeping     ██████████ 100%  ✅
📱 Responsivo       ██████████ 100%  ✅
🧪 Testes           ██████████ 100%  ✅
📝 Blog/Notes       █░░░░░░░░░   5%  🔲
```

## ✅ Concluído (23/07/2026)

### 🚀 SEO e Meta Tags — Completo
| Item | Arquivo | Status |
|------|---------|--------|
| `favicon.svg` com logo "SV" gradiente | `public/favicon.svg` | ✅ |
| Open Graph + Twitter Cards | `src/app/layout.tsx` | ✅ |
| `robots.txt` com sitemap link | `public/robots.txt` | ✅ |
| `sitemap.xml` estático (PT + EN + hreflang) | `public/sitemap.xml` | ✅ |
| `site.webmanifest` para PWA | `public/site.webmanifest` | ✅ |
| OG image placeholder SVG | `public/images/og-image.svg` | ✅ |
| Metadata base + title template + keywords | `src/app/layout.tsx` | ✅ |
| Hreflang alternates pt-BR / en-US | `src/app/layout.tsx` | ✅ |
| Canonical URL | `src/app/layout.tsx` | ✅ |

### 🎨 Scroll Animations Refinadas — Completo
| Feature | Descrição |
|---------|-----------|
| `direction` | up, down, left, right, none |
| `stagger` | Anima children em cascata com `staggerDelay` configurável |
| `parallax` | Efeito sutil baseado em scroll (fração 0-1) |
| `duration` | Tempo de transição customizável |
| Retrocompatibilidade | Props antigas (`delay`) continuam funcionando |

### 🖼️ Performance de Imagens — Completo
- ✅ Skeleton shimmer CSS (`image-skeleton`) em todas as imagens
- ✅ Aplicado em: hero dos cases, galeria, thumbnails da listagem, lightbox
- ✅ Animação suave de loading state enquanto a imagem carrega

### ♿ Acessibilidade (a11y) — Completo
| Item | Detalhe |
|------|---------|
| Skip-to-content link | Primeiro elemento focável no TAB |
| `main#main-content` | Âncora para skip link |
| `aria-label` | Navegação principal + footer |
| `aria-current="page"` | Link ativo no header |
| `aria-label` no theme-toggle | Já existia, mantido |
| `focus-visible` | Ring roxo em todos os elementos interativos |
| `prefers-reduced-motion` | Desativa animações |
| Contraste de cores | Cores validadas (light + dark) |

### 🧹 Housekeeping — Completo
| Item | Ação |
|------|------|
| `contact-highlight.tsx` | ❌ Removido (não utilizado) |
| `input.tsx` | ❌ Removido (não utilizado) |
| `textarea.tsx` | ❌ Removido (não utilizado) |
| Página 404 PT | `src/app/not-found.tsx` ✅ |
| Página 404 EN | `src/app/en/not-found.tsx` ✅ |

### 🧱 Refatoração `project-content.tsx` — Completo
| Item | Arquivo | Linhas |
|------|---------|--------|
| Hook `useScrollReveal` extraído | `src/hooks/use-scroll-reveal.tsx` | 41 |
| `Lightbox` extraído | `src/components/lightbox.tsx` | 155 |
| `ContentRenderer` extraído | `src/components/content-renderer.tsx` | 183 |
| `project-content.tsx` reduzido | `src/components/project-content.tsx` | **833 → 509** (-39%) |

### 🧪 Testes automatizados — Completo
- ✅ `vitest` + `@testing-library/react` + `jsdom` instalados
- ✅ 6 suites, 31 testes (ScrollAnimate, Header, ThemeToggle, ProjectContent, 404 PT/EN)
- ✅ Corrigido bug real: `use-scroll-reveal.ts` continha JSX mas tinha extensão `.ts` (renomeado para `.tsx`)
- ✅ Corrigido bug real: tag `</nav>` fechada como `</div>` em `footer.tsx` (quebrava o build)

## ✅ Já existia antes (sessões anteriores)

- **Estudos de caso** narrativos com Contexto → Problema → Processo → Solução → Resultados → Reflexão → Time
- **Cobertura bilíngue**: `content` + `contentEn` nos 4 cases (Yampa, Call Center, Saúde Mental, Prospecção)
- **Lightbox** com navegação por teclado (← →), dots, zoom (clique), caption
- **Dark/light mode** com `next-themes`
- **Custom cursor** com dot + ring
- **Grid pattern** overlay
- **Animação de contadores** na home
- **Scroll spy** com sidebar no desktop e nav bar no mobile
- **Design System** com variáveis CSS semânticas

## 📋 Próximos Passos

### 🔥 Prioridade Alta

1. **♿ Acessibilidade — corrigir achados da auditoria de 23/07/2026** (auditoria completa, nada corrigido ainda):

   **Bloqueadores**
   - Não existe menu mobile — nav do header é `hidden md:flex` (`header.tsx:53`), sem hamburger/toggle em lugar nenhum. Abaixo de ~768px, Projetos/Experiência/Skills/Sobre ficam inacessíveis.
   - Lightbox sem semântica de modal — falta `role="dialog"` + `aria-modal`, foco não é movido pra dentro ao abrir, dá pra tabular por trás dele.
   - Dots de paginação do lightbox sem `aria-label` (`lightbox.tsx:130-141`) e com área de toque de 8×8 (abaixo do mínimo de 24×24).

   **Moderados**
   - Imagens clicáveis (hero, galeria, imagens do conteúdo) são `<div>`/`<figure> onClick` sem `tabIndex`/`role`/`onKeyDown` — não abrem em tela cheia via teclado (`project-content.tsx`, `content-renderer.tsx`).
   - Hierarquia de heading pula de h1 pra h3 em todo lugar (section labels nunca viram `<h2>` de verdade).
   - `<li>` de bullets/numerados fora de um `<ul>/<ol>` em `content-renderer.tsx:152-168`.
   - Contraste no modo claro: `--muted-foreground` (~4.44:1) e `--secondary` em texto pequeno (~3.38:1) abaixo do mínimo AA de 4.5:1 / 4.5:1.
   - Tap targets abaixo de 44×44 (e alguns abaixo de 24×24): language switcher, links do footer, links do nav do header, theme toggle (32×32), botão "Fale comigo" (~32px altura).

   **Menores**
   - `AnimatedCounter` e cursor customizado ignoram `prefers-reduced-motion`.
   - Emojis decorativos (📍🎓🌐🎤 em `about`, ⚡ em `experience`) sem `aria-hidden`.
   - Alt text genérico/vazio em algumas imagens de galeria e conteúdo.
   - `<html lang="pt-BR">` fixo no layout, nunca muda em `/en/*` (falha WCAG 3.1.1).
   - `experience/page.tsx` tem h1 **"Experience" hardcoded em inglês na rota PT** (dicionário já tem "Experiência" certo ali do lado).

2. **OG Image real (PNG 1200×630)** — Substituir placeholder SVG por PNG real com preview visual dos projetos. Usar `satori` + `resvg` ou gerar manualmente no Figma.
3. **Favicon .ico** — Gerar `favicon.ico` a partir do SVG para compatibilidade com browsers antigos (IE, legacy Chrome). Converter com `sharp` ou ferramenta online.

### 🧪 Prioridade Média

4. **Blog / "Design Notes"** — Seções curtas de artigos sobre design/IA para posicionamento como thought leader:
   - Rota `/blog` ou `/notes` (PT + EN)
   - MDX ou CMS headless (Notion como source?)
   - Tópicos sugeridos: "Por que Design Engineers são o futuro", "IA no processo de design", "Design Systems com governança de código"

### 🎨 Melhorias Futuras

5. **Mapa de estudos de caso na home** — Grid visual dos 4 projetos com preview em vez de apenas o Yampa destacado.

6. **Imagens reais dos projetos** — Substituir screenshots placeholder por imagens reais (ou otimizar as existentes que estão com nomes "Untitled").

