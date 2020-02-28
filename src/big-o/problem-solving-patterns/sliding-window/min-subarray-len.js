/**
 * @function minSubArrayLen - function which takes an array of positive integers and a +ve number
 * and returns the minimum length of a subarray of which the sum >= num
 * @params {array} arr
 * @params {number} num
 * @returns {number} minLen
 */
//Pseudocode
  // - Check num > 0 and arr is not empty else return 0
  // - Run a loop with variable i = 0 running up to arr.length - 1 to check if any element
  // is greater than num, if found return 1

  // - Declare a variable i = 0 and j = 1
  // - Run a while loop as lon as j < arr.length
  // Run a for loop with variable i = 0 until i < arr.length - j
  // Inside for loop, check if any j elements' sum >= num, if found, then return j
  // end of while loop do j++
  // if none found, then return 0 at the end
const subArraySum = (arr, j) => {
    let sum = 0;
    for (let i = 0; i < j; i++) {
      sum += arr[i];
    }
    if (j > 1)
      return sum;
  };


const minSubArrayLen = (arr, num) => {
  if (num < 0 || !arr.length) return 0;
  let j = 1;
  let sum = 0;
  let currentSum = 0;
  while (j < arr.length - 1) {
    for (let i = 0; i < arr.length - j; i++) {
      if (j === 1 && arr[i] >= num) {
        return 1;
      } else if (j > 1 && i === 0) {
        currentSum = subArraySum(arr, j);
        if (currentSum > num) {
          return j;
        }
        currentSum += arr[i + j] - arr[i];
        if (currentSum > num) return j;
      } else if (j > 1) {
        currentSum += arr[i + j] - arr[i];
        sum = Math.max(currentSum, sum);
        if (sum >= num) return j;
      }
    }
    j++;
  }
  return 0;
};

let arr = [2, 4, 6, 3, 7, 22, 32, 12];
let num = 60;
console.log(minSubArrayLen(arr, num));
// Examples
// if num is greater than sum of all array elements than return 0
// if num < 0 return 1
// if arr is empty return 0
// what should i do if any element < 0?