/**
 * @function spinWords - a function that takes in a string of one or more words, and
 * returns the same string, but with all five or more letter words reversed
 * @param {string} str - string containing only letter and spaces
 * @returns {string} spinnedString
 */
const spinWords = (str) => {
  return str.split(' ').map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  }).join(' ');
};
//PseudoCode
  // str.split(' ')
  // iterate over the array to check if any element.length >= 5
  // charArray = char.split('')
  // declare empty string reversed = ''
  // iterate over charArray to create a reversed += char + reversed;

// ==== Solution without using reverse() function of JS =====
const spinWords1 = (str) => {
  return str.split(' ').map(word => {
    return word.length >= 5 ? word.split('').reduce((reversed, char) => char + reversed,'') : word;
  }).join(' ');
};

// ===== Using regex ======
const spinWords2 = (str) => {
  return str.replace(/\w{5,}/g, (wordToReplace) => wordToReplace.split('').reverse().join(''));
};

let str = "Seriously this is the last one";
// console.log(str.match(/\w{5,}/g));
console.log(spinWords2(str));