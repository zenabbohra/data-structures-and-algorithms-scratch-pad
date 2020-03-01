/**
 * @function someRecursive - that takes an array and a callback and returns true if any element
 * of the array returns true when passed to the callback
 * @params {array} arr
 * @params {function}
 * @returns {boolean}
 */

const someRecursive = (arr, callback)  => {
  for (let e of arr) {
    if (callback(e)) return  true;
  }
  return false;
};

// ======= Another implementation ========

const someRecursive1 = (arr, callback) => {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1),callback);
};

module.exports = someRecursive;