import { parseNumeral, toNumeral } from './common';

const lao = ['໐', '໑', '໒', '໓', '໔', '໕', '໖', '໗', '໘', '໙'];

export function parseLao(str) {
  return parseNumeral(str, lao);
}
export function toLao(n) {
  return toNumeral(n, lao);
}
