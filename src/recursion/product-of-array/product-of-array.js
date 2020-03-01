/**
 * @function productOfArray - takes an array and returns the products of its element
 * @params {array} arr
 * @returns {number} product
 */
//PseudoCode
  // Check if(!arr.length), return undefined
  // Run a for loop with variable i = 0 till arr.length - 1
  // Check if element is numerical, if not return undefined
  // Check if element is ever 0, if found return 0
  // product *= arr[i]
const productOfArray = (arr) => {
  let product = 1;
  if (!arr.length) return undefined;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) return 0;
    if (typeof arr[i] !== 'number') return  undefined;
    product *= arr[i];
  }
  return product;
};

const productOfArrayRec = (arr) => {
  if (!arr.length) return 1;
  if (arr[0] === 0) return 0;
  return arr[0] * productOfArrayRec(arr.slice(1));
};

module.exports = {
  productOfArray,
  productOfArrayRec
};
