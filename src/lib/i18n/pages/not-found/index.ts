// src/lib/i18n/pages/not-found/index.ts
import type { SupportedLocale } from '../../ui';

export const notFoundTranslations = {
  es: {
    meta: {
      title: "404 - Página No Encontrada | 77 Studio",
      description: "La página que estás buscando no existe o fue reubicada. Regresa al inicio o explora nuestros servicios de marketing, desarrollo web, IA y productos digitales."
    },
    badge: "404 // RECURSO NO LOCALIZADO",
    code: "404",
    headline: "Esta ruta ha cambiado de ",
    headlineHighlight: "coordenadas.",
    subheadline: "La página que buscas no existe o fue reubicada en una nueva versión. No te preocupes, puedes volver al inicio o saltar directamente a una de nuestras soluciones principales.",
    homeCta: "Volver al Inicio",
    whatsappCta: "Escribir por WhatsApp",
    quickLinksTitle: "O salta directamente a una de nuestras soluciones:",
    services: [
      {
        title: "Marketing & Growth",
        desc: "Meta Ads, Google Ads, estrategia omnicanal y pauta de alto rendimiento.",
        href: "/marketing",
        icon: "marketing"
      },
      {
        title: "Desarrollo Web",
        desc: "Sitios corporativos ultrarrápidos en Astro 5, diseño UX/UI y plataformas.",
        href: "/web",
        icon: "web"
      },
      {
        title: "IA & Automatización",
        desc: "Agentes inteligentes para WhatsApp, automatización de CRM y flujos autónomos.",
        href: "/ia-automatizacion",
        icon: "ia"
      },
      {
        title: "Productos Digitales",
        desc: "SaaS, herramientas a medida, MVPs y aplicaciones web escalables.",
        href: "/productos-digitales",
        icon: "productos"
      }
    ],
    helpBox: {
      badge: "Asistencia en Vivo",
      title: "¿Buscabas algo específico?",
      desc: "Nuestra asistente virtual Sofía está disponible en la esquina inferior derecha para responder tus dudas en tiempo real."
    }
  },
  en: {
    meta: {
      title: "404 - Page Not Found | 77 Studio",
      description: "The page you are looking for does not exist or was relocated. Return to home or explore our marketing, web development, AI automation, and digital products."
    },
    badge: "404 // RESOURCE NOT FOUND",
    code: "404",
    headline: "This route has changed ",
    headlineHighlight: "coordinates.",
    subheadline: "The page you are looking for does not exist or was relocated to a new version. You can return home or jump directly into any of our core solutions.",
    homeCta: "Return to Home",
    whatsappCta: "Chat on WhatsApp",
    quickLinksTitle: "Or jump directly into one of our core solutions:",
    services: [
      {
        title: "Marketing & Growth",
        desc: "Meta Ads, Google Ads, omnichannel growth, and high-performance campaigns.",
        href: "/en/marketing",
        icon: "marketing"
      },
      {
        title: "Web Development",
        desc: "Ultra-fast Astro 5 corporate websites, UX/UI design, and high-converting platforms.",
        href: "/en/web",
        icon: "web"
      },
      {
        title: "AI & Automation",
        desc: "Intelligent WhatsApp AI agents, CRM workflows, and autonomous business processes.",
        href: "/en/ia-automatizacion",
        icon: "ia"
      },
      {
        title: "Digital Products",
        desc: "SaaS platforms, bespoke tools, scalable MVPs, and modern web applications.",
        href: "/en/productos-digitales",
        icon: "productos"
      }
    ],
    helpBox: {
      badge: "Live Assistance",
      title: "Looking for something specific?",
      desc: "Our AI assistant Sofia is available in the bottom-right chat to guide you in real time."
    }
  }
} as const;

export function getNotFoundTranslations(locale: SupportedLocale = 'es') {
  return notFoundTranslations[locale] || notFoundTranslations.es;
}
