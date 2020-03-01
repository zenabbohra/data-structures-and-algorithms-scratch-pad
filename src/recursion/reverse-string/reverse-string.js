// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverseString('apple') === 'leppa'
//   reverseString('hello') === 'olleh'
//   reverseString('Greetings!') === '!sgniteerG'
/**
 * @function reverseString - that takes a string and reverses it
 * @params {string} str
 * @returns {string} reversed
 */
const reverseString = (str) => {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
};

module.exports = reverseString;