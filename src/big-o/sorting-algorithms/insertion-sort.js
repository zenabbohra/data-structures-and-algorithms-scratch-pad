/** Pseudocode for Insertion sort
 * - Run a loop with variable i which is index of the second element of array
 * - Declare a variable curVal = arr[i]
    * - Run an inner while loop with variable k that starts at i - 1 and goes until k >= 0
    * Check if curVal < element at k
      * - if yes, then make element at k+1 = element at k
  * element at k+1 = curVal
 */

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let k = i - 1;
    while (k >= 0 && currentVal < arr[k]) {
      arr[k+1] = arr[k];
      k--;
      }
    arr[k+1]= currentVal; // as k was reduced by 1 before coming out of the loop
    }
  return arr;
};
let arr =[0, -1, 8, -2, 1];
console.log(insertionSort(arr));