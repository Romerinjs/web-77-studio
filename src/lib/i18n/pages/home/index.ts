// src/lib/i18n/pages/home/index.ts
import type { SupportedLocale } from '../../ui';

export const homeTranslations = {
  es: {
    meta: {
      title: "77 Studio | Marketing, Web, IA + Automatización & Productos Digitales",
      description: "Digital Studio + Creative Partner + Technology & AI Company. Un solo equipo para hacer que tu empresa se vea mejor, venda mejor y funcione mejor (Colombia ↔ USA)."
    },
    hero: {
      badge: "Digital Studio · Colombia + USA",
      headlinePrefix: "Un solo equipo para que tu empresa se vea, ",
      headlineGradient: "venda y funcione mejor.",
      subheadline: "Marketing, tecnología e IA integrados para acelerar tu crecimiento en Colombia, USA y mercados globales.",
      whatsappCta: "Hablemos de tu proyecto",
      emailCta: "Quiero que me contacten"
    },
    international: {
      badge: "Presencia Internacional",
      title: "Desde Colombia y Estados Unidos, colaborando con empresas sin fronteras",
      description: "Combinamos talento creativo, visión de negocio y tecnología avanzada para trabajar de forma remota y sincronizada con compañías en múltiples industrias y husos horarios.",
      tag1: "Medellín ↔ Miami",
      tag2: "Remoto Global",
      tag3: "Equipos Bilingües"
    },
    painPoints: {
      badge: "El Reto",
      title: "Tu empresa está creciendo, pero lo digital sigue fragmentado",
      subtitle: "Cuando trabajas con proveedores aislados, pierdes velocidad, coherencia y oportunidades comerciales.",
      items: [
        {
          number: "01",
          title: "Presencia digital débil",
          desc: "Tu marca o sitio web actual no refleja la calidad, autoridad y estándar real de tus servicios."
        },
        {
          number: "02",
          title: "Contenido sin sistema",
          desc: "Sabes que necesitas producir y publicar con frecuencia, pero falta tiempo, dirección y consistencia."
        },
        {
          number: "03",
          title: "Oportunidades que se pierden",
          desc: "Llegan prospectos por campañas o web pero se enfrían por falta de seguimiento rápido y CRM organizado."
        },
        {
          number: "04",
          title: "IA sin dirección clara",
          desc: "Quieres aprovechar la inteligencia artificial pero necesitas casos de uso prácticos que realmente ahorren tiempo."
        },
        {
          number: "05",
          title: "Demasiados proveedores",
          desc: "Diseño por un lado, pauta por otro, desarrollo con un tercero y nadie se responsabiliza del resultado integral."
        }
      ]
    },
    ecosystem: {
      badge: "Un Solo Partner Digital",
      title: "No necesitas más proveedores aislados. Necesitas un ecosistema integrado.",
      description: "Reunimos estrategia, creatividad y desarrollo de software bajo un mismo estándar de ejecución.",
      cards: [
        {
          title: "Marketing & Growth",
          description: "Estrategia integral, Meta Ads, Google Ads y producción de contenido de alto impacto para captar demanda.",
          href: "/marketing",
          cta: "Explorar Marketing"
        },
        {
          title: "Desarrollo Web & CRO",
          description: "Sitios corporativos y landing pages ultrarrápidas creadas en Astro para generar máxima confianza y conversión.",
          href: "/web",
          cta: "Explorar Web"
        },
        {
          title: "IA + Automatización",
          description: "Agentes comerciales inteligentes, integraciones de WhatsApp y workflows para optimizar ventas y soporte.",
          href: "/ia-automatizacion",
          cta: "Explorar IA"
        },
        {
          title: "Productos Digitales",
          description: "Plataformas SaaS, MVPs, portales web y dashboards a medida cuando tu solución aún no existe en el mercado.",
          href: "/productos-digitales",
          cta: "Explorar Productos"
        }
      ]
    },
    process: {
      badge: "Cómo Trabajamos",
      title: "De la necesidad a la ejecución, sin fricción",
      steps: [
        {
          number: "01",
          name: "Entendemos",
          desc: "Analizamos tu modelo de negocio, objetivos comerciales, audiencia y cuellos de botella actuales."
        },
        {
          number: "02",
          name: "Proponemos",
          desc: "Diseñamos un plan de acción concreto combinando las capacidades y tecnologías adecuadas para tu meta."
        },
        {
          number: "03",
          name: "Creamos",
          desc: "Ejecutamos con excelencia técnica: campañas, contenido, desarrollo web o integraciones de IA."
        },
        {
          number: "04",
          name: "Optimizamos",
          desc: "Medimos métricas reales, analizamos el rendimiento y ajustamos para escalar resultados de forma continua."
        }
      ]
    },
    contactSection: {
      badge: "Da el Siguiente Paso",
      title: "Hagamos que tu empresa se vea, venda y funcione mejor",
      subtitle: "Conversemos hoy mismo sobre tus objetivos y cómo podemos colaborar como tu partner digital.",
      whatsappBtn: "Hablemos de tu proyecto",
      formTitle: "Solicita una llamada de diagnóstico"
    }
  },
  en: {
    meta: {
      title: "77 Studio | Marketing, Web Development, AI Automation & Digital Products",
      description: "Digital Studio + Creative Partner + Technology & AI Company. One single team to make your business look better, sell better, and run better (Colombia ↔ USA)."
    },
    hero: {
      badge: "Digital Studio · Colombia + USA",
      headlinePrefix: "One single team to make your business look, ",
      headlineGradient: "sell, and operate better.",
      subheadline: "Integrated marketing, software engineering, and AI automation to accelerate your growth in the US, Colombia, and global markets.",
      whatsappCta: "Let's discuss your project",
      emailCta: "Request a callback"
    },
    international: {
      badge: "International Presence",
      title: "Operating across Colombia and the United States, working with borderless companies",
      description: "We combine top-tier creative talent, strategic business insight, and modern engineering to collaborate seamlessly and remotely with companies worldwide.",
      tag1: "Medellin ↔ Miami",
      tag2: "Global Remote",
      tag3: "Bilingual Teams"
    },
    painPoints: {
      badge: "The Challenge",
      title: "Your company is growing, but your digital strategy remains fragmented",
      subtitle: "Working with disconnected vendors slows you down, dilutes your brand, and drains commercial opportunities.",
      items: [
        {
          number: "01",
          title: "Weak digital presence",
          desc: "Your current website and brand do not reflect the real quality, standard, and authority of your work."
        },
        {
          number: "02",
          title: "Content without a system",
          desc: "You know you must publish consistently, but lack the bandwidth, structure, and strategic creative direction."
        },
        {
          number: "03",
          title: "Lost sales opportunities",
          desc: "Campaign leads arrive but get cold due to lack of instant follow-up and automated CRM workflows."
        },
        {
          number: "04",
          title: "AI without practical direction",
          desc: "You want to leverage artificial intelligence but need battle-tested applications that save real operational hours."
        },
        {
          number: "05",
          title: "Vendor sprawl and chaos",
          desc: "Designers, media buyers, copywriters, and developers operating separately with nobody accountable for the bottom line."
        }
      ]
    },
    ecosystem: {
      badge: "One Single Digital Partner",
      title: "You don't need more isolated vendors. You need an integrated ecosystem.",
      description: "We bring together brand strategy, creative marketing, and high-performance software engineering under one roof.",
      cards: [
        {
          title: "Marketing & Paid Growth",
          description: "Full-funnel strategy, Meta Ads, Google Ads, and high-converting creative assets to drive customer demand.",
          href: "/en/marketing",
          cta: "Explore Marketing"
        },
        {
          title: "Web Development & CRO",
          description: "Ultra-fast corporate websites and conversion landing pages engineered with Astro for high performance.",
          href: "/en/web",
          cta: "Explore Web"
        },
        {
          title: "AI + Process Automation",
          description: "Intelligent commercial assistants, WhatsApp automations, and streamlined workflows to optimize sales operations.",
          href: "/en/ia-automatizacion",
          cta: "Explore AI"
        },
        {
          title: "Digital Products & SaaS",
          description: "Custom SaaS platforms, MVPs, client portals, and dashboards when your ideal software doesn't exist yet.",
          href: "/en/productos-digitales",
          cta: "Explore Products"
        }
      ]
    },
    process: {
      badge: "How We Work",
      title: "From initial challenge to execution, zero friction",
      steps: [
        {
          number: "01",
          name: "Discover",
          desc: "We analyze your business model, commercial goals, target audience, and current operational bottlenecks."
        },
        {
          number: "02",
          name: "Strategize",
          desc: "We design a comprehensive roadmap selecting the exact tools, creative assets, and tech stack required."
        },
        {
          number: "03",
          name: "Build & Ship",
          desc: "We deliver with technical excellence: ad campaigns, content, web platforms, and automated AI workflows."
        },
        {
          number: "04",
          name: "Optimize & Scale",
          desc: "We monitor core business KPIs, run continuous experiments, and refine to sustainably scale results."
        }
      ]
    },
    contactSection: {
      badge: "Take The Next Step",
      title: "Let's make your business look, sell, and run better",
      subtitle: "Let's talk today about your goals and how we can collaborate as your dedicated technology and growth partner.",
      whatsappBtn: "Let's discuss your project",
      formTitle: "Request a diagnostic consultation"
    }
  }
} as const;

export function getHomeTranslations(lang: SupportedLocale = 'es') {
  return homeTranslations[lang] || homeTranslations.es;
}
