module.exports = {
  yScale: 1.2,
  overview: `## Gmail AI triage mini

### How it works

This free workflow keeps your inbox sorted without reading every email yourself.

1. Every 5 minutes it picks up new inbox emails.
2. Newsletters (emails with a List-Unsubscribe header) are labelled without calling the AI, to save cost.
3. OpenAI classifies the rest as urgent, needs reply or FYI, with a one-line summary.
4. The matching Gmail label is added. Leave a label ID empty to skip that category.

### Setup steps

- [ ] Add Gmail and OpenAI credentials.
- [ ] Create Gmail labels (for example Urgent, Reply, FYI, Newsletter).
- [ ] Put their label IDs in **Config**. In any Gmail node, switch the label field to "From list" to see the IDs.

### Customization

Edit about_me in Config so the AI knows what matters to you. The full AI Executive Assistant adds reply drafts with Telegram approval, calendar booking, reminders and a morning brief: rasareka.gumroad.com/l/ai-executive-assistant-n8n`,
  groups: [
    { title: 'New email', nodes: ['New email (Gmail)'] },
    { title: '⚠️ Fill in Config', text: 'Your Gmail label IDs and a line about you.', nodes: ['Config'], color: 3 },
    { title: 'Skip newsletters', text: 'No AI cost for bulk mail.', nodes: ['Prepare emails', 'Needs AI?'] },
    { title: 'Classify with AI', text: 'Email text is treated as untrusted.', nodes: ['AI: classify email'] },
    { title: 'Add the label', nodes: ['Pick the label', 'Has a label?', 'Add Gmail label'] },
  ],
};
