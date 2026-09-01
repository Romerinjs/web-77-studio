# Changelog - 77 Studio Web Platform

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/), y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [Unreleased] - 2026-08-31

### Changed
- **Módulo 01 (Home `/`)**:
  - Rediseño de la sección **El Reto Digital** (`PainPointsSection.astro`) para adoptar la estructura de cuadrícula y tarjetas del catálogo de soluciones: título centrado, eliminación de numeración y etiquetas secundarias, adición de iconos vectoriales geométricos en contenedores oscuros, síntesis de textos y conversión de tarjetas en enlaces clicables directos a `#contacto`.
  - Reemplazo de la placa de integración con emoji en el home (`MetricsAndIntegrations.astro` e `index.html`) por un encabezado H2 limpio y normal sin emojis.
  - Corrección matemática en el bucle del carrusel de integraciones (`MetricsAndIntegrations.astro` e `index.html`) para usar el offset del primer elemento duplicado en lugar de la mitad del scrollWidth, eliminando cortes visuales e inestabilidad en la animación infinita.
  - Implementación de micro-interacción reactiva en los botones píldora (`.button`): el icono se desliza de izquierda a derecha y el texto se desplaza proporcionalmente a la izquierda al hacer hover, usando cálculos geométricos dinámicos en `src/scripts/animations.ts` y transiciones optimizadas en `src/styles/global.css`.
  - Fusión de las secciones **Un Solo Partner Digital** (`EcosystemSection.astro`) y **Servicios Integrados** (`SolutionsGrid.astro`) en un solo bloque unificado en la home, eliminando la sección duplicada y el badge superior. Se implementó la imagen de fondo con destello púrpura (`opai-35.jpg`) añadiendo sombras (`drop-shadow`) y grosor medio a los textos principales para una alta legibilidad. Las tarjetas ahora se organizan en 4 columnas verticales que se expanden al pasar el cursor (`hover:scale-[1.035]`), removiendo la etiqueta 'Capacidad XX' y estructurándolas en: Título, descripción breve, listado de características con checks vectoriales y el botón interactivo `.button` en la base.
  - Reemplazo de las 3 imágenes flotantes secundarias del Hero (`HeroHome.astro`) por las imágenes personalizadas (`marketing1.png`, `desarrollo.png`, `filmmaking.png`) aplicando un escalado de `scale-[1.65]` en CSS para recortar los márgenes blancos que vienen en el lienzo de los archivos y centrar la fotografía en el contenedor.
  - Ampliación de las tarjetas de capacidad en `EcosystemSection.astro` mediante el aumento del contenedor a `max-w-[1400px]`, incremento del padding a `p-6 sm:p-8 xl:p-9` y reconfiguración de la cuadrícula a `xl:grid-cols-4` para dar mayor holgura y lecturabilidad al texto.
  - Adición de la sección de **Testimonios Reales & Prueba Social** (`TestimonialsSection.astro`) en el home, ubicada debajo de casos de negocio, adaptada completamente al tema claro y branding de la marca (fondo claro slate-50, tarjetas blancas, textos oscuros de alta legibilidad, logotipos corporativos en gris unificado reactivo al hover). Se redujo la opacidad del fondo blanco sobrepuesto para lucir más las fotos de fondo, se removió la etiqueta superior de cabecera y se corrigió el error en el bucle continuo de la columna central (desplazamiento descendente) duplicando las tarjetas para superar la altura del visor e inicializando su desplazamiento en `-halfHeight` para evitar saltos.
  - Rediseño e implementación de la sección **Cómo Trabajamos** (`ProcessSection.astro`): corregida la geometría de posición de los nodos 02 y 03 (`left: 18%` y `left: 82%`) y el ancho de la tarjeta activa de cristal (`max-w-md`) eliminando por completo cualquier sobreposición o colisión de texto/nodos. En móviles (`md:hidden`), se mantiene una cuadrícula limpia y fluida de 4 tarjetas independientes.
  - **Casos de Negocio & Resultados** (`CasesSection.astro`):
    - Eliminación de emojis en toda la sección (conmutador, tarjetas y badges de métricas).
    - Eliminación de la etiqueta superior "CASOS DE NEGOCIO & RESULTADOS" en la cabecera.
    - Eliminación de los botones individuales de solución en cada tarjeta.
    - Simplificación estética de las tarjetas: eliminación de cuadros/contenedores anidados interiores y subtítulos redundantes ("Nuestra Solución", "El Reto", "Resultado"), dejando una estructura limpia de título, descripción directa y métrica separada por un borde sutil.
    - Corrección del estado hover en el conmutador de Reto / Solución mediante clases CSS dedicadas (`.is-active`), evitando texto negro sobre fondo negro.
    - Implementación de animación 3D **Flip Coin** (`rotateY(180deg)` con aceleración elástica `cubic-bezier(0.34, 1.25, 0.64, 1)`): la tarjeta inicia en color negro (`bg-background-13`) para el estado **El Reto** y da la vuelta en 3D revelando la cara blanca (`bg-white`) para **Nuestra Solución**.
    - Estandarización visual con las fuentes y tokens oficiales del branding (`font-sora`, `font-inter-tight`, `font-ibm-plex-mono`).

