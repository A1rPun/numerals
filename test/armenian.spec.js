import { armenian } from '../numerals.js';

describe('Armenian', () => {
  it('should convert', () => {
    expect(armenian.to(1)).toBe('Ա');
    expect(armenian.parse('Ա')).toBe(1);
  });
});

