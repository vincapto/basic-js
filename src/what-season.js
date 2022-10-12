const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
const season = {
  winter: [11, 0, 1],
  spring: [2, 3, 4],
  summer: [5, 6, 7],
  autumn: [8, 9, 10],
};

const pickSeason = (month) => {
  switch (true) {
    case season.winter.includes(month):
      return 'winter';
    case season.spring.includes(month):
      return 'spring';
    case season.summer.includes(month):
      return 'summer';
    case season.autumn.includes(month):
      return 'autumn';
    default:
      throw new Error(`Invalid date!`);
  }
};

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (typeof date !== 'object' || date.hasOwnProperty('toString'))
    throw new Error(`Invalid date!`);
  const picked = pickSeason(new Date(date).getMonth());
  return picked;
}

module.exports = {
  getSeason,
};
