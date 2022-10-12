const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
const countChar = (str) => {
  return str.split('').reduce((acc, next) => {
    return { ...acc, [next]: acc[next] ? acc[next] + 1 : 1 };
  }, {});
};

function getCommonCharacterCount(str1, str2) {
  const count1 = countChar(str1);
  const count2 = countChar(str2);
  const result = Object.entries(count1).reduce((acc, [key, value]) => {
    return count2[key] ? (acc += Math.min(count2[key], value)) : acc;
  }, 0);
  return result;
}

module.exports = {
  getCommonCharacterCount,
};
