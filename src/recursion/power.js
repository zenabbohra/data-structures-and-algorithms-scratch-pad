/**
 * @function power - takes a base number and an exponent number and returns the
 * power of the base to the exponent
 * @params {number} base
 * @params {number} exponent
 * @returns {number} result
 */
//PseudoCode
  //
  const power = (base, exponent) => {
    if (exponent === 0) return 1;
    return base * power(base, exponent -1);
  };
let base = 2;
let exponent = 5;
console.log(power(base, exponent));
