/**
 * Function that takes two strings and determines if one string is anagramString of the second string
 * @function anagramString
 * @params {string} str1
 * @params {string} str2
 * @returns {boolean}
 */
const anagram = (str1, str2) => {
  //check length of both the strings
  if (str1.length !== str2.length) {
    return  false;
  }
  // create an empty object to store count of str1 characters
  let ob = {};
  // run a loop over str1 to update object with a key for each character in str1 and value as count of that char in str1
  for (let char of str1) {
    ob[char] = (ob[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!ob[char]){ // check both key and value at the same time, if key doesn't exist or if key value is 0 it returns false
      return false;
    }
    ob[char]--;
  }
  return true;
};

let str1 = 'iceman';
let str2 = 'cinema';
console.log('Output of anagram function', anagram(str1, str2));