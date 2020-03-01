const recursiveRange = require('./recursive-range');

describe('recursiveRange()', () => {
  test('returns sum of numbers from 0 to argument passed', () => {
    let num = 4;
    expect(recursiveRange(num)).toBe(10);
  });

  test('returns 0 if argument passed is 0', () => {
    let num = 0;
    expect(recursiveRange(num)).toBe(0);
  });

  test('returns undefined when no argument is provided', () => {
    expect(recursiveRange()).toBeUndefined();
  });

  test('returns undefined when argument passed is not a valid number', () => {
    let num = 'a';
    expect(recursiveRange(num)).toBeUndefined();
  });

  test('returns undefined when argument passed is negative', () => {
    let num = -1;
    expect(recursiveRange(num)).toBeUndefined();
  });
});