### Added
- **Módulo 07 (Contacto Directo `/contacto`)**: Implementación integral de la página modular de Contacto y Diagnóstico Comercial según especificación `77/07-contacto`:
  - `<HeroContacto />`: Layout de 2 columnas de alta conversión sin distracciones (Card destacada de WhatsApp Business + Formulario comercial guiado con tracking de origen y tiempo medio de respuesta < 2 horas).
  - `<FAQContacto />`: Bloque de 4 preguntas frecuentes estratégicas para tráfico de alta intención (proceso inicial, clientes internacionales, firma de NDA mutuo y tiempos de entrega).
  - Página `src/pages/contacto.astro` con metadatos SEO completos y enrutamiento estático en Astro 5.
- **Módulo 06 (Acerca de Nosotros `/nosotros`)**: Implementación integral de la página modular de Presentación Institucional y Equipo según especificación `77/06-nosotros`:
  - `<HeroNosotros />`: Propuesta de valor institucional (*"Un equipo creativo y tecnológico construido para resolver retos digitales"*), modelo operativo en 3 hubs integrados y CTAs duales con mensaje prellenado de WhatsApp para Nosotros.
  - `<EvolutionTimeline />`: Trayectoria y madurez técnica en 4 etapas (Raíz Creativa → Paid Media & Performance → Ingeniería Web Astro → Automatización, IA & Product Studio).
  - `<PhilosophySection />`: Los 4 principios fundamentales de trabajo (*Cero Humo Tecnológico*, *Creatividad + Código en la misma mesa*, *Obsesión por la Ejecución Ágil*, *Propiedad Total para el Cliente*).
  - `<TeamCapabilitiesGrid />`: Catálogo de las 6 disciplinas integradas del equipo (Estrategia, Paid Media, Audiovisual, Web Frontend, Automatización CRM, IA & RAG).
  - `<GlobalPresenceSection />`: Cobertura internacional y sedes activas Colombia (Medellín/Bogotá) ↔ Estados Unidos (Miami/Global).
  - `<NosotrosContactSection />`: Bloque de cierre comercial con WhatsApp directo a founders y formulario con `originPage="nosotros"`.
  - Página `src/pages/nosotros.astro` con metadatos SEO completos y enrutamiento estático en Astro 5.
- **Módulo 05 (Productos Digitales, SaaS & Dashboards `/productos-digitales`)**: Implementación integral de la página modular de Product Studio & Software a la Medida según especificación `77/05-productos-digitales`:
  - `<HeroProductos />`: Propuesta de valor de Product Studio, showcase interactivo de arquitectura SaaS multi-tenant con métricas en vivo y CTAs duales con mensaje prellenado de WhatsApp para productos digitales.
  - `<ProductSolutionsGrid />`: Catálogo de las 5 soluciones a la medida (SaaS & MVP, Portales & Plataformas de autogestión, Dashboards Analíticos, Herramientas Internas seguras, Aplicaciones Web Personalizadas).
  - `<ProductPainPointsSection />`: Comparativa "Cuando el Software Comercial Tradicional queda corto" vs "Solución a la Medida 77 Studio" (código propietario, sin cobro por asientos, adaptado al negocio).
  - `<ProductProcessSection />`: Metodología de producto en 5 pasos (Entendemos → Diseñamos → Construimos → Lanzamos → Evolucionamos).
  - `<ProductCasesSection />`: Casos de producto reales (SaaS B2B industrial, Portal de clientes mayorista, Dashboard financiero en tiempo real, Web App de logística).
  - `<ProductWhyUsSection />`: Visión de negocio integral (UX/UI de nivel mundial, funnels de adquisición, automatización e IA integrada).
  - `<ProductContactSection />`: Bloque de cierre comercial con consultoría técnica por WhatsApp y formulario con `originPage="productos-digitales"`.
  - Página `src/pages/productos-digitales.astro` con metadatos SEO completos y enrutamiento estático en Astro 5.
