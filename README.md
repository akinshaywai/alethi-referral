# Alethi Referral & Affiliate Engine

A complete referral and affiliate platform for Alethi TLDR. Affiliates can generate unique referral links, track clicks and conversions, earn commissions, and request payouts.

## Features

- **Affiliate Application**: Public application flow with admin approval
- **Unique Referral Links**: QR-coded links with tracking and attribution
- **Commission Model**: 30% direct + 5% single-level override
- **Real-time Dashboard**: Live earnings, clicks, conversions via Convex
- **Stripe Integration**: Subscription tracking and webhook-based commission creation
- **Fraud Detection**: IP velocity, UA anomalies, self-referral blocking with human-in-the-loop
- **Payout Management**: $100 minimum with hold periods and audit trails
- **Admin Portal**: Application review, fraud signals, payout approvals
- **Analytics**: Real-time charts and funnel analysis

## Tech Stack

- **Frontend**: React 19, Vite, TypeScript, TailwindCSS, shadcn/ui
- **Backend**: Convex (reactive database)
- **Payments**: Stripe subscriptions + webhooks
- **Tools**: pnpm, Framer Motion, Recharts

## Quick Start

```bash
# Install dependencies
pnpm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your Stripe and Convex keys

# Run dev server (includes Convex backend)
pnpm dev

# Open http://localhost:5173
```

## Project Structure

```
convex/
  schema.ts           # 7-table database
  lib/
    constants.ts      # Business rules (rates, thresholds)
    money.ts          # Branded Money type for cents
    errors.ts         # Typed error definitions
  auth.ts             # Authentication & authorization guards
  affiliates.ts       # Affiliate application & management
  referrals.ts        # Click tracking & attribution
  commissions.ts      # Commission ledger & calculations
  payouts.ts          # Payout requests & approvals
  fraud.ts            # Fraud scoring
  http.ts             # Stripe webhook handler

src/
  components/         # React components
  pages/              # Page routes
  lib/                # Utilities & helpers
  hooks/              # Custom React hooks
  types.ts            # Shared types
  styles/index.css    # Tailwind + theming
```

## Development Workflow

1. **Sprint 1**: Foundation & Schema (in progress)
2. **Sprint 2**: Attribution & Referral Links
3. **Sprint 3**: Stripe & Commission Engine
4. **Sprint 4**: Affiliate Dashboard & Real-time
5. **Sprint 5**: Payouts, Fraud, Admin
6. **Sprint 6**: Assets & Launch

See the implementation plan for detailed build order and dependencies.

## Testing

- **Unit**: Core commission logic, money utilities, fraud scoring (TDD-first)
- **Integration**: Webhook handler, payout atomicity, attribution
- **E2E**: Full affiliate journey from signup to payout (Playwright)

```bash
# Run tests
pnpm test

# Run E2E tests
pnpm test:e2e
```

## Security

- All mutations validate server-side (never trust client)
- Admin routes protected via role checks
- Stripe webhooks verified with signature
- Commissions created idempotently via event ID
- No double-spend via atomic transaction locks
- Integer cents everywhere (no float rounding errors)

## Deployment

Ready for Vercel. Environment variables required:
- `VITE_CONVEX_URL`: Convex deployment URL
- `VITE_STRIPE_PUBLISHABLE_KEY`: Stripe public key
- `CONVEX_DEPLOYMENT`: Production deployment name

See `vercel.json` for deployment config.

---

Built with ❤️ for Alethi TLDR
