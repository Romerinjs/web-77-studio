// src/lib/i18n/pages/marketing/index.ts
import type { SupportedLocale } from '../../ui';

export const marketingTranslations = {
  es: {
    meta: {
      title: "Marketing Digital, Meta Ads & Google Ads | 77 Studio",
      description: "Integramos estrategia, pauta digital, creatividad, contenido y automatización para captar clientes potenciales y generar demanda (Colombia ↔ USA)."
    },
    hero: {
      badge: "Performance & Creative Marketing",
      headline: "Marketing diseñado para ",
      headlineHighlight: "hacer crecer",
      headlineSuffix: " tu empresa.",
      subheadline: "Integramos estrategia, Meta Ads, Google Ads, creatividad, contenido, branding y automatización para ayudar a empresas a atraer atención calificada, despertar demanda y cerrar más oportunidades comerciales.",
      whatsappBtn: "Hablar por WhatsApp",
      emailBtn: "Solicitar Propuesta de Marketing"
    },
    capabilities: {
      badge: "Ecosistema de Crecimiento",
      title: "Todo lo que tu marca necesita para escalar comercialmente",
      subtitle: "Marketing, creatividad y estrategia dentro de un mismo equipo multidisciplinario.",
      items: [
        { title: "Estrategia de Crecimiento", desc: "Definición de audiencias, mensajes, canales clave y presupuestos optimizados." },
        { title: "Meta Ads (IG & FB)", desc: "Generación de demanda, captación de leads calificados y campañas de mensajes directos." },
        { title: "Google Ads (Search & Performance)", desc: "Captura de intención de compra de usuarios que ya están buscando activamente tus soluciones." },
        { title: "Branding e Identidad Visual", desc: "Construcción de una marca coherente, confiable y con alto estándar estético." },
        { title: "Producción de Contenido", desc: "Piezas visuales y narrativas para posicionar autoridad en redes y canales digitales." },
        { title: "Edición de Video de Alto Impacto", desc: "Reels, Shorts, hooks publicitarios y formatos adaptados a cada plataforma." },
        { title: "Creatividad Potenciada con IA", desc: "Generación de variaciones de creativos, imágenes, copys y testing continuo." },
        { title: "Automatización y CRM", desc: "Conexión instantánea de leads a WhatsApp y CRM para evitar fugas comerciales." },
        { title: "Email Marketing & Secuencias", desc: "Nutrición automatizada de prospectos y fidelización de clientes actuales." },
        { title: "Analítica & Medición de Conversión", desc: "Configuración de píxeles, API de conversiones y dashboards claros de retorno (ROAS)." }
      ]
    },
    problem: {
      badge: "El Problema Real",
      title: "Pautar no es simplemente encender anuncios",
      subtitle: "Invertir en publicidad sin un sistema integrado suele traducirse en gasto desaprovechado.",
      points: [
        "Leads poco calificados o curiosos que nunca responden.",
        "Costos por clic y adquisición que suben sin explicación.",
        "Anuncios que se saturan y dejan de convertir tras pocas semanas.",
        "Tráfico costoso enviado a páginas web lentas que no generan confianza.",
        "Falta de seguimiento comercial inmediato antes de que el prospecto se enfríe.",
        "Campañas de Meta y Google operando desconectadas del resto del negocio."
      ]
    },
    channels: {
      badge: "Sinergia de Canales",
      title: "Meta Ads genera demanda. Google Ads captura la intención.",
      subtitle: "Combinamos ambos motores según el ciclo de compra de tu cliente.",
      metaTitle: "Meta Ads — Descubrimiento Activo",
      metaDesc: "Presentamos tu oferta a audiencias afines en Instagram y Facebook para despertar interés inmediato y generar conversaciones.",
      googleTitle: "Google Ads — Búsqueda de Alta Intención",
      googleDesc: "Posicionamos tu empresa justo en el momento exacto en que un tomador de decisión busca soluciones como las tuyas."
    },
    process: {
      badge: "Metodología",
      title: "Nuestro proceso de marketing en 4 pasos",
      steps: [
        { step: "01", name: "Entendemos", desc: "Analizamos tu oferta, público objetivo, unit economics y metas comerciales." },
        { step: "02", name: "Diseñamos", desc: "Estructuramos el embudo, definimos mensajes, creamos los anuncios y preparamos las landing pages." },
        { step: "03", name: "Lanzamos", desc: "Configuramos el seguimiento técnico, activamos campañas y monitoreamos en tiempo real." },
        { step: "04", name: "Optimizamos", desc: "Evaluamos coste por lead (CPL), testeamos nuevos ángulos creativos y escalamos las campañas ganadoras." }
      ]
    }
  },
  en: {
    meta: {
      title: "Digital Marketing, Meta Ads & Google Ads | 77 Studio",
      description: "We integrate paid media strategy, Meta Ads, Google Ads, creative production, and marketing automation to acquire high-intent clients (Colombia ↔ USA)."
    },
    hero: {
      badge: "Performance & Creative Marketing",
      headline: "Marketing engineered to ",
      headlineHighlight: "grow and scale",
      headlineSuffix: " your business.",
      subheadline: "We integrate brand strategy, Meta Ads, Google Ads, high-converting creative assets, and CRM automation to help ambitious businesses capture qualified demand and close more sales.",
      whatsappBtn: "Chat on WhatsApp",
      emailBtn: "Request Marketing Proposal"
    },
    capabilities: {
      badge: "Growth Ecosystem",
      title: "Everything your company needs to commercially scale",
      subtitle: "Full-funnel marketing, creative strategy, and performance engineering in one cohesive team.",
      items: [
        { title: "Growth & Go-to-Market Strategy", desc: "Audience segmentation, value proposition refinement, channel selection, and budget modeling." },
        { title: "Meta Ads (IG & FB)", desc: "Demand generation, high-intent lead acquisition, and conversational WhatsApp/Messenger ads." },
        { title: "Google Ads (Search & Performance)", desc: "Capturing high-intent search traffic from decision-makers actively looking for your solutions." },
        { title: "Branding & Visual Identity", desc: "Building consistent, trustworthy, and premium brand identities that command authority." },
        { title: "Creative Content Production", desc: "High-value digital assets and messaging designed to establish market leadership." },
        { title: "High-Impact Video Editing", desc: "Shorts, Reels, high-converting video ad hooks, and multi-channel creative adaptations." },
        { title: "AI-Powered Creative Iteration", desc: "Rapid testing of ad variations, angles, copy, and AI-assisted imagery for higher ROAS." },
        { title: "CRM & Sales Automation", desc: "Instant lead routing to WhatsApp and CRM workflows to eliminate sales friction." },
        { title: "Email Marketing & Lead Nurturing", desc: "Automated drip sequences and targeted campaigns to convert prospects and retain customers." },
        { title: "Conversion Tracking & Analytics", desc: "CAPI setup, pixel hygiene, attribution modeling, and transparent live dashboards." }
      ]
    },
    problem: {
      badge: "The Real Problem",
      title: "Running ads isn't just about boosting posts",
      subtitle: "Spending ad budget without an integrated conversion system usually results in wasted capital.",
      points: [
        "Unqualified leads who never respond to sales follow-ups.",
        "Rising cost-per-click and customer acquisition costs with zero clarity.",
        "Ad creative fatigue causing campaigns to stall after just a few weeks.",
        "Expensive traffic directed to slow, confusing websites that fail to convert.",
        "Lack of immediate automated outreach, causing high-value leads to cool off.",
        "Meta and Google campaigns operating in silos, disconnected from business outcomes."
      ]
    },
    channels: {
      badge: "Channel Synergy",
      title: "Meta Ads builds demand. Google Ads captures high purchase intent.",
      subtitle: "We combine both channels according to your ideal client's buying journey.",
      metaTitle: "Meta Ads — Active Discovery",
      metaDesc: "We place your offer in front of targeted audiences on Instagram and Facebook to spark interest and generate high-intent inquiries.",
      googleTitle: "Google Ads — High-Intent Search",
      googleDesc: "We position your business directly in front of buyers at the exact moment they search for your specific services."
    },
    process: {
      badge: "Methodology",
      title: "Our 4-step performance marketing framework",
      steps: [
        { step: "01", name: "Discover", desc: "We evaluate your unit economics, offer structure, target market, and commercial objectives." },
        { step: "02", name: "Strategize & Build", desc: "We craft the funnel architecture, produce creative ad hooks, and optimize landing pages." },
        { step: "03", name: "Launch & Track", desc: "We deploy server-side tracking, launch campaigns, and monitor lead quality in real time." },
        { step: "04", name: "Iterate & Scale", desc: "We optimize cost per acquisition (CPA), test new creative iterations, and scale winning campaigns." }
      ]
    }
  }
} as const;

export function getMarketingTranslations(lang: SupportedLocale = 'es') {
  return marketingTranslations[lang] || marketingTranslations.es;
}
