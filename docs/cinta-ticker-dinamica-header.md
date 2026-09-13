# Documentación Técnica: Cinta Dinámica Dual-Phase Debajo del Header (`.ticker-bar`)

> **Referencia de Arquitectura y Animación:** Explicación técnica, funcionalidad y código reutilizable de la cinta superior fija en `index.html` que alterna entre **Fogonazo de Palabras Progresivas** y **Carrusel Infinito (Marquee) de Métricas**.

---

## 1. ¿Qué es y cuál es su funcionalidad?

La **Cinta Dinámica** (denominada en el código como `.ticker-bar`) es una barra delgada de alta tecnología (40px de altura) ubicada inmediatamente debajo del menú de navegación principal (`header`) dentro del contenedor fijo `.header-wrapper`.

### Objetivos Principales de Negocio y UX (CRO):
1. **Enganche Visual Inmediato (< 3 segundos):** Capta la atención del visitante en el pliegue superior (*Above the fold*) mediante un movimiento elegante que no distrae de la navegación.
2. **Posicionamiento de Marca (Fase 1):** Proyecta la identidad y los pilares de servicio (*77 Studio, Marketing, Publicidad, AI Agents, Automatización*) mediante una secuencia de palabras con degradado tipográfico.
3. **Prueba de Impacto y Métricas en Vivo (Fase 2):** Comunica resultados duros (*+310% Leads, < 45s Respuesta, -42% CAC, 24/7 Activo*) en formato de cinta continua (*marquee*), anclando autoridad y confianza.
4. **Cero Impacto en Rendimiento:** Las transiciones de movimiento se ejecutan 100% aceleradas por hardware en la GPU (`translate3d`), garantizando 60/120 FPS sin ralentizar la carga de la página.

---

## 2. Arquitectura del Ciclo Dual (Dual-Phase Loop)

A diferencia de un carrusel común que solo gira de forma monótona, este componente implementa una **máquina de estados en 2 fases** orquestada por JavaScript y animada en CSS:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CICLO CONTINUO DEL TICKER                       │
└────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
 ┌──────────────────────────────────────────────────────────────────────┐
 │ FASE 1: Fogonazo de Palabras Progresivas (.ticker-word-phase)         │
 │ • Duración: ~8 segundos (~1.6s por palabra x 5 palabras)             │
 │ • Efecto: Fade-in + Zoom suave centrado con gradiente de texto       │
 │ • Secuencia: "77 Studio" ➔ "Marketing" ➔ "Publicidad" ➔               │
 │              "AI Agents" ➔ "Automatización"                          │
 └──────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼ (Cross-fade suave de 0.6s)
 ┌──────────────────────────────────────────────────────────────────────┐
 │ FASE 2: Carrusel Infinito Continuo (.ticker-marquee-phase)           │
 │ • Duración: 24 segundos (~2 vueltas completas)                       │
 │ • Efecto: Desplazamiento horizontal lineal a 60 FPS                  │
 │ • Contenido: Píldoras de métricas destacadas + badges azules         │
 └──────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼ (Cross-fade de regreso)
                     (Se reinicia el ciclo desde Fase 1)
