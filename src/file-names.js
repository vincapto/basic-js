const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const fine = names.reduce((acc, next, key) => {
    const count = acc.includes(next)
      ? names.slice(0, key + 1).filter((a) => a === next).length
      : 0;
    const result = count > 0 ? `${next}(${count > 1 ? count - 1 : 1})` : next;
    return [...acc, result];
  }, []);
  return fine;
}

module.exports = {
  renameFiles,
};
