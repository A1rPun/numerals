import { createAlphabeticNumeral } from './common';

export const {
  parse: parseAbjad,
  to: toAbjad,
} = createAlphabeticNumeral([
  ['', 'أ', 'ب', 'ج', 'د', 'ه', 'و', 'ز', 'ح', 'ط'], // ones
  ['', 'ي', 'ك', 'ل', 'م', 'ن', 'س', 'ع', 'ف', 'ص'], // tens
  ['', 'ق', 'ر', 'ش', 'ت', 'ث', 'خ', 'ذ', 'ض', 'ظ'], // hundreds
], x => 'غ'.repeat(x));
