/**
 * @function maxSubsetSum - that takes an array as input and returns max subset sum of non adjacent elements
 * @params {array} arr
 * @returns {number} maxSum
 */
const maxSubsetSum = (arr) => {
  if (!arr.length) return undefined;
  if (arr.length === 1) return arr[0];
  let maxSum = 0;
  let curSum = 0;
  for (let e of arr) {
    if (typeof e !== 'number') return undefined;
    maxSum = Math.max(maxSum, e);
  }
  for (let i = 0; i < arr.length - 2; i++) {
    curSum = arr[i];
    maxSum = Math.max(maxSum, curSum);
    let j = i + 2;
    let k = i + 3;
    for (let j = i + 2; j < arr.length;) {
      curSum += arr[j];
      j += 2;
    }
    maxSum = Math.max(maxSum, curSum);
    curSum = arr[i];
    for (let k = i + 3; k < arr.length;) {
      curSum += arr[k];
      k += 2;
    }
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
};
//PseudoCode
// Declare a variable maxSum = 0, curSum = 0
// maxSubsetSum([2, 1, 5, 8, 4]) === 11
// run a for loop to check biggest element of arr and store that in maxSum
// run a for loop with variable i = 0 to < arr.length
// run a for loop with variable j = i + 2 till < arr.length
// Calc curSum += arr[i] + arr[j] until i changes then we start with curSum = arr[i]
// after the for loop with j we update maxSum if curSum is greater than maxSum
// Run for loop with variable k = i + 3 till arr.length and do the same ab previously to update maxSum

module.exports = maxSubsetSum;