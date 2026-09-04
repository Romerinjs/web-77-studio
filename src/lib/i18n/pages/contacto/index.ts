// src/lib/i18n/pages/contacto/index.ts
import type { SupportedLocale } from '../../ui';

export const contactoTranslations = {
  es: {
    meta: {
      title: "Contacto Directo | Hablemos de tu Proyecto | 77 Studio",
      description: "Ponte en contacto con 77 Studio para proyectos de marketing, desarrollo web, automatización e IA. Atención en Colombia, USA e internacional."
    },
    hero: {
      badge: "Inicia la Conversación",
      headline: "Conversemos sobre el siguiente nivel de tu ",
      headlineHighlight: "empresa.",
      subheadline: "Cuéntanos qué reto u objetivo tienes. Te orientaremos sobre cómo podemos ayudarte con estrategia, marketing, desarrollo web o inteligencia artificial.",
      whatsappBtn: "Escribir directamente por WhatsApp",
      whatsappSub: "Respuesta promedio en menos de 15 minutos en horario comercial."
    },
    directChannels: {
      title: "Canales de Atención Directa",
      colombiaLabel: "Sede Colombia / LATAM",
      colombiaLocation: "Medellín, Antioquia",
      usaLabel: "Sede USA / Global",
      usaLocation: "Miami, Florida",
      scheduleLabel: "Horario de Atención",
      scheduleValue: "Lunes a Viernes: 8:00 AM - 6:00 PM (COT / EST)"
    },
    faq: {
      badge: "Preguntas Frecuentes",
      title: "Antes de iniciar tu proyecto",
      items: [
        {
          q: "¿Trabajan únicamente con empresas en Colombia?",
          a: "No. En 77 Studio operamos de manera remota e internacional con clientes en Estados Unidos, Colombia, México y otros países."
        },
        {
          q: "¿Es necesario contratar todos los servicios juntos?",
          a: "No. Puedes iniciar con una necesidad específica (ej. rediseñar tu web o activar pauta) o contratar una solución integral combinando varias capacidades."
        },
        {
          q: "¿Cuánto tiempo toma comenzar a trabajar?",
          a: "Tras la llamada de diagnóstico y aprobación de la propuesta comercial, solemos iniciar el onboarding y ejecución en un plazo de 3 a 5 días hábiles."
        },
        {
          q: "¿Pueden colaborar junto a nuestro equipo interno?",
          a: "Totalmente. Nos integramos como un brazo extendido de tu equipo de marketing, producto o dirección según lo requiera el proyecto."
        }
      ]
    }
  },
  en: {
    meta: {
      title: "Direct Contact | Let's Discuss Your Project | 77 Studio",
      description: "Get in touch with 77 Studio for marketing, web development, process automation, and applied AI. Serving companies in Colombia, the US, and globally."
    },
    hero: {
      badge: "Start The Conversation",
      headline: "Let's discuss the next growth milestone for your ",
      headlineHighlight: "business.",
      subheadline: "Tell us about your current challenge or vision. We will guide you on how we can collaborate across marketing, web development, custom software, or applied AI.",
      whatsappBtn: "Chat Directly on WhatsApp",
      whatsappSub: "Average response time under 15 minutes during business hours."
    },
    directChannels: {
      title: "Direct Communication Channels",
      colombiaLabel: "Colombia & LATAM Operations",
      colombiaLocation: "Medellin, Colombia",
      usaLabel: "USA & Global Operations",
      usaLocation: "Miami, Florida",
      scheduleLabel: "Business Hours",
      scheduleValue: "Monday - Friday: 8:00 AM - 6:00 PM (EST / COT)"
    },
    faq: {
      badge: "Frequently Asked Questions",
      title: "Before we kick off your project",
      items: [
        {
          q: "Do you only work with companies located in Colombia?",
          a: "No. 77 Studio operates seamlessly across borders with active clients in the United States, Colombia, Mexico, and global markets."
        },
        {
          q: "Do I need to hire all services simultaneously?",
          a: "No. You can start with a specific focus area (e.g. building a high-converting web or scaling paid ads) or partner with us for a fully integrated growth ecosystem."
        },
        {
          q: "How fast can we kick off after approval?",
          a: "Following our initial diagnostic call and proposal approval, project onboarding and kickoff typically begin within 3 to 5 business days."
        },
        {
          q: "Can you collaborate with our existing internal team?",
          a: "Absolutely. We routinely operate as an embedded extension to internal marketing leaders, technical founders, and executive teams."
        }
      ]
    }
  }
} as const;

export function getContactoTranslations(lang: SupportedLocale = 'es') {
  return contactoTranslations[lang] || contactoTranslations.es;
}
