const fibonacci = require('./fibonacci');

describe('fibonacci()', () => {
  test('returns the nth number for n passed as an argument', () => {
    let n = 4;
    expect(fibonacci(n)).toBe(3);
  });

  test('returns the nth number for n passed as an argument', () => {
    let n = 0;
    expect(fibonacci(n)).toBe(0);
  });

  test('returns the nth number for n passed as an argument', () => {
    let n = 1;
    expect(fibonacci(n)).toBe(1);
  });

  test('returns the nth number for n passed as an argument', () => {
    let n = 2;
    expect(fibonacci(n)).toBe(1);
  });
});