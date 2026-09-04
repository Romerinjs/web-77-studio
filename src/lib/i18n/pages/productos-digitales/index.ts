// src/lib/i18n/pages/productos-digitales/index.ts
import type { SupportedLocale } from '../../ui';

export const productosTranslations = {
  es: {
    meta: {
      title: "Productos Digitales, Software a Medida & SaaS | 77 Studio",
      description: "Construimos herramientas digitales, MVPs, plataformas SaaS y dashboards a medida cuando la solución que tu empresa necesita todavía no existe (Colombia ↔ USA)."
    },
    hero: {
      badge: "Product Studio & Software Engineering",
      headline: "Si tu empresa necesita una herramienta que no existe, ",
      headlineHighlight: "la construimos.",
      subheadline: "Convertimos necesidades operativas e ideas de negocio en productos digitales rápidos, seguros y escalables, diseñados alrededor de tus procesos reales.",
      whatsappBtn: "Cuéntanos qué quieres construir",
      emailBtn: "Enviar requerimientos por email"
    },
    capabilities: {
      badge: "Capacidades de Desarrollo",
      title: "Desarrollo de software con mentalidad de producto",
      subtitle: "De la conceptualización y diseño UX/UI a la arquitectura en la nube y despliegue continuo.",
      items: [
        { title: "SaaS & MVPs Ágiles", desc: "Validación y construcción rápida de plataformas de suscripción o productos mínimos viables." },
        { title: "Portales de Clientes y Proveedores", desc: "Espacios privados y seguros para autogestión de usuarios, pagos y seguimiento de servicios." },
        { title: "Dashboards & Analítica en Vivo", desc: "Paneles de control a medida que consolidan métricas clave de tu operación en tiempo real." },
        { title: "Digitalización de Procesos Internos", desc: "Reemplazo de hojas de cálculo complejas por herramientas web estructuradas y colaborativas." }
      ]
    }
  },
  en: {
    meta: {
      title: "Digital Products, Custom Software & SaaS Engineering | 77 Studio",
      description: "We build custom digital tools, MVPs, SaaS platforms, and operational dashboards when the software your business needs doesn't exist yet (Colombia ↔ USA)."
    },
    hero: {
      badge: "Product Studio & Software Engineering",
      headline: "If your business needs a digital tool that doesn't exist yet, ",
      headlineHighlight: "we build it.",
      subheadline: "We transform complex operational workflows and business ideas into robust, scalable, and beautifully designed digital products centered around real user needs.",
      whatsappBtn: "Tell Us What You Want to Build",
      emailBtn: "Submit Requirements via Email"
    },
    capabilities: {
      badge: "Engineering Capabilities",
      title: "Software development with a high-growth product mindset",
      subtitle: "From UX/UI wireframing and product discovery to cloud architecture and production deployment.",
      items: [
        { title: "SaaS Platforms & Agile MVPs", desc: "Fast-track design and development of subscription platforms and market-ready MVPs." },
        { title: "Client & Vendor Portals", desc: "Secure, authenticated portals for self-service onboarding, billing, and project tracking." },
        { title: "Operational Dashboards & Analytics", desc: "Custom business intelligence dashboards that consolidate your critical metrics in real time." },
        { title: "Internal Workflow Tooling", desc: "Replacing brittle spreadsheets with clean, high-performance web applications tailored to your team." }
      ]
    }
  }
} as const;

export function getProductosTranslations(lang: SupportedLocale = 'es') {
  return productosTranslations[lang] || productosTranslations.es;
}
