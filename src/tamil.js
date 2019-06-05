import { parseNumeral, toNumeral } from './common';

const tamil = ['௦', '௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯'];

export function parseTamil(str) {
  return parseNumeral(str, tamil);
}
export function toTamil(n) {
  return toNumeral(n, tamil);
}
