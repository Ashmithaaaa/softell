# Reflection — SoftSell

## What Went Well

**The theming system.** Using CSS custom properties from the start made dark mode almost free. No duplication, no third-party library, just a single attribute swap on the root element. I'd use this pattern again.

**Scoping the AI widget.** The system prompt decision was the right call. A chat widget that answers anything is a liability — one that stays on topic is a feature. Restricting it to SoftSell-specific knowledge made it feel like a real product assistant rather than a generic chatbot bolted on.

**Component design.** Keeping all components in one file (App.jsx) was intentional for a project this size. No unnecessary abstraction. Everything is readable in one scroll.

**The aesthetic direction.** The terracotta + warm off-white palette stood out when I previewed it against typical SaaS landing pages. Making a deliberate, opinionated visual choice rather than defaulting to blues and grays was worth the extra thought.

---

## What I'd Do Differently

**Move the API call server-side immediately.** Even for a demo, having the API key in client-side code is bad practice. A simple Netlify Function or Vercel Edge Function would proxy the request and keep the key hidden.

**Add animations.** The page feels slightly static. Framer Motion's `whileInView` would add scroll-triggered reveals that make the sections feel alive as you scroll down. I'd add this in a second pass.

**Real form submission.** The contact form currently just shows a success state. In a real product this would POST to a serverless function that sends an email via Resend or saves to a database. That's the next engineering step.

**User testing earlier.** I made assumptions about what information a seller needs in the hero section. Real user interviews would have validated whether "48hr payout" or "70% savings" is the more compelling hook.

---

## What I Learned

Building for conversion is different from building for portfolio. Every section decision — what goes in the hero, how many steps in the process, what the CTA says — has a business rationale, not just a technical one. That shift in thinking was the most valuable part of this assignment.

---

## Honest Assessment

This is a strong V1. It covers all required sections, adds meaningful bonuses (dark mode, AI chat, SEO), and has a considered visual identity. The gaps are real but known — API security, animations, and actual backend integration. Given 7 days and a production mandate, those would be the next sprint.
