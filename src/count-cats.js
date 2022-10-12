const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
const isCat = (next, acc) => {
  return next && next === '^^' ? (acc += 1) : acc;
};

const findCat = (row) => {
  return row.reduce((acc, next) => {
    return isCat(next, acc);
  }, 0);
};

function countCats(matrix) {
  const result = matrix.reduce((count, list) => {
    const catsRow = Array.isArray(list) ? findCat(list) : isCat(list, count);
    return (count += catsRow);
  }, 0);
  console.log(result);
  return result;
}

module.exports = {
  countCats,
};
