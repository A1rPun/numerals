import { toMaya, parseMaya } from '../main.js';

describe('Maya', () => {
  it('should convert MAX_SAFE_INTEGER', () => {
    expect(parseMaya(toMaya(Number.MAX_SAFE_INTEGER))).toBe(Number.MAX_SAFE_INTEGER);
  });
});
