import { babylonian } from '../numerals.js';

describe('Babylonian', () => {
  it('should convert 0 to a space', () => {
    const zero = 0;
    expect(babylonian.to(zero)).toBe(' ');
  });
  it('should convert a number to a string', () => {
    expect(babylonian.to(5)).toBe('𒐊');
    expect(babylonian.to(23)).toBe('𒎙𒐈');
    expect(babylonian.to(30)).toBe('𒌍');
    expect(babylonian.to(59)).toBe('𒑪𒑆');
    expect(babylonian.to(61)).toBe('𒐕𒐕');
    expect(babylonian.to(121)).toBe('𒐖𒐕');
    expect(babylonian.to(1380)).toBe('𒎙𒐈 ');
    expect(babylonian.to(1403)).toBe('𒎙𒐈𒎙𒐈');
    expect(babylonian.to(1800)).toBe('𒌍 ');
    expect(babylonian.to(3601)).toBe('𒐕 𒐕');
    expect(babylonian.to(3660)).toBe('𒐕𒐕 ');
    expect(babylonian.to(82800)).toBe('𒎙𒐈  ');
    expect(babylonian.to(216060)).toBe('𒐕 𒐕 ');
    // TODO: include all possible converted numerals
    expect(babylonian.to(Number.MAX_SAFE_INTEGER)).toBe('𒑪𒐈𒌍𒑂𒌍𒐊𒌍𒐖𒎙𒐖𒎙𒑆𒑩𒐈𒌍𒐋𒌍𒐕');
  });
  it('should convert a string to a number', () => {
    expect(babylonian.parse('𒐊')).toBe(5);
    expect(babylonian.parse('𒎙𒐈')).toBe(23);
    expect(babylonian.parse('𒑪𒑆')).toBe(59);
    expect(babylonian.parse('𒐕 ')).toBe(60);
    expect(babylonian.parse('𒐕𒐕')).toBe(61);
    expect(babylonian.parse('𒐖𒐕')).toBe(121);
    expect(babylonian.parse('𒎙𒐈 ')).toBe(1380);
    expect(babylonian.parse('𒎙𒐈𒎙𒐈')).toBe(1403);
    expect(babylonian.parse('𒌍 ')).toBe(1800);
    expect(babylonian.parse('𒐕 𒐕')).toBe(3601);
    expect(babylonian.parse('𒐕𒐕 ')).toBe(3660);
    expect(babylonian.parse('𒎙𒐈  ')).toBe(82800);
    expect(babylonian.parse('𒐕 𒐕 ')).toBe(216060);
    expect(babylonian.parse('𒑪𒐈𒌍𒑂𒌍𒐊𒌍𒐖𒎙𒐖𒎙𒑆𒑩𒐈𒌍𒐋𒌍𒐕')).toBe(Number.MAX_SAFE_INTEGER);
  });
});
