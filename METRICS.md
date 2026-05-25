# Metrics — SoftSell

Key metrics to track for the SoftSell landing page and marketplace, with targets and measurement methods.

---

## Landing Page Metrics

### Primary Conversion Metric
**Lead form submissions** — the main goal of the page is to get sellers to submit the contact form.

| Metric | Benchmark | Target |
|---|---|---|
| Page → Form submission CVR | 2–5% (industry avg) | 4% |
| Time on page | 45–90 seconds | >90 seconds |
| Bounce rate | 60–70% (industry avg) | <55% |
| Scroll depth to Contact section | — | >40% of visitors |

### Secondary Metrics
- CTA click-through rate (Hero "Sell My Licenses" button): target >8%
- Dark mode toggle usage: tracking as engagement signal
- Chat widget open rate: target >5% of visitors
- Chat widget conversation completion: target >60% of opens

---

## Funnel Metrics

```
Landing page visit
        ↓
Hero CTA click (~8%)
        ↓
Scroll to Contact form (~40%)
        ↓
Form started (~10%)
        ↓
Form submitted (~4% of total visits)
        ↓
Sales follow-up sent (within 24 hours)
        ↓
Valuation accepted (~30% of leads)
        ↓
Transaction completed (~70% of accepted)
```

**End-to-end conversion (visit → transaction):** ~0.8%

---

## Business Metrics (Post-Launch)

### Supply Side (Sellers)
| Metric | Month 1 | Month 3 | Month 6 |
|---|---|---|---|
| New seller signups | 20 | 80 | 200 |
| Listings created | 15 | 60 | 160 |
| Avg listing value | $1,200 | $1,400 | $1,800 |
| Seller satisfaction (NPS) | — | >40 | >50 |

### Demand Side (Buyers)
| Metric | Month 1 | Month 3 | Month 6 |
|---|---|---|---|
| Buyer registrations | 40 | 200 | 600 |
| Purchases completed | 10 | 50 | 150 |
| Avg purchase value | $800 | $1,000 | $1,200 |
| Buyer satisfaction (NPS) | — | >45 | >55 |

### Platform Health
| Metric | Month 1 | Month 3 | Month 6 |
|---|---|---|---|
| GMV | $8K | $70K | $180K |
| Revenue (13%) | $1K | $9.1K | $23.4K |
| Avg time to payout | <72hr | <48hr | <36hr |
| Dispute rate | — | <3% | <2% |
| License verification accuracy | 95% | 98% | 99% |

---

## How I'd Measure These

**Page metrics:** Google Analytics 4 (free, event-based)
- Set up conversion event on form submit
- Track scroll depth with scroll events
- Track CTA clicks as custom events

**Chat widget:** Log conversation starts and completions to a simple backend (Supabase free tier)

**Business metrics:** Airtable as lightweight CRM for early deals, migrate to proper CRM at 50+ monthly transactions

**NPS:** Simple Typeform survey sent 7 days after transaction completion

---

## North Star Metric

**Gross Merchandise Value (GMV)** — the total value of licenses transacted through the platform.

Why GMV and not revenue? Revenue is derived (13% of GMV). GMV measures actual marketplace health — liquidity, match rate, and deal size. If GMV is growing, everything else follows.
