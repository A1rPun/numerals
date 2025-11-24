import { morse } from '../numerals.js';

describe('Morse', () => {
  it('should convert', () => {
    expect(morse.to(123)).toBe('.---- ..--- ...--');
    expect(morse.parse('.---- ..--- ...--')).toBe(123);

    expect(morse.to(10)).toBe(".---- -----");
    expect(morse.parse(".---- -----")).toBe(10);

    expect(morse.to(0.1)).toBe("----- .-.-.- .----");
    expect(morse.parse("----- .-.-.- .----")).toBe(0.1);
  });
});
