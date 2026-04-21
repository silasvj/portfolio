# SPEC.md — Portfolio Silas Vasques

## 1. Visão Geral

- **Projeto:** Portfolio pessoal de Product/UX/UI Designer
- **Stack:** Next.js + TypeScript + Tailwind CSS
- **Hospedagem:** Vercel + GitHub
- **Objetivo:** Apresentar trabalhos, habilidades e facilitar contato com potenciais clientes/empregadores

---

## 2. Estrutura de Páginas

### 2.1 Páginas Principais

| Página | Descrição |
|--------|-----------|
| `/` (Home) | Hero com posicionamento, projetos em destaque, CTA |
| `/projects` | Galeria completa de projetos |
| `/projects/[slug]` | Case study individual |
| `/about` | Sobre, background, filosofia |
| `/skills` | Habilidades técnicas e soft skills |
| `/contact` | Formulário de contato + links sociais |

### 2.2 Navegação

- **Header:** Logo (texto), Links (Home, Projetos, Sobre, Skills, Contato), CTA ("Vamos conversar")
- **Footer:** Links sociais, copyright, disponibilidade

---

## 3. Design System (Proposta)

### 3.1 Tipografia

- **Headings:** `Playfair Display` (serif, elegante) — para personalidade
- **Body:** `Inter` ou `Geist` (sans-serif, legível) — para clareza
- **Tamanhos:** fluid scale com clamp()

### 3.2 Paleta de Cores (Sugestão Minimal Professional)

```css
--color-bg: #FAFAFA        /* Off-white, suave */
--color-bg-dark: #0A0A0A   /* Para modo escuro */
--color-text: #1A1A1A      /* Quase preto */
--color-text-muted: #6B6B6B /* Cinza médio */
--color-accent: #2563EB    /* Azul profissional */
--color-accent-hover: #1D4ED8
--color-surface: #FFFFFF
--color-border: #E5E5E5
```

> Alternativa:Tom mais acolhedor (warm) — usar cores terrosos/average

### 3.3 Espaçamento

- Base: 4px (multiplos de 4)
- Container max-width: 1200px
- Section padding: 80px (desktop), 48px (mobile)

### 3.4 Componentes

- **Buttons:** Primary (filled), Secondary (outline), Ghost (text only)
- **Cards:** Projeto com hover effect, imagem + título + tags
- **Tags:** Skills exibidas como pills coloridos
- **Form:** Inputs com label flutuante

---

## 4. Estrutura de Projetos (Case Study)

Cada projeto deve conter:

1. **Hero** — Título, subtítulo, thumbnail grande, ano, role
2. **Overview** — Desafio, solução, resultado (texto curto)
3. **Processo** — research, ideação,wireframes (se disponível)
4. **Resultado** — Screenshots, protótipo (link), métricas
5. **Lessons** — O que aprendeu, próximos passos

---

## 5. Funcionalidades

- [ ] Mode toggle (claro/escuro)
- [ ] Animações sutis (entrada de elementos)
- [ ] Page transitions
- [ ] Responsivo (mobile first)
- [ ] SEO basics (metadata)
- [ ] Formulário de contato funcional (Formspree/EmailJS)

---

## 6. Conteúdo (A coletar)

- [ ] Dados do LinkedIn (pendente)
- [ ] Projetos do Notion (pendente)
- [ ] Fotos para About
- [ ] Testimonials (se houver)

---

## 7. Fase de Implementação

1. Setup Next.js + Tailwind
2. Criar layout base + navegação
3. Implementar design tokens
4. Criar páginas uma a uma
5. Adicionar animações
6. Deploy Vercel

---

*Documento vivo — atualizar conforme avance o projeto.*