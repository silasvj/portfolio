# Design System — Portfolio Silas Vasques

> Documento vivo — define o visual atual do portfolio.

---

## 1. Visual Theme & Atmosphere

**Dark Mode** com gradientes e efeitos glass. Inspirado em interfaces modernas de SaaS/Fintech com toques cyberpunk sutil.

**Características:**
- Background quase preto com gradientes sutis
- Acentos em purple e cyan com gradientes
- Grid pattern overlay como textura de fundo
- Glassmorphism na navegação
- Custom cursor com lerp easing

---

## 2. Color Palette & Roles

### Backgrounds
| Token | Hex | Uso |
|-------|-----|-----|
| `--bg` | `#08080f` | Background principal |
| `--bg2` | `#10101a` | Cards, seções alternadas |
| `--bg3` | `#18182a` | Elementos de imagem, hover states |

### Primary
| Token | Hex | Uso |
|-------|-----|-----|
| `--primary` | `#7c6fff` | CTA principal, links, accents |
| `--accent` | `#a78bfa` | Chips, badges secundários |

### Secondary
| Token | Hex | Uso |
|--------|-----|-----|
| `--secondary` | `#00e5ff` | Highlights, availability badge, linhas de accent |

### Text
| Token | Hex | Uso |
|--------|-----|-----|
| `--text` | `#e8e8f4` | Texto principal |
| `--muted` | `#7878a0` | Texto secundário, labels |
| `--muted-2` | `#9497a9` | Captions, placeholders |

### Borders & Overlays
| Token | Hex | Uso |
|--------|-----|-----|
| `--border` | `rgba(124,111,255,0.18)` | Bordas, dividers, grid pattern |

---

## 3. Typography Rules

### Font Families
- **UI / Body**: `Inter, Geist Sans, system-ui, sans-serif`
- **Mono**: `Geist Mono, JetBrains Mono, monospace`

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Color |
|------|------|--------|-------------|----------------|-------|
| Hero | `clamp(1.875rem, 5vw, 3.75rem)` | 800 | 1.05 | -0.025em | `--text` |
| Section Title | `clamp(1.7rem, 3.5vw, 2.5rem)` | 700 | 1.2 | -0.02em | `--text` |
| Heading | `1.25rem` | 700 | 1.2 | -0.02em | `--text` |
| Sub-heading | `1.125rem` | 600 | 1.2 | normal | `--text` |
| Body | `1rem` | 400 | 1.75 | normal | `--muted` |
| Body Bold | `1rem` | 600 | 1.75 | normal | `--text` |
| Label | `0.875rem` | 500 | 1.75 | normal | `--muted` |
| Caption | `0.75rem` | 500 | 1.4 | 0.06em | `--secondary` |
| Small | `0.75rem` | 400 | 1.4 | normal | `--muted` |
| Micro | `0.7rem` | 500 | 1.4 | 0.15em uppercase | `--secondary` |

### Text Gradient
```css
background: linear-gradient(135deg, #ffffff 20%, var(--primary) 60%, var(--secondary));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## 4. Component Stylings

### Buttons

**Primary**
- Background: `#7c6fff`
- Text: `#ffffff`
- Padding: `0.7rem 1.8rem`
- Radius: `8px`
- Hover: `background: #9388ff`, `transform: translateY(-2px)`

**Outlined**
- Background: `transparent`
- Text: `--text`
- Border: `1px solid var(--border)`
- Hover: `border-color: var(--primary)`, `color: var(--primary)`, `transform: translateY(-2px)`

### Cards

**Default Card**
```css
background: #10101a;
border: 1px solid rgba(124, 111, 255, 0.18);
border-radius: 12px;
transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
```
- Hover: `border-color: var(--primary)`

### Chips / Pills

```css
padding: 0.28rem 0.85rem;
background: rgba(124, 111, 255, 0.1);
border: 1px solid var(--border);
border-radius: 99px; /* pill */
font-size: 0.75rem;
color: #a78bfa;
```

### Badges

**Availability Badge**
```css
padding: 0.35rem 1.1rem;
border: 1px solid rgba(0, 229, 255, 0.3);
border-radius: 99px;
font-size: 0.72rem;
letter-spacing: 0.12em;
color: #00e5ff;
text-transform: uppercase;
background: rgba(0, 229, 255, 0.05);
```

**Pulsing Dot**
```css
width: 7px;
height: 7px;
border-radius: 50%;
background: #00e5ff;
animation: pulse-dot 2s infinite;

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
```

