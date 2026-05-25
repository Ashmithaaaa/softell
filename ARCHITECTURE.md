# Architecture — SoftSell

## Overview

SoftSell is a single-page React application built with Vite. There is no backend — all logic runs client-side. The AI chat widget calls the Anthropic API directly from the browser.

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | React 18 (Vite) | Fast dev experience, component model fits a sectioned landing page |
| Styling | Plain CSS with CSS variables | No build complexity, variables handle theming cleanly |
| Fonts | Google Fonts (Syne + DM Sans) | Syne for editorial headings, DM Sans for readable body |
| AI | Anthropic Claude API | Powers the chat widget with scoped system prompt |
| Hosting | Netlify | Free tier, instant deploy from zip, CDN-backed |

## Component Structure

```
App
├── Navbar          # Fixed nav with scroll detection and theme toggle
├── Hero            # Headline, CTA buttons, stat counters
├── HowItWorks      # 3-step process cards
├── WhyUs           # 6-reason feature grid
├── Testimonials    # 3 customer review cards
├── Contact         # Lead capture form with validation
├── Footer          # Brand mark and copyright
└── ChatWidget      # Floating AI assistant (Claude API)
```

## State Management

No external state library. React `useState` and `useEffect` handle:
- Theme (light/dark) — lifted to App, passed down to Navbar
- Form state and validation errors — local to Contact component
- Chat message history — local to ChatWidget component
- Scroll position for Navbar background — local to Navbar

## Theming

CSS custom properties on `:root` and `[data-theme="dark"]` handle all color switching. JavaScript sets `document.documentElement.setAttribute("data-theme", theme)` on toggle. No flash on load since default is light.

## AI Chat Widget

- Calls `https://api.anthropic.com/v1/messages` directly from the browser
- System prompt scopes the assistant to only answer SoftSell-related questions
- Full conversation history is passed on each request (stateless API)
- Graceful error handling if the API call fails

## Deployment

Static build output (`dist/`) deployed to Netlify. No server, no environment variables needed for the demo. In production the API key would move to a backend proxy.
