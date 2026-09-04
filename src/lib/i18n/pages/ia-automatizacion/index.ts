// src/lib/i18n/pages/ia-automatizacion/index.ts
import type { SupportedLocale } from '../../ui';

export const iaTranslations = {
  es: {
    meta: {
      title: "IA + Automatización de Procesos y CRM | 77 Studio",
      description: "Menos tareas manuales, más tiempo para hacer crecer tu empresa. Diseñamos automatizaciones comerciales, agentes de IA e integraciones para ventas y soporte (Colombia ↔ USA)."
    },
    hero: {
      badge: "Inteligencia Artificial Aplicada",
      headline: "Haz que tu empresa funcione de forma ",
      headlineHighlight: "más ágil e inteligente.",
      subheadline: "Menos tareas manuales repetitivas. Más tiempo para escalar tu negocio. Diseñamos automatizaciones comerciales y soluciones de IA para optimizar seguimiento, ventas y atención al cliente.",
      whatsappBtn: "Explorar automatización con IA",
      emailBtn: "Solicitar evaluación de procesos"
    },
    solutions: {
      badge: "Soluciones Aplicadas",
      title: "Tecnología práctica para resolver cuellos de botella reales",
      subtitle: "No empezamos por la herramienta; empezamos por el proceso que consume tiempo en tu equipo.",
      items: [
        {
          title: "Automatización Comercial & CRM",
          desc: "Asignación automática de prospectos, recordatorios, seguimiento de cotizaciones y sincronización con HubSpot, Pipedrive o Notion."
        },
        {
          title: "Agentes & Asistentes de IA",
          desc: "Agentes conversacionales inteligentes entrenados con tu conocimiento corporativo para responder preguntas 24/7 en WhatsApp y Web."
        },
        {
          title: "Optimización de Procesos Internos",
          desc: "Conexión de formularios, generación automática de contratos/documentos, notificaciones a Slack y flujos sin fricción manual."
        },
        {
          title: "Extracción y Análisis de Información",
          desc: "Modelos de IA aplicados para clasificar solicitudes de clientes, resumir transcripciones y extraer datos estructurados."
        }
      ]
    },
    methodology: {
      badge: "Cómo lo Hacemos",
      title: "Un enfoque estructurado de 5 pasos",
      steps: [
        { step: "01", name: "Diagnóstico", desc: "Mapeamos el flujo actual e identificamos las tareas manuales y puntos de fuga de tiempo." },
        { step: "02", name: "Diseño del Flujo", desc: "Definimos la arquitectura del proceso automatizado y las integraciones necesarias." },
        { step: "03", name: "Implementación", desc: "Configuramos los conectores (APIs, Make, n8n, Python) y los agentes de IA contextuales." },
        { step: "04", name: "Validación y Pruebas", desc: "Probamos escenarios reales y refinamos respuestas para garantizar precisión y fiabilidad." },
        { step: "05", name: "Capacitación y Monitoreo", desc: "Entrenamos a tu equipo y monitoreamos el funcionamiento continuo del sistema." }
      ]
    }
  },
  en: {
    meta: {
      title: "AI + Process Automation & CRM Workflows | 77 Studio",
      description: "Less manual busywork, more focus on business growth. We design commercial automations, custom AI agents, and CRM integrations for sales and support (Colombia ↔ USA)."
    },
    hero: {
      badge: "Applied Business AI",
      headline: "Make your business operate ",
      headlineHighlight: "faster, smarter, and leaner.",
      subheadline: "Fewer repetitive manual tasks. More bandwidth to scale your operations. We build smart commercial automations and AI systems to streamline lead qualification, client follow-up, and operational workflows.",
      whatsappBtn: "Explore AI Automation",
      emailBtn: "Request Process Audit"
    },
    solutions: {
      badge: "Applied Solutions",
      title: "Practical technology to eliminate real business bottlenecks",
      subtitle: "We don't start with the tool; we start with the operational friction that is draining your team's time.",
      items: [
        {
          title: "Commercial Automation & CRM",
          desc: "Instant lead routing, automated follow-up sequences, deal pipeline management, and integrations with HubSpot, Pipedrive, or custom databases."
        },
        {
          title: "Intelligent AI Agents",
          desc: "Context-aware conversational AI assistants trained on your proprietary documentation to qualify leads and answer inquiries 24/7 on WhatsApp & Web."
        },
        {
          title: "Internal Workflow Optimization",
          desc: "Connecting intake forms, automated document generation, Slack/Teams notifications, and error-free multi-app synchronization."
        },
        {
          title: "Data Extraction & Text Analysis",
          desc: "Applied LLM workflows to categorize inbound client inquiries, summarize audio/video transcripts, and extract structured business insights."
        }
      ]
    },
    methodology: {
      badge: "How We Deliver",
      title: "A battle-tested 5-step implementation framework",
      steps: [
        { step: "01", name: "Process Audit", desc: "We map your current workflows to pinpoint manual tasks, delays, and lead drop-offs." },
        { step: "02", name: "Workflow Architecture", desc: "We blueprint the automated sequence, logic trees, and necessary API integrations." },
        { step: "03", name: "Engineering & Integration", desc: "We deploy secure connectors (APIs, Webhooks, n8n, Make, Python) and contextual AI models." },
        { step: "04", name: "QA & Edge-Case Testing", desc: "We test across real operational scenarios to ensure 100% accuracy, safety, and reliability." },
        { step: "05", name: "Handoff & Continuous Monitoring", desc: "We onboard your team with clear documentation and maintain ongoing system uptime." }
      ]
    }
  }
} as const;

export function getIaTranslations(lang: SupportedLocale = 'es') {
  return iaTranslations[lang] || iaTranslations.es;
}
