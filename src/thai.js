import { parseNumeral, toNumeral } from './common';

const thaiNumerals = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];

export function parseThai(str) {
  return parseNumeral(str, thaiNumerals);
}
export function toThai(n) {
  return toNumeral(n, thaiNumerals);
}
