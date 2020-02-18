/**
 * Function that takes a array of integers and numbers n and returns maximum sum of n
 * consecutive elements in the array
 * @function maxSubArraySum
 * @params {array} arr
 * @returns {number} result
 */
const maxSubArraySum = (arr, n) => {
  // check if n is greater than length of array and is not less than or equal to 0
  if (n <= 0 || n > arr.length) {
    return "invalid value of n";
  }
  let maxSum = 0;
  // take sum of first n elements and store in maxSum variable
  for (let i =0; i < n; i++) {
    maxSum = maxSum + arr[i]; // sum of first n elements after loop completes
  }
  let tempSum = maxSum;
  for (let i = n; i < arr.length; i++ ) {
    tempSum = tempSum + arr[i] - arr[i-n];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
};

let arr = [1, 2, 5, 2, 8, 1, 15];
let n = 3;
console.log(maxSubArraySum(arr, n));

/**
 * Understand the problem
 * Come up with concrete examples and edge cases
  * ([1, 2, 3],0) returns undefined
  * ([1,2], 3) returns undefined
  * ([], -1) returns undefined
  *
 * Break it down and write steps
 * Write Code and Refactor
 */