- **Módulo 04 (IA + Automatización de Procesos `/ia-automatizacion`)**: Implementación integral de la página modular de Inteligencia Artificial y Automatización de Procesos según especificación `77/04-ia-automatizacion` y directrices de diseño sin clichés:
  - `<HeroIA />`: Propuesta de valor de operaciones inteligentes, showcase interactivo de arquitectura de 4 nodos conectados (`Lead Trigger` → `Agente IA & Scoring` → `CRM Hub` → `Acción & Asesor Humano`) y CTAs duales con mensaje prellenado de WhatsApp para IA.
  - `<IACapabilitiesGrid />`: Grid de las 4 capacidades prácticas de tecnología (Automatización Comercial & CRM, Atención & Soporte Contextual 24/7, Procesos & Operaciones Internas, Inteligencia Artificial Aplicada con RAG).
  - `<WorkflowDiagramSection />`: Anatomía de un workflow real de lead a reunión en &lt; 30 segundos y bloque de sinergia entre equipo humano y automatizaciones.
  - `<AutomationVsAISection />`: Comparativa visual y técnica: Lógica Determinista (Make/n8n) vs. Inteligencia Artificial Cognitiva (LLMs/RAG).
  - `<IAProcessSection />`: Metodología en 6 pasos (Entendemos → Detectamos → Diseñamos → Implementamos → Probamos → Mejoramos).
  - `<IAContactSection />`: Bloque de cierre comercial con consultoría técnica ágil por WhatsApp y formulario con `originPage="ia-automatizacion"`.
  - Página `src/pages/ia-automatizacion.astro` con metadatos SEO completos y enrutamiento estático en Astro 5.
- **Módulo 03 (Desarrollo Web & Landing Pages `/web`)**: Implementación integral de la página modular de Desarrollo Web de Alta Conversión según especificación `77/03-web`:
  - `<HeroWeb />`: Propuesta de valor de ingeniería web, métricas Lighthouse (100/100, &lt;0.6s TTI), showcase interactivo de navegador desktop + marco mobile y CTAs duales con mensaje prellenado de WhatsApp para desarrollo web.
  - `<WebSolutionsGrid />`: Grid de las 6 soluciones especializadas (Web Corporativa, Landing Pages, Rediseño & Modernización, Funnels de Venta, Integraciones Tech & CRM, Analítica Avanzada & CRO).
  - `<WebPainPointsSection />`: Diagnóstico visual "El Problema de la Web Tradicional" (Oferta confusa, lentitud de carga, fricción móvil, formularios eternos, desconexión comercial) vs. Solución 77 Studio.
  - `<WebDesignPillars />`: Los 5 pilares de ingeniería web (Claridad Inmediata, Confianza & Autoridad, Conversión Dual CRO, Velocidad Extrema en Astro 5, Mobile-First Riguroso) con tarjeta de Garantía Técnica Core Web Vitals 95+.
  - `<WebProcessSection />`: Metodología en 5 pasos (Entendemos → Estructuramos → Diseñamos → Desarrollamos → Lanzamos).
  - `<WebContactSection />`: Bloque de cierre comercial con asesoría técnica directa por WhatsApp y formulario con `originPage="web"`.
  - Página `src/pages/web.astro` con metadatos SEO completos y enrutamiento estático en Astro 5.
- **Módulo 02 (Marketing `/marketing`)**: Implementación integral de la página modular de Marketing Digital, Meta Ads & Google Ads según especificación `77/02-marketing`:
  - `<HeroMarketing />`: Propuesta de valor de Paid Media, dashboard interactivo con métricas en vivo (ROAS 4.62x, CTR 3.85%, CPL -34%) y CTAs duales con mensaje prellenado de WhatsApp para Marketing.
  - `<CapabilitiesGrid />`: Grid 2x5 con las 10 capacidades integradas (Estrategia, Meta Ads, Google Ads, Branding, Contenido, Video/Hooks, Contenido con IA, Automatización de Publicaciones, Email Marketing, SMS Marketing).
  - `<PPCComparisonSection />`: Comparativa visual "Pautar no es solo activar anuncios" (Campañas tradicionales desconectadas vs. Sistema Conectado 77 Studio con CAPI y alta velocidad).
  - `<ChannelsComparison />`: Sinergia de canales complementarios: Meta Ads (Generación de Demanda) + Google Ads (Captura de Intención de Búsqueda).
  - `<CreativeShowcase />`: Mosaico visual de formatos y hooks de alta retención (Videos de 3s, Estáticos de contraste, Carruseles educativos, Variantes con IA para A/B testing).
  - `<MarketingProcess />`: Metodología en 4 pasos (Entendemos → Diseñamos → Lanzamos → Optimizamos).
  - `<MarketingContactSection />`: Bloque de cierre comercial enfocado en auditoría y estrategia de pauta con WhatsApp contextual y formulario con `originPage="marketing"`.
  - Página `src/pages/marketing.astro` con metadatos SEO completos y enrutamiento estático en Astro 5.
