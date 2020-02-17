
/**
 * Function that takes two arrays and returns true if every value of the array has its
 * corresponding value squared in the second array
 @function same
 @params {array} arr1
 @params {array} arr2
 @returns {boolean}
 */
const same = (arr1, arr2) => {
  let frequencyFactorObj1 = {};
  let frequencyFactorObj2 = {};
  for (let e of arr1) {
    frequencyFactorObj1[e] = (frequencyFactorObj1[e] || 0) + 1;
  }
  for (let e of arr2) {
    frequencyFactorObj2[e] = (frequencyFactorObj2[e] || 0) + 1;
  }
  for (let key in frequencyFactorObj1) {
    if ( !(key ** 2 in frequencyFactorObj2) ) {
      return false;
    }
    if (frequencyFactorObj1[key ** 2] !== frequencyFactorObj2[key]) {
      return false;
    }
  }
  return true;
};

let arr1 = [1, 2, 3, 2];
let arr2 = [1, 4, 4, 9];
console.log('result of function is:', same(arr1, arr2));