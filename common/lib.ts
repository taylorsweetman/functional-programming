import type { Product } from './types';

export const HST_TAX_RATE = 0.13;

const calcPriceForTaxRate = (taxRate: number) => (product: Product) =>
  product.price * (1 + taxRate);

export const calcPriceAfterHST = calcPriceForTaxRate(HST_TAX_RATE);

const round = (precision: number) => (value: number) => {
  const factor = Math.pow(10, precision);
  return Math.round(value * factor) / factor;
};

export const roundToTwoDecimals = round(2);
