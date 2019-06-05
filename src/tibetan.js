import { parseNumeral, toNumeral } from './common';

const tibetan = ['༠', '༡', '༢', '༣', '༤', '༥', '༦', '༧', '༨', '༩'];

export function parseTibetan(str) {
  return parseNumeral(str, tibetan);
}
export function toTibetan(n) {
  return toNumeral(n, tibetan);
}
