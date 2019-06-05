import { parseNumeral, toNumeral } from './common';

const khmerNumerals = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];

export function parseKhmer(str) {
  return parseNumeral(str, khmerNumerals);
}
export function toKhmer(n) {
  return toNumeral(n, khmerNumerals);
}
