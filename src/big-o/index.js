
/**
 * Function charCount to count number of each character in a string
 @function charCount
 @param {string} str - input string to count characters from
 @returns {object} result - object containing key as characters in input string and their values as count of that character
 */
const charCount = (str) => {
  // create abject to be returned
  let result = {};
  // run loop over each character
  for (let char of str) {
    // convert char to lower case
    char = char.toLowerCase();
    // if the char is number/letter and is a key in the object, add 1 to value
    if (/[a-z0-9]/.test(char)) {
      if (result[char]) {
        result[char]++;
      } else {
        // if the char is number/letter and is NOT a key in the object, add it in the object and set value to 1
        result[char] = 1;
      }
    }
  }
  // return the object
  return result;
};

let str = 'Hello, hi!!!!';
console.log(str, charCount(str));