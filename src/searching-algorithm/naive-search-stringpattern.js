/**
 * Function that takes 2 string and searches for 1 string into the other and returns the final count of occurrences
 * @function naiveStringSearch
 * @params {string} str1
 * @params {string} str2
 * @returns {number} count
 */
const naiveStringSearch = (str1, str2) => {
  //run a loop over string 1
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    let j = 0;
    while (j < str2.length && str2[j] === str1[i]) {
      j++;
      i++;
    }
    if (j === str2.length) {
      count += 1;
    }
  }
  return  count ? count : 0 ;
// run a loop over str 2
// check if every element of str2 is present in str1, if yes, increase the counter
// else break out from the inner loop
};

let str1 = 'jjdomgjfkomghhkomg';
let str2 = 'omg';
console.log(naiveStringSearch(str1, str2));