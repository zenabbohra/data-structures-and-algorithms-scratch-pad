const maxSubsetSum = require('./maxSubsetSum');

describe('maxSubsetSum()', () => {
  test('returns max sum', () => {
    let arr = [2, 1, 5, 8, 4];
    expect(maxSubsetSum(arr)).toBe(11);
  });

  test('example 2', () => {
    let arr = [-2, 1, 3, -4, 5];
    expect(maxSubsetSum(arr)).toBe(8);
  });

  test('example 3', () => {
    let arr = [];
    expect(maxSubsetSum(arr)).toBeUndefined();
  });

  test('example 4', () => {
    let arr = ['1', 2];
    expect(maxSubsetSum(arr)).toBeUndefined();
  });

  test('example 5', () => {
    let arr = [2];
    expect(maxSubsetSum(arr)).toBe(2);
  });

  test('returns 6', () => {
    let arr = [2, 2, 3, 4];
    expect(maxSubsetSum(arr)).toBe(6);
  });

  test('returns quite a big sum', () => {
    let arr = [2, 4, 6, 8, 18, 12, 14, 16, 10, 20];
    expect(maxSubsetSum(arr)).toBe(62);
  });
});