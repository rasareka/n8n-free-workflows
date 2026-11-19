module.exports = {
  yScale: 1.2,
  overview: `## AI lead reply draft

### How it works

This free workflow helps freelancers and small agencies answer website leads fast, while you stay in control of what is sent.

1. Your contact form posts the lead (name, email, company, budget, message) to the webhook.
2. The lead is checked; bad requests get a 400 answer.
3. OpenAI scores the lead 0-100, writes a one-line summary and drafts a short reply in the lead's language.
4. The reply is saved in your **Gmail drafts** (never sent automatically), and the lead is logged to Google Sheets.
5. Spam gets no draft. If the AI fails, the lead is still logged as needs_review.

### Setup steps

- [ ] Add OpenAI, Gmail and Google Sheets credentials.
- [ ] Create a Google Sheet with a tab named **Leads** and columns: date, name, email, company, score, summary, status.
- [ ] Fill in **Config** and point your form to the webhook Production URL.

### Customization

Change the prompt in the AI node to match your tone. The full LeadPilot kit adds auto-replies, Telegram alerts for hot leads, follow-ups and a weekly report: rasareka.gumroad.com/l/leadpilot-n8n`,
  groups: [
    { title: 'Receive the lead', nodes: ['New lead (webhook)', 'Check the lead', 'Valid lead?', 'Reply: received', 'Reply: missing fields'] },
    { title: '⚠️ Fill in Config', text: 'Your business, what you sell, sign-off and sheet URL.', nodes: ['Config'], color: 3 },
    { title: 'Score and draft with AI', text: 'The form text is treated as untrusted.', nodes: ['AI: score and draft', 'Read the AI answer'] },
    { title: 'Save the draft and log it', text: 'Gmail draft only, then a row in your sheet.', nodes: ['Draft to save?', 'Save reply in Gmail drafts', 'Log lead to Google Sheets'] },
  ],
};
