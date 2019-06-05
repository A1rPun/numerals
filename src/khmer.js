import { parseNumeral, toNumeral } from './common';

const khmer = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];

export function parseKhmer(str) {
  return parseNumeral(str, khmer);
}
export function toKhmer(n) {
  return toNumeral(n, khmer);
}
