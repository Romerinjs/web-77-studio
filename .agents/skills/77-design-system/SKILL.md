---
name: 77-design-system
description: Skill for designing, building, and structuring the 77 Studio web application and landing pages using Astro, Astro MDX, Tailwind CSS, and CRO best practices. Make sure to use this skill whenever designing or building any components, pages, layouts, landing pages, or copy for 77 Studio, or when working on Astro MDX templates, visual design systems, or sales funnel optimization for 77 Studio.
license: MIT
metadata:
  authors: "77 Studio Team"
  version: "1.0.0"
---

# 77 Studio - Design System & Astro MDX Architecture

**Documento maestro de desarrollo para la web de 77 Studio.**
Posicionamiento: **Digital Studio + Creative Partner + Technology & AI Company (Colombia + USA).**
*Un solo equipo para hacer que una empresa se vea mejor, venda mejor y funcione mejor.*

---

## 1. Visual Architecture & Design System (basado en `index.html`)

### 🎨 Paleta de Color y Design Tokens
- **Fondo General**: `bg-slate-50` / `bg-[#F9FAFB]` (Gris muy claro, amplio espacio en blanco).
- **Superficies / Cards**: `bg-white` (Tarjetas blancas redondeadas `rounded-[20px]`).
- **Texto Principal**: `text-background-13` / `#0A0A0A` (Jerarquía fuerte y contraste alto).
- **Texto Secundario**: `text-background-13/60` (Gris tenue para descripciones).
- **Acento Primario (Módulo Violeta)**: `bg-opai-purple` / `#7C3AED` (Violeta eléctrico premium-tech para botones y nodos).
- **Bordes & Trazo**: `border-stroke-2/60` / `border-black/10` (Bordes sutiles y pulidos).
- **Sombras**: `shadow-sm` / `shadow-14` (Sombras discretas de baja opacidad).

### 🖋️ Tipografía y Fuentes
```html
<link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@400..600&family=IBM+Plex+Mono:wght@300;500;600&family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@300..600&family=Manrope:wght@300..600&family=Sora:wght@300..600&family=Space+Grotesk:wght@300..600&display=swap" rel="stylesheet" />
```
- **Títulos (`h1`, `h2`, `h3`)**: `font-sora` (`Sora, sans-serif`) - Jerarquía pesada y moderna.
- **Cuerpo y Microcopy**: `font-inter-tight` (`Inter Tight, sans-serif`) - Excelente legibilidad.
- **Etiquetas, Badges y Botones Tech**: `font-ibm-plex-mono` (`IBM Plex Mono, monospace`).

### 🧩 Componentes Clave de UI (Tailwind CSS)

#### Floating Header Navbar
```astro
<header class="fixed top-5 left-1/2 z-50 mx-auto flex w-full max-w-[1290px] -translate-x-1/2 items-center justify-between rounded-2xl bg-white/90 px-4 py-2.5 backdrop-blur-[25px] border border-stroke-2/60 shadow-sm">
  <!-- Logo, Navigation Menu, ES/EN selector, CTA 'Hablemos' -->
</header>
```

#### Feature / Capability Cards
```astro
<div class="group relative rounded-[20px] border border-stroke-2/60 bg-white p-6 transition-all duration-300 hover:shadow-lg">
  <div class="bg-background-13/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full rounded-[10px] opacity-0 transition-opacity duration-400 group-hover:opacity-100"></div>
  <h3 class="font-sora text-xl font-medium text-background-13">Capacidad</h3>
  <p class="font-inter-tight text-background-13/60 mt-2">Descripción clara del servicio.</p>
</div>
```

#### Dual Commercial CTA Pattern
```astro
<div class="flex flex-col sm:flex-row items-center gap-4">
  <a href={whatsappUrl} target="_blank" class="w-full sm:w-auto font-ibm-plex-mono bg-opai-purple text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
    <WhatsAppIcon /> Hablar por WhatsApp
  </a>
  <a href="#contacto" class="w-full sm:w-auto font-ibm-plex-mono bg-background-13 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-colors">
    <EmailIcon /> Enviar mensaje por Email
  </a>
</div>
```

---

## 2. Astro + Astro MDX Architecture

