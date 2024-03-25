import { HST_TAX_RATE } from './common/lib';
import type { Product } from './common/types';

/**
 *
 * Imperative logic all over the place.
 *
 * Manually creates a loop, does explicit math, and worries
 * about rounding inside a function which has nothing
 * to do with rounding.
 */
const calculateTotal = (products: Product[]) => {
  let total = 0;

  for (const product of products) {
    total += product.price * (1 + HST_TAX_RATE);
  }

  total = Math.round(total * 100) / 100;

  return total;
};

const main = () => {
  const products = [{ price: 100.34 }, { price: 207.22 }];

  const totalPrice = calculateTotal(products);
  console.log({ totalPrice });
};

main();