### Skill Bars

**Container**
```css
height: 3px;
background: rgba(255, 255, 255, 0.07);
border-radius: 99px;
overflow: hidden;
```

**Fill**
```css
height: 100%;
border-radius: 99px;
background: linear-gradient(90deg, var(--primary), var(--secondary));
```

### Exp Result Accent

```css
margin-top: 0.7rem;
padding: 0.5rem 0.9rem;
background: rgba(0, 229, 255, 0.06);
border-left: 2px solid var(--secondary);
border-radius: 0 6px 6px 0;
font-size: 0.8rem;
color: var(--text);
```

---

## 5. Animations & Effects

### Custom Cursor

**Ring (follows with lerp)**
```css
position: fixed;
width: 22px;
height: 22px;
border: 1.5px solid var(--primary);
border-radius: 50%;
pointer-events: none;
z-index: 9999;
transform: translate(-50%, -50%);
transition: transform 0.15s ease;
```
- JavaScript lerp: `cx += (mx - cx) * 0.12`
- Expanded state: `transform: translate(-50%, -50%) scale(1.7)`

**Dot (instant)**
```css
position: fixed;
width: 5px;
height: 5px;
background: var(--secondary);
border-radius: 50%;
pointer-events: none;
z-index: 9999;
transform: translate(-50%, -50%);
```

### Scroll Animations

```css
[data-animate] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}

[data-animate].visible {
  opacity: 1;
  transform: translateY(0);
}
```
- IntersectionObserver threshold: `0.08`

### Grid Pattern Overlay

```css
background-image: 
  linear-gradient(rgba(124, 111, 255, 0.18) 1px, transparent 1px),
  linear-gradient(90deg, rgba(124, 111, 255, 0.18) 1px, transparent 1px);
background-size: 60px 60px;
opacity: 0.3;
```

### Glassmorphism Navigation

```css
background: rgba(8, 8, 15, 0.88);
backdrop-filter: blur(14px);
border: 1px solid var(--border);
```

### Scroll Line

```css
width: 1px;
height: 55px;
background: linear-gradient(var(--primary), transparent);
margin: 4rem auto 0;
```

---

## 6. Layout Principles

### Container
- Max width: `1100px` ou `1200px`
- Padding lateral: `1rem` (mobile), `2rem` (desktop)

### Section Spacing
- Padding vertical: `6rem` (clamp)
- Gap entre elementos: múltiplos de `4px`

### Border Radius
| Token | Value |
|-------|------|
| Pill | `9999px` |
| Card | `12px` |
| Button | `8px` |
| Full | `50%` |

### Responsive Breakpoints
- Mobile: `< 640px`
- Tablet: `640px - 768px`
- Desktop: `768px - 1024px`
- Large: `> 1024px`

---

## 7. Spacing Scale

```
0.25rem  (4px)  - micro gaps
0.5rem   (8px)  - tight spacing
0.75rem  (12px)  - default gap
1rem     (16px)  - section gaps
1.5rem   (24px)  - section padding
2rem     (32px)  - large gaps
3rem     (48px)  - xl gaps
4rem     (64px)  - 2xl gaps
6rem     (96px)  - section padding large
```

---

## 8. Section Labels

```css
font-size: 0.72rem;
letter-spacing: 0.15em;
color: var(--secondary);
text-transform: uppercase;
```

### Section Line

```css
width: 50px;
height: 2px;
background: linear-gradient(90deg, var(--primary), transparent);
```

---

## 9. Focus & Accessibility

### Focus States
```css
*:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

### Selection
```css
::selection {
  background: rgba(124, 111, 255, 0.3);
  color: var(--text);
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  [data-animate] {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## 10. Quick Reference

### Colors at a Glance
```
Background:    #08080f
Card BG:      #10101a
Primary:      #7c6fff
Secondary:    #00e5ff
Text:        #e8e8f4
Muted:       #7878a0
Border:      rgba(124,111,255,0.18)
```

### Example Prompts
- "Hero dark: bg #08080f, title text-gradient (purple→cyan), badge with pulsing dot, custom cursor."
- "Card: bg #10101a, border rgba(124,111,255,0.18), 12px radius, hover purple border."
- "Button primary: bg #7c6fff, 8px radius, hover lift -2px."
- "Skill bar: 3px height, bg rgba white 7%, fill gradient purple→cyan."
- "Chips: bg rgba purple 10%, pill radius, text #a78bfa."

---

*Documento vivo — atualizar conforme evolução do design.*