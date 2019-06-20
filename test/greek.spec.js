import { toGreek, parseGreek } from '../main.js';

describe('Greek', () => {
  it('should any number below 1 to an empty string', () => {
    const zero = 0;
    expect(toGreek(zero)).toBe('');
  });
  it('should convert any number above 999999 to an empty string', () => {
    expect(toGreek(999999000000999999)).toBe('');
  });
  it('should have the correct keraia', () => {
    expect(toGreek(818)).toBe('ωιηʹ');
    expect(toGreek(818000)).toBe('͵ωιη');
    expect(toGreek(818818)).toBe('͵ωιη ωιηʹ');
  });
});
