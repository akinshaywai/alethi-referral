import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    authId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    role: v.union(v.literal("user"), v.literal("affiliate"), v.literal("admin")),
    stripeCustomerId: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_authId", ["authId"])
    .index("by_email", ["email"]),

  affiliates: defineTable({
    userId: v.id("users"),
    code: v.string(), // unique referral code
    status: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("rejected"),
      v.literal("suspended")
    ),
    parentAffiliateId: v.optional(v.id("affiliates")), // for override commission
    balanceCents: v.number(), // current available balance
    lifetimeEarnedCents: v.number(), // total ever earned
    country: v.optional(v.string()),
    paymentMethod: v.optional(v.string()),
    paymentEmail: v.optional(v.string()),
    socialMedia: v.optional(v.string()),
    appliedAt: v.number(),
    reviewedAt: v.optional(v.number()),
    reviewedBy: v.optional(v.id("users")),
    createdAt: v.number(),
  })
    .index("by_code", ["code"])
    .index("by_status", ["status"])
    .index("by_userId", ["userId"]),

  referralClicks: defineTable({
    affiliateId: v.id("affiliates"),
    code: v.string(), // referral code clicked
    visitorId: v.string(), // anonymous visitor ID
    ipHash: v.string(), // hashed IP for fraud detection
    userAgentHash: v.string(), // hashed user agent
    landingPath: v.optional(v.string()), // where they came from
    fraudScore: v.number(), // 0-100, flags on click
    clickedAt: v.number(),
  })
    .index("by_affiliate", ["affiliateId"])
    .index("by_ipHash_time", ["ipHash", "clickedAt"]),

  referrals: defineTable({
    affiliateId: v.id("affiliates"),
    referredUserId: v.id("users"),
    firstClickId: v.optional(v.id("referralClicks")),
    attributedAt: v.number(),
    status: v.union(v.literal("pending"), v.literal("converted")),
  })
    .index("by_referredUser", ["referredUserId"])
    .index("by_affiliate", ["affiliateId"]),

  subscriptions: defineTable({
    userId: v.id("users"),
    stripeSubscriptionId: v.string(), // unique in Stripe
    stripeCustomerId: v.string(),
    status: v.string(), // "active", "past_due", "canceled", etc.
    priceCents: v.number(),
    tier: v.string(), // "basic", "pro", etc.
    currentPeriodEnd: v.number(),
    cancelledAt: v.optional(v.number()),
    updatedAt: v.number(),
  })
    .index("by_stripeSubscriptionId", ["stripeSubscriptionId"])
    .index("by_userId", ["userId"]),

  commissions: defineTable({
    affiliateId: v.id("affiliates"),
    sourceSubscriptionId: v.id("subscriptions"),
    customerId: v.id("users"),
    type: v.union(v.literal("direct"), v.literal("override")),
    percentageRate: v.number(), // 0.30 or 0.05
    amountCents: v.number(),
    status: v.union(
      v.literal("pending"),
      v.literal("held"),
      v.literal("available"),
      v.literal("paid"),
      v.literal("clawed_back")
    ),
    stripeEventId: v.string(), // for idempotency
    payoutId: v.optional(v.id("payouts")),
    createdAt: v.number(),
    heldUntil: v.optional(v.number()), // hold period for fraud review
  })
    .index("by_affiliate_status", ["affiliateId", "status"])
    .index("by_stripeEventId", ["stripeEventId"]) // idempotency
    .index("by_payout", ["payoutId"]),

  payouts: defineTable({
    affiliateId: v.id("affiliates"),
    amountCents: v.number(),
    status: v.union(
      v.literal("requested"),
      v.literal("approved"),
      v.literal("paid"),
      v.literal("rejected"),
      v.literal("failed")
    ),
    commissionIds: v.array(v.id("commissions")),
    requestedAt: v.number(),
    approvedAt: v.optional(v.number()),
    approvedBy: v.optional(v.id("users")),
    paidAt: v.optional(v.number()),
    externalRef: v.optional(v.string()), // bank transfer ref
    failureReason: v.optional(v.string()),
  })
    .index("by_affiliate", ["affiliateId"])
    .index("by_status", ["status"]),

  assets: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    category: v.union(
      v.literal("logo"),
      v.literal("banner"),
      v.literal("social"),
      v.literal("email"),
      v.literal("video"),
      v.literal("guide")
    ),
    url: v.string(), // S3 or similar
    downloadCount: v.number(),
    createdAt: v.number(),
  })
    .index("by_category", ["category"]),
});
