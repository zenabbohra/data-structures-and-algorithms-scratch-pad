/**
 * @function areThereDuplicates - function takes variable number of arguments and returns true if there
 * are any duplicates in the input arguments
 * @params {any}
 * @returns {boolean}
 */
/** Pseudocode for the function
 * - convert input to an iterable datatype for eg - string
 * - Run loop over the arguments and store each argument in an object as keys with frequency
 * of the same arguments as value of the key
 * - if the key is already present than increase value by 1 else create key with value 0
 * - check if any key's value is more than 1, then return true else return false
 */
const areThereDuplicates = (...data) => {
  let str = '';
  for (let e of data) {
    str = str.concat(e.toString());
  }
  let fc = {};
  for (let s of str) {
     fc[s] = (fc[s] || 0) + 1;
  }
  for (let key in fc) {
    if(fc[key] > 1) return true;
  }
  return  false;
};

let data = 123;
// console.log(areThereDuplicates('a','b','c'));
console.log(areThereDuplicates(data, '2'));