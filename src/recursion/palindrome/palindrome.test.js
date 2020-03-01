const palindrome = require('./palindrome');

describe('palindrome()', () => {
  test('checks for palindrome', () => {
    let str = 'tacocat';
    expect(palindrome(str)).toBeTruthy();
  });

  test('checks for palindrome', () => {
    let str = 'not palindrome';
    expect(palindrome(str)).toBeFalsy();
  });
});