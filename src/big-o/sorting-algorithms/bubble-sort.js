/**
 * Pseudocode for Bubble sort
 * - Run a loop with variable i starting from the end of the array and going towards beginning
 * - Inside that loop run a loop with variable j starting from the beginning of array and going
 * up till i (as after the inner loop finishes the highest element will already be at the end,
 * so we don't want to include that again by running inner loop until the end of array)
 * - Inside the inner loop, check if element at j > at j+1, if yes then swap it
 * - We can optimize the number of operations by using noSwap flag (highly recommended ot use
 * in an ALMOST sorted array)
 */

const bubbleSort1 = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let k = 0; k < i; k++) {
      if (arr[k] > arr[k+1]) {
        let temp = arr[k+1];
        arr[k+1] = arr[k];
        arr[k] = temp;
      }
      console.log(arr, arr[k] , arr[k+1]);
    }
  }
  return arr;
};

// Bubble sort optimized with Swap
const bubbleSort2 = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let noSwaps = true;
    for (let k = 0; k < i; k++) {
      if (arr[k] > arr[k+1]) {
        //Swapping format in ES6+
        [ arr[k], arr[k+1] ] = [ arr[k+1], arr[k] ];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

let arr = [8, 1, 2, 3, 4, 5, 6];
console.log(bubbleSort1(arr));
console.log(bubbleSort2(arr));


//Time complexity of first algorithm is O(n2)
// If we have an almost sorted or fully sorted array then
// Time complexity of second algorithm reduces to O(n)