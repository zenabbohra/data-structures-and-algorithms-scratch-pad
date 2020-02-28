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

/**
 * @function minSubArrayLen - function which takes an array of positive integers and a +ve number
 * and returns the minimum length of a subarray of which the sum >= num
 * @params {array} arr
 * @params {number} num
 * @returns {number} minLen
 */
const minSubArrayLen = (arr, num) => {
  if (num < 0 || !arr.length) return 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return 1;
  }

  let maxSum = 0;
  let currentSum = 0;
  for (let windowLength = 2; windowLength <= arr.length; windowLength++) {
    currentSum = subArraySum(arr, windowLength);
    if (currentSum > num) {
      return windowLength;
    }
    for (let i = 0; i < arr.length - windowLength; i++) {
      currentSum += arr[i + windowLength] - arr[i];
      maxSum = Math.max(currentSum, maxSum);
      if (maxSum >= num) return windowLength;
    }
  }
  return 0;
};

describe("min sub array length", () => {
  test('case 1', () => {
    let arr = [2, 4, 6, 3, 7, 22, 32, 12];
    expect(minSubArrayLen(arr, 60)).toEqual(3);
  });

  test('shuffle case 1', () => {
    let arr = [2, 4, 6, 12, 3, 5, 21, 30, 3];
    expect(minSubArrayLen(arr, 60)).toEqual(5);
  });

  test('with 3 items', () => {
    let arr = [2, 4, 6];
    expect(minSubArrayLen(arr, 8)).toEqual(2);
  });

  test('with 2 items', () => {
    let arr = [2, 4];
    expect(minSubArrayLen(arr, 5)).toEqual(2);
  });
});

// Examples
// if num is greater than sum of all array elements than return 0
// if num < 0 return 1
// if arr is empty return 0
// what should i do if any element < 0?