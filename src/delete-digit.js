const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  const numberList = number.toString().split('');
  const list = [];
  for (let i = 0; i < numberList.length; i++) {
    const element = Number(numberList.filter((_, key) => key !== i).join(''));
    list.push(element);
  }
  const result = Math.max(...list);
  return result;
}

module.exports = {
  deleteDigit,
};
