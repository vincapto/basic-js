const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  list: [],
  getLength() {
    return this.list.length;
  },
  addLink(value) {
    this.list.push(value);
    return this;
  },
  removeLink(position) {
    if (
      position > 0 &&
      position < this.list.length &&
      typeof position === 'number'
    ) {
      this.list.splice(position - 1, 1);
      return this;
    } else {
      this.list = [];
      throw Error(`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    this.list = this.list.reverse();
    return this;
  },
  finishChain() {
    const chain = this.list
      .map((item) => {
        return `( ${item} )`;
      })
      .join('~~');
    this.list = [];
    return chain;
  },
};
module.exports = {
  chainMaker,
};
