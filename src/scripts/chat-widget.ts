export interface QuickQuestion {
  icon: string;
  text: string;
  query: string;
}

export const QUICK_QUESTIONS: QuickQuestion[] = [
  {
    icon: "🚀",
    text: "¿Qué servicios ofrece 77 Studio?",
    query: "¿Cuáles son los 4 servicios principales que ofrece 77 Studio?",
  },
  {
    icon: "💼",
    text: "¿Cómo me ayudan a conseguir más clientes?",
    query: "¿Cómo me ayudan a captar clientes con Meta Ads y Google Ads?",
  },
  {
    icon: "⚡",
    text: "¿Cómo automatizan WhatsApp y CRM con IA?",
    query: "¿Cómo funciona la automatización comercial y agentes IA para WhatsApp y CRM?",
  },
  {
    icon: "💬",
    text: "¿Cómo agendar una llamada de diagnóstico?",
    query: "¿Cómo puedo agendar una llamada de diagnóstico con el equipo de 77 Studio?",
  },
];

type SuggestionItem = string | QuickQuestion;

interface ChatHistoryMessage {
  role: 'user' | 'bot';
  text: string;
  suggestions?: SuggestionItem[];
  isError?: boolean;
}

export function init77ChatWidget() {
  const widgetEl = document.getElementById('aiChatWidget');
  if (!widgetEl) return;

  // Prevenir dobles inicializaciones en la misma página
  if (widgetEl.dataset.initialized === 'true') return;
  widgetEl.dataset.initialized = 'true';

  const apiEndpoint = widgetEl.dataset.apiEndpoint || '/api/chat';
  const whatsappUrl = widgetEl.dataset.whatsappUrl || 'https://wa.me/573148490955';

  const chatTriggerBtn = document.getElementById('chatTriggerBtn');
  const chatWindow = document.getElementById('chatWindow');
  const chatMinimizeBtn = document.getElementById('chatMinimizeBtn');
  const chatBody = document.getElementById('chatBody');
  const chatFooterForm = document.getElementById('chatFooterForm');
  const chatInputText = document.getElementById('chatInputText') as HTMLInputElement | null;
  const chatSendBtn = document.getElementById('chatSendBtn') as HTMLButtonElement | null;
  const triggerBadgeCount = document.getElementById('triggerBadgeCount');

  // Elementos de Estado de Conexión
  const chatStatusDot = document.getElementById('chatStatusDot');
  const chatStatusText = document.getElementById('chatStatusText');
  const chatAvatarStatusDot = document.getElementById('chatAvatarStatusDot');
  const chatTriggerOnlineDot = document.getElementById('chatTriggerOnlineDot');

  const STORAGE_KEY_HISTORY = '77_chat_history_v2_sofia';
  const STORAGE_KEY_OPEN = '77_chat_is_open_v1';
  const STORAGE_KEY_BADGE = '77_chat_badge_hidden_v1';

  let messageHistory: ChatHistoryMessage[] = [];
  let isStreaming = false;

  // 1. Verificación de Conexión en Vivo (Health Check)
  async function checkLiveConnection() {
    try {
      const res = await fetch(apiEndpoint, { method: 'GET' });
      const data = await res.json().catch(() => ({ connected: false }));

      if (data && data.connected) {
        setConnectionState(true, 'Sofía Conectada');
      } else {
        setConnectionState(false, 'Sofía Desconectada (Offline)');
      }
    } catch {
      setConnectionState(false, 'Sofía Desconectada (Offline)');
    }
  }

  function setConnectionState(isOnline: boolean, label: string) {
    if (chatStatusText) chatStatusText.textContent = label;

    if (chatStatusDot) {
      chatStatusDot.className = isOnline ? 'status-indicator' : 'status-indicator offline';
    }
    const tooltipText = isOnline ? 'Conectado' : 'Offline';
    if (chatAvatarStatusDot) {
      chatAvatarStatusDot.className = isOnline ? 'avatar-status-dot' : 'avatar-status-dot offline';
      chatAvatarStatusDot.title = tooltipText;
      chatAvatarStatusDot.setAttribute('data-tooltip', tooltipText);
    }
    if (chatTriggerOnlineDot) {
      chatTriggerOnlineDot.className = isOnline ? 'trigger-online-dot' : 'trigger-online-dot offline';
      chatTriggerOnlineDot.title = tooltipText;
      chatTriggerOnlineDot.setAttribute('data-tooltip', tooltipText);
    }
  }

  // 2. Restaurar Estado desde sessionStorage
  function loadSavedState() {
    try {
      const savedHistory = sessionStorage.getItem(STORAGE_KEY_HISTORY);
      const isOpen = sessionStorage.getItem(STORAGE_KEY_OPEN) === 'true';
      const isBadgeHidden = sessionStorage.getItem(STORAGE_KEY_BADGE) === 'true';

      if (isBadgeHidden && triggerBadgeCount) {
        triggerBadgeCount.style.display = 'none';
      }

      if (savedHistory) {
        messageHistory = JSON.parse(savedHistory);
        renderFullHistory();
      } else {
        appendInitialWelcome();
      }

      if (isOpen && chatWindow) {
        chatWindow.classList.add('open');
      }
    } catch (err) {
      console.warn('No se pudo restaurar estado de sessionStorage:', err);
      appendInitialWelcome();
    }
  }

  function saveState() {
    try {
      sessionStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(messageHistory));
      if (chatWindow) {
        sessionStorage.setItem(STORAGE_KEY_OPEN, chatWindow.classList.contains('open') ? 'true' : 'false');
      }
    } catch {
      // Silencioso
    }
  }

  const lang = (widgetEl.dataset.lang || document.documentElement.lang || 'es') === 'en' ? 'en' : 'es';

  function appendInitialWelcome() {
    const isEn = lang === 'en';
    const welcomeText = isEn
      ? "Hello! 👋 I'm **Sofia**, commercial advisor at **77 Studio**.\n\nI can assist you in real time on how to grow your business with **Marketing, Web Development, AI Automation, and Digital Products**, or schedule a diagnostic call with our team.\n\nHow can I help you today?"
      : "¡Hola! 👋 Soy **Sofía**, asesora comercial de **77 Studio**.\n\nPuedo orientarte en tiempo real sobre cómo impulsar tu empresa con **Marketing, Desarrollo Web, Automatización con IA y Productos Digitales**, o coordinar una llamada de diagnóstico con nuestro equipo.\n\n¿En qué te puedo ayudar hoy?";
    
    const initialSuggestions: QuickQuestion[] = isEn
      ? [
          { icon: "🚀", text: "What services does 77 Studio provide?", query: "What are the 4 core services provided by 77 Studio?" },
          { icon: "💼", text: "How do you help acquire more clients?", query: "How do you help acquire clients with Meta Ads and Google Ads?" },
          { icon: "⚡", text: "How do you automate WhatsApp and CRM with AI?", query: "How does commercial automation and AI agents for WhatsApp and CRM work?" },
          { icon: "💬", text: "How can I book a diagnostic call?", query: "How can I schedule a diagnostic call with the 77 Studio team?" },
        ]
      : [...QUICK_QUESTIONS];

    messageHistory.push({ role: 'bot', text: welcomeText, suggestions: initialSuggestions });
    renderBotMessage(welcomeText, initialSuggestions);
    saveState();
  }

  // 3. Renderizado de Mensajes
  function renderFullHistory() {
    if (!chatBody) return;
    chatBody.innerHTML = '';
    messageHistory.forEach((msg) => {
      if (msg.role === 'user') {
        renderUserMessage(msg.text, false);
      } else if (msg.isError) {
        renderErrorCard(msg.text, false);
      } else {
        renderBotMessage(msg.text, msg.suggestions, false);
      }
    });
    smartScrollToBottom(true);
  }

  function renderUserMessage(text: string, save = true) {
    if (!chatBody) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg user';
    msgDiv.textContent = text;
    chatBody.appendChild(msgDiv);

    if (save) {
      messageHistory.push({ role: 'user', text });
      saveState();
    }
    smartScrollToBottom(true);
  }

  function renderBotMessage(rawText: string, suggestions?: SuggestionItem[], save = true) {
    if (!chatBody) return;
    const cleanText = sanitizeResponseText(rawText);
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg bot';
    msgDiv.innerHTML = formatMarkdown(cleanText);
    chatBody.appendChild(msgDiv);

    if (suggestions && suggestions.length > 0) {
      const suggBox = document.createElement('div');
      suggBox.className = 'inline-suggestions-box';
      suggBox.innerHTML = '<div class="inline-sugg-label">Preguntas frecuentes:</div>';

      const grid = document.createElement('div');
      grid.className = 'inline-suggestions-grid';

      suggestions.slice(0, 4).forEach((item) => {
        const isObj = typeof item === 'object' && item !== null;
        const icon = isObj && item.icon ? item.icon : '';
        const displayText = isObj ? item.text : item;
        const queryText = isObj && item.query ? item.query : (typeof item === 'string' ? item : displayText);

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'inline-suggestion-chip';
        btn.innerHTML = `
          <div class="chip-content">
            ${icon ? `<span class="chip-icon">${icon}</span>` : ''}
            <span class="chip-text">${displayText}</span>
          </div>
          <span class="chip-arrow">➔</span>
        `;
        btn.addEventListener('click', () => {
          handleSendMessage(queryText);
        });
        grid.appendChild(btn);
      });

      suggBox.appendChild(grid);
      chatBody.appendChild(suggBox);
    }

    if (save) {
      messageHistory.push({ role: 'bot', text: cleanText, suggestions });
      saveState();
    }

    smartScrollToBottom();
  }

  // Tarjeta de Error Real de Conexión (Sin respuestas simuladas)
  function renderErrorCard(errorDetails: string, save = true) {
    if (!chatBody) return;
    const errorCard = document.createElement('div');
    errorCard.className = 'chat-error-card';
    errorCard.innerHTML = `
      <div class="chat-error-header">
        <span>⚠️</span> Error de Conexión con Sofía
      </div>
      <div class="chat-error-text">
        No se pudo establecer conexión con el servidor de inteligencia artificial.
      </div>
      <div class="chat-error-code">${errorDetails}</div>
      <div class="chat-error-tip">
        <strong>Para desarrolladores / local:</strong> Ejecuta en la terminal de <code>eve-77-agent</code>:<br>
        <code>npx eve dev --port 3007 --no-ui</code>
      </div>
      <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="chat-fallback-btn">
        💬 Contactar por WhatsApp Directo
      </a>
    `;
    chatBody.appendChild(errorCard);

    if (save) {
      messageHistory.push({ role: 'bot', text: errorDetails, isError: true });
      saveState();
    }

    smartScrollToBottom(true);
  }

  // 4. Smart Auto-Scroll
  function smartScrollToBottom(force = false) {
    if (!chatBody) return;
    const threshold = 80;
    const isNearBottom = chatBody.scrollHeight - chatBody.scrollTop - chatBody.clientHeight <= threshold;

    if (force || isNearBottom) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }

  function showTypingIndicator() {
    if (!chatBody) return;
    removeTypingIndicator();
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-typing-dots';
    typingDiv.id = 'chatTypingIndicator';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    chatBody.appendChild(typingDiv);
    smartScrollToBottom(true);
  }

  function removeTypingIndicator() {
    const typingEl = document.getElementById('chatTypingIndicator');
    if (typingEl) typingEl.remove();
  }

  function sanitizeResponseText(text: string): string {
    if (!text) return '';
    return text
      .replace(/data:\s*\[DONE\]/gi, '')
      .replace(/\[DONE\]/gi, '')
      .trim();
  }

  // Formateador de Markdown
  function formatMarkdown(raw: string): string {
    if (!raw) return '';
    let text = sanitizeResponseText(raw);

    // 1. Links de WhatsApp -> Pill buttons
    text = text.replace(/\[([^\]]+)\]\((https?:\/\/(?:wa\.me|api\.whatsapp\.com)[^\)]+)\)/g, (match, linkText, href) => {
      const cleanLabel = linkText.replace(/^[💬\s]+/, '').trim() || 'WhatsApp';
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="chat-wa-pill">💬 ${cleanLabel}</a>`;
    });

    // 2. Links estándar
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, href) => {
      const isExternal = href.startsWith('http');
      const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${href}"${target} class="chat-link">${linkText}</a>`;
    });

    // 3. Encabezados
    text = text.replace(/^### (.*$)/gim, '<h4 class="chat-heading">$1</h4>');
    text = text.replace(/^## (.*$)/gim, '<h3 class="chat-heading-lg">$1</h3>');
    text = text.replace(/^# (.*$)/gim, '<h3 class="chat-heading-lg">$1</h3>');

    // 4. Negritas y Cursivas
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // 5. Código inline
    text = text.replace(/`([^`]+)`/g, '<code class="chat-code-inline">$1</code>');

    // 6. Separadores
    text = text.replace(/^---$/gim, '<hr class="chat-divider">');

    // 7. Listas con viñetas
    const lines = text.split('\n');
    let inList = false;
    const outputLines: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      const isListItem = line.startsWith('* ') || line.startsWith('- ') || line.startsWith('• ');

      if (isListItem) {
        if (!inList) {
          inList = true;
          outputLines.push('<ul class="chat-list">');
        }
        const itemContent = line.replace(/^[\*\-•]\s+/, '');
        outputLines.push(`<li class="chat-list-item">${itemContent}</li>`);
      } else {
        if (inList) {
          inList = false;
          outputLines.push('</ul>');
        }
        if (line.length > 0) {
          if (!line.startsWith('<h') && !line.startsWith('<hr') && !line.startsWith('<ul') && !line.startsWith('</ul')) {
            outputLines.push(`<p>${line}</p>`);
          } else {
            outputLines.push(line);
          }
        }
      }
    }

    if (inList) {
      outputLines.push('</ul>');
    }

    return outputLines.join('\n');
  }

  // 5. Envío y Conexión en Vivo con Eve Agent
  async function handleSendMessage(userText: string) {
    const text = userText.trim();
    if (!text || isStreaming) return;

    if (chatWindow && !chatWindow.classList.contains('open')) {
      chatWindow.classList.add('open');
      if (triggerBadgeCount) triggerBadgeCount.style.display = 'none';
      sessionStorage.setItem(STORAGE_KEY_BADGE, 'true');
    }

    renderUserMessage(text);

    if (chatInputText) chatInputText.value = '';
    if (chatSendBtn) chatSendBtn.disabled = true;

    showTypingIndicator();
    isStreaming = true;

    let botMsgDiv: HTMLElement | null = null;
    let botReply = '';

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000);

      let threadId = sessionStorage.getItem('77_chat_thread_id_v1');
      if (!threadId) {
        threadId = 'thread-web-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);
        sessionStorage.setItem('77_chat_thread_id_v1', threadId);
      }

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream, text/plain, application/json'
        },
        body: JSON.stringify({
          messages: messageHistory.map((m, idx) => ({
            id: `msg-${idx}`,
            role: m.role === 'user' ? 'user' : 'assistant',
            content: m.text,
            parts: [{ type: 'text', text: m.text }]
          })),
          threadId: threadId
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      removeTypingIndicator();

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: `HTTP ${response.status}: ${response.statusText}` }));
        throw new Error(errorData.error || errorData.details || `Error del servidor (${response.status})`);
      }

      setConnectionState(true, 'Sofía Conectada');

      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let done = false;

        while (!done) {
          const { value, done: streamDone } = await reader.read();
          if (streamDone) {
            done = true;
            break;
          }

          if (value) {
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed || trimmed === 'data: [DONE]' || trimmed === '[DONE]') continue;

              if (trimmed.startsWith('0:')) {
                try {
                  const parsed = JSON.parse(trimmed.slice(2));
                  if (parsed && parsed !== '[DONE]') botReply += parsed;
                } catch {
                  botReply += trimmed.slice(2);
                }
              } else if (trimmed.startsWith('data:')) {
                try {
                  const dataJson = JSON.parse(trimmed.slice(5).trim());
                  if (dataJson.delta && dataJson.delta !== '[DONE]') {
                    botReply += dataJson.delta;
                  } else if (dataJson.text && dataJson.text !== '[DONE]') {
                    botReply += dataJson.text;
                  }
                } catch {
                  const rawData = trimmed.slice(5).trim();
                  if (rawData && rawData !== '[DONE]') botReply += rawData;
                }
              } else {
                if (line !== '[DONE]') botReply += line;
              }

              if (botReply.trim().length > 0 && !botMsgDiv) {
                botMsgDiv = document.createElement('div');
                botMsgDiv.className = 'chat-msg bot';
                if (chatBody) chatBody.appendChild(botMsgDiv);
              }

              if (botMsgDiv) {
                botMsgDiv.innerHTML = formatMarkdown(botReply);
                smartScrollToBottom();
              }
            }
          }
        }
      } else {
        const textRes = await response.text();
        botReply = textRes;
      }

      const finalCleanReply = sanitizeResponseText(botReply);

      if (finalCleanReply.length > 0) {
        if (!botMsgDiv) {
          botMsgDiv = document.createElement('div');
          botMsgDiv.className = 'chat-msg bot';
          if (chatBody) chatBody.appendChild(botMsgDiv);
        }
        botMsgDiv.innerHTML = formatMarkdown(finalCleanReply);
        messageHistory.push({ role: 'bot', text: finalCleanReply });
        saveState();
      } else {
        throw new Error('La respuesta del agente llegó vacía.');
      }

    } catch (err: any) {
      removeTypingIndicator();
      if (botMsgDiv) botMsgDiv.remove();

      setConnectionState(false, 'Sofía Desconectada (Offline)');
      console.error('Error comunicando con Sofía:', err?.message || err);

      renderErrorCard(err?.message || 'No se pudo conectar con el servidor backend de Sofía');
    } finally {
      isStreaming = false;
      if (chatSendBtn) chatSendBtn.disabled = false;
      if (chatInputText) chatInputText.focus();
    }
  }

  // 6. Listeners de la Interfaz
  if (chatTriggerBtn && chatWindow) {
    chatTriggerBtn.addEventListener('click', () => {
      const isOpen = chatWindow.classList.toggle('open');
      if (isOpen) {
        if (triggerBadgeCount) triggerBadgeCount.style.display = 'none';
        sessionStorage.setItem(STORAGE_KEY_BADGE, 'true');
        checkLiveConnection();
        smartScrollToBottom(true);
        if (chatInputText) chatInputText.focus();
      }
      saveState();
    });
  }

  if (chatMinimizeBtn && chatWindow) {
    chatMinimizeBtn.addEventListener('click', () => {
      chatWindow.classList.remove('open');
      saveState();
    });
  }

  if (chatFooterForm) {
    chatFooterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (chatInputText && chatInputText.value) {
        handleSendMessage(chatInputText.value);
      }
    });
  }

  // 7. Bridge Global
  (window as any).open77Chat = (initialQuery?: string) => {
    if (chatWindow && !chatWindow.classList.contains('open')) {
      chatWindow.classList.add('open');
      if (triggerBadgeCount) triggerBadgeCount.style.display = 'none';
      sessionStorage.setItem(STORAGE_KEY_BADGE, 'true');
      checkLiveConnection();
    }
    saveState();
    if (initialQuery && initialQuery.trim()) {
      handleSendMessage(initialQuery);
    } else if (chatInputText) {
      chatInputText.focus();
    }
  };

  loadSavedState();
  checkLiveConnection();
}

// Inicializar en carga y en cambios de página
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', init77ChatWidget);
  document.addEventListener('astro:page-load', init77ChatWidget);
}
