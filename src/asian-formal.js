import { createNumeral } from './common';

export const {
  parse: parseAsianFormal,
  to: toAsianFormal,
} = createNumeral(['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']);
