# Unit Economics — SoftSell

## Core Transaction Model

SoftSell makes money by taking a percentage of each software license transaction. Both sides pay a fee.

| Fee Type | Rate |
|---|---|
| Seller fee | 8% of sale price |
| Buyer fee | 5% of purchase price |
| Blended take rate | ~13% of GMV |

---

## Unit Economics Per Transaction

### Example: 10 Adobe Creative Cloud Licenses

| Item | Amount |
|---|---|
| License retail value | $5,990 ($599 × 10) |
| Seller asking price | $1,800 ($180 each) |
| Buyer pays | $1,890 ($1,800 + 5%) |
| Seller receives | $1,656 ($1,800 − 8%) |
| SoftSell gross revenue | $234 |
| Payment processing (2.9% + $0.30) | ~$55 |
| Verification cost (manual, estimate) | $20 |
| **SoftSell net margin per deal** | **~$159** |

---

## Cost Structure

### Variable Costs (per transaction)
- Payment processing: ~2.9% of transaction value
- License verification: $15–$30 (manual review) → $2–$5 (automated at scale)
- Customer support: ~$8 average per transaction
- **Total variable cost: ~5–6% of GMV**

### Fixed Costs (Monthly, early stage)
| Cost | Amount |
|---|---|
| Hosting (Netlify/Vercel) | $20 |
| Claude API (chat widget) | ~$50 |
| Domain + email | $15 |
| Founder salary (deferred) | $0 |
| **Total fixed** | **~$85/month** |

---

## Break-Even Analysis

At 13% take rate and ~6% variable costs, net margin is ~7% of GMV.

Break-even fixed costs at $85/month:
- Required GMV: $85 / 0.07 = **$1,214/month**
- That's roughly **2 average transactions per month**

This is an extremely low break-even — the model is viable from day one at small scale.

---

## Path to $1M ARR

| GMV/month | Revenue (13%) | Annual Revenue |
|---|---|---|
| $640K | $83K | $1M |

To hit $640K GMV/month:
- 533 transactions at $1,200 average, or
- 107 large enterprise deals at $6,000 average

Both are realistic within 18 months with focused GTM execution.

---

## Sensitivity Analysis

| Take Rate | GMV Needed for $1M ARR |
|---|---|
| 10% | $833K/month |
| 13% | $641K/month |
| 15% | $556K/month |

Higher take rate is possible as the platform builds trust and network effects. Usedsoft charges 15–20% and still wins deals because of the trust infrastructure.
