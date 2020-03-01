const someRecursive = require('./some-recursive');

describe('someRecursive()', () => {
  test('returns true if any element of array returns true from the callback', () => {
    let arr = [1, 2, 15];
    expect(someRecursive(arr, (val) => val > 10)).toBeTruthy();
  });

  test('returns true if any element of array returns true from the callback', () => {
    let arr = [1, 3, 15];
    expect(someRecursive(arr, (val) => val % 2 === 0)).toBeFalsy();
  });
});
