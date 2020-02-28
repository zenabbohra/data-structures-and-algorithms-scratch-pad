/**
 * @function maxSubArraySum - a function that an array of integers and a number k
 * and returns the maximum sum of the k consecutive numbers or subarray of length k
 * @params {array} arr
 * @params {number} k
 * @returns {number} sum - maximum sum of k consecutive elements in the array
 */
//PseudoCode
// Calculate sum of first k elements and store it in a variable sum
// Declare a variable i = 0
// Declare a variable currentSum and initialize it to value of  sum
// Run a while loop from i + k to arr.length - k
// Update currentSum += arr[i+k] - arr[i]
// if currentSum > sum, then update sum to currentSum
// return sum at the end
const maxSubArraySum = (arr, num) => {
  if (num >= arr.length) return null;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  let currentSum = sum;
  for (let i = 0; i < arr.length - num; i++) {
    currentSum += arr[i + num] - arr[i];
    sum = Math.max(sum, currentSum);
  }
  return sum;
};

let arr = [-3, 4, 0, -2, 6, -1];
let arr2 = [100, 200, 300, 400];
let arr3 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let num = 4;
console.log(maxSubArraySum(arr2, num));