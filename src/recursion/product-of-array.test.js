const {productOfArray} = require('./product-of-array');
const {productOfArrayRec} = require('./product-of-array');

describe('productOfArray()', () => {
  test('returns product of array elements', () => {
    const arr = [1, 4, 6, 7, 10];
    expect(productOfArray(arr)).toBe(1680);
  });

  test('with empty array', () => {
    let arr = [];
    expect(productOfArray(arr)).toBeUndefined();
  });

  test('with non-numerical elements', () => {
    let arr = [1, 'a'];
    expect(productOfArray(arr)).toBeUndefined();
  });

  test('with one element array', () => {
    let arr = [1];
    expect(productOfArray(arr)).toBe(1);
  });

  test('with one element as 0', () => {
    let arr = [1, 4, 6, 0, 4, 7];
    expect(productOfArray(arr)).toBe(0);
  })
});

describe('productOfArrayRec()', () => {
  test('returns product of array elements', () => {
    const arr = [1, 4, 6, 7, 10];
    expect(productOfArrayRec(arr)).toBe(1680);
  });

  test('with one element array', () => {
    let arr = [1];
    expect(productOfArrayRec(arr)).toBe(1);
  });

  test('with one element as 0', () => {
    let arr = [1, 4, 6, 0, 4, 7];
    expect(productOfArrayRec(arr)).toBe(0);
  })
});