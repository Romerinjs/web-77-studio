import fs from 'node:fs';

const code = `import { createMemoryState } from "@chat-adapter/state-memory";
import { createWebAdapter } from "@chat-adapter/web";
import type { Message, Thread } from "chat";
import { chatSdkChannel } from "eve/channels/chat-sdk";
import { generateText, tool } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";
import { searchKnowledge, warmKnowledgeCache } from "../lib/knowledge.js";

// Pre-cargar base de conocimiento en RAM al iniciar
warmKnowledgeCache()
  .then(() => {
    console.log("✅ [EVE KNOWLEDGE] Base de conocimiento 77 Studio cargada e indexada en RAM.");
  })
  .catch((err) => {
    console.error("❌ [EVE KNOWLEDGE] Error pre-cargando base de conocimiento:", err);
  });

async function getApiKey(): Promise<string> {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
  if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) return process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (process.env.GOOGLE_AI_API_KEY) return process.env.GOOGLE_AI_API_KEY;

  try {
    const envContent = await readFile(path.resolve(process.cwd(), ".env"), "utf8");
    for (const line of envContent.split("\\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const [key, ...rest] = trimmed.split("=");
      if (key && rest.length > 0) {
        process.env[key.trim()] = rest.join("=").trim();
      }
    }
  } catch {
    // Continuar
  }

  return (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
    process.env.GOOGLE_AI_API_KEY ||
    ""
  );
}

export const { bot, channel } = chatSdkChannel({
  userName: "77 Studio Assistant",
  adapters: {
    web: createWebAdapter({
      userName: "77 Studio Assistant",
      getUser: async (_req: Request) => {
        return {
          id: "anonymous-web-user",
          name: "Visitante Web",
        };
      },
    }),
  },
  state: createMemoryState(),
});

let cachedInstructions: string | null = null;
async function getInstructions() {
  if (!cachedInstructions) {
    try {
      cachedInstructions = await readFile(path.resolve(process.cwd(), "agent", "instructions.md"), "utf8");
    } catch {
      cachedInstructions = "Eres Eve, el consultor oficial de inteligencia artificial y crecimiento de 77 Studio.";
    }
  }
  return cachedInstructions;
}

async function handleIncomingQuery(thread: Thread, message: Message) {
  const queryText = message.text || (message as any).rawText || "";
  if (!queryText.trim()) {
    console.log("⚠️ [WEB CHAT] Mensaje vacío recibido, ignorando.");
    return;
  }

  console.log(\`\\n💬 [WEB CHAT] Consulta recibida: "\${queryText}"\`);

  const apiKey = await getApiKey();
  const modelName = process.env.GEMINI_MODEL || "gemini-3.6-flash";
  const google = createGoogleGenerativeAI({ apiKey });
  const instructions = await getInstructions();

  let turnMessages: any[] = [{ role: "user", content: queryText }];
  let finalResponseText = "";

  try {
    for (let turn = 1; turn <= 4; turn++) {
      const result = await generateText({
        model: google(modelName),
        system: instructions,
        messages: turnMessages,
        tools: {
          search_knowledge: tool({
            description:
              "Busca información oficial en la base de conocimiento de 77 Studio sobre servicios, playbooks y datos de contacto.",
            inputSchema: z.object({
              query: z.string().default(""),
              slug: z.string().optional(),
              audience: z.enum(["nuevos-clientes", "empresas", "fundadores-startups"]).optional(),
            }),
            execute: async (args) => {
              console.log(\`🔍 [TOOL search_knowledge] Buscando: "\${args.query || args.slug || ''}"\`);
              return await searchKnowledge(args);
            },
          }),
        },
      });

      turnMessages = [...turnMessages, ...result.response.messages];

      if (result.text && result.finishReason !== "tool-calls") {
        finalResponseText = result.text;
        break;
      }
    }

    console.log(\`✅ [WEB CHAT] Respuesta generada (\${finalResponseText.length} caracteres)\`);
    await thread.post(finalResponseText || "En 77 Studio integramos Marketing, Desarrollo Web y Automatización con IA. ¿En qué área buscas potenciar tu negocio?");
  } catch (err: any) {
    console.error("❌ [WEB CHAT] Error generando respuesta:", err?.message || err);
    await thread.post("Disculpa, ocurrió un inconveniente consultando el modelo de IA. Por favor intenta de nuevo o escríbenos por WhatsApp.");
  }
}

// Escuchar en todos los eventos de mensajes para asegurar captura del 100% de consultas web
bot.onDirectMessage(handleIncomingQuery);
bot.onNewMention(handleIncomingQuery);
bot.onSubscribedMessage(handleIncomingQuery);
bot.onNewMessage(handleIncomingQuery);

console.log("🚀 [EVE CHANNEL] Canal Web montado y listo en /eve/v1/web.");

export default channel;
`;

fs.writeFileSync('D:/Usuarios/ACER/Documentos/88/eve-77-agent/agent/channels/web.ts', code, 'utf8');
console.log('web.ts updated successfully with all handlers.');
