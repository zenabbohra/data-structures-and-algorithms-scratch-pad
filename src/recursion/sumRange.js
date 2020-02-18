/**
 * Function taken a number n and recursively calculates the sum from 0 to n
 * @function sumRange
 * @params {number} n
 * @returns {number} sum
 */
const sumRange = (n) => {
  if (n === 1) {
    return 1;
  }
  return n + sumRange(n-1);
};

/*
3 + sumRange(2)
3 + 2 + sumRange(1)
3 + 2 + 1
 */