import { parseNumeral, toNumeral } from './common';

const asianFormal = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];

export function parseAsianFormal(str) {
  return parseNumeral(str, asianFormal);
}
export function toAsianFormal(n) {
  return toNumeral(n, asianFormal);
}
