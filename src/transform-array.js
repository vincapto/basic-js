const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

const sequence = (key, index, arr, original, skip) => {
  if (skip.includes(index + 1) || skip.includes(index - 1)) return;
  switch (key) {
    case '--discard-next':
      original[index + 1] ? arr.splice(index + 1, 0, 'undefined') : 0;
      break;
    case '--discard-prev':
      original[index - 1] ? arr.splice(index - 1, 1) : 0;
      break;
    case '--double-next':
      original[index + 1] ? arr.splice(index, 0, original[index + 1]) : 0;
      break;
    case '--double-prev':
      original[index - 1] ? arr.splice(index, 0, original[index - 1]) : 0;
      break;

    default:
      break;
  }
};

const variant = [
  '--discard-next',
  '--discard-prev',
  '--double-next',
  '--double-prev',
];

function transform(arr) {
  if (!Array.isArray(arr))
    throw Error(`'arr' parameter must be an instance of the Array!`);
  if (arr.length === 0) return [];
  const transformed = [];
  let skip = [];
  let pass = false;
  arr.forEach((item, key) => {
    if (!variant.includes(item)) {
      if (!skip.includes(key)) transformed.push(item);
    } else if (variant.includes(item)) {
      if (item === '--discard-next') skip.push(key + 1);
      if (!pass) sequence(item, key, transformed, arr, skip);
    }
  });
  return transformed.filter((a) => a !== undefined);
}
module.exports = {
  transform,
};
