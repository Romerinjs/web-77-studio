# Changelog - 77 Studio Web Platform

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/), y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [Unreleased] - 2026-08-22

### Added
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
