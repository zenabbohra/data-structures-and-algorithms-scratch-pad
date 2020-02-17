
/**
 * Function that takes two arrays and returns true if every value of the array has its
 * corresponding value squared in the second array
 @function same
 @params {array} arr1
 @params {array} arr2
 @returns {boolean} result
 */
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let e of arr1) {
    let correctIndex = arr2.indexOf(e ** 2);
    if (correctIndex === -1) {
        return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

let arr1 = [1, 2, 3, 2];
let arr2 = [1, 4, 4, 9];
console.log('result of function is:', same(arr1, arr2)); // O(n2)