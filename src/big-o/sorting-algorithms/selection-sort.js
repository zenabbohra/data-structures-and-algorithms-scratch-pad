/** Pseudocode for Selection sort
 * - Run a loop with variable i starting from the beginning of the array and going till end
 * - Declare min element index as i
  * - Run a loop inside of first loop with variable k going from i + 1 till end of the array
    * - Check if element at k < at minElemIndex, if yes, then update minElemIndx to k
  * - outside inner loop and inside outer loop, swap the element at i with element at minElemIndx
 */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minElementIndex = i;
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[minElementIndex]) {
        minElementIndex = k;
      }
      console.log(arr, k, i,);
    }
    if (minElementIndex !== i) {
      // Swap in ES6+
      [arr[i], arr[minElementIndex]] = [arr[minElementIndex], arr[i]];
    }
  }
  return arr;
};

let arr = [0, 1, 3, 4, -8, 6, 5, 7];

console.log(selectionSort(arr));

//Time complexity of selection sort is O(n2)
// Selection is not much better than bubble sort in terms of time complexity
// but its better in terms of space complexity as you don't have to swap again and again
// swap happens only once at the end of the loop (if required)
// But the difference between the two sorts occur when we have an almost or fully sorted array
// then bubble sort runs at O(n) while selection is still O(n2) as it still checks in each iteration
// if there is any minimum element or not