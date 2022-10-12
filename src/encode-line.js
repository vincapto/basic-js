const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return '';
  const array = str.split('');
  let count = 0;
  let element = str[0];
  let result = '';
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      count += 1;
    } else {
      result = `${result}${count}${element}`;
      count = 1;
      element = array[i];
    }
    if (i === array.length - 1) {
      result = `${result}${count}${element}`;
    }
  }

  return result.replaceAll('1', '');
}

module.exports = {
  encodeLine,
};
