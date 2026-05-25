# SoftSell — Software License Resale Landing Page

A responsive single-page marketing website built for the Credex Web Development Internship assignment (Round 1).

## What I Built

SoftSell is a fictional startup that lets businesses sell unused software licenses and buy verified ones at a discount. The goal was to build a landing page that could actually ship — something clean, conversion-focused, and credible enough that a real user would trust it.

## Live Demo

[Live Demo](https://6a13e985847e25ca9e621bc9--stellar-profiterole-142503.netlify.app/)

## Features

- **Hero section** with a clear value proposition and social proof stats
- **How It Works** — 3-step process explaining the selling flow
- **Why Choose Us** — 6 feature highlights with icons
- **Customer Testimonials** — 3 reviews with roles and company names
- **Contact / Lead Form** — with frontend validation (name, email, license type required)
- **Light / Dark mode toggle** — persists across the session
- **AI Chat Widget** — powered by Claude API, answers questions about SoftSell in real time
- Fully responsive across mobile, tablet, and desktop

## Tech Stack

- React.js (Vite)
- Plain CSS with CSS variables for theming
- Claude API (Anthropic) for the chat widget
- Deployed on Netlify

## Design Decisions

I went with a warm, editorial aesthetic — terracotta accent color, Syne for headings, DM Sans for body text. I wanted it to feel trustworthy and modern without being another generic SaaS blue site. The dark mode uses the same variable system so nothing had to be rewritten.

For the AI chat widget, I kept it scoped — the system prompt restricts it to only answer SoftSell-related questions so it stays on brand and doesn't go off track.

The contact form validates on submit and shows inline errors rather than browser-default alerts. Small thing but it matters for UX.

## Getting Started

```bash
git clone https://github.com/Ashmithaaaa/softell
cd softsell
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Folder Structure

```
src/
  App.jsx       # All components (single page)
  index.css     # Global styles and CSS variables
  main.jsx      # Entry point
index.html      # SEO meta tags, font imports
```

## What I'd Add With More Time

- Smooth scroll animations (Framer Motion)
- A proper logo instead of text
- Backend for the contact form (email via Resend or similar)
- More testimonials with real avatars
- Analytics to track CTA clicks

---

Built by [Y.Ashmitha] as part of the Credex Web Dev Internship — Round 1, May 2026.
