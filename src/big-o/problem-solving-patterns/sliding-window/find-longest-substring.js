/**
 * @function findLongestSubString - that takes a string and returns the length
 * of the longest substring with all distinct characters
 * @params {string} str
 * @returns {number} maxLen
 */
// Pseudocode
  // - Declare a variable maxLen = 0
  // - Declare a variable i = 0
  // - Run while loop till i < str.length and store each char into an object
  //   as key and its value as 1
  // - If anytime key is already present,
  // then store i-1 in variable maxLen
  // initialise the object to {} and re-run the for loop with that i until length of string
  // after the while loop, return max(i, maxLen)
const findLongestSubString = (str) => {
    let i = 0;
    let maxLen = 0;
    let seen = {};
    let counter = 0;
    while (i < str.length) {
      if (seen[str[i]] || seen[str[i]] === 0) {
        i = seen[str[i]];
        seen = {};
        counter = 0;
      } else {
        seen[str[i]] = i;
        counter += 1;
      }
      maxLen = Math.max(counter, maxLen);
      i++;
    }
    return maxLen;
  };

let str = 'bbbb';
console.log(findLongestSubString(str));
// Examples
// 'string' should return 6
// '' should return 0
// 'a' character string should return 1
// if not a string should return undefined
//