- **Módulo 01 (Home `/`)**: Implementación integral de la página principal según especificación `77/01-home`:
  - `<HeroHome />`: Propuesta de valor, métricas operativas en vivo y CTAs duales de conversión.
  - `<InternationalPresence />`: Banner de cobertura global Colombia (Medellín/Bogotá) ↔ Estados Unidos (Miami/Global).
  - `<PainPointsSection />`: Los 5 puntos de dolor del cliente en tarjetas editoriales blancas `rounded-[20px]`.
  - `<EcosystemSection />`: Diagrama de nodos interactivo unificando los 4 pilares bajo el núcleo de 77 Studio.
  - `<SolutionsGrid />`: Grid de las 4 capacidades principales con enrutamiento directo.
  - `<CasesSection />`: Casos de negocio y métricas validadas de impacto comercial.
  - `<ProcessSection />`: Metodología en 4 pasos (Entendemos → Proponemos → Creamos → Optimizamos).
  - `<ContactSection />` & `<ContactForm />`: Bloque de conversión con WhatsApp Business y formulario comercial.
- **Módulo 00 (Setup Core & Design Tokens)**: Configuración e inicialización de Astro 5.4+, Tailwind CSS v4 con Vite, TypeScript estricto, `@astrojs/mdx` y `@astrojs/vercel`.
- Creación de componentes estructurales base: `<Header />` con navbar flotante blanca y menú responsive, `<Footer />`, `<DualCTA />` con enlaces contextuales de WhatsApp, `<MobileStickyBar />` y `<BaseLayout />`.
- Definición de utilidades de diseño y conversión en `src/utils/whatsapp.ts`, `src/utils/seo.ts` y `src/utils/cn.ts`.
- Definición de la **Estrategia de Ramas de 3 Niveles (`feature/*` -> `develop` Staging -> `main` Producción)** con protocolo Human-in-the-loop y soporte para el comando `/goal`.
- Creación del comando `npm run 77 feature <nombre>` en la CLI para aislamiento automático de ramas y advertencia de protección en `main` y `develop`.
- Creación de la Skill dedicada `.agents/skills/77-commit-and-docs/SKILL.md` para automatizar commits y documentación técnica de propiedades.
- Creación de la CLI para Agentes `scripts/77-cli.mjs` accesible con `npm run 77 <comando>` (inspect, knowledge, generate, commit).
- Creación del Módulo 08: Integraciones de Marketing (`77/08-integraciones-marketing/index.mdx`) con soporte para Meta Pixel + CAPI serverless, Google Ads, GTM, GA4 y UTM Tracking.
- Creación del Módulo 09: Agente de IA Chat (`77/09-ia-agent-chat/index.mdx`) con especificación de `<AIChatWidget />`, endpoint serverless agnóstico `/api/chat.ts` y RAG mediante `public/knowledge.json`.
- Creación del Módulo 00 de Setup (`77/00-setup/index.mdx`) con requisitos de entorno, comandos de Astro 5, matriz de dependencias npm y matriz de 5 habilidades clave del desarrollador.
- Creación de la estructura modular de documentación en la carpeta `77/`.
- Definición de especificaciones MDX para las 7 vistas principales (`01-home` a `07-contacto`).
- Documento maestro de Gobernanza Técnica, Trunk-Based Development, Conventional Commits y despliegue continuo (`77/GOVERNANCE.md`).
- Integración de Vercel como entorno principal de vistas previas (Preview URLs) y producción.
- Protocolo para microservicios y backend en Dokploy.
- Flujo de trabajo para gestión de imprevistos, parches y updates mediante **GitHub Issues + GitHub Projects**.

---

## [0.1.0] - 2026-08-20

### Added
- Inicialización del Skill oficial `.agents/skills/77-design-system/SKILL.md`.
- Definición del Roadmap Maestro de Arquitectura y Desarrollo Astro MDX (`77/ROADMAP.md`).
- Definición del sistema de tokens visuales (Navbar flotante blanca, fuentes Sora + Inter Tight + IBM Plex Mono, tarjetas `rounded-[20px]`).
- Definición del esquema comercial de conversión dual CRO (WhatsApp + Formulario).
