import { createNumeral } from './common';

export const {
  parse: parseAsian,
  to: toAsian,
} = createNumeral(['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']);
