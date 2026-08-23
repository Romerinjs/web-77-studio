export const WHATSAPP_CONFIG = {
  defaultPhone: '573000000000',
  messages: {
    home: "Hola 77 Studio 👋 Vi su página web y quisiera conversar sobre un proyecto para mi empresa.",
    marketing: "Hola 77 Studio 👋 Vi sus servicios de marketing y quisiera conocer cómo pueden ayudar a mi empresa con estrategia, Meta Ads y Google Ads.",
    web: "Hola 77 Studio 👋 Estoy interesado en desarrollar o mejorar la página web de mi empresa.",
    ia: "Hola 77 Studio 👋 Quiero explorar oportunidades para implementar IA o automatización en mi empresa.",
    productos: "Hola 77 Studio 👋 Tengo una idea para una herramienta o producto digital y quisiera conversar con ustedes.",
    nosotros: "Hola 77 Studio 👋 Vi su historia y equipo y quisiera conversar sobre un proyecto.",
    contacto: "Hola 77 Studio 👋 Quiero conversar con ustedes sobre un proyecto para mi empresa.",
  } as const
};

export type WhatsAppContext = keyof typeof WHATSAPP_CONFIG.messages;

/**
 * Genera la URL de WhatsApp con mensaje prellenado contextual
 */
export function getWhatsAppUrl(
  contextOrCustomMessage: WhatsAppContext | string = 'home',
  phone: string = import.meta.env.PUBLIC_WHATSAPP_NUMBER || WHATSAPP_CONFIG.defaultPhone
): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const message = contextOrCustomMessage in WHATSAPP_CONFIG.messages
    ? WHATSAPP_CONFIG.messages[contextOrCustomMessage as WhatsAppContext]
    : contextOrCustomMessage;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
