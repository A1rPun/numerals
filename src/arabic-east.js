import { createNumeral } from './common';

export const {
  parse: parseArabic,
  to: toArabic,
} = createNumeral(['۰', '۱', '۲', '۳', '٤', '٥', '٦', '۷', '۸', '۹']);
