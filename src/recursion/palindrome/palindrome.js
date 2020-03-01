/**
 * @function palindrome - that takes a string and checks if reverse of that string matches the
 * original string
 * @params {string} str
 * @returns {boolean}
 */
const palindrome = (str) => {
  const reversedStr = reverse(str);
  return str === reversedStr;
};

const reverse = (str) => {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
};

module.exports = palindrome;
//PseudoCode
  // Reverses the string and checks if original string === reversed string

