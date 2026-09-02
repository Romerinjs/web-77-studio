---
name: 77-design-system
description: Skill for designing, building, and structuring the 77 Studio web application and landing pages using Astro, Astro MDX, Tailwind CSS, and CRO best practices. Make sure to use this skill whenever designing or building any components, pages, layouts, landing pages, or copy for 77 Studio, or when working on Astro MDX templates, visual design systems, or sales funnel optimization for 77 Studio.
license: MIT
metadata:
  authors: "77 Studio Team"
  version: "2.0.0"
---

# 77 Studio - Design System & Astro MDX Visual Architecture

**Documento maestro de diseño visual y desarrollo para la web de 77 Studio.**
Posicionamiento: **Digital Studio + Creative Partner + Technology & AI Company (Colombia + USA).**
*Un solo equipo para hacer que una empresa se vea mejor, venda mejor y funcione mejor.*

> [!IMPORTANT]
> **Plantilla Visual Maestra**: La plantilla base y referente estético absoluto para toda la web de 77 Studio es `template/index.html` y su paquete de assets (`template/assets/main.css`, `template/assets/main.js` y `template/images/`). Toda página o componente desarrollado para 77 Studio debe imitar fielmente las proporciones, profundidades, capas de opacidad, micro-animaciones, tipografías e iconografía presentes en este benchmark visual.

---

## 1. Visual Architecture & Design System (basado en `template/index.html`)

### 🎨 Paleta de Color, Tokens & Sistema de Opacidades Estricto

El diseño de 77 Studio se basa en un esquema visual pulido con fondo en tono gris técnico claro (`bg-background-8`), tarjetas blancas brillantes con bordes sutiles, bloques contrastantes oscuros y acentos violeta eléctrico.

#### Tokens de Color Primarios:
- **Lienzo General (Background Base)**: `bg-background-8` / `#f1f4f6` (Gris técnico muy suave que le da profundidad al contenido).
- **Superficies Principales (Cards)**: `bg-white` (Tarjetas limpias con elevación y sombras suaves).
- **Superficies Oscuras / Contrastantes**:
  - `bg-background-1` (`#3d4753`) - Gris pizarra para tarjetas de testimonios/casos.
  - `bg-background-3` (`#252a32`) - Contenedor oscuro para bloques de dev team y badges de íconos.
  - `bg-background-4` (`#191d2a`) - Fondo para botones principales y badges redondos.
  - `bg-background-5` (`#11141d`) y `bg-background-6` (`#0d1017`) - Fondos profundos para overlays y modales.
- **Texto Principal**: `text-background-13` / `#0d0d12` (Contraste tipográfico fuerte).
- **Acento Primario (Violeta Tech)**: `bg-opai-purple` / `#8d59ff` (Violeta eléctrico para botones pill, nodos activos y badges).
- **Bordes & Trazos**:
  - `border-stroke-2/60` / `#0708052d` (Borde sutil estándar en cards, menús y navbars).
  - `border-stroke-3/18` (Separadores sutiles en sidebar y componentes móviles).

#### 🌓 Escala de Opacidades Obligatoria (Hierarchy Opacity Matrix):
Para mantener la armonía visual de `index.html`, los textos y elementos interactivos deben aplicar la siguiente jerarquía de opacidades:

| Nivel | Opacidad Tailwind | Uso Específico | Ejemplo de Aplicación |
|---|---|---|---|
| **Titulares Altos** | `90%` (`/90`) | Títulos H1 y H2 principales | `text-background-13/90`, `text-white/90` |
| **Títulos de Card** | `80%` (`/80`) | Titulares de tarjetas (H3, H4) | `text-background-13/80` |
| **Cuerpo & Párrafos**| `60%` (`/60`) | Subtítulos, párrafos descriptivos y microcopy | `text-background-13/60`, `text-white/60` |
| **Sub-etiquetas** | `50%` (`/50`) | Cargos de equipo, badges, notas al pie | `text-background-13/50`, `text-white/50` |
| **Capas Traseras** | `20%` (`/20`) | Slices de tarjetas traseras en profundidad | `bg-background-13/20` |
| **Hover Interactivo**| `5%` (`/5`) | Overlay sutil al pasar el cursor | `bg-background-13/5 group-hover:opacity-100` |

