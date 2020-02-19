/** STEPS to write code for selection sort
 * - Run a loop with variable i starting from the beginning of the array and going till end
 * - Run a loop inside of first loop with variable k going from i till end of the array
 * - Inside the nested loop check if element at k < at k+1, declare min variable
 * and store element at k as min until you find an element smaller than min, then
 * update min
 * - outside inner loop and inside outer loop, swap the element at i
 * with wherever the min element is
 */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let k = i; k < arr.length - 1; k++) {
      if (arr[k + 1] < arr[minIndex]) {
        minIndex = k+1;
      }
    }
    if (minIndex !== i) {
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    } else break;
  }
  return arr;
};

let arr = [0, 1, 3, 4, -8, 5, 5, 7];
console.log(selectionSort(arr));

//Time complexity of selection sort is O(n2)
// Selection is not much better than bubble sort in terms of time complexity
// but its better in terms of space complexity that you don't have to swap again and again
// swap happens on;y once at the end of the loop (if required)