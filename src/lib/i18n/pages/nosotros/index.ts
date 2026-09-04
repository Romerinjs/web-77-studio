// src/lib/i18n/pages/nosotros/index.ts
import type { SupportedLocale } from '../../ui';

export const nosotrosTranslations = {
  es: {
    meta: {
      title: "Acerca de Nosotros | 77 Studio Digital & AI Partner",
      description: "Conoce al equipo detrás de 77 Studio. Operación en Colombia y Estados Unidos para proyectos de marketing, web, automatización e IA (Colombia ↔ USA)."
    },
    hero: {
      badge: "Quiénes Somos",
      headline: "Creatividad para llamar la atención. ",
      headlineHighlight: "Tecnología para escalar.",
      subheadline: "Somos un estudio digital que reúne estrategia comercial, desarrollo web moderno e inteligencia artificial para impulsar empresas en Colombia, Estados Unidos y Latinoamérica.",
      whatsappBtn: "Hablemos de tu equipo",
      emailBtn: "Conoce nuestras capacidades"
    },
    philosophy: {
      badge: "Nuestros Principios",
      title: "Cómo pensamos y ejecutamos en 77 Studio",
      items: [
        { title: "Un Solo Equipo Integral", desc: "Eliminamos la fricción de gestionar múltiples agencias inconexas. Todo tu ecosistema digital bajo una misma dirección." },
        { title: "Tecnología con Sentido de Negocio", desc: "No adoptamos modas pasajeras. Implementamos IA y software para resolver problemas operativos reales y generar rentabilidad." },
        { title: "Mentalidad Sin Fronteras", desc: "Colaboración remota fluida entre Medellín y Miami con estándares internacionales de entrega y soporte." },
        { title: "Transparencia Absoluta", desc: "Métricas honestas, comunicación directa y relaciones comerciales a largo plazo basadas en resultados." }
      ]
    }
  },
  en: {
    meta: {
      title: "About Us | 77 Studio Digital & AI Growth Partner",
      description: "Meet the team behind 77 Studio. Operating across Colombia and the United States for marketing, web development, automation, and applied AI (Colombia ↔ USA)."
    },
    hero: {
      badge: "Who We Are",
      headline: "Creativity to capture high-intent attention. ",
      headlineHighlight: "Technology to scale sustainably.",
      subheadline: "We are a full-service digital studio combining growth marketing, modern web engineering, and applied artificial intelligence to empower forward-thinking companies worldwide.",
      whatsappBtn: "Let's Connect",
      emailBtn: "Explore Our Capabilities"
    },
    philosophy: {
      badge: "Our Core Principles",
      title: "How we think, build, and deliver at 77 Studio",
      items: [
        { title: "One Unified Strategic Partner", desc: "We eliminate the chaos of managing disconnected vendors. Your marketing, web, and AI under single-threaded leadership." },
        { title: "Technology Rooted in Revenue", desc: "We don't chase hype. We engineer software and applied AI to eliminate bottlenecks and generate tangible ROI." },
        { title: "Borderless Remote Execution", desc: "Seamless cross-border collaboration between Medellin and Miami with global enterprise delivery standards." },
        { title: "Radical Transparency", desc: "Honest data, proactive communication, and enduring client partnerships built on verified business results." }
      ]
    }
  }
} as const;

export function getNosotrosTranslations(lang: SupportedLocale = 'es') {
  return nosotrosTranslations[lang] || nosotrosTranslations.es;
}
