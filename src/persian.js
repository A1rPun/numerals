import { parseNumeral, toNumeral } from './common';

const persianNumerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export function parsePersian(str) {
  return parseNumeral(str, persianNumerals);
}
export function toPersian(n) {
  return toNumeral(n, persianNumerals);
}
