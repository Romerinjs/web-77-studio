// src/utils/whatsapp.ts

export type SupportedLocale = 'es' | 'en';

export const WHATSAPP_CONFIG = {
  defaultPhone: '573148490955',
  messages: {
    es: {
      home: "Hola 77 Studio 👋 Vi su página web y quisiera conversar sobre un proyecto para mi empresa.",
      marketing: "Hola 77 Studio 👋 Vi sus servicios de marketing y quisiera conocer cómo pueden ayudar a mi empresa con estrategia, Meta Ads y Google Ads.",
      web: "Hola 77 Studio 👋 Estoy interesado en desarrollar o mejorar la página web de mi empresa.",
      ia: "Hola 77 Studio 👋 Quiero explorar oportunidades para implementar IA o automatización en mi empresa.",
      productos: "Hola 77 Studio 👋 Tengo una idea para una herramienta o producto digital y quisiera conversar con ustedes.",
      nosotros: "Hola 77 Studio 👋 Vi su historia y equipo y quisiera conversar sobre un proyecto.",
      contacto: "Hola 77 Studio 👋 Quiero conversar con ustedes sobre un proyecto para mi empresa.",
    },
    en: {
      home: "Hello 77 Studio 👋 I saw your website and would like to discuss a project for my business.",
      marketing: "Hello 77 Studio 👋 I saw your marketing services and would like to see how you can help my company with strategy, Meta Ads, and Google Ads.",
      web: "Hello 77 Studio 👋 I am interested in building or revamping my company's website.",
      ia: "Hello 77 Studio 👋 I want to explore opportunities to implement AI or automation in my company.",
      productos: "Hello 77 Studio 👋 I have an idea for a digital product or tool and would love to talk.",
      nosotros: "Hello 77 Studio 👋 I saw your story and team and would love to chat about a project.",
      contacto: "Hello 77 Studio 👋 I'd like to get in touch regarding a project for my business.",
    }
  } as const
};

export type WhatsAppContext = keyof typeof WHATSAPP_CONFIG.messages.es;

/**
 * Genera la URL de WhatsApp con mensaje prellenado contextual respetando el idioma
 */
export function getWhatsAppUrl(
  contextOrCustomMessage: WhatsAppContext | string = 'home',
  phone: string = import.meta.env.PUBLIC_WHATSAPP_NUMBER || WHATSAPP_CONFIG.defaultPhone,
  lang: SupportedLocale = 'es'
): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const langMessages = WHATSAPP_CONFIG.messages[lang] || WHATSAPP_CONFIG.messages.es;
  
  const message = contextOrCustomMessage in langMessages
    ? langMessages[contextOrCustomMessage as WhatsAppContext]
    : contextOrCustomMessage;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

