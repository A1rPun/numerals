import { countingRod } from '../numerals.js';

describe('CountingRod', () => {
  it('should convert', () => {
    expect(countingRod.to(123)).toBe('𝍩𝍡𝍫');
    expect(countingRod.parse('𝍩𝍡𝍫')).toBe(123);

    expect(countingRod.to(10)).toBe("𝍠o");
    expect(countingRod.parse("𝍠o")).toBe(10);
  });
});