---

## 2. Tipografía y Fuentes

El sistema integra tipografías técnicas y editoriales cargadas desde Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@400..600&family=IBM+Plex+Mono:wght@300;500;600&family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@300..600&family=Manrope:wght@300..600&family=Sora:wght@300..600&family=Space+Grotesk:wght@300..600&display=swap"
  rel="stylesheet"
/>
```

### 🖋️ Escala Tipográfica Fiel a `main.css`

#### Sora (`font-sora`) - Títulos y Encabezados Primarios
- `text-sora-heading-1`: `4rem` (64px) | Line-height `120%` | Tracking `-3.2px` (Títulos Hero gigantes).
- `text-sora-heading-2`: `3rem` (48px) | Line-height `120%` | Tracking `-2.4px` (Encabezados de sección).
- `text-sora-heading-3`: `2.5rem` (40px) | Line-height `120%` | Tracking `-1.6px` (Títulos secundarios).
- `text-sora-heading-4`: `2rem` (32px) | Line-height `130%` | Tracking `-1.28px` (Titulares de cards grandes).
- `text-sora-heading-5`: `1.5rem` (24px) | Line-height `140%` | Tracking `-0.72px` (Titulares de cards estándar).
- `text-sora-heading-6`: `1.25rem` (20px) | Line-height `140%` | Tracking `-0.6px` (Nombres y sub-encabezados).

#### Inter Tight (`font-inter-tight`) - Cuerpo de Texto y Microcopy
- `text-tagline-1`: `1.125rem` (18px) | Line-height `150%` (Párrafos de introducción).
- `text-tagline-2`: `1rem` (16px) | Line-height `150%` (Cuerpo de texto estándar).
- `text-tagline-3`: `0.875rem` (14px) | Line-height `150%` (Descripciones en menús y badges).
- `text-tagline-4`: `0.75rem` (12px) | Line-height `150%` (Cargos y notas secundarias).

#### IBM Plex Mono (`font-ibm-plex-mono`) - Botones Tech, Badges y Cifras
- Usado para botones principales (`.button`), selector de idioma, etiquetas de código y nodos tecnológicos.

#### Acentos Editoriales
- **Instrument Serif** (`font-serif`): Usar en cursiva (`italic`) para palabras clave de acento en titulares.
- **Manrope** (`font-manrope`) & **Space Grotesk** (`font-space-grotesk`): Para contadores numéricos y métricas de impacto.

---

## 3. Profundidad 3D, Radios de Borde y Capas Visuales

El estilo visual de `index.html` destaca por sus tarjetas con esquinas muy suavizadas, elevación 3D mediante capas superpuestas (slices) y bordes ultra-pulidos.

### 📐 Guía de Radios de Borde (Border Radius):
- `rounded-3xl` (24px): Para contenedores principales de sección, tarjetas de capacidades y bloques de experiencia.
- `rounded-[20px]`: Para cards de menú mega-dropdown, cajas de testimonios y elementos del Hero.
- `rounded-2xl` (16px): Para el Header flotante principal y cápsulas de botón externas.
- `rounded-xl` (12px): Para avatares, chips de estadísticas e íconos contenedores.
- `rounded-full`: Para badges esféricos, avatares redondos y elementos del efecto lock pulse.

### 📦 Patrón de Capas Rotadas en Fondo (Card Slices 3D):
Para reproducir las tarjetas con capas desalineadas del Hero:

```astro
<div class="relative h-[229px] w-[289px] rounded-3xl bg-white p-11 shadow-sm">
  <!-- Capa Principal Frontal -->
  <div class="bg-background-3 relative z-10 flex w-full max-w-[200px] rotate-6 items-center justify-center gap-x-4 rounded-xl p-2.5 text-white">
    <figure class="size-11 overflow-hidden rounded-lg">
      <img src="images/opai-avatar-img-02.png" alt="Avatar" class="size-full object-cover" />
    </figure>
    <div>
      <p class="font-sora text-tagline-2 text-white">Wade Warren</p>
      <p class="font-inter-tight text-tagline-4 text-white/60">Marketing Coordinator</p>
    </div>
  </div>

  <!-- Capa Secundaria Trasera 1 (-8deg rotada) -->
  <div class="bg-background-13/20 absolute bottom-[92px] h-[62px] w-full max-w-[200px] -rotate-8 rounded-xl p-2.5"></div>

  <!-- Capa Secundaria Trasera 2 (+6deg rotada) -->
  <div class="bg-background-13/20 absolute h-[62px] w-full max-w-[200px] rotate-6 rounded-xl p-2.5"></div>
