import { parseNumeral, toNumeral } from './common';

const kannada = ['೦', '೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯'];

export function parseKannada(str) {
  return parseNumeral(str, kannada);
}
export function toKannada(n) {
  return toNumeral(n, kannada);
}
