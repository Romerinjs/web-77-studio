# Changelog - 77 Studio Web Platform

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/), y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [Unreleased] - 2026-08-21

### Added
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