### 📂 Estructura del Proyecto Astro
```
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── WhatsAppCTA.astro
│   ├── ContactForm.astro
│   ├── HeroSection.astro
│   ├── CaseGrid.astro
│   └── CapabilityCard.astro
├── layouts/
│   ├── BaseLayout.astro
│   └── ModuleLayout.astro
├── pages/
│   ├── index.astro            # Home
│   ├── marketing.astro        # Marketing
│   ├── web.astro              # Web
│   ├── ia-automatizacion.astro# IA + Automatización
│   ├── productos-digitales.astro # Productos Digitales
│   ├── nosotros.astro         # Acerca de Nosotros
│   └── contacto.astro         # Contacto
├── content/
│   ├── config.ts              # Collections definition
│   └── modules/               # MDX content files
│       ├── 01-home.mdx
│       ├── 02-marketing.mdx
│       ├── 03-web.mdx
│       ├── 04-ia-automatizacion.mdx
│       ├── 05-productos-digitales.mdx
│       ├── 06-nosotros.mdx
│       └── 07-contacto.mdx
└── styles/
    └── global.css             # Base styles & font imports
```

### 📄 Patrón de Renderizado Astro MDX
Para cada vista modular, los archivos MDX se configuran con frontmatter enriquecido e importación directa de componentes React/Astro en MDX:

```mdx
---
title: "Marketing Digital para Empresas"
headline: "Marketing diseñado para hacer crecer tu empresa."
subheadline: "Integramos estrategia, Meta Ads, Google Ads, creatividad, contenido, branding y automatización."
module: "02-marketing"
whatsappMessage: "Hola 77 Studio 👋 Vi sus servicios de marketing y quisiera conocer cómo pueden ayudar a mi empresa con estrategia, Meta Ads y Google Ads."
---
import HeroSection from '@/components/HeroSection.astro';
import CapabilityGrid from '@/components/CapabilityGrid.astro';
import DualCTA from '@/components/DualCTA.astro';

<HeroSection title={frontmatter.headline} subtitle={frontmatter.subheadline} />

<CapabilityGrid />

<DualCTA whatsappMessage={frontmatter.whatsappMessage} />
```

---

## 3. Principios CRO & Copywriting Obligatorios (`77_Studio_Design_System_Master.md`)

1. **Carta de Ventas Digital**: Cada vista debe cumplir la estructura AIDA (Atención → Identificación del problema → Deseo de solución → Prueba & Confianza → Acción).
2. **Conversión Dual Obligatoria**: WhatsApp + Formulario/Email en paralelo con la misma importancia visual en bloques comerciales.
3. **Barra Sticky Mobile**: En pantallas móviles (`sm:hidden`), mantener botones contextuales de WhatsApp y Email visibles.
4. **Mensajes de WhatsApp Prellenados Contextuales**:

| Módulo | Mensaje Prellenado de WhatsApp |
|---|---|
| **Home / General** | `"Hola 77 Studio 👋 Vi su página web y quisiera conversar sobre un proyecto para mi empresa."` |
| **Marketing** | `"Hola 77 Studio 👋 Vi sus servicios de marketing y quisiera conocer cómo pueden ayudar a mi empresa con estrategia, Meta Ads y Google Ads."` |
| **Web** | `"Hola 77 Studio 👋 Estoy interesado en desarrollar o mejorar la página web de mi empresa."` |
| **IA + Automatización** | `"Hola 77 Studio 👋 Quiero explorar oportunidades para implementar IA o automatización en mi empresa."` |
| **Productos Digitales** | `"Hola 77 Studio 👋 Tengo una idea para una herramienta o producto digital y quisiera conversar con ustedes."` |
| **Contenido con IA** | `"Hola 77 Studio 👋 Vi que utilizan IA para producción de contenido y quisiera explorar qué podríamos hacer para mi empresa."` |

5. **Veracidad Factual Absoluta**: Prohibido inventar métricas, años ficticios o clientes no autorizados. Representar IA mediante diagramas de nodos/workflows e interfaces reales, sin clichés como robots o cerebros digitales.
6. **Presencia Internacional**: Colombia ↔ Estados Unidos, capacidad de trabajo remoto sin fronteras.

---

## 4. Checklist para Desarrolladores
- [ ] La página responde en menos de 5 segundos la propuesta de valor.
- [ ] Implementa `BaseLayout.astro` con selector de idioma (ES/EN) y Header flotante.
- [ ] Todas las áreas comerciales presentan los CTAs duales (WhatsApp + Email).
- [ ] Las imágenes y videos utilizan `loading="lazy"` y formatos web modernizados (WebP/MP4).
- [ ] Los formularios envían un campo oculto con la página y servicio de origen.
