import { toCountingRod, parseCountingRod } from '../main.js';

describe('CountingRod', () => {
  it('should convert', () => {
    expect(toCountingRod(123)).toBe('𝍩𝍡𝍫');
    expect(parseCountingRod('𝍩𝍡𝍫')).toBe(123);

    expect(toCountingRod(10)).toBe("𝍠o");
    expect(parseCountingRod("𝍠o")).toBe(10);
  });
});
