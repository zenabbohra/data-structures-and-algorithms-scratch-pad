/*
Function takes an integer n and calculates its factorial using recursion
 */
const factorialRec = (n) => {
  if (n === 1){
    return 1;
  }
  return n * factorialRec(n -1);
};

let n = 4;
console.log(factorialRec(n));

/*
4 * factorial(3)
4 * 3 * factorial(2)
4 * 3 * 2 * factorial(1)
4 * 3 * 2 * 1
 */