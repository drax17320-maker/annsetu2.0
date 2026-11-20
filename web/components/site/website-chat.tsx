import Script from "next/script";

import styles from "./website-chat.module.css";

const widgetStyles = "https://cdn.jsdelivr.net/npm/@n8n/chat@1.47.4/dist/style.css";

export function WebsiteChat() {
  const endpoint = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL?.trim();
  if (!endpoint) return null;

  try {
    const url = new URL(endpoint);
    if (url.protocol !== "https:" || url.username || url.password) return null;
  } catch {
    return null;
  }

  return (
    <>
      <link rel="stylesheet" href={widgetStyles} precedence="default" />
      <div id="annsetu-chat" className={styles.chat} data-webhook-url={endpoint} />
      <Script src="/annsetu-chat.mjs" type="module" strategy="afterInteractive" />
    </>
  );
}
