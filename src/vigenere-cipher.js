const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  state;
  constructor(flag = true) {
    this.state = flag;
  }

  getConvert(strChar, codeChar, sign) {
    codeChar = Number(codeChar.charCodeAt());
    strChar = Number(strChar.charCodeAt());
    const convert = (strChar + (sign ? codeChar : -codeChar)) % 26;
    return convert < 0 ? convert + 26 : convert;
  }

  reverseStr(str) {
    return this.state ? str : str.split('').reverse().join('');
  }

  toUpper(str, code) {
    return [str.toUpperCase(), code.toUpperCase()];
  }

  getCharList(str, code, sign) {
    let count = 0;
    return str.split('').reduce((acc, next) => {
      if (!next.match(/[a-z]/i)) return acc + next;
      const codeChar = code[count % code.length];
      const convert = this.getConvert(next, codeChar, sign);
      count++;
      return acc + String.fromCharCode(convert + 65);
    }, '');
  }

  transformMessage(str, code, sign) {
    if (!str || !code) throw Error('Incorrect arguments!');
    const [message, key] = this.toUpper(str, code, sign);
    console.log(message, key);
    const answer = this.getCharList(message, key, sign);
    return answer;
  }

  encrypt(str, code) {
    return this.reverseStr(this.transformMessage(str, code, true));
  }

  decrypt(str, code) {
    return this.reverseStr(this.transformMessage(str, code, false));
  }
}

module.exports = {
  VigenereCipheringMachine,
};
