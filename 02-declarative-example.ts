import { calcPriceAfterHST, roundToTwoDecimals } from './common/lib';
import type { Product } from './common/types';
import { sum } from 'lodash/fp';

/**
 *
 * No imperative math or looping logic!
 *
 * Calls declarative functions to do things like rounding.
 */
const calculateTotal = (products: Product[]) => {
  const pricesAfterTax = products.map(calcPriceAfterHST);
  const grandTotal = sum(pricesAfterTax);
  const roundedTotal = roundToTwoDecimals(grandTotal);
  return roundedTotal;
};

// how this function would look as a composition of other functions
const calculateTotalComposition = (products: Product[]) =>
  roundToTwoDecimals(sum(products.map(calcPriceAfterHST)));

const main = () => {
  const products = [{ price: 100.34 }, { price: 207.22 }];

  const totalPriceWithoutComposition = calculateTotal(products);
  console.log({ totalPriceWithoutComposition });

  const totalPriceWithComposition = calculateTotalComposition(products);
  console.log({ totalPriceWithComposition });
};

main();