</div>
```

### 🌫️ Glassmorphism & Progressive Blur Edge Effect
- **Header Glass**: `backdrop-blur-[25px] bg-white/90 border border-stroke-2/60`.
- **Progressive Blur**: Usar el atributo `data-progressive-blur-effect` con capas graduales de backdrop filter (`blur(1px)`, `blur(3px)`, `blur(6px)`) sobre degradados traslúcidos para disolver los bordes de la pantalla.

---

## 4. Sistema de Animaciones Dinámicas (`assets/main.js`)

El comportamiento interactivo se apoya en GSAP, ScrollTrigger, SplitText, Springer physics y Lenis. Todo componente debe incluir los atributos de datos correspondientes para activar las animaciones:

### 1. Animación de Entrada al Scroll (`data-opai-animate`)
Utiliza desenfoque dinámico (`blur(16px)` a `blur(0)`) y traslación con ScrollTrigger:

```html
<div
  data-opai-animate
  data-duration="0.6"
  data-delay="0.2"
  data-offset="60"
  data-direction="up"
  data-blur="16"
>
  <!-- Contenido que entra al scroll con blur fluido -->
</div>
```
- Atributos válidos: `data-direction` (`up` | `down` | `left` | `right`), `data-delay` (`0.1` a `0.8`), `data-instant` (para activar sin scroll threshold), `data-spring` (activa física de rebote Springer).

### 2. Revelado Mascarado de Texto Línea por Línea (`data-text-reveal`)
Divide el texto mediante `SplitText` e introduce cada línea desde una máscara inferior:

```html
<h2 data-text-reveal data-delay="0.1" class="font-sora text-sora-heading-2 text-background-13/90">
  Smart solutions, tailored for you
</h2>
```

### 3. Parallax de Tarjetas al Scroll (`data-move-up-on-scroll-element`)
Hace que las tarjetas flotantes en el Hero o secciones laterales se desplacen verticalmente mientras el usuario navega:

```html
<div data-move-up-on-scroll-element data-move-up-value="15" class="absolute">
  <!-- Tarjeta flotante con desplazamiento suave al hacer scroll -->
</div>
```

### 4. Botón Pill Interactivo con Animación Desplazable (`.button`)
Botones cápsula con ícono violeta en relieve interior (`box-shadow: inset`) que se desliza al pasar el cursor:

```astro
<a href="#contacto" class="inline-block">
  <div class="bg-background-4 group button font-ibm-plex-mono text-tagline-2 text-background-11 flex h-13 w-full cursor-pointer items-center rounded-2xl p-1">
    <!-- Icon Wrapper deslizable -->
    <div class="button-icon relative z-20 h-11 w-15 overflow-hidden rounded-[13px]">
      <div class="bg-opai-purple absolute inset-0 z-20 flex size-full items-center justify-center shadow-[inset_0_3px_10px_rgba(255,255,255,0.4)]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="size-[14px] fill-white/80">
          <path d="M6 0H8V2H6V0Z M0 0H2V2H0V0Z M9 3H11V5H9V3Z M3 3H5V5H3V3Z M12 6H14V8H12V6Z M6 6H8V8H6V6Z M9 9H11V11H9V9Z M3 9H5V11H3V9Z M6 12H8V14H6V12Z M0 12H2V14H0V12Z" />
        </svg>
      </div>
    </div>
    <!-- Texto que reacciona en sentido inverso -->
    <span class="button-text shrink-0 px-4"> Hablemos por WhatsApp </span>
  </div>
