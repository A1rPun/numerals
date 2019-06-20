import { toArmenian, parseArmenian } from '../main.js';

describe('Armenian', () => {
  it('should convert', () => {
    expect(toArmenian(1)).toBe('Ա');
    expect(parseArmenian('Ա')).toBe(1);
  });
});

