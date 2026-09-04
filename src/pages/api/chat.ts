// src/pages/api/chat.ts
import type { APIRoute } from 'astro';

export const prerender = false;

export const ALL: APIRoute = async ({ request }) => {
  const eveUrl = import.meta.env.PUBLIC_EVE_API_URL || 'http://localhost:3007/eve/v1/web';

  // Manejo de Preflight CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
      },
    });
  }

  // Healthcheck de conexión en vivo con Eve
  if (request.method === 'GET') {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      const ping = await fetch(eveUrl, {
        method: 'GET',
        signal: controller.signal,
      }).catch((e) => e);

      clearTimeout(timeoutId);

      const isConnected = ping && typeof ping.status === 'number';

      return new Response(
        JSON.stringify({
          status: isConnected ? 'online' : 'offline',
          connected: isConnected,
          endpoint: eveUrl,
          message: isConnected ? 'Conectado con el agente Sofía' : 'Servidor de Sofía no responde en este puerto',
        }),
        {
          status: isConnected ? 200 : 503,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    } catch (err: any) {
      return new Response(
        JSON.stringify({
          status: 'offline',
          connected: false,
          endpoint: eveUrl,
          error: err?.message || 'No se pudo conectar',
        }),
        {
          status: 503,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();

    const response = await fetch(eveUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream, text/plain, application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => '');
      return new Response(
        JSON.stringify({
          error: `Error en el backend de Sofía (${response.status})`,
          details: errText,
          endpoint: eveUrl,
        }),
        {
          status: response.status,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Retransmitir el stream de Sofía al navegador
    return new Response(response.body, {
      status: 200,
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err: any) {
    console.error('Error de conexión con Sofía en /api/chat:', err?.message || err);
    return new Response(
      JSON.stringify({
        error: 'No se pudo conectar con el agente Sofía',
        details: err?.message || 'Servidor backend no disponible en ' + eveUrl,
        endpoint: eveUrl,
      }),
      {
        status: 502,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
};
