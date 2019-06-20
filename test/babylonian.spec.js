import { toBabylonian, parseBabylonian } from '../main.js';

describe('Babylonian', () => {
  it('should convert 0 to a space', () => {
    const zero = 0;
    expect(toBabylonian(zero)).toBe(' ');
  });
  it('should convert 23', () => {
    expect(toBabylonian(23)).toBe('𒎙𒐈');
    expect(toBabylonian(23 * 60)).toBe('𒎙𒐈 ');
    expect(toBabylonian(23 * 60 * 60)).toBe('𒎙𒐈  ');
  });
  // it('should convert MAX_SAFE_INTEGER', () => {
  //   expect(parseBabylonian(toBabylonian(Number.MAX_SAFE_INTEGER))).toBe(Number.MAX_SAFE_INTEGER);
  // });
});
