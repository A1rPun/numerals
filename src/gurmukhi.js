import { parseNumeral, toNumeral } from './common';

const gurmukhi = ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯'];

export function parseGurmukhi(str) {
  return parseNumeral(str, gurmukhi);
}
export function toGurmukhi(n) {
  return toNumeral(n, gurmukhi);
}
