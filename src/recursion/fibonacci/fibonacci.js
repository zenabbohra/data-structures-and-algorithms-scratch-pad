/**
 * @function fibonacci - that takes a number n and returns the nth number in its fibonacci sequence
 * @params {number} n
 * @returns {number} nthNumber
 */
const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

module.exports = fibonacci;

//PseudoCode
  // Check if n = 0, return 0
  // Check if n = 1, return 1
  // if n > 2, then fib(n - 1) + fib(n - 2)