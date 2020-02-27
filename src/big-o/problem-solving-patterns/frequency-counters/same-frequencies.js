/**
 * @function sameFrequencies - It takes 2 numbers and return true if the frequency of digits
 * in the 2 inputs matches, returns false otherwise
 * @params {number} num1 - a integer input
 * @params {number} num2 - a integer input
 * @returns {boolean}
 */
/** Pseudocode for the solution
 * - Convert the numbers to strings
 * - Split the digits in numbers by '' and store in separate arrays
 * - Check if the length of the arrays are same, return false if not
 * - Run a loop for each of the numbers to create an object which stores the count of
 * each digit, if the key is already present then increase the value by 1 else create another key
 * - compare the 2 objects for exact match in keys and values
 */
const frequencyCounter = (data) => {
  let fc = {};
  for (let d of data) {
    fc[d] = (fc[d] || 0) + 1;
  }
  return fc;
};

const sameFrequencies = (num1, num2) => {
  const str1 = num1.toString();
  const str2 = num2.toString();
  let fc1 = frequencyCounter(str1);
  let fc2 = frequencyCounter(str2);
  if (str1.length !== str2.length) return false;
  for (let k in fc1) {
    if(!fc2[k]) return false;
    if (fc2[k] !== fc1[k]) return  false;
  }
  return true;
};

let num1 = '122234';
let num2 = '122234';
console.log(sameFrequencies(num1, num2));

/** Simple and concrete examples
 * - num1 = 22, num2 = 222 returns false
 * - num1 = '1', num2 = '1'
 * num1 = '', num2 = ''
 * num1 = 122234, num2 = 12234
 */