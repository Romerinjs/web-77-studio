# Hoja de Ruta de Integración: Frontend Web Astro (`77.studio`) & Backend Eve Agent (`eve-77-agent`)

Esta guía técnica describe la arquitectura e integración completa entre el frontend del sitio web oficial de **77 Studio** (desarrollado en **Astro**) y el backend del agente de conocimiento autónomo **`eve-77-agent`** mediante el adaptador oficial de Chat SDK (`@chat-adapter/web`) y un cliente *Zero-Overhead* en Vanilla TypeScript.

---

## 1. Arquitectura de Conexión

```
   ┌─────────────────────────────────────────────────────────────────────────┐
   │                   Visitante en 77.studio (Astro Web)                    │
   │  • BaseLayout.astro -> <AIChatWidget whatsappContext={context} />       │
   │  • UI Glassmorphic Premium (Inspirada en index.html)                    │
   │  • Persistencia en sessionStorage (Historial + Estado abierto)          │
   │  • Smart Auto-Scroll (No interrumpe lectura de respuestas largas)       │
   │  • Fallback de Contingencia (Tarjeta directa con botón a WhatsApp)      │
   └────────────────────────────────────┬────────────────────────────────────┘
                                        │
                                        ▼ POST ${PUBLIC_EVE_API_URL} (Stream SSE)
   ┌─────────────────────────────────────────────────────────────────────────┐
   │               eve-77-agent Engine (chatSdkChannel :3007)                │
   │  • Web Channel: agent/channels/web.ts                                   │
   │  • Core Agent: agent/agent.ts (defineAgent + Gemini 3.6 Flash)          │
   │  • Tool: search_knowledge (Base de conocimiento en RAM de 77/*.mdx)     │
   │  • Streaming Response (Markdown enriquecido + Sugerencias interactivas) │
   └─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Configuración de Variables de Entorno

El frontend está completamente desacoplado del backend mediante la variable `PUBLIC_EVE_API_URL`.

### Entorno Local (`.env` en `web-77-studio`):
```env
PUBLIC_EVE_API_URL=http://localhost:3007/eve/v1/web
PUBLIC_WHATSAPP_NUMBER=573000000000
```

### Entorno de Producción (Vercel / Cloud):
```env
PUBLIC_EVE_API_URL=https://eve-77-agent.vercel.app/eve/v1/web
PUBLIC_WHATSAPP_NUMBER=573000000000
```

---

## 3. Estructura de Archivos en el Frontend (`web-77-studio`)

### 1. `src/styles/chat-widget.css`
Estilos encapsulados con glassmorphism oscuro (`rgba(14, 14, 19, 0.96)`, `backdrop-filter: blur(24px)`), animaciones cúbicas, badges, pulsaciones de estado online y diseño responsive móvil (`@media (max-width: 480px)`).

### 2. `src/scripts/chat-widget.ts`
Motor de cliente ligero (solo **~3.6 KB gzipped**, 0 KB de React):
- Conexión con `ReadableStream` para streaming en tiempo real.
- Limpieza y decodificación de chunks del protocolo Chat SDK / AI SDK.
- Persistencia automática de la conversación en `sessionStorage` para navegación entre páginas sin reinicio.
- Detección de scroll inteligente (*Smart Auto-Scroll*).
- Capa de resiliencia: Si el backend está en arranque en frío (*cold start*) o hay desconexión temporal, muestra una tarjeta interactiva para continuar por WhatsApp con mensaje contextual prellenado.
- Bridge global `window.open77Chat(query)` para disparar el chat desde Hero pills o CTAs de la página.

### 3. `src/components/chat/AIChatWidget.astro`
Componente Astro que renderiza la estructura HTML semántica del widget de chat e importa los estilos y el script cliente.

### 4. `src/layouts/BaseLayout.astro`
Montado en la raíz de la aplicación para disponibilidad global en todas las páginas:
```astro
---
import AIChatWidget from '@/components/chat/AIChatWidget.astro';
---

<!DOCTYPE html>
<html lang="es">
  <head>...</head>
  <body>
    ...
    <!-- Widget de Asistente IA Flotante -->
    <AIChatWidget whatsappContext={whatsappContext} />
  </body>
</html>
```

---

## 4. Guía de Ejecución Local

### Paso 1: Iniciar el Agente Backend (`eve-77-agent`)
En la terminal del agente (`D:\Usuarios\ACER\Documentos\88\eve-77-agent`):
```bash
npx eve dev --port 3007 --no-ui
```

### Paso 2: Iniciar el Frontend Web (`web-77-studio`)
En la terminal del sitio web (`c:\Users\ACER\Documents\OIDUTS-88\projects\web-77-studio`):
```bash
npm run dev
```

Abre `http://localhost:4321` en tu navegador para interactuar con el agente en vivo.
