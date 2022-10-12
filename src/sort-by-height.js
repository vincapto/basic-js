const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (arr.every((a) => a === -1)) return arr;
  const index = arr.reduce((acc, next, key) => {
    return next === -1 ? [...acc, key] : acc;
  }, []);
  const sort = arr.filter((a) => a !== -1).sort((a, b) => a - b);
  index.forEach((a) => sort.splice(a, 0, -1));
  return sort;
}
module.exports = {
  sortByHeight,
};
