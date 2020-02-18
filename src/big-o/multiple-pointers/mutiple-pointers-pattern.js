/**
 * Function that takes a sorted array of integers and returns the first pair where sum of values is 0
 * @function sumZero
 * @params {array} arr
 * @returns {array} result
 */
const sumZero1 = (arr) => {
  // run a loop for each element of array
  for (let i = 0; i < arr.length; i++) {
    for (let h = i + 1; h < arr.length; h++) {
      if (arr[i] + arr[h] === 0) {
        return [arr[i], arr[h]];
      }
    }
  }
};

const sumZero2 = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return 'Values not found'
};

let arr = [-5, -1, 0, 5, 6];
console.log(sumZero2(arr));

/**
 * Understand the problem
 * Come up with concrete examples and edge cases
 * [-10, -9, -8, -7, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * [-5, -1, 0, 0, 6]
 * [-5, -1, 0, 5, 5]
 * [0]
 * []
 * Break it down and write steps
 * Write Code and Refactor
 */

/**
 * We see that sumZero2 is a better solution with o(n) vs o(n2) in case of sumZero1
 */

