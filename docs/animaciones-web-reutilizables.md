# Guía Maestra de Animaciones Web Reutilizables & Scroll-Reveal Engine

> **Documento técnico de referencia** para entender, implementar y reutilizar efectos de animación modernos en cualquier proyecto web (Vanilla HTML/CSS/JS, Astro, React, Next.js, Vue o Vite con Tailwind CSS o CSS puro).

---

## Índice de Contenidos

1. [¿Cómo funciona el efecto On-Scroll Fade (Scroll Reveal)?](#1-cómo-funciona-el-efecto-on-scroll-fade-scroll-reveal)
   - [El ciclo de vida de la animación](#el-ciclo-de-vida-de-la-animación)
   - [¿Por qué IntersectionObserver y no `window.onscroll`?](#por-qué-intersectionobserver-y-no-windowonscroll)
   - [El secreto visual premium: Curvas Bézier y Blur progresivo](#el-secreto-visual-premium-curvas-bézier-y-blur-progresivo)
2. [Especificación Técnica para Agentes de IA: Motor Scroll Reveal Universal](#2-especificación-técnica-para-agentes-de-ia-motor-scroll-reveal-universal)
   - [2.1 Contrato de API de Atributos HTML / JSX](#21-contrato-de-api-de-atributos-html--jsx)
   - [2.2 Código CSS Completo de Producción (`scroll-reveal.css`)](#22-código-css-completo-de-producción-scroll-revealcss)
   - [2.3 Código TypeScript / JavaScript Completo (`scroll-reveal.ts`)](#23-código-typescript--javascript-completo-scroll-revealts)
   - [2.4 Integración Paso a Paso según el Framework](#24-integración-paso-a-paso-según-el-framework-de-la-web)
   - [2.5 Ejemplos Prácticos de Marcado](#25-ejemplos-prácticos-de-marcado-html--jsx)
   - [2.6 Checklist de Verificación para el Agente](#26-checklist-de-verificación-para-el-agente-quality-gate)
3. [Efecto 2: Revelación Suave de Texto (Text Reveal)](#3-efecto-2-revelación-suave-de-texto-text-reveal)
4. [Efecto 3: Contador Numérico Animado On-Scroll](#4-efecto-3-contador-numérico-animado-on-scroll)
5. [Efecto 4: Parallax Ligero al Hacer Scroll](#5-efecto-4-parallax-ligero-al-hacer-scroll)
6. [Efecto 5: Header Dinámico con Glassmorphism en Scroll](#6-efecto-5-header-dinámico-con-glassmorphism-en-scroll)
7. [Efecto 6: Marquee / Carrusel Infinito Continuo (Logos y Banners)](#7-efecto-6-marquee--carrusel-infinito-continuo)
8. [Efecto 7: Tarjeta 3D Flip Card ("Moneda / Reto vs Solución")](#8-efecto-7-tarjeta-3d-flip-card)
9. [Efecto 8: Botón Píldora Interactivo con Desplazamiento Dinámico](#9-efecto-8-botón-píldora-interactivo)
10. [Efecto 9: Resplandor Ambiental Pulsante (Ambient Pulse Glow)](#10-efecto-9-resplandor-ambiental-pulsante)
11. [Buenas Prácticas, Rendimiento y Accesibilidad](#11-buenas-prácticas-rendimiento-y-accesibilidad)

---

## 1. ¿Cómo funciona el efecto On-Scroll Fade (Scroll Reveal)?

El efecto de aparición al hacer scroll (comúnmente llamado **Scroll Reveal**, **Fade-in-up** u **On-Scroll Fade**) es la técnica mediante la cual los elementos permanecen invisibles y ligeramente desplazados fuera de su posición final hasta que el usuario se desplaza y el elemento entra en el área visible de la pantalla (el **Viewport**).

### El ciclo de vida de la animación paso a paso

El proceso se compone de **4 estados técnicos secuenciales**:

```
[1. ESTADO INICIAL (CSS Puro)]
  opacity: 0;
  transform: translateY(var(--sr-distance, 35px));
  filter: blur(var(--sr-blur, 8px));
       │
       ▼ (El usuario hace scroll)
[2. DETECCIÓN (IntersectionObserver API en JS)]
  El navegador vigila el viewport en un hilo de bajo nivel C++.
  ¿El elemento cruzó el umbral (ej. 15% visible)? ──► SI
       │
       ▼
[3. DISPARADOR REACTIVO (Trigger)]
  JS lee atributos data-sr-* (delay, duration, direction)
  Se inyecta la clase CSS activa: .is-in-view
  Si data-sr-once="true" (default) ──► observer.unobserve(elemento)
       │
       ▼
[4. TRANSICIÓN ACELERADA POR GPU]
  La GPU procesa la animación en una capa de composición dedicada:
  opacity: 1;
  transform: translate(0, 0) scale(1);
  filter: blur(0);
```

### ¿Por qué `IntersectionObserver` y no `window.onscroll`?

* ❌ **El error de `window.addEventListener('scroll')`**:
  Ejecuta código JavaScript decenas de veces por segundo en cada pixel desplazado. Si consultas posiciones mediante `getBoundingClientRect()` o `offsetTop`, obligas al motor del navegador a recalcular la geometría de toda la página en cada frame (**Layout Thrashing** o Reflow masivo). Esto bloquea el hilo principal de la CPU y provoca tirones visibles ("jank"), especialmente en dispositivos móviles.

* ✅ **El estándar de `IntersectionObserver`**:
  Es una API nativa de los navegadores modernos implementada directamente en C++. Delega la vigilancia del rectángulo visible al compositor del navegador. Consume 0% de CPU mientras no haya intersección y solo despierta tu callback en JavaScript en el instante exacto en que un elemento cruza la línea configurada.

### Los 3 factores de acabado de alta gama (Apple / Vercel / Linear)

1. **Curva Quintic Out (`cubic-bezier(0.16, 1, 0.3, 1)`)**:
   En lugar de la curva genérica `ease-out`, esta curva arranca con máxima aceleración instantánea y dedica el 70% del tiempo restante a una desaceleración hiper-suave, transmitiendo peso y fluidez de interfaz premium.
2. **Desenfoque progresivo de lente (`filter: blur(8px)` a `blur(0)`)**:
   La opacidad por sí sola luce bidimensional. El desenfoque óptico añade profundidad de campo, simulando que el objeto entra en foco de una cámara.
3. **Capa de composición en GPU (`will-change: opacity, transform, filter`)**:
   Informa al navegador con antelación para que reserve memoria VRAM en la GPU, garantizando un render continuo a 60fps o 120fps (pantallas ProMotion) sin saltos.

---

## 2. Especificación Técnica para Agentes de IA: Motor Scroll Reveal Universal

> **DIRECTIVA PARA EL AGENTE:**  
> Si eres un agente de desarrollo asignado a implementar este efecto en una web externa:
> 1. Crea el archivo de estilos `scroll-reveal.css` (o añade las reglas a tu CSS global).
> 2. Crea el módulo `scroll-reveal.ts` (o `scroll-reveal.js`).
> 3. Inicialízalo en el punto de entrada de la app (`main.ts`, `app.tsx`, `Layout.astro` o `App.vue`).
> 4. Aplica los atributos `data-sr` en el HTML/JSX de los componentes que deben animarse.
> 5. Sigue el contrato de API a continuación sin alterar los nombres de atributos.

### 2.1 Contrato de API de Atributos HTML / JSX

Cualquier elemento HTML o componente que requiera animación solo debe recibir los siguientes data-attributes:

| Atributo | Valores Permitidos | Valor por Defecto | Descripción |
| :--- | :--- | :--- | :--- |
| **`data-sr`** | *(booleano o vacío)* | `""` | **Obligatorio.** Marca el elemento para ser observado por el motor. |
| **`data-sr-direction`** | `"up"`, `"down"`, `"left"`, `"right"`, `"zoom"`, `"none"` | `"up"` | Dirección desde donde entra el elemento hacia su posición final. |
| **`data-sr-delay`** | Número en segundos (ej. `"0.1"`, `"0.25"`, `"0.5"`) | `"0"` | Retardo para efecto escalonado (stagger) en tarjetas o listas. |
| **`data-sr-duration`** | Cadena de tiempo CSS (ej. `"0.6s"`, `"1s"`) | `"0.8s"` | Duración de la transición. |
| **`data-sr-distance`** | Valor de distancia CSS (ej. `"20px"`, `"50px"`) | `"35px"` | Cuántos píxeles se desplaza el elemento al aparecer. |
| **`data-sr-blur`** | `"none"`, `"4px"`, `"8px"`, `"12px"` | `"8px"` | Nivel de desenfoque inicial. Usa `"none"` para rendimiento ultra-crítico. |
| **`data-sr-instant`** | *(booleano o vacío)* | *No presente* | **Para Hero / Above the Fold.** Se anima de inmediato al cargar sin esperar scroll. |
| **`data-sr-once`** | `"true"`, `"false"` | `"true"` | Si es `"true"`, solo se anima una vez. Si es `"false"`, se reinicia al salir del viewport. |

---

### 2.2 Código CSS Completo de Producción (`scroll-reveal.css`)

Guarda este código en tu proyecto (ejemplo: `src/styles/scroll-reveal.css`):

```css
/* ==========================================================================
   SCROLL REVEAL ENGINE - ZERO DEPENDENCY PRODUCTION STYLES
   ========================================================================== */

/* 1. Variables globales con valores por defecto */
:root {
  --sr-duration: 0.8s;
  --sr-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --sr-distance: 35px;
  --sr-blur: 8px;
}

/* 2. Estado inicial: Oculto, desplazado y en GPU */
[data-sr] {
  opacity: 0;
  will-change: opacity, transform, filter;
  transition: opacity var(--sr-duration) var(--sr-ease),
              transform var(--sr-duration) var(--sr-ease),
              filter var(--sr-duration) var(--sr-ease);
}

/* 3. Direcciones de desplazamiento inicial */
[data-sr]:not([data-sr-direction]),
[data-sr][data-sr-direction="up"] {
  transform: translate3d(0, var(--sr-distance), 0);
}

[data-sr][data-sr-direction="down"] {
  transform: translate3d(0, calc(var(--sr-distance) * -1), 0);
}

[data-sr][data-sr-direction="left"] {
  transform: translate3d(calc(var(--sr-distance) * -1), 0, 0);
}

[data-sr][data-sr-direction="right"] {
  transform: translate3d(var(--sr-distance), 0, 0);
}

[data-sr][data-sr-direction="zoom"] {
  transform: scale(0.92);
}

[data-sr][data-sr-direction="none"] {
  transform: none;
}

/* 4. Desenfoque inicial condicional */
[data-sr]:not([data-sr-blur="none"]) {
  filter: blur(var(--sr-blur));
}

[data-sr][data-sr-blur="none"] {
  filter: none;
}

/* 5. Estado Activo: Disparado cuando entra en viewport */
[data-sr].is-in-view {
  opacity: 1 !important;
  transform: translate3d(0, 0, 0) scale(1) !important;
  filter: blur(0) !important;
}

/* 6. Soporte de Accesibilidad (Preferencia de reducción de movimiento) */
@media (prefers-reduced-motion: reduce) {
  [data-sr] {
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
    transition: none !important;
    will-change: auto !important;
  }
}

/* 7. Fallback de seguridad si JavaScript está deshabilitado */
noscript [data-sr],
.no-js [data-sr] {
  opacity: 1 !important;
  transform: none !important;
  filter: none !important;
}
```

---

### 2.3 Código TypeScript / JavaScript Completo (`scroll-reveal.ts`)

Crea `src/utils/scroll-reveal.ts` (o `.js`). Es totalmente compatible con Vanilla JS, Vite, Astro, React, Next.js y Vue:

```typescript
/**
 * SCROLL REVEAL ENGINE
 * Motor de detección de intersección de alto rendimiento para animaciones on-scroll.
 * Cero dependencias externas.
 */

export interface ScrollRevealOptions {
  /** Umbral de visibilidad (0.0 a 1.0) para disparar la animación. Default: 0.15 */
  threshold?: number;
  /** Margen del viewport para anticipar la animación. Default: '0px 0px -40px 0px' */
  rootMargin?: string;
  /** Selector de los elementos a observar. Default: '[data-sr]' */
  selector?: string;
}

export class ScrollRevealEngine {
  private observer: IntersectionObserver | null = null;
  private options: Required<ScrollRevealOptions>;
  private mutationObserver: MutationObserver | null = null;

  constructor(options: ScrollRevealOptions = {}) {
    this.options = {
      threshold: options.threshold ?? 0.15,
      rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      selector: options.selector ?? '[data-sr]'
    };
  }

  /**
   * Inicializa el observador y procesa los elementos del DOM.
   */
  public init(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    // Fallback: Si el navegador no soporta IntersectionObserver, mostrar todo
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>(this.options.selector).forEach((el) => {
        el.classList.add('is-in-view');
      });
      return;
    }

    // Destruir instancia previa si existe para evitar observadores duplicados
    this.destroy();

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const once = el.getAttribute('data-sr-once') !== 'false';

        if (entry.isIntersecting) {
          this.revealElement(el);
          if (once && this.observer) {
            this.observer.unobserve(el);
          }
        } else if (!once) {
          // Si once=false, se vuelve a ocultar al salir del viewport
          el.classList.remove('is-in-view');
          el.style.transitionDelay = '0s';
        }
      });
    }, {
      threshold: this.options.threshold,
      rootMargin: this.options.rootMargin
    });

    // Registrar todos los elementos actuales
    this.observeElements();

    // Observar elementos dinámicos agregados por SPA o fetch
    this.observeMutations();
  }

  /**
   * Aplica estilos personalizados inline y activa la animación
   */
  private revealElement(el: HTMLElement): void {
    const delay = el.getAttribute('data-sr-delay') || '0';
    const duration = el.getAttribute('data-sr-duration');
    const distance = el.getAttribute('data-sr-distance');
    const blur = el.getAttribute('data-sr-blur');

    if (delay) el.style.transitionDelay = `${delay}s`;
    if (duration) el.style.setProperty('--sr-duration', duration);
    if (distance) el.style.setProperty('--sr-distance', distance);
    if (blur) el.style.setProperty('--sr-blur', blur);

    el.classList.add('is-in-view');
  }

  /**
   * Asigna los observadores a cada elemento encontrado
   */
  public observeElements(): void {
    if (!this.observer) return;

    const elements = document.querySelectorAll<HTMLElement>(this.options.selector);

    elements.forEach((el) => {
      // Si el elemento ya fue animado con once=true, ignorar
      if (el.classList.contains('is-in-view') && el.getAttribute('data-sr-once') !== 'false') {
        return;
      }

      // Elementos del Hero o Above-The-Fold con data-sr-instant
      if (el.hasAttribute('data-sr-instant')) {
        const delay = parseFloat(el.getAttribute('data-sr-delay') || '0') * 1000;
        setTimeout(() => this.revealElement(el), delay);
      } else {
        this.observer.observe(el);
      }
    });
  }

  /**
   * Detecta nuevos elementos inyectados dinámicamente en el DOM (SPAs)
   */
  private observeMutations(): void {
    if (typeof MutationObserver === 'undefined') return;

    this.mutationObserver = new MutationObserver((mutations) => {
      let hasNewElements = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          hasNewElements = true;
          break;
        }
      }
      if (hasNewElements) {
        this.observeElements();
      }
    });

    this.mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Limpia observadores y previene fugas de memoria
   */
  public destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }
  }
}

// Instancia singleton para uso rápido
let globalInstance: ScrollRevealEngine | null = null;

export function initScrollReveal(options?: ScrollRevealOptions): ScrollRevealEngine {
  if (!globalInstance) {
    globalInstance = new ScrollRevealEngine(options);
  }
  globalInstance.init();
  return globalInstance;
}
```

---

### 2.4 Integración Paso a Paso según el Framework de la Web

#### Opción A: En Vanilla HTML / Vite / Webpack
En tu `src/main.ts` o `index.html`:
```typescript
import './styles/scroll-reveal.css';
import { initScrollReveal } from './utils/scroll-reveal';

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
});
```

#### Opción B: En Astro (v4 o v5)
En tu layout principal (ej. `src/layouts/BaseLayout.astro`):
```astro
---
import '../styles/scroll-reveal.css';
---
<!doctype html>
<html lang="es">
  <head>...</head>
  <body>
    <slot />
    <script>
      import { initScrollReveal } from '../utils/scroll-reveal';

      // Compatible con navegación estándar y con View Transitions de Astro
      document.addEventListener('astro:page-load', () => initScrollReveal());
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => initScrollReveal());
      } else {
        initScrollReveal();
      }
    </script>
  </body>
</html>
```

#### Opción C: En React / Next.js (App Router o Pages Router)
Crea el hook `src/hooks/useScrollReveal.ts`:
```typescript
'use client';
import { useEffect } from 'react';
import { initScrollReveal } from '@/utils/scroll-reveal';
import '@/styles/scroll-reveal.css';

export function useScrollReveal() {
  useEffect(() => {
    const engine = initScrollReveal();
    return () => engine.destroy();
  }, []);
}
```
Y en tu `app/layout.tsx` o en cualquier página:
```tsx
'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
```

#### Opción D: En Vue 3 / Nuxt 3
En `app.vue` o en un composable `useScrollReveal.ts`:
```vue
<script setup>
import { onMounted, onUnmounted } from 'vue';
import { initScrollReveal } from '@/utils/scroll-reveal';
import '@/styles/scroll-reveal.css';

let engine = null;
onMounted(() => {
  engine = initScrollReveal();
});

onUnmounted(() => {
  if (engine) engine.destroy();
});
</script>
```

---

### 2.5 Ejemplos Prácticos de Marcado HTML / JSX

#### 1. Título principal del Hero (Aparece de inmediato con ligero retardo)
```html
<h1 data-sr data-sr-instant data-sr-delay="0.05">
  Desarrollo Digital de Alto Impacto
</h1>
```

#### 2. Rejilla de 3 Tarjetas con animación escalonada (Stagger)
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Tarjeta 1: Arranca a los 0.1s -->
  <div class="card" data-sr data-sr-delay="0.1">
    <h3>Marketing Digital</h3>
  </div>

  <!-- Tarjeta 2: Arranca a los 0.2s -->
  <div class="card" data-sr data-sr-delay="0.2">
    <h3>Desarrollo Web</h3>
  </div>

  <!-- Tarjeta 3: Arranca a los 0.3s -->
  <div class="card" data-sr data-sr-delay="0.3">
    <h3>Agentes de IA</h3>
  </div>
</div>
```

#### 3. Imagen que entra desde la izquierda y texto desde la derecha
```html
<div class="split-section">
  <!-- Entra desde la izquierda con 50px de distancia -->
  <div data-sr data-sr-direction="left" data-sr-distance="50px" data-sr-delay="0.1">
    <img src="/mockup.png" alt="Plataforma" />
  </div>

  <!-- Entra desde la derecha -->
  <div data-sr data-sr-direction="right" data-sr-delay="0.2">
    <h2>Arquitectura Escalable</h2>
    <p>Conexión directa con tus operaciones.</p>
  </div>
</div>
```

#### 4. Elemento con animación repetible al hacer scroll hacia arriba y abajo
```html
<div data-sr data-sr-once="false" data-sr-direction="zoom">
  <p>Este bloque se oculta al salir y vuelve a animarse cada vez que entras.</p>
</div>
```

---

### 2.6 Checklist de Verificación para el Agente (Quality Gate)

Antes de dar la tarea por completada en el proyecto destino, verifica:

- [ ] **1. Cero dependencias npm añadidas**: No debes instalar bibliotecas como AOS, ScrollMagic ni GSAP a menos que sea pedido explícito. Esta solución es 100% nativa.
- [ ] **2. Sin Layout Shifts (CLS 0)**: Comprueba que los elementos no muevan el scrollbar de la página. El CSS usa `translate3d` para mantenerse fuera del flujo de layout.
- [ ] **3. Disparo suave en móviles**: Comprueba en viewport móvil (375px a 430px) que las animaciones no sufran caídas de FPS.
- [ ] **4. Comportamiento en el Hero**: Los elementos por encima del pliegue (Hero) deben tener `data-sr-instant` para no dejar la pantalla en blanco antes del primer scroll.
- [ ] **5. Navegación en SPAs / Rutas**: Al cambiar de página (en Next.js, Astro o React Router), las nuevas páginas deben animar sus elementos sin requerir F5 (recarga forzada).
- [ ] **6. Accesibilidad verificada**: Al activar `prefers-reduced-motion: reduce` en el sistema operativo, los elementos deben ser 100% visibles al instante sin retrasos ni transiciones.

---

## 3. Efecto 2: Revelación Suave de Texto (Text Reveal)

Ideal para títulos principales, subtítulos o citas textuales que necesitan un énfasis tipográfico más ligero y nítido.

### CSS

```css
[data-text-reveal] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

[data-text-reveal].is-revealed {
  opacity: 1;
  transform: translateY(0);
}
```

### JS

```javascript
export function initTextReveal() {
  const textElements = document.querySelectorAll('[data-text-reveal]');
  
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-delay') || '0';
        el.style.transitionDelay = `${delay}s`;
        el.classList.add('is-revealed');
        textObserver.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  textElements.forEach((el) => textObserver.observe(el));
}
```

---

## 4. Efecto 3: Contador Numérico Animado On-Scroll

Cuenta números de forma dinámica cuando el usuario llega a la sección de estadísticas (ej. de 0 a 310 en 1.4 segundos).

### HTML

```html
<div class="stat-card">
  <!-- data-number: número objetivo | data-speed: duración en ms -->
  <span class="number" data-counter data-number="310" data-speed="1500">0</span>
  <span>% de Aumento en Leads</span>
</div>
```

### JS

```javascript
export function initCounters() {
  const counterElements = document.querySelectorAll('[data-counter]');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetNum = parseInt(el.getAttribute('data-number') || '0', 10);
        const duration = parseInt(el.getAttribute('data-speed') || '1400', 10);
        
        if (!el.classList.contains('counted')) {
          el.classList.add('counted');
          let startTimestamp = null;
          
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Curva de desaceleración suave (easeOutQuad)
            const easeOutProgress = 1 - (1 - progress) * (1 - progress);
            const currentNum = Math.floor(easeOutProgress * targetNum);
            
            el.innerText = currentNum.toString();
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              el.innerText = targetNum.toString();
            }
          };
          
          window.requestAnimationFrame(step);
        }
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  counterElements.forEach((el) => counterObserver.observe(el));
}
```

---

## 5. Efecto 4: Parallax Ligero al Hacer Scroll

Crea sensación de profundidad y capas 3D moviendo fondos, imágenes o tarjetas flotantes a una velocidad diferente que el resto del documento.

### HTML

```html
<!-- data-parallax-speed define la intensidad del movimiento -->
<img 
  src="mockup-flotante.png" 
  alt="Mockup" 
  data-parallax 
  data-parallax-speed="25"
/>
```

### JS (Optimizado a 60fps con `requestAnimationFrame` y evento pasivo)

```javascript
export function initParallax() {
  const elements = document.querySelectorAll('[data-parallax]');
  if (!elements.length) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        elements.forEach((el) => {
          const speed = parseFloat(el.getAttribute('data-parallax-speed') || '15');
          const translateY = -(scrollY * (speed / 1000));
          el.style.transform = `translate3d(0, ${translateY}px, 0)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}
```

---

## 6. Efecto 5: Header Dinámico con Glassmorphism en Scroll

El navbar arranca transparente o flotante, y al hacer más de 80px de scroll se transforma en una barra compacta con fondo translúcido y desenfoque (`backdrop-filter`).

### CSS

```css
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  padding: 1.5rem 2rem;
  background: transparent;
  transition: padding 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

#navbar.scrolled {
  padding: 0.8rem 2rem;
  background-color: rgba(255, 255, 255, 0.85); /* o rgba(15, 15, 20, 0.85) en dark mode */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
```

### JS

```javascript
export function initStickyHeader() {
  const header = document.querySelector('#navbar');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}
```

---

## 7. Efecto 6: Marquee / Carrusel Infinito Continuo

Ideal para franjas de logos de clientes, partners o métricas que se desplazan infinitamente sin cortes.

### HTML

```html
<div class="marquee-container">
  <div class="marquee-track">
    <!-- Bloque 1 de logos -->
    <div class="marquee-content">
      <img src="logo1.svg" alt="Logo 1">
      <img src="logo2.svg" alt="Logo 2">
      <img src="logo3.svg" alt="Logo 3">
      <img src="logo4.svg" alt="Logo 4">
    </div>
    <!-- Bloque 2 idéntico (para ciclo continuo sin salto) -->
    <div class="marquee-content" aria-hidden="true">
      <img src="logo1.svg" alt="Logo 1">
      <img src="logo2.svg" alt="Logo 2">
      <img src="logo3.svg" alt="Logo 3">
      <img src="logo4.svg" alt="Logo 4">
    </div>
  </div>
</div>
```

### CSS (100% puro, sin JS pesado)

```css
.marquee-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  /* Gradientes de desvanecimiento lateral */
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 25s linear infinite;
}

/* Pausa suave al pasar el cursor */
.marquee-container:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-content {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding-right: 3rem;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

---

## 8. Efecto 7: Tarjeta 3D Flip Card ("Moneda / Reto vs Solución")

Permite voltear una tarjeta en 3D para mostrar el frente (El Problema / El Reto en tono oscuro) y el reverso (La Solución / Resultado en tono claro o de acento).

### HTML

```html
<div class="flip-card-wrapper" tabindex="0">
  <div class="flip-card-inner">
    <!-- Cara Frontal (Frente) -->
    <div class="flip-card-face flip-card-front">
      <span class="badge">El Reto</span>
      <h3>Pérdida de prospectos</h3>
      <p>El 70% de los leads se pierden por falta de respuesta rápida.</p>
      <span class="flip-hint">Toca o pasa el cursor para voltear ↺</span>
    </div>

    <!-- Cara Trasera (Reverso) -->
    <div class="flip-card-face flip-card-back">
      <span class="badge-success">Nuestra Solución</span>
      <h3>Agente IA 24/7</h3>
      <p>Respuesta inmediata en menos de 45 segundos conectada a WhatsApp.</p>
      <p class="metric">+310% de conversión</p>
    </div>
  </div>
</div>
```

### CSS

```css
.flip-card-wrapper {
  perspective: 1200px;
  width: 100%;
  min-height: 280px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.34, 1.25, 0.64, 1);
  transform-style: preserve-3d;
}

/* Volteo al hacer hover o al estar enfocado */
.flip-card-wrapper:hover .flip-card-inner,
.flip-card-wrapper:focus .flip-card-inner,
.flip-card-wrapper.is-flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-face {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Frente: Oscuro */
.flip-card-front {
  background: #0f111a;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Reverso: Claro / Destacado rotado a 180° */
.flip-card-back {
  background: #ffffff;
  color: #0f111a;
  transform: rotateY(180deg);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.12);
}
```

---

## 9. Efecto 8: Botón Píldora Interactivo con Desplazamiento Dinámico

Micro-interacción de alta gama para botones con icono donde, al hacer hover, el icono se traslada dinámicamente de izquierda a derecha y el texto se desplaza suavemente en sentido contrario.

### HTML

```html
<a href="#contacto" class="pill-btn">
  <span class="btn-icon">→</span>
  <span class="btn-text">Iniciar Proyecto</span>
</a>
```

### CSS

```css
.pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.75rem 0.75rem 1rem;
  border-radius: 9999px;
  background: #111;
  color: #fff;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  transition: background-color 0.3s ease;
}

.pill-btn .btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: #7952f5;
  color: #fff;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.pill-btn .btn-text {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  font-weight: 600;
}
```

### JS (Cálculo geométrico relativo de límites)

```javascript
export function initPillButtons() {
  const buttons = document.querySelectorAll('.pill-btn');

  buttons.forEach((btn) => {
    const icon = btn.querySelector('.btn-icon');
    const text = btn.querySelector('.btn-text');
    if (!icon || !text) return;

    btn.addEventListener('mouseenter', () => {
      const btnRect = btn.getBoundingClientRect();
      const iconRect = icon.getBoundingClientRect();
      const textRect = text.getBoundingClientRect();

      const paddingLeft = parseFloat(getComputedStyle(btn).paddingLeft) || 0;
      const paddingRight = parseFloat(getComputedStyle(btn).paddingRight) || 0;

      // Distancia máxima que el icono puede viajar hacia la derecha
      const iconTravel = btnRect.width - paddingRight - icon.offsetWidth - (iconRect.left - btnRect.left);
      // Distancia que el texto cede hacia la izquierda
      const textTravel = Math.max(0, textRect.left - btnRect.left - paddingLeft);

      icon.style.transform = `translateX(${iconTravel}px)`;
      text.style.transform = `translateX(-${textTravel}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      icon.style.transform = 'translateX(0)';
      text.style.transform = 'translateX(0)';
    });
  });
}
```

---

## 10. Efecto 9: Resplandor Ambiental Pulsante (Ambient Pulse Glow)

Un aura brillante orgánica ideal para colocar detrás de imágenes de productos, logotipos o tarjetas centrales del Hero.

```css
@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.08);
  }
}

.ambient-glow {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(121, 82, 245, 0.35) 0%, rgba(121, 82, 245, 0) 70%);
  filter: blur(40px);
  pointer-events: none;
  animation: pulseGlow 5s infinite ease-in-out;
}
```

---

## 11. Buenas Prácticas, Rendimiento y Accesibilidad

1. **Anima solo propiedades compuestas (`transform` y `opacity`)**:
   Nunca animes `top`, `left`, `width`, `height` ni `margin` durante scroll o transiciones frecuentes. `transform` y `opacity` se procesan directamente en la GPU sin activar las fases de Layout y Paint del navegador.
2. **Usa `will-change` con moderación**:
   Aplica `will-change: transform, opacity;` únicamente a elementos que van a animarse de inmediato para que el navegador cree una capa de composición (**Compositing Layer**).
3. **Respeta la preferencia de reducción de movimiento (`prefers-reduced-motion`)**:
   Por accesibilidad para personas propensas a mareos por cinetosis:

```css
@media (prefers-reduced-motion: reduce) {
  [data-animate],
  [data-text-reveal],
  .marquee-track,
  .pill-btn .btn-icon,
  .pill-btn .btn-text {
    animation: none !important;
    transition: none !important;
    transform: none !important;
    filter: none !important;
    opacity: 1 !important;
  }
}
```

---

## Archivo Maestro Integrado listo para copiar

Crea un archivo `motion.js` en tu nuevo proyecto y compila todo con:

```javascript
import { initScrollAnimations } from './animations';
import { initTextReveal } from './animations';
import { initCounters } from './animations';
import { initParallax } from './animations';
import { initStickyHeader } from './animations';
import { initPillButtons } from './animations';

export function initGlobalMotionEngine() {
  initScrollAnimations();
  initTextReveal();
  initCounters();
  initParallax();
  initStickyHeader();
  initPillButtons();
}

// Soporte para Astro View Transitions, SPA o carga estática
document.addEventListener('astro:page-load', initGlobalMotionEngine);
document.addEventListener('DOMContentLoaded', initGlobalMotionEngine);
```
