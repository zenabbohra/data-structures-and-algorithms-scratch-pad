/*
Function that implements binary search
 */
const binarySearch = (arr, n) => {
  let left = 0; // left = 0
  let right = arr.length - 1; //right = 4
  let mid = Math.floor((right - left)/2); // mid = 2
  console.log('left', left, 'right', right, 'mid', mid);
  while (left <= right) {
    if (n === arr[mid]) {
      return mid;
    } else if (n > arr[mid]) {
      left = mid + 1; // left = 1
      console.log('left', left);
    } else {
      right = mid - 1; // right = 1
      console.log('right', right);
    }
    mid = Math.floor((right - left) / 2) + left; // mid = 1
    console.log('mid', mid);
  }
  return -1;
};

let arr = [1, 2, 3, 4, 5];
let n = 4;
console.log(binarySearch(arr, n));
/**
 * Define left, right and middle
 * Check if number is greater than or smaller than middle, if greater than move right pinter
 * down and if smaller then move the left pointer up
 * Find the new middle and repeat the iteration

 */
