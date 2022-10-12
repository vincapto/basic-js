const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const result = members
    .reduce((acc, next) => {
      return typeof next === 'string'
        ? [...acc, next.trim()[0].toLocaleUpperCase()]
        : acc;
    }, [])
    .sort((a, b) => a.localeCompare(b))
    .join('');
  console.log(result);
  return result;
}

module.exports = {
  createDreamTeam,
};
