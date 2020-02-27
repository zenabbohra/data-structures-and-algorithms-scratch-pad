/**
 * @function averagePair - Takes a sorted array and a target average and checks if any 2 pair
 * of elements' average is equal to target average
 * @params {array} sortedArray
 * @params {float} targetAverage
 * @returns {boolean}
 */
/** Pseudocode
 * Declare a variable i as 0
 * Declare variable k as sortedArray.length
 * Run a while loop for i < k
 * Calculate average of elements at i and k index, if calculated value > targetAverage
 * then decrease k by 1 else increase i by 1
 */
const averagePair = (sortedArray, targetAverage) => {
  let i = 0;
  let k = sortedArray.length - 1;
  while (i < k) {
    let avg = (sortedArray[i] + sortedArray[k]) / 2;
    if (avg === targetAverage) return true;
    if (avg > targetAverage) {
      k--;
    } else {
      i++;
    }
  }
  return false;
};

let sortedArray = [1,0];
let targetAverage = 0.5;
console.log(averagePair(sortedArray, targetAverage));

