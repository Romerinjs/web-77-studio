// src/lib/i18n/ui.ts

export type SupportedLocale = 'es' | 'en';

export const LOCALES: SupportedLocale[] = ['es', 'en'];
export const DEFAULT_LOCALE: SupportedLocale = 'es';

export const uiTranslations = {
  es: {
    nav: {
      marketing: 'Marketing',
      web: 'Web',
      ia: 'IA + Automatización',
      productos: 'Productos Digitales',
      nosotros: 'Nosotros',
      contacto: 'Contacto',
      menuAria: 'Navegación principal',
      openMenu: 'Abrir menú de navegación'
    },
    header: {
      talkButton: 'Hablemos',
      talkWhatsapp: 'Hablar por WhatsApp'
    },
    footer: {
      tagline: 'Un solo equipo para hacer que tu empresa se vea mejor, venda mejor y funcione mejor.',
      servicesHeading: 'Servicios',
      companyHeading: 'Empresa',
      rights: 'Todos los derechos reservados.',
      presence: 'Medellín, Colombia · Miami, USA · Remoto Global',
      serviceLinks: [
        { label: 'Marketing Digital & Ads', href: '/marketing' },
        { label: 'Desarrollo Web Astro', href: '/web' },
        { label: 'IA + Automatización', href: '/ia-automatizacion' },
        { label: 'Productos Digitales (SaaS)', href: '/productos-digitales' },
      ],
      companyLinks: [
        { label: 'Acerca de Nosotros', href: '/nosotros' },
        { label: 'Casos de Negocio', href: '/#casos' },
        { label: 'Metodología en 4 Pasos', href: '/#proceso' },
        { label: 'Contacto & Diagnóstico', href: '/contacto' },
      ]
    },
    cta: {
      whatsappDefault: 'Hablar por WhatsApp',
      emailDefault: 'Quiero que me contacten',
      talkButton: 'Hablemos de tu proyecto',
      requestProposal: 'Solicitar Propuesta Comercial',
      mobileWhatsapp: 'WhatsApp',
      mobileContact: 'Contacto'
    },
    contactForm: {
      title: 'Cuéntanos sobre tu empresa',
      subtitle: 'Te responderemos en menos de 24 horas hábiles con una orientación inicial.',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Ej. Carlos Mendoza',
      companyLabel: 'Empresa / Proyecto',
      companyPlaceholder: 'Ej. Acme Corp',
      emailLabel: 'Correo corporativo',
      emailPlaceholder: 'carlos@empresa.com',
      phoneLabel: 'Teléfono / WhatsApp',
      phonePlaceholder: '+57 300 123 4567',
      serviceLabel: '¿Qué servicio o solución necesitas principalmente?',
      serviceSelectPlaceholder: 'Selecciona un área de interés...',
      servicesOptions: [
        { value: 'marketing', label: 'Marketing Digital & Meta/Google Ads' },
        { value: 'web', label: 'Desarrollo Web & Landing Pages (Astro)' },
        { value: 'ia-automatizacion', label: 'IA + Automatización de Procesos / CRM' },
        { value: 'productos-digitales', label: 'Productos Digitales / Software / SaaS' },
        { value: 'integral', label: 'Solución Integral (Varios Servicios)' }
      ],
      messageLabel: 'Describe brevemente tu objetivo, reto o presupuesto estimado',
      messagePlaceholder: 'Ej. Necesitamos renovar la web, captar más leads calificados con pauta y conectar WhatsApp a un CRM.',
      submitButton: 'Enviar Mensaje y Solicitar Diagnóstico',
      submittingButton: 'Enviando información...',
      successTitle: '¡Mensaje recibido con éxito!',
      successMessage: 'Gracias por ponerte en contacto. Nuestro equipo revisará tus requerimientos y te contactará en menos de 24 horas.',
      errorMessage: 'Hubo un inconveniente al enviar el formulario. Por favor contáctanos directamente por WhatsApp.',
      privacyNote: 'Tus datos están 100% protegidos. No enviamos spam ni compartimos tu información.'
    },
    chat: {
      triggerTitle: 'Chat con Sofía AI',
      connectedStatus: 'Conectada',
      botName: 'Sofía AI 77 Studio',
      verifiedBadge: 'Asesora Oficial Verificada',
      minimize: 'Minimizar',
      placeholder: 'Escribe tu consulta para Sofía...',
      sendAria: 'Enviar mensaje a Sofía',
      initialWelcome: '¡Hola! 👋 Soy **Sofía**, asesora comercial de **77 Studio**.\n\nPuedo orientarte en tiempo real sobre cómo impulsar tu empresa con **Marketing, Desarrollo Web, Automatización con IA y Productos Digitales**, o coordinar una llamada de diagnóstico con nuestro equipo.\n\n¿En qué te puedo ayudar hoy?',
      quickQuestions: [
        {
          icon: '🚀',
          text: '¿Qué servicios ofrece 77 Studio?',
          query: '¿Cuáles son los 4 servicios principales que ofrece 77 Studio?'
        },
        {
          icon: '💼',
          text: '¿Cómo me ayudan a conseguir más clientes?',
          query: '¿Cómo me ayudan a captar clientes con Meta Ads y Google Ads?'
        },
        {
          icon: '⚡',
          text: '¿Cómo automatizan WhatsApp y CRM con IA?',
          query: '¿Cómo funciona la automatización comercial y agentes IA para WhatsApp y CRM?'
        },
        {
          icon: '💬',
          text: '¿Cómo agendar una llamada de diagnóstico?',
          query: '¿Cómo puedo agendar una llamada de diagnóstico con el equipo de 77 Studio?'
        }
      ]
    }
  },
  en: {
    nav: {
      marketing: 'Marketing',
      web: 'Web',
      ia: 'AI + Automation',
      productos: 'Digital Products',
      nosotros: 'About Us',
      contacto: 'Contact',
      menuAria: 'Main navigation',
      openMenu: 'Open navigation menu'
    },
    header: {
      talkButton: "Let's Talk",
      talkWhatsapp: 'Chat on WhatsApp'
    },
    footer: {
      tagline: 'One single team to make your business look better, sell better, and run better.',
      servicesHeading: 'Services',
      companyHeading: 'Company',
      rights: 'All rights reserved.',
      presence: 'Medellin, Colombia · Miami, USA · Global Remote',
      serviceLinks: [
        { label: 'Digital Marketing & Ads', href: '/en/marketing' },
        { label: 'Astro Web Development', href: '/en/web' },
        { label: 'AI + Automation', href: '/en/ia-automatizacion' },
        { label: 'Digital Products (SaaS)', href: '/en/productos-digitales' },
      ],
      companyLinks: [
        { label: 'About Us', href: '/en/nosotros' },
        { label: 'Case Studies', href: '/en#casos' },
        { label: '4-Step Methodology', href: '/en#proceso' },
        { label: 'Contact & Diagnostic', href: '/en/contacto' },
      ]
    },
    cta: {
      whatsappDefault: 'Chat on WhatsApp',
      emailDefault: 'Request a Callback',
      talkButton: "Let's discuss your project",
      requestProposal: 'Request Commercial Proposal',
      mobileWhatsapp: 'WhatsApp',
      mobileContact: 'Contact'
    },
    contactForm: {
      title: 'Tell us about your business',
      subtitle: "We'll get back to you in less than 24 business hours with an initial assessment.",
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Michael Smith',
      companyLabel: 'Company / Project',
      companyPlaceholder: 'e.g. Acme Corp',
      emailLabel: 'Work Email',
      emailPlaceholder: 'michael@company.com',
      phoneLabel: 'Phone / WhatsApp',
      phonePlaceholder: '+1 305 123 4567',
      serviceLabel: 'What service or solution are you primarily looking for?',
      serviceSelectPlaceholder: 'Select an area of interest...',
      servicesOptions: [
        { value: 'marketing', label: 'Digital Marketing & Meta/Google Ads' },
        { value: 'web', label: 'Web Development & High-Converting Landing Pages' },
        { value: 'ia-automatizacion', label: 'AI + Process Automation / CRM' },
        { value: 'productos-digitales', label: 'Digital Products / Software / SaaS' },
        { value: 'integral', label: 'End-to-End Solution (Multiple Services)' }
      ],
      messageLabel: 'Briefly describe your main goal, challenge, or estimated budget',
      messagePlaceholder: 'e.g. We need to revamp our website, generate high-intent qualified leads, and integrate WhatsApp to our CRM.',
      submitButton: 'Send Message & Request Diagnostic',
      submittingButton: 'Sending information...',
      successTitle: 'Message received successfully!',
      successMessage: 'Thank you for reaching out. Our team will review your requirements and get in touch in less than 24 hours.',
      errorMessage: 'There was an issue sending the form. Please contact us directly via WhatsApp.',
      privacyNote: 'Your data is 100% secure. No spam, no shared information.'
    },
    chat: {
      triggerTitle: 'Chat with Sofia AI',
      connectedStatus: 'Online',
      botName: 'Sofia AI 77 Studio',
      verifiedBadge: 'Verified Official Advisor',
      minimize: 'Minimize',
      placeholder: 'Type your question for Sofia...',
      sendAria: 'Send message to Sofia',
      initialWelcome: "Hello! 👋 I'm **Sofia**, commercial advisor at **77 Studio**.\n\nI can assist you in real time on how to grow your business with **Marketing, Web Development, AI Automation, and Digital Products**, or schedule a diagnostic call with our team.\n\nHow can I help you today?",
      quickQuestions: [
        {
          icon: '🚀',
          text: 'What services does 77 Studio provide?',
          query: 'What are the 4 core services provided by 77 Studio?'
        },
        {
          icon: '💼',
          text: 'How do you help acquire more clients?',
          query: 'How do you help acquire clients with Meta Ads and Google Ads?'
        },
        {
          icon: '⚡',
          text: 'How do you automate WhatsApp and CRM with AI?',
          query: 'How does commercial automation and AI agents for WhatsApp and CRM work?'
        },
        {
          icon: '💬',
          text: 'How can I book a diagnostic call?',
          query: 'How can I schedule a diagnostic call with the 77 Studio team?'
        }
      ]
    }
  }
} as const;
