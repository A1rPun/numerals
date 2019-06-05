import { parseNumeral, toNumeral } from './common';

const arabic = ['۰', '۱', '۲', '۳', '٤', '٥', '٦', '۷', '۸', '۹'];

export function parseArabic(str) {
  return parseNumeral(str, arabic);
}
export function toArabic(n) {
  return toNumeral(n, arabic);
}
