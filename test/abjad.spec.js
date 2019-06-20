import { toAbjad, parseAbjad } from '../main.js';

describe('Abjad', () => {
  it('should convert a number to abjad numerals', () => {
    expect(toAbjad(66)).toBe('سو');
    expect(toAbjad(786)).toBe('ذفو');
  });

  it('should convert text to a number', () => {
    const allah = 'ألله';
    expect(parseAbjad(allah)).toBe(66);
  });
});
