export class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 400
  ) {
    super(message);
    this.name = "AppError";
  }
}

export const AffiliateErrors = {
  notFound: () => new AppError("AFFILIATE_NOT_FOUND", "Affiliate not found", 404),
  alreadyAffiliate: () => new AppError("ALREADY_AFFILIATE", "User is already an affiliate", 400),
  notApproved: () => new AppError("AFFILIATE_NOT_APPROVED", "Affiliate is not approved", 403),
  suspended: () => new AppError("AFFILIATE_SUSPENDED", "Affiliate has been suspended", 403),
  invalidCode: () => new AppError("INVALID_REFERRAL_CODE", "Invalid referral code", 400),
  codeExists: () => new AppError("CODE_EXISTS", "Referral code already exists", 400),
};

export const CommissionErrors = {
  alreadyCreated: () => new AppError("COMMISSION_EXISTS", "Commission already created for this event", 400),
  invalidAmount: () => new AppError("INVALID_AMOUNT", "Commission amount cannot be negative", 400),
  notAvailable: () => new AppError("COMMISSION_NOT_AVAILABLE", "Commission is not available for payout", 400),
};

export const PayoutErrors = {
  belowMinimum: () => new AppError("PAYOUT_BELOW_MINIMUM", `Payout must be at least $100`, 400),
  noAvailableFunds: () => new AppError("NO_AVAILABLE_FUNDS", "No available commissions for payout", 400),
  pending: () => new AppError("PAYOUT_PENDING", "Payout is already pending", 400),
  alreadyPaid: () => new AppError("PAYOUT_ALREADY_PAID", "Payout has already been paid", 400),
};

export const AuthErrors = {
  notAuthenticated: () => new AppError("NOT_AUTHENTICATED", "User is not authenticated", 401),
  notAdmin: () => new AppError("NOT_ADMIN", "User is not an admin", 403),
  forbidden: () => new AppError("FORBIDDEN", "Access denied", 403),
};

export const ValidationErrors = {
  invalidEmail: () => new AppError("INVALID_EMAIL", "Invalid email format", 400),
  missingField: (field: string) => new AppError("MISSING_FIELD", `Missing required field: ${field}`, 400),
};
