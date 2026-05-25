# Dev Log — SoftSell

A day-by-day record of decisions, blockers, and progress.

---

## Day 1 — Planning & Setup

Read the assignment brief carefully. The key phrase was "entrepreneurial in nature" — this isn't just a coding test, it's about building something that could actually ship.

Decided on the concept: a software license resale marketplace. The problem is real — enterprises sit on millions in unused licenses every year, and the resale market is fragmented and untrustworthy.

Set up the Vite + React project. Chose plain CSS over Tailwind because CSS variables give cleaner theming control without adding a build dependency.

Font pairing decision: Syne (geometric, modern, high personality) for headings + DM Sans (warm, readable) for body. Wanted to avoid the Inter/Roboto defaults that every AI-generated site uses.

Color direction: terracotta/burnt orange accent on a warm off-white base. Feels trustworthy and distinct compared to the typical SaaS blue palette.

---

## Day 2 — Core Sections

Built Hero, HowItWorks, and WhyUs sections.

The Hero stat counters ($40M+, 70%, 48hr) were a deliberate choice — social proof above the fold converts better than feature lists.

Spent time on the card hover interactions. Subtle translateY(-4px) with a box-shadow transition gives a tactile feel without being distracting.

The "Why Us" grid uses auto-fit minmax so it collapses gracefully on mobile without any media queries. Glad I went with CSS Grid over Flexbox for this.

---

## Day 3 — Testimonials, Contact Form & Polish

Built the testimonials section with avatar initials instead of photos — cleaner for a fictional startup and avoids any image licensing issues.

The contact form took longer than expected. Wanted proper inline validation (not just browser defaults) — errors appear next to the relevant field on submit attempt. The success state shows a confirmation message instead of just resetting.

Added the light/dark mode toggle. The CSS variable approach meant I only had to define ~8 color overrides in the `[data-theme="dark"]` selector. Very clean.

---

## Day 4 — AI Chat Widget & Final Deployment

Added the Claude-powered chat widget. The key design decision was the system prompt — it explicitly restricts the assistant to SoftSell topics only, so it stays on brand and doesn't hallucinate unrelated answers.

Tested on mobile — the chat widget needed a max-height on the message area to prevent it from overflowing on small screens. Fixed with `maxHeight: 320px` and `overflowY: auto`.

Deployed to Netlify. Pushed everything to GitHub. Wrote documentation files.

---

## Challenges

- **Line ending warnings on Windows** — Git flagged LF → CRLF on push. Harmless but confusing. Added a note in case reviewers see it.
- **API key exposure** — For this demo the key is embedded client-side. In a real product this would sit behind a serverless function proxy.
- **Font loading flash** — Brief FOUT on first load. Would fix with `font-display: swap` and preloading in production.
