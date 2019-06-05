import { parseNumeral, toNumeral } from './common';

const malayalam = ['൦', '൧', '൨', '൩', '൪', '൫', '൬', '൭', '൮', '൯'];

export function parseMalayalam(str) {
  return parseNumeral(str, malayalam);
}
export function toMalayalam(n) {
  return toNumeral(n, malayalam);
}
