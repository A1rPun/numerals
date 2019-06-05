import { parseNumeral, toNumeral } from './common';

const odia = ['୦', '୧', '୨', '୩', '୪', '୫', '୬', '୭', '୮', '୯'];

export function parseOdia(str) {
  return parseNumeral(str, odia);
}
export function toOdia(n) {
  return toNumeral(n, odia);
}
