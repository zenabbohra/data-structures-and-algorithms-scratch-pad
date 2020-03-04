const compareTriplets = (arr1, arr2) => {
  let result = [0, 0];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) continue;
    if (arr1[i] > arr2[i]) {
      result[0] += 1;
    } else {
      result[1] += 1;
    }
  }
  return result;
};

let arr1 = [5, 6, 7];
let arr2 = [3, 6, 10];

console.log(compareTriplets(arr1, arr2));

// Exmaples
