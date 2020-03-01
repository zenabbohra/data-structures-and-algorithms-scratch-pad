/**
 * @function recursiveRange - that takes a number and returns a sum of all the numbers from 0 to
 * the number passed
 * @params {number} num
 * @return {number} sum - sum of all the numbers from 0 to num
 */
const recursiveRange = (num) => {
  if (num === 0) return 0;
  if (num < 0 || !num || typeof num !== 'number') return undefined;
  return num + recursiveRange(num - 1);
};

module.exports = recursiveRange;

// PseudoCode
  // Check num is 0 then return 0
  // Check if num is null or less than 0 or not a valid number then return undefined
  // else recursiveRange(num - 1)