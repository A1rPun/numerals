import { parseNumeral, toNumeral } from './common';

const gujarati = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];

export function parseGujarati(str) {
  return parseNumeral(str, gujarati);
}
export function toGujarati(n) {
  return toNumeral(n, gujarati);
}
