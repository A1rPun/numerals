import { parseNumeral, toNumeral } from './common';

const arabicNumerals = ['۰', '۱', '۲', '۳', '٤', '٥', '٦', '۷', '۸', '۹'];

export function parseArabic(str) {
  return parseNumeral(str, arabicNumerals);
}
export function toArabic(n) {
  return toNumeral(n, arabicNumerals);
}
