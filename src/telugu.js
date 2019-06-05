import { parseNumeral, toNumeral } from './common';

const telugu = ['౦', '౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯'];

export function parseTelugu(str) {
  return parseNumeral(str, telugu);
}
export function toTelugu(n) {
  return toNumeral(n, telugu);
}
