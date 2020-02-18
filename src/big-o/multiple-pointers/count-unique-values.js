/**
 * Function that counts unique numbers in a sorted array
 * @function countUniqueValues
 * @params {array} arr
 * @returns {number} result
 */
const countUniqueValues = (arr) => {
  // create an object to store count of each element of the array
  let ob = {};
  // run loop over each element
  for (let e of arr) {
    ob[e] = (ob[e] || 0) + 1;
  }
  return Object.keys(ob).length;
};

let arr = [-1, -2, 2, 4];
console.log(countUniqueValues(arr));

/**
 * Understand the problem
 * Come up with concrete examples and edge cases
  * [] returns undefined
  * [1] returns 1
  * [-1, -2, 2, 4] returns 4
 * Break it down and write steps
 * Write Code and Refactor
 */

/*
* Function countUniqueValues has time complexity of O(n)
 */