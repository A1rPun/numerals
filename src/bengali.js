import { parseNumeral, toNumeral } from './common';

const bengali = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

export function parseBengali(str) {
  return parseNumeral(str, bengali);
}
export function toBengali(n) {
  return toNumeral(n, bengali);
}
