// Commission rates (as decimals: 0.30 = 30%)
export const COMMISSION_RATE_DIRECT = 0.30;
export const COMMISSION_RATE_OVERRIDE = 0.05;

// Payout constraints
export const PAYOUT_MINIMUM_CENTS = 10000; // $100
export const HOLD_PERIOD_DAYS = 7;
export const HOLD_PERIOD_MS = HOLD_PERIOD_DAYS * 24 * 60 * 60 * 1000;

// Cookie tracking
export const REFERRAL_COOKIE_TTL_DAYS = 30;
export const REFERRAL_COOKIE_TTL_MS = REFERRAL_COOKIE_TTL_DAYS * 24 * 60 * 60 * 1000;

// Fraud thresholds
export const FRAUD_SCORE_HOLD_THRESHOLD = 50; // % likelihood, triggers hold
export const FRAUD_IP_VELOCITY_THRESHOLD = 5; // max clicks per IP in 1 hour
export const FRAUD_UA_VELOCITY_THRESHOLD = 5; // max unique UAs per visitor in 1 hour

// Stripe
export const STRIPE_WEBHOOK_TIMEOUT_MS = 5 * 60 * 1000; // 5 min grace for out-of-order events
