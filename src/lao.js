import { parseNumeral, toNumeral } from './common';

const laoNumerals = ['໐', '໑', '໒', '໓', '໔', '໕', '໖', '໗', '໘', '໙'];

export function parseLao(str) {
  return parseNumeral(str, laoNumerals);
}
export function toLao(n) {
  return toNumeral(n, laoNumerals);
}
