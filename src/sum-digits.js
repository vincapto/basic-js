const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let flag = true;
  let sum = n;
  while (flag) {
    sum = sum
      .toString()
      .split('')
      .reduce((acc, next) => {
        return acc + Number(next);
      }, 0);
    flag = !(sum.toString().length === 1);
  }
  return sum;
}

module.exports = {
  getSumOfDigits,
};
