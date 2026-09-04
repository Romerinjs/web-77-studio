// src/lib/i18n/pages/web/index.ts
import type { SupportedLocale } from '../../ui';

export const webTranslations = {
  es: {
    meta: {
      title: "Desarrollo Web & Landing Pages de Alta Conversión | 77 Studio",
      description: "Diseñamos y desarrollamos sitios web corporativos y landing pages con Astro, enfocados en velocidad ultra-rápida, confianza de marca y máxima conversión (Colombia ↔ USA)."
    },
    hero: {
      badge: "Ingeniería Web & Conversión",
      headline: "Una web que represente tu nivel y ",
      headlineHighlight: "convierta visitantes en clientes.",
      subheadline: "Diseñamos experiencias digitales ultrarrápidas, limpias y persuasivas, pensadas para explicar tu propuesta de valor, transmitir autoridad y facilitar la acción comercial.",
      whatsappBtn: "Quiero mejorar mi web",
      emailBtn: "Contarnos el proyecto por email"
    },
    capabilities: {
      badge: "Qué Desarrollamos",
      title: "Soluciones web adaptadas a los objetivos de tu negocio",
      subtitle: "Construidas con Astro, Tailwind CSS y arquitectura moderna para máximo rendimiento y posicionamiento SEO.",
      items: [
        { title: "Webs Corporativas", desc: "Sitios de alto impacto visual y estructura clara que proyectan la solidez de tu empresa." },
        { title: "Landing Pages de Campaña", desc: "Páginas optimizadas para conversión (CRO) enfocadas en maximizar el ROI de pauta." },
        { title: "Rediseño Web Integral", desc: "Modernización de estética anticuada, velocidad de carga y reestructuración de mensajes." },
        { title: "Funnels de Venta y Calificación", desc: "Flujos de navegación diseñados para guiar al usuario hacia la reserva o cotización." },
        { title: "Integraciones de CRM y WhatsApp", desc: "Conexión directa con tus herramientas de ventas, analítica y bases de datos." },
        { title: "SEO Técnico & Rendimiento 100/100", desc: "Optimización estricta de Core Web Vitals para indexación destacada en Google." }
      ]
    },
    pillars: {
      badge: "Pilares de Diseño",
      title: "Diseñamos para generar confianza y cerrar ventas",
      items: [
        { title: "Claridad Inmediata", desc: "Tu visitante entiende exactamente qué haces y cómo le ayudas en menos de 5 segundos." },
        { title: "Autoridad y Confianza", desc: "Diseño pulido, prueba social y casos reales que eliminan la fricción de compra." },
        { title: "Foco en Conversión (CRO)", desc: "Llamados a la acción estratégicos y formularios sencillos que aumentan los contactos." },
        { title: "Velocidad Extrema", desc: "Cargas instantáneas con código limpio sin sobrecargas de plugins lentos." },
        { title: "Mobile First Real", desc: "Experiencia impecable y botones de contacto siempre accesibles en móviles." }
      ]
    }
  },
  en: {
    meta: {
      title: "Web Development & High-Converting Landing Pages | 77 Studio",
      description: "We design and build ultra-fast corporate websites and high-converting landing pages using Astro, engineered for speed, authority, and sales (Colombia ↔ USA)."
    },
    hero: {
      badge: "Web Engineering & CRO",
      headline: "A website that represents your standard and ",
      headlineHighlight: "converts visitors into clients.",
      subheadline: "We design ultra-fast, visually polished, and persuasive web experiences engineered to clarify your value proposition, build authority, and drive commercial action.",
      whatsappBtn: "Revamp My Website",
      emailBtn: "Submit Project via Email"
    },
    capabilities: {
      badge: "What We Build",
      title: "Web solutions tailored to your business objectives",
      subtitle: "Engineered with Astro, modern CSS, and clean architecture for maximum speed, security, and top SEO rankings.",
      items: [
        { title: "Corporate Websites", desc: "High-impact, beautifully structured digital flagships that establish market authority." },
        { title: "High-Converting Landing Pages", desc: "CRO-optimized landing pages designed to maximize paid media return on investment." },
        { title: "Full Website Redesigns", desc: "Modernizing outdated aesthetics, fixing slow load times, and restructuring conversion copy." },
        { title: "Lead Funnels & Workflows", desc: "Frictionless user flows structured to guide high-intent prospects toward booking a call." },
        { title: "CRM & WhatsApp Integrations", desc: "Direct connections to your sales pipeline, analytics stack, and customer databases." },
        { title: "Technical SEO & 100/100 Lighthouse", desc: "Strict Core Web Vitals optimization to rank higher on Google search results." }
      ]
    },
    pillars: {
      badge: "Design Principles",
      title: "Engineered to build instant trust and drive revenue",
      items: [
        { title: "Immediate Clarity", desc: "Your prospect understands what you do and how you solve their problem in under 5 seconds." },
        { title: "Brand Authority & Trust", desc: "Flawless UI, verified social proof, and business case studies that eliminate skepticism." },
        { title: "CRO & Commercial Action", desc: "Strategic dual CTAs and lightweight forms designed to multiply qualified inquiries." },
        { title: "Blazing Speed", desc: "Sub-second load times powered by Astro static generation with zero bloated plugins." },
        { title: "True Mobile-First Experience", desc: "Seamless navigation with persistent mobile contact actions for frictionless touchpoints." }
      ]
    }
  }
} as const;

export function getWebTranslations(lang: SupportedLocale = 'es') {
  return webTranslations[lang] || webTranslations.es;
}
