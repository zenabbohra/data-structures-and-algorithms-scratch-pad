/**
 * @function areThereDuplicates - function takes variable number of arguments and returns true if there
 * are any duplicates in the input arguments
 * @params {any}
 * @returns {boolean}
 */
/** Pseudocode for the function
 * - convert input to an iterable datatype for eg - string
 * - Declare a variable i as the first char position of string
 * - Declare a variable k starting from i and goes till the end of the string
 * - Run a for loop until i < k to check if any element/ char is repeated in the string
 * - if yes, return true else false
 */
const areThereDuplicates = (...data) => {
  let str = '';
  for (let e of data) {
    str = str.concat(e.toString());
  }
  for (let i = 0; i < str.length; i++) {
    for (let k = i + 1; k < str.length; k++) {
      if (str[i] === str[k]) return true;
    }
  }
  return false;
};

// let data = '134';
console.log(areThereDuplicates('a','b','c','a'));