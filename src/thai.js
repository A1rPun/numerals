import { parseNumeral, toNumeral } from './common';

const thai = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];

export function parseThai(str) {
  return parseNumeral(str, thai);
}
export function toThai(n) {
  return toNumeral(n, thai);
}
