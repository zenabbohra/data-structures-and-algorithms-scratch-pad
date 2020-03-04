/**
 * @function findOdd - Given an array, find the integer that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 * @params {array} arr
 * @returns {number} oddInt
 */
const findOdd = (arr) => {
  let frequencyCounter = {};
  for (let e of arr) {
    frequencyCounter[e] = frequencyCounter[e] + 1 || 1;
  }
  for (let e in frequencyCounter) {
    if (frequencyCounter[e] % 2 !== 0) return parseInt(e);
  }
  return 0;
};

const findOddB = (arr) => {
  return arr.reduce((a, b) => a ^ b);
};
//PseudoCode
  // declare an empty object
  // Iterate over the array and define object's keys as array element and initialize the value as 1
  // and keep on adding to the value if element appears more than once
// Iterate over keys of object to check if any value is odd, if found return the key
console.log(findOddB([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));