import { maya } from '../numerals.js';

describe('Maya', () => {
  it('should convert MAX_SAFE_INTEGER', () => {
    expect(maya.parse(maya.to(Number.MAX_SAFE_INTEGER))).toBe(Number.MAX_SAFE_INTEGER);
  });
});