```

---

## 3. Estructura HTML del Componente

El marcado HTML reside directamente debajo del elemento `<header>` dentro del `<div class="header-wrapper">`:

```html
<!-- CONTENEDOR MAESTRO FIJO (HEADER + CINTA) -->
<div class="header-wrapper">
  
  <!-- 1. Menú Header Principal -->
  <header class="header">
    <!-- Logotipo, navegación y botón CTA -->
  </header>

  <!-- 2. CINTA TICKER DINÁMICA -->
  <div class="ticker-bar" id="tickerBar">
    
    <!-- FASE 1: Palabras Centradas con Fade In / Out -->
    <div class="ticker-word-phase active" id="tickerWordPhase">
      <span class="ticker-word-item" id="tickerWordItem">77 Studio</span>
    </div>

    <!-- FASE 2: Carrusel Infinito en Movimiento (Marquee) -->
    <div class="ticker-marquee-phase" id="tickerMarqueePhase">
      <div class="ticker-wrapper">
        <div class="ticker-content">
          <!-- Bloque duplicado para bucle seamless sin saltos -->
          <span class="ticker-item"><span class="ticker-highlight">+310% LEADS</span> Meta Ads, Google Ads, Agentes IA &amp; Automatización</span>
          <span class="ticker-item"><span class="ticker-highlight">&lt; 45s RESPUESTA</span> Meta Ads, Google Ads, Agentes IA &amp; Automatización</span>
          <span class="ticker-item"><span class="ticker-highlight">-42% CAC</span> Meta Ads, Google Ads, Agentes IA &amp; Automatización</span>
          <span class="ticker-item"><span class="ticker-highlight">24/7 ACTIVO</span> Meta Ads, Google Ads, Agentes IA &amp; Automatización</span>
          
          <!-- Réplica para garantizar el 100% de continuidad -->
          <span class="ticker-item"><span class="ticker-highlight">+310% LEADS</span> Meta Ads, Google Ads, Agentes IA &amp; Automatización</span>
          <span class="ticker-item"><span class="ticker-highlight">&lt; 45s RESPUESTA</span> Meta Ads, Google Ads, Agentes IA &amp; Automatización</span>
          <span class="ticker-item"><span class="ticker-highlight">-42% CAC</span> Meta Ads, Google Ads, Agentes IA &amp; Automatización</span>
          <span class="ticker-item"><span class="ticker-highlight">24/7 ACTIVO</span> Meta Ads, Google Ads, Agentes IA &amp; Automatización</span>
        </div>
      </div>
    </div>

  </div>
</div>
```

---

## 4. Estilos y Animaciones CSS (`styles.css`)

### 4.1 Contenedor y Transición de Fases

```css
:root {
  --header-height: 85px;
  --ticker-height: 40px;
  --accent-blue: #3b82f6;
  --text-secondary: #a0a0aa;
}

/* Compensar el espacio del contenido principal para que no quede tapado */
.main-content {
  margin-top: calc(var(--header-height) + var(--ticker-height));
}

/* Contenedor Fijo Superior */
.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

/* Barra de la Cinta */
.ticker-bar {
  width: 100%;
  height: var(--ticker-height);
  background-color: #000000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position: relative;
}
```

### 4.2 Fase 1: Palabras Progresivas con Gradiente de Texto

```css
/* Contenedor de la fase de palabras */
.ticker-word-phase {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
}

.ticker-word-phase.active {
  opacity: 1;
  pointer-events: auto;
}