</a>
```

### 5. Contadores Numéricos Dinámicos (`data-counter`)
Para estadísticas de impacto, métricas e indicadores de rendimiento:

```html
<span
  data-counter
  data-number="87"
  data-speed="1400"
  data-interval="200"
  data-rooms="2"
  data-height-space="2.1"
>87</span>%
```

### 6. Marquees Infinitos de Clientes y Logos (`InfiniteMarquee`)
Para el carrusel continuo de clientes y partners en `clients section`:

```html
<div class="logos-marquee-container overflow-hidden">
  <!-- Íconos metálicos de clientes alineados -->
</div>
```

---

## 5. Sistema de Iconografía & Assets

### 💠 Badges de Forma Geométrica (`ns-shape-*`)
Para las tarjetas de capacidades/servicios principales, se utilizan íconos con contenedor oscuro `bg-background-3` y bordes hiper-redondeados (`rounded-3xl p-4`):

```astro
<div class="flex h-[370px] flex-col items-start justify-between rounded-3xl bg-white p-8 xl:p-14 border border-stroke-2/60 hover:shadow-lg transition-all duration-300">
  <span class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4">
    <span class="ns-shape-1 text-4xl text-white"></span>
  </span>
  <div class="space-y-1">
    <h3 class="font-sora text-sora-heading-4 text-background-13/80">Estrategia & IA</h3>
    <p class="font-inter-tight text-tagline-2 text-background-13/50">Automatizaciones y flujos de trabajo inteligentes.</p>
  </div>
