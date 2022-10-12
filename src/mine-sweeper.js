const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const field = [];
  for (let x = 0; x < matrix.length; x++) {
    const arr = [];
    for (let y = 0; y < matrix[x].length; y++) {
      let sum = 0;
      if (matrix[x][y]) {
        sum++;
      } else {
        if (x - 1 >= 0) {
          matrix[x - 1][y] ? sum++ : 0;
        }
        if (x + 1 < matrix.length) {
          matrix[x + 1][y] ? sum++ : 0;
        }
        if (y - 1 >= 0) {
          matrix[x][y - 1] ? sum++ : 0;
        }
        if (y + 1 < matrix.length) {
          matrix[x][y + 1] ? sum++ : 0;
        }
        if (y + 1 < matrix.length && x + 1 < matrix.length) {
          matrix[x + 1][y + 1] ? sum++ : 0;
        }
        if (x - 1 >= 0 && y - 1 >= 0) {
          matrix[x - 1][y - 1] ? sum++ : 0;
        }
        if (y - 1 >= 0 && x + 1 < matrix.length) {
          matrix[x + 1][y - 1] ? sum++ : 0;
        }
        if (x - 1 >= 0 && y + 1 < matrix.length) {
          matrix[x - 1][y + 1] ? sum++ : 0;
        }
      }
      arr.push(sum);
    }
    field.push(arr);
  }
  return field;
}

module.exports = {
  minesweeper,
};
