/**
 * @function countDuplicates -  a function that will return the count of distinct
 * case-insensitive alphabetic characters and numeric digits that occur more than once in
 * the input string. The input string can be assumed to contain only alphabets
 * (both uppercase and lowercase) and numeric digits.
 * @param {string} str - string containing alphanumeric characters or just alphabets
 * @returns {number} numDuplicateCharacters - count of distinct characters in the input string
 */
const countDuplicates = (str) => {
  let frequencyCouter = {};
  let counter = 0;
  for (let char of str.toLowerCase()) {
    frequencyCouter[char] = frequencyCouter[char] + 1 || 1;
  }
  for (let char in frequencyCouter) {
    if (frequencyCouter[char] > 1) {
      counter++;
    }
  }
  console.log(frequencyCouter);
  return counter;
};
//PseudoCode
  // Declare an empty object
  // Initialize counter variable to 0
  // Iterate over the input string to create the object with keys set to the character in input string
  // if key already exists then increment by 1 else initialise to 1
// Iterate through the object and check if key[value] > 1 then counter++
// return counter

let str = 'Aa11';
console.log(countDuplicates(str));