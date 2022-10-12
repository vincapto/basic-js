const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  arr = [];
  calcCount = 0;

  calculateDepth(array) {
    let count = 0;
    if (Array.isArray(array)) {
      array.forEach((a) => {
        count = Math.max(count, this.calculateDepth(a));
      });
      count++;
    }
    return count;
  }
}

module.exports = {
  DepthCalculator,
};
