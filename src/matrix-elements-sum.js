const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const nullCell = [];
  let sum = 0;
  matrix.forEach((row, key) => {
    row.forEach((col, index) => {
      if (!nullCell.includes(index))
        col != 0 ? (sum += col) : nullCell.push(index);
    });
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
