import { createNumeral } from './common';

export const {
  parse: parsePersian,
  to: toPersian,
} = createNumeral(['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']);
