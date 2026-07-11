// Branded type for cents (always integers, no floats)
export type Money = number & { readonly __brand: "Money" };

export const Money = {
  cents(value: number): Money {
    const cents = Math.round(value);
    if (!Number.isInteger(cents)) {
      throw new Error(`Money must be integer cents, got ${cents}`);
    }
    return cents as Money;
  },

  fromDollars(dollars: number): Money {
    return Money.cents(Math.round(dollars * 100));
  },

  toDollars(money: Money): number {
    return money / 100;
  },

  format(money: Money): string {
    return `$${(money / 100).toFixed(2)}`;
  },

  add(a: Money, b: Money): Money {
    return Money.cents(a + b);
  },

  subtract(a: Money, b: Money): Money {
    return Money.cents(a - b);
  },

  multiply(money: Money, rate: number): Money {
    return Money.cents(money * rate);
  },

  max(a: Money, b: Money): Money {
    return (a > b ? a : b) as Money;
  },

  min(a: Money, b: Money): Money {
    return (a < b ? a : b) as Money;
  },
};
