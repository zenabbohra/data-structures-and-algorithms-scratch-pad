/**
 * @function isSubSequence - Function takes 2 strings and checks whether the characters in
 * the first string forms characters of sub-sequence in the second string, if yes,
 * then returns true else returns false
 * @params {string} str1
 * @params {string} str2
 * @returns {boolean}
 */
// Pseudocode
  // Declare a variable k equal to 0
  // Run a for loop on variable i from 0 to length of the first string
  // Run a while loop on k as long as k < second string length - 1
  // if anytime no match is found, return false else return true at the end of the for loop
const isSubSequence = (str1, str2) => {
  let k = 0;
  let found;
  for (let i = 0; i < str1.length; i++) {
    found = false;
    while (k < str2.length) {
      if (str1[i] === str2[k]) {
        found = true;
        k++;
        break;
      }
      k++;
    }
    if(!found) {
      return false;
    }
  }
  return true;
};

let str1 = 'abc';
let str2 = 'acb';
console.log(isSubSequence(str1, str2));