import { calcPriceAfterHST, roundToTwoDecimals } from './common/lib';
import type { Product } from './common/types';
import { sum, map, pipe } from 'lodash/fp';

/**
 *
 * Even more declarative!
 *
 * This function never even explicitly stores variables.
 * It boils down the problem to just declaring what needs
 * to be done, without imperatively defining the implementation
 * details.
 */
const calculateTotal = (products: Product[]) =>
  pipe(map(calcPriceAfterHST), sum, roundToTwoDecimals)(products);

// you can also do this if you want
const calculateTotalImplicitPass = pipe(
  map(calcPriceAfterHST),
  sum,
  roundToTwoDecimals
);

const main = () => {
  const products = [{ price: 100.34 }, { price: 207.22 }];

  const totalPriceExplicitPass = calculateTotal(products);
  console.log({ totalPriceExplicitPass });

  const totalPriceImplicitPass = calculateTotalImplicitPass(products);
  console.log({ totalPriceImplicitPass });
};

main();
