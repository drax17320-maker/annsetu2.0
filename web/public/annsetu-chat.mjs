import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat@1.47.4/dist/chat.bundle.es.js";

const container = document.getElementById("annsetu-chat");

if (container?.dataset.webhookUrl) {
  createChat({
    target: "#annsetu-chat",
    webhookUrl: container.dataset.webhookUrl,
    loadPreviousSession: false,
    showWelcomeScreen: false,
    initialMessages: ["Hi! Ask me about donating surplus food, requesting food, or how pickups work."],
    i18n: {
      en: {
        title: "Ask AnnSetu",
        subtitle: "For general questions. Please leave out personal details.",
        footer: "",
        getStarted: "Start a chat",
        inputPlaceholder: "Ask a question…",
        closeButtonTooltip: "Close chat",
      },
    },
  });
}
