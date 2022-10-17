import { abjad } from '../numerals.js';

describe('Abjad', () => {
  it('should convert a number to abjad numerals', () => {
    expect(abjad.to(66)).toBe('سو');
    expect(abjad.to(786)).toBe('ذفو');
  });

  it('should convert text to a number', () => {
    const allah = 'ألله';
    expect(abjad.parse(allah)).toBe(66);
  });
});
