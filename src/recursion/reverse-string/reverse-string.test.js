const reverseString = require('./reverse-string');

describe('reverseString()' ,() => {
  test('Reverse function exists', () => {
    expect(reverseString).toBeDefined();
  });

  test('Reverse reverses a string', () => {
    expect(reverseString('abcd')).toEqual('dcba');
  });

  test('Reverse reverses a string', () => {
    expect(reverseString('  abcd')).toEqual('dcba  ');
  });

  test('with one character string', () => {
    expect(reverseString('a')).toEqual('a');
  });

  test('with one spaces as characters string', () => {
    expect(reverseString('  a')).toEqual('a  ');
  });
});