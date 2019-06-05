import { parseNumeral, toNumeral } from './common';

const tamilNumerals = ['௦', '௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯'];

export function parseTamil(str) {
  return parseNumeral(str, tamilNumerals);
}
export function toTamil(n) {
  return toNumeral(n, tamilNumerals);
}
