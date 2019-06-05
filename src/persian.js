import { parseNumeral, toNumeral } from './common';

const persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export function parsePersian(str) {
  return parseNumeral(str, persian);
}
export function toPersian(n) {
  return toNumeral(n, persian);
}
