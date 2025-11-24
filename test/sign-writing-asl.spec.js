import { asl } from '../numerals.js';

describe('ASL', () => {
  it('should convert', () => {
    expect(asl.to(123)).toBe('𝠀𝠎𝠞');
    expect(asl.parse('𝠀𝠎𝠞')).toBe(123);
  });

  it('should convert MAX_SAFE_INTEGER', () => {
    expect(asl.parse(asl.to(Number.MAX_SAFE_INTEGER))).toBe(Number.MAX_SAFE_INTEGER);
  });
});
