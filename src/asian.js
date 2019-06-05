import { parseNumeral, toNumeral } from './common';

const asian = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']; // 零 = 0

export function parseAsian(str) {
  return parseNumeral(str, asian);
}
export function toAsian(n) {
  return toNumeral(n, asian);
}