/* Palabra individual con efecto zoom y gradiente */
.ticker-word-item {
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  opacity: 0;
  transform: scale(0.92);
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  background: linear-gradient(90deg, #ffffff 30%, var(--accent-blue) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Clase inyectada por JS cuando la palabra está activa */
.ticker-word-item.word-visible {
  opacity: 1;
  transform: scale(1);
}
```

### 4.3 Fase 2: Carrusel Infinito (Marquee 60 FPS)

```css
/* Contenedor de la fase de carrusel */
.ticker-marquee-phase {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

.ticker-marquee-phase.active {
  opacity: 1;
  pointer-events: auto;
}

.ticker-wrapper {
  display: flex;
  white-space: nowrap;
  width: max-content;
}

/* Animación lineal continua */
.ticker-content {
  display: flex;
  animation: ticker-animation 26s linear infinite;
}

/* Ítems y badges de métricas */
.ticker-item {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-secondary);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.ticker-highlight {
  color: var(--accent-blue);
  background: rgba(37, 99, 235, 0.15);
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid rgba(37, 99, 235, 0.3);
}

.ticker-item::after {
  content: '•';
  margin-left: 2.5rem;
  color: #a0a0aa;
}

/* Desplazamiento por hardware exacto al 50% para empalme perfecto */
@keyframes ticker-animation {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
```

---

## 5. Controlador en JavaScript (`ticker-controller.js`)

Este script gestiona los tiempos de visualización, la secuencia de palabras y la conmutación entre ambas fases sin parpadeos:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const tickerWordPhase = document.getElementById('tickerWordPhase');
  const tickerWordItem = document.getElementById('tickerWordItem');
  const tickerMarqueePhase = document.getElementById('tickerMarqueePhase');

  // Palabras clave que se mostrarán en la Fase 1
  const tickerWords = ['77 Studio', 'Marketing', 'Publicidad', 'AI Agents', 'Automatización'];

  function runTopTickerCycle() {
    if (!tickerWordPhase || !tickerWordItem || !tickerMarqueePhase) return;

    // 1. Estado inicial: Ocultar Marquee y activar fase de palabras
    tickerMarqueePhase.classList.remove('active');
    tickerWordPhase.classList.add('active');

    let wordIndex = 0;

    // Función recursiva que itera sobre cada palabra
    function showNextTickerWord() {
      if (wordIndex < tickerWords.length) {
        // Asignar texto y activar animación de entrada (scale 1, opacity 1)
        tickerWordItem.textContent = tickerWords[wordIndex];
        tickerWordItem.classList.add('word-visible');

        // Permanecer visible durante 1.2 segundos
        setTimeout(() => {
          tickerWordItem.classList.remove('word-visible');
          
          // Esperar 400ms a que termine el fade-out antes de la siguiente palabra
          setTimeout(() => {
            wordIndex++;
            showNextTickerWord();
          }, 400);
        }, 1200);
      } else {
        // 2. Al terminar las 5 palabras -> Transicionar a Fase de Marquee
        tickerWordPhase.classList.remove('active');

        setTimeout(() => {
          tickerMarqueePhase.classList.add('active');

          // Ejecutar el carrusel continuo durante 24 segundos (~2 vueltas)
          setTimeout(() => {
            // Reiniciar el ciclo completo
            runTopTickerCycle();
          }, 24000);
        }, 600);
      }
    }

    // Iniciar la secuencia de palabras
    showNextTickerWord();
  }

  // Arrancar el ciclo al cargar la página
  runTopTickerCycle();
});
```

---

## 6. Resumen de Propiedades Técnicas Clave

| Característica | Valor / Configuración | Motivo Técnico |
| :--- | :--- | :--- |
| **Posicionamiento** | `position: relative` dentro de `.header-wrapper` fijo | Se desplaza junto con el navbar al hacer scroll por toda la web. |
| **Altura** | `40px` (`--ticker-height`) | Compacta y legible sin restar espacio al Hero principal. |
| **Tiempo de Palabra** | `1200ms` visible + `400ms` transición | Tiempo óptimo de lectura para el ojo humano según estudios de tipografía cinética. |
| **Tiempo de Marquee** | `24000ms` (24 segundos) | Permite leer todas las métricas al menos dos veces antes de cambiar de fase. |
| **Aceleración** | `translate3d(-50%, 0, 0)` | Obliga al navegador a usar la GPU; evita recálculos de layout (Reflows). |
| **Continuidad** | Elementos duplicados al 50% | Cuando el bloque llega a `-50%`, regresa a `0%` de forma imperceptible (Seamless Loop). |

---

## 7. Cómo Reutilizar este Componente en Otros Proyectos

Para llevarte este efecto a otra página o framework:
1. Copia la estructura HTML dentro de tu contenedor fijo superior.
2. Añade las clases CSS a tu archivo global de estilos (`global.css` o `main.css`).
3. Inicializa la función `runTopTickerCycle()` en tu script de cliente (`main.js`, hook `useEffect` en React, o `<script>` en Astro).
4. Personaliza el arreglo `tickerWords` con las palabras de tu marca y los textos dentro de `.ticker-item` con tus propias ofertas y métricas.
