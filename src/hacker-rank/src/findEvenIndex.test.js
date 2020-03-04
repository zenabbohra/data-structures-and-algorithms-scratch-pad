function sum(arr) {
  return arr.reduce((sum, e) => sum + e, 0);
}
function findEvenIndex(arr) {
  for (let n = 0; n < arr.length; n++) {
    const sumLeft = sum(arr.slice(0, n));
    const sumRight = sum(arr.slice(n + 1, arr.length));
    if (sumLeft === sumRight) return n;
  }
  return -1;
}

describe("FindEvenIndex", function() {
  it("Tests", function() {
    expect(findEvenIndex([1,2,3,4,3,2,1])).toBe(3);
    expect(findEvenIndex([1,100,50,-51,1,1])).toBe(1);
    expect(findEvenIndex([1,2,3,4,5,6])).toBe(-1);
    expect(findEvenIndex([20,10,30,10,10,15,35])).toBe(3);
  });
});

//PseudoCode
  // run a loop with N from 0 to arr.length
  // run a while loop from i = N + 1 to arr.length and j = N - 1 to 0