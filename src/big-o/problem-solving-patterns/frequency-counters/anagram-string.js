/**
 * Function that takes two strings and determines if one string is anagramString of the second string
* @function anagramString
* @params {string} str1
* @params {string} str2
* @returns {boolean}
*/
const anagramString = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  // run a loop over first string
  for (let e of str1) {
    // check each letter is present in second array, and find the index
    if(!str2.includes(e)) {
      return false;
    }
    // remove from second str element that has been matched with 1st string
    str2 = str2.replace(e, '');
  }
  return true;
};

let str1 = '';
let str2 = '';
console.log('Output of anagramString function', anagramString(str1, str2));

/**
 * Understand the problem
 * Come up with concrete examples
    * 'aaz', 'aza'
    * '',''
    * '!, ',' ,!'
    * '123','123'
    *  null, ''
 * Break it down and write the steps
 * Code and Refactor
 */