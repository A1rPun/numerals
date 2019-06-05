import { parseNumeral, toNumeral } from './common';

const mongolian = ['᠐', '᠑', '᠒', '᠓', '᠔', '᠕', '᠖', '᠗', '᠘', '᠙'];

export function parseMongolian(str) {
  return parseNumeral(str, mongolian);
}
export function toMongolian(n) {
  return toNumeral(n, mongolian);
}
