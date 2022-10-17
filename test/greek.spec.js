import { greek } from '../numerals.js';

describe('Greek', () => {
  it('should any number below 1 to an empty string', () => {
    const zero = 0;
    expect(greek.to(zero)).toBe('');
  });
  it('should convert any number above 999999 to an empty string', () => {
    expect(greek.to(999999000000999999)).toBe('');
  });
  it('should have the correct keraia', () => {
    expect(greek.to(818)).toBe('ωιηʹ');
    expect(greek.to(818000)).toBe('͵ωιη');
    expect(greek.to(818818)).toBe('͵ωιη ωιηʹ');
  });
});
