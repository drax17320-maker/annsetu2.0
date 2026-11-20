# AnnSetu website chat

1. Import `annsetu-chat.n8n.json` into your n8n instance.
2. Open **Claude**, choose an available model, and attach an Anthropic credential stored in n8n. Set **Allowed Origins** on **Website Chat** to the exact origins where the v2 site runs. Add the preview or local origin for testing.
3. Publish the workflow and copy the Chat Trigger production URL. Set `NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL` in `web/.env.local` or on the v2 preview. This is a public endpoint, so put rate limiting on your n8n ingress before enabling public traffic.
4. Open the landing page and send “Who collects the food?” followed by “Do they deliver?” Check that the reply reflects AnnSetu's representative pickup model. Try a request to arrange pickup and check that the assistant refers you to the site's existing flow.

The widget is hidden until a valid HTTPS endpoint is configured. It answers general questions and directs visitors to existing AnnSetu flows. It has no account, request, or database access. Messages go to n8n and Claude, so review n8n execution retention before publishing.