</div>
```

### 🛡️ Logos de Clientes con Acabado Metálico
Los logotipos de partners y clientes utilizan los SVGs vectoriales de la carpeta `images/icons/*-metal-without-text.svg` para proyectar un acabado tecnológico premium.

### 🔒 Animación de Candado Pulse (`lock-fade-animation-delay-*`)
Para bloques de seguridad y confianza, utilizar la estructura de círculos concéntricos animada:

```html
<div class="lock-fade-animation-delay-1 bg-background-7 relative mx-auto size-40 rounded-full">
  <div class="lock-fade-animation-delay-2 bg-background-8 absolute top-1/2 left-1/2 size-29 -translate-x-1/2 -translate-y-1/2 rounded-full">
    <div class="bg-background-5 lock-fade-animation-delay-3 absolute top-1/2 left-1/2 flex size-17 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full p-3.5">
      <img src="images/lock-3.svg" alt="Security Lock" class="size-full object-contain" />
    </div>
  </div>
</div>
```

---

## 6. Componentes Clave de UI (Astro + Tailwind CSS)

### 1. Floating Header Navbar (`Header.astro`)

```astro
<header>
  <div
    class="header-one fixed top-5 left-1/2 z-50 mx-auto flex w-full max-w-[1290px] -translate-x-1/2 items-center justify-between rounded-2xl bg-white/90 px-4 py-2.5 backdrop-blur-[25px] border border-stroke-2/60 shadow-sm"
    data-opai-animate
    data-instant
    data-direction="up"
  >
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2">
      <img src="/images/shared/main-logo.svg" alt="77 Studio" class="h-8 w-auto" />
    </a>

    <!-- Navigation Menu con Mega-Dropdown Bridge -->
    <nav class="hidden items-center xl:flex">
      <ul class="flex items-center gap-1">
        <li class="nav-item relative cursor-pointer py-2.5" data-menu="servicios-mega-menu">
          <a href="#servicios" class="font-sora text-tagline-2 text-background-13/60 hover:text-background-13 flex items-center gap-1 rounded-full px-4 py-2 transition-all">
            <span>Servicios</span>
            <svg class="size-4 nav-arrow transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
          </a>
        </li>
        <!-- Selector ES/EN & Links -->
      </ul>
    </nav>

    <!-- Commercial CTA 'Hablemos' -->
    <div class="hidden xl:flex items-center">
      <a href="#contacto" class="inline-block">
        <div class="bg-background-4 group button font-ibm-plex-mono text-tagline-2 text-background-11 flex h-11 items-center rounded-xl p-[3px]">
          <div class="button-icon relative z-20 h-9.5 w-11 overflow-hidden rounded-lg">
            <div class="bg-opai-purple flex size-full items-center justify-center shadow-[inset_0_3px_10px_rgba(255,255,255,0.4)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="size-[14px] fill-white/80"><path d="M6 0H8V2H6V0Z M0 0H2V2H0V0Z M9 3H11V5H9V3Z M3 3H5V5H3V3Z M12 6H14V8H12V6Z M6 6H8V8H6V6Z M9 9H11V11H9V9Z M3 9H5V11H3V9Z M6 12H8V14H6V12Z M0 12H2V14H0V12Z"/></svg>
            </div>
          </div>
          <span class="button-text shrink-0 px-4"> Hablemos </span>
        </div>
      </a>
    </div>
  </div>
</header>
```

### 2. Dual Commercial CTA Pattern (`DualCTA.astro`)

```astro
---
export interface Props {
  whatsappMessage?: string;
}
const { whatsappMessage = "Hola 77 Studio 👋 Quisiera conversar sobre un proyecto para mi empresa." } = Astro.props;
const encodedMessage = encodeURIComponent(whatsappMessage);
const whatsappUrl = `https://wa.me/573000000000?text=${encodedMessage}`;
---

<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
  <!-- Botón WhatsApp Principal -->
  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-block">
    <div class="bg-background-4 group button font-ibm-plex-mono text-tagline-2 text-background-11 flex h-13 w-full items-center rounded-2xl p-1">
      <div class="button-icon relative z-20 h-11 w-15 overflow-hidden rounded-[13px]">
        <div class="bg-opai-purple flex size-full items-center justify-center shadow-[inset_0_3px_10px_rgba(255,255,255,0.4)]">
          <svg class="size-5 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
        </div>
      </div>
      <span class="button-text shrink-0 px-5"> Hablar por WhatsApp </span>
    </div>
  </a>

  <!-- Botón Email Secundario -->
  <a href="#contacto" class="w-full sm:w-auto inline-block">
    <div class="bg-background-13/10 hover:bg-background-13 group font-ibm-plex-mono text-tagline-2 text-background-13 hover:text-white flex h-13 w-full items-center justify-center rounded-2xl px-6 transition-colors duration-300">
      <span>Enviar Mensaje por Email</span>
    </div>
  </a>
</div>
```

---

## 7. Astro + Astro MDX Architecture

### 📂 Estructura de Proyecto Obligatoria
```
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── DualCTA.astro
│   ├── ContactForm.astro
│   ├── HeroSection.astro
│   ├── TrackRecordGrid.astro
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
    └── global.css             # Imports de main.css y Google Fonts
```

---

## 8. Principios CRO & Copywriting Obligatorios

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

5. **Veracidad Factual Absoluta**: Prohibido inventar métricas, años ficticios o clientes no autorizados. Representar IA mediante diagramas de nodos/workflows e interfaces reales, sin clichés de robots o cerebros animados.
6. **Presencia Internacional**: Colombia ↔ Estados Unidos, capacidad de trabajo remoto sin fronteras.

---

## 9. Checklist para Desarrolladores
- [ ] El diseño respeta el lienzo `bg-background-8` (`#f1f4f6`) con tarjetas `bg-white` redondeadas `rounded-3xl` o `rounded-[20px]`.
- [ ] Se aplican las fuentes oficiales (`Sora` para títulos, `Inter Tight` para párrafos, `IBM Plex Mono` para botones).
- [ ] La escala de opacidad estricta (`/90`, `/80`, `/60`, `/50`, `/20`, `/5`) se mantiene en todos los textos y capas.
- [ ] Todas las animaciones al hacer scroll implementan `data-opai-animate`, `data-text-reveal` o `data-move-up-on-scroll-element`.
- [ ] Todos los botones de acción usan la estructura pill interactiva `.button` con ícono violeta `bg-opai-purple`.
- [ ] Todas las áreas comerciales presentan los CTAs duales (WhatsApp + Email) con mensajes prellenados contextuales.
- [ ] Las imágenes y videos utilizan `loading="lazy"` y formatos web modernizados (WebP/MP4/SVG).
