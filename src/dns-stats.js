const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(str) {
  if (str.length === 0) return {};
  const list = str.map((item) =>
    item
      .split('.')
      .map((a) => `.${a}`)
      .reverse()
      .reduce((acc, next, key) => {
        const line = `${acc[key - 1]}${next}`;
        return acc.length !== 0 ? [...acc, line] : [next];
      }, [])
  );
  const keys = [...new Set(list.flat(1))];
  const dnsList = keys.reduce((acc, next) => {
    const count = list.reduce((c, b) => {
      return b.indexOf(next) >= 0 ? (c += 1) : c;
    }, 0);
    return { ...acc, [next]: count };
  }, {});
  return dnsList;
}
module.exports = {
  getDNSStats,
};
