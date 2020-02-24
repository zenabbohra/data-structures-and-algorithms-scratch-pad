/**
 * @function pivot - Takes an array and returns an index number for the first element of
 * the array for where will the element be after the array is sorted. It also swaps the first
 * element with elements smaller than it
 * @params {array} arr - array input
 * @params {number} start - starting index of the array
 * @params {number} end - ending index of the array
 * @returns {number} pivotIndx - rightful index of the first element after the array sorting is done
 */
const pivot = (arr, start = 0, end = arr.length - 1) => {
  const pivot = arr[start];
  let pivotIndx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIndx++;
      [ arr[pivotIndx], arr[i] ] = [ arr[i], arr[pivotIndx] ];
      console.log(arr, 'pivotIndx:', pivotIndx, 'i:', i);
    }
  }
  [ arr[pivotIndx], arr[start] ] = [ arr[start], arr[pivotIndx] ];
  console.log('arr after final swap:', arr);
  return pivotIndx;
};
/**
 * @function quickSort - Algorithm to do sorting of array
 * @params {array} arr - Array to be sorted
 * @params {number} start - starting index of the array
 * @params {number} end - ending index of the array
 * @returns {array} arr - sorted array
 */
const quickSort = (arr, start = 0, end = arr.length - 1) => {
  console.log('arr when function is invoked', arr);
  if (start < end) {
    const pivotIndx = pivot(arr, start, end);
    quickSort(arr, start, pivotIndx - 1);
    quickSort(arr, pivotIndx + 1, end);
  }
  return arr;
};

let arr = [4, 3, 2, 12, 5, -9, 6, 9];
console.log(quickSort(